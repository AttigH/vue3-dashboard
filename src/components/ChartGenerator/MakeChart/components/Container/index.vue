<template>
  <div class="chartContainer">
    <div :style="chartWrapperStyle" id="chartWrapper">
      <div :style="chartContentStyle" id="chartContent">
        <ChartGenerator v-for="c in chartList" :options="c" @mousedown="onClick(c.id)" @deactivate="onDeactivate" />
        <!-- @del="onDelChart" -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="chartContainer">
import { ref, watch, onMounted } from 'vue'
import ChartGenerator from '../Echarts/ChartGenerator.vue'
import { ChartItem } from '../../types'
import { calcHeight } from '@/hooks/Full'

const props = defineProps({
  excelWidth: {
    type: Number,
    default: 0
  },
  cellSize: {
    type: Object,
    default: { height: 25, width: 100, indexWidth: 60 }
  },
  chartList: {
    type: Object,
    default: {}
  },
  isInXSheet: {
    type: Boolean,
    default: false
  },

  prevElName: {
    type: String,
    default: false
  }
})
const hasExcel = props.isInXSheet
const chartWrapperStyle: any = ref({ height: 0, width: '100%' })
const chartContentStyle: any = ref({ height: 0, width: '100%' })
if (hasExcel) {
  const xSheet = document.querySelector('.x-spreadsheet-sheet')!.getBoundingClientRect()
  chartWrapperStyle.value = {
    width: props.excelWidth - props.cellSize.indexWidth - 6 + 'px',
    height: document.querySelector('.x-spreadsheet-overlayer')!.clientHeight - 25 - 18 + 'px',
    position: 'absolute',
    zIndex: 999,

    left: props.cellSize.indexWidth + xSheet.left + 'px',

    top: props.cellSize.height + xSheet.top + 'px',

    pointerEvents: 'none',
    overflow: 'auto',
    scrollbarWidth: 'none'
  }

  chartContentStyle.value = {
    height: document.querySelector('.x-spreadsheet-scrollbar.vertical>.chartSpace')!.clientHeight - 25 - 8 + 'px',
    width: document.querySelector('.x-spreadsheet-scrollbar.horizontal>.chartSpace')!.clientWidth - 8 + 'px'
  }
} else {
  const height = calcHeight(document.querySelector(props.prevElName), 115) + 'px'
  chartWrapperStyle.value.height = height
  chartContentStyle.value.height = height
}

const selectedId = ref<string | null>(null)
const emit = defineEmits(['showSetting', 'click', 'deactivate'])
const onClick = (id: string) => {
  emit('click', id)
}

const onDeactivate = () => {
  emit('deactivate')
}

// const onDelChart = (id: string) => {}
</script>
<style lang="less">
.chartContainer {
  // width: 100px;
  // height: 100px;
  // .BarChart,
  // .LineChart {
  //   width: 100%;
  //   // height: 300px;
  //   display: inline-block;
  // }
  // .ghost {
  //   border: 2px dashed #0094ff;
  // }
}
</style>
