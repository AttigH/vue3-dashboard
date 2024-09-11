import * as echarts from 'echarts'
export interface ChartItem {
  name?: string

  fieldId: null | string
  chartType: string
  interfaceUrl: string

  dataPosition?: string[]

  span?: number
  chartOption: any
}

export const chartType = {
  line: 'line',

  bar: 'bar',

  pie: 'pie',

  scatter: 'scatter',

  radar: 'radar',

  custom: 'custom'
}
