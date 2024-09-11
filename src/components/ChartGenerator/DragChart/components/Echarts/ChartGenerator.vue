<template>
  <div class="ChartGenerator" :id="id" ref="chartRef"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch, nextTick } from 'vue'
import { customAlphabet } from 'nanoid'
import * as echarts from 'echarts'
import { getCharData } from '../../service'
import { cloneDeep } from 'lodash-es'
// import { ChartItem } from '../../types'

const nanoid = customAlphabet('1234567890abcdef', 25)

export default defineComponent({
  name: 'ChartGenerator',
  props: {
    option: {
      type: Object,
      default: null
    }
  },
  setup(props) {
    const id = ref(nanoid() + '_chart')
    let chartInstance: any = null
    const chartRef = ref<HTMLElement | null>(null)

    const getCharDataApi = async (option: any) => {
      const chartItem = cloneDeep(option.chartOption)
      // const data = await getCharData(chartItem.interfaceUrl);
      // chartItem.series[0].data = data
      //   chartInstance.clear();
      chartInstance.setOption(chartItem)

      nextTick(() => {
        // chartInstance.resize(setContainerHeight());
        chartInstance.resize()
      })
    }

    const setContainerHeight = () => {
      const width = document.getElementById(id.value)!.offsetWidth
      // debugger
      const height = (3 * width) / 4
      return { width: width + 'px', height: height + 'px' }
    }

    onMounted(() => {
      chartInstance = echarts.init(document.getElementById(id.value) as HTMLElement)
      if (props.option) {
        if (props.option.interfaceUrl) {
          getCharDataApi(props.option)
        } else {
          chartInstance.setOption(props.option.chartOption)
          //   chartInstance.resize();
        }
        window.addEventListener('resize', function () {
          chartInstance.resize()
        })
      }
    })
    watch(
      () => props.option,
      async (val) => {
        getCharDataApi(val)
      },
      { deep: true }
    )
    return { id }
  }
})
</script>
<style lang="less">
.ChartGenerator {
  width: 100%;
  min-height: 200px;
  max-height: 100%;
  display: inline-block;
}
</style>
