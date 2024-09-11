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

  custom: 'custom',

  lineBar: 'lineBar'
}

export const chartFeildsList = {
  line: ['grid', 'legend_lineOrBar', 'title', 'xAxis', 'yAxis', 'series_lineOrBar'],

  bar: ['grid', 'legend_lineOrBar', 'title', 'xAxis', 'yAxis', 'series_lineOrBar'],

  pie: ['title', 'legend_pie', 'series_pie', 'tooltip_pie'],

  scatter: ['', '', '', '', '', '', '', '', '', '', ''],

  radar: ['', '', '', '', '', '', '', '', '', '', ''],

  custom: ['', '', '', '', '', '', '', '', '', '', ''],

  lineBar: ['', '', '', '', '', '', '', '', '', '', '']
}
