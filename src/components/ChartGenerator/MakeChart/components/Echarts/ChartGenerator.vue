<template>
  <VueDraggableResizable
    class="dragger"
    :parent="true"
    @resizing="onResize"
    :w="options.w"
    :h="options.h"
    :x="options.x"
    :y="options.y"
    style="pointer-events: auto"
    :draggable="!locked"
    :resizable="!locked"
    @activated="onActivated"
    @deactivated="onDeactivated"
    :class="locked ? 'lockedClass' : ''"
    :min-width="50"
    :min-height="50"
    :snap="true"
    :snapTolerance="10"
    :active="isActivated"
    parentElementCannotClick
    @dragstop="onDragStop"
  >
    <DraggerToolBar @lock="onLock" :locked="locked" v-show="isActivated" @del="onDelChart" />
    <div class="ChartGenerator" :id="options.id" ref="chartRef" :style="{ width: options.w + 'px', height: options.h + 'px' }"></div>
  </VueDraggableResizable>
</template>
<script lang="ts" setup name="ChartGenerator">
import { onMounted, ref, watch, nextTick } from 'vue'
import * as echarts from 'echarts'
import { cloneDeep } from 'lodash-es'
import VueDraggableResizable from '../vue-draggable-resizable-gorkys-vue3/components/vue-draggable-resizable.vue'
import DraggerToolBar from './DraggerToolBar.vue'

import '../vue-draggable-resizable-gorkys-vue3/components/vue-draggable-resizable.css'
import chartTemplateData from '../Echarts/data'
import chartList from '../../chartList'
import { watchDebounced } from '@vueuse/core'
import { deepDiffKeys } from '@/utils/util'

const props = defineProps({
  options: {
    type: Object,
    default: null
  }
})
let chartInstance: any = null
const chartRef = ref<HTMLElement | null>(null)
let oldChartOption: any = {}

const refreshChart = (option, notMerge = false) => {
  const diff = deepDiffKeys(option, oldChartOption)

  if (diff.length) {
    Array.isArray(option.yAxis) &&
      option.yAxis?.forEach((item) => {
        const customY = item?.axisLabel?.customLabel
        if (customY?.open) {
          const scale = customY.scale
          const unit = customY.unit
          if (customY.prevUpdated !== customY.scale + customY.unit) {
            item.axisLabel.formatter = (value: number, index: number) => {
              return value !== 0 ? parseInt(value / scale + '') + unit : 0
            }
          }
          customY.prevUpdated = customY.scale + customY.unit
        }
      })
    chartInstance.setOption(option, notMerge)
  }
  oldChartOption = cloneDeep(option)
}

const getCharDataApi = async (options: any) => {
  const chartItem = cloneDeep(options.chartOption)
  // const data = await getCharData(chartItem.interfaceUrl);
  // chartItem.series[0].data = data
  //   chartInstance.clear();
  refreshChart(chartItem)

  nextTick(() => {
    // chartInstance.resize(setContainerHeight());
    chartInstance.resize()
  })
}

const setContainerHeight = () => {
  const width = document.getElementById(props.options.id)!.offsetWidth
  // debugger
  const height = (3 * width) / 4
  return { width: width + 'px', height: height + 'px' }
}

watchDebounced(
  () => props.options.chartOption,
  async (val) => {
    refreshChart(val, true)
  },
  { deep: true, debounce: 500 }
)

onMounted(() => {
  chartInstance = echarts.init(document.getElementById(props.options.id) as HTMLElement)
  // const isAdd = props.options.isAdd
  const chartObj = props.options
  if (props.options) {
    if (props.options.interfaceUrl) {
      getCharDataApi(props.options)
    } else {
      refreshChart(chartObj.chartOption)
      chartInstance.resize({ width: props.options.w + 'px', height: props.options.h + 'px' })
    }
    // window.addEventListener('resize', function () {
    //   // todo:bug:使用setContainerHeight()
    //   // chartInstance.resize(setContainerHeight());
    //   chartInstance.resize()
    // })
  }
})

const onResize = (x, y, width, height) => {
  props.options.x = x
  props.options.y = y
  props.options.w = width
  props.options.h = height
  // nextTick(() => {
  // chartInstance.resize(setContainerHeight());
  chartInstance.resize({ width, height })
  // })
}

const onDragStop = (x, y) => {
  props.options.x = x
  props.options.y = y
}

const locked = ref(false)
const onLock = (isLocked) => {
  locked.value = isLocked
}
const isActivated = ref(false)
const onActivated = () => {
  isActivated.value = true
}
const onDeactivated = (e) => {
  const classes = getParentNodesListClassNames(e)
  if (!classes.includes('MakeChartSettings') && !classes.includes('themeColorCustomColor')) {
    isActivated.value = false
    emit('deactivate')
  }
}

const emit = defineEmits(['deactivate'])
const onDelChart = () => {
  delete chartList.value[props.options.id]
  emit('deactivate')
}

const getParentNodesListClassNames = (element) => {
  var classNames = []
  while (element?.parentNode) {
    element = element.parentNode
    if (element.classList) {
      classNames.push(...element.classList)
    }
  }
  return classNames
}
</script>
<style lang="less">
.dragger {
  .handle {
    border-radius: 50%;
    width: 10px !important;
    height: 10px !important;
    border: 1px solid #3883fa;
  }

  &.vdr {
    border: 1px solid #3883fa;
  }

  &.lockedClass {
    border: none;
  }

  .ChartGenerator {
    width: 300px;
    // min-height: 300px;
    // max-height: 100px;
    display: inline-block;
  }
}
</style>
