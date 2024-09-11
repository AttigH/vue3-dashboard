import { chartType, chartFeildsList } from '../../types'
import { grid, axisPointer, customerToolTip, diffTip, boundaryGap, axisLabel, barGap, colors } from './chartTools'

const configLibs = (type = chartType.bar) => {
  const libs = {
    grid: {
      top: 50,
      left: 10,
      right: 10,
      bottom: 5,
      containLabel: true
    },
    title: {
      padding: 10,
      text: '',
      textStyle: {
        color: '#808187',
        fontWeight: 'normal',
        fontSize: 18
      },
      left: 'center'
    },
    legend_lineOrBar: {
      show: true,
      data: ['Figure 1', 'Figure 2'],
      top: 10,
      left: 'center',
      textStyle: {
        fontSize: 12
      }
    },
    xAxis: {
      id: '',
      show: true,
      type: 'category',
      name: '',
      nameTextStyle: {
        color: ''
      },
      axisLabel: {
        interval: 0,
        color: '',
        rotate: 0
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: '#808188'
        }
      },
      axisTick: {
        show: true
      },
      splitLine: {
        show: false,
        lineStyle: {
          type: 'solid'
        }
      },
      triggerEvent: true,
      boundaryGap,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: [
      {
        show: true,
        type: 'value',
        axisLabel: {
          formatter: function (value: number, index: number) {
            return value !== 0 ? value + '$' : 0
          },
          color: '#888',
          rotate: 0,
          customLabel: {
            open: true,
            scale: 1,
            unit: '$'
          }
        },
        axisTick: { show: true },
        axisLine: {
          show: true,
          lineStyle: { color: '#888' }
        },
        name: '',
        nameTextStyle: {},
        splitLine: {
          show: true,
          lineStyle: {
            type: 'solid' //solid dashed dotted
          }
        },
        alignTicks: true
      }
    ],

    series_lineOrBar: [
      {
        key: 'xxx',
        data: [120, 200, 150, 80, 70, 110, 130],
        type,
        name: 'Figure 1',
        barGap,
        itemStyle: {
          color: colors.lightBlue
        }
      },
      {
        key: 'kkk',
        data: [180, 250, 180, 30, 50, 150, 100],
        type,
        name: 'Figure 2',
        barGap,
        itemStyle: {
          color: colors.mainBlue
        }
      }
    ],

    legend_pie: {
      show: true,

      top: 0,
      left: 'left',
      orient: 'vertical',
      textStyle: {
        fontSize: 12
      }
    },
    tooltip_pie: {
      trigger: 'item'
    },
    series_pie: {
      name: 'Access From',
      type: 'pie',
      radius: [0, 60],
      itemStyle: {
        borderRadius: 0,
        borderColor: '#fff',
        borderWidth: 0
      },
      avoidLabelOverlap: false,
      label: {
        show: true,
        fontSize: 12
      },
      labelLine: {
        show: true
      },
      roseType: false,
      data: [
        { value: 1048, name: 'Monastir', itemStyle: { color: null } },
        { value: 735, name: 'Sousse', itemStyle: { color: null } },
        { value: 580, name: 'Mahdia', itemStyle: { color: null } }
      ],
      emphasis: {
        label: {
          show: true
          // fontSize: 20,
          // fontWeight: 'bold'
        },
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  }
  let configObj = {}
  const list = chartFeildsList[type]
  list.forEach((item) => {
    configObj[item.split('_')[0]] = libs[item]
  })
  return configObj
}

export default {
  [chartType.bar]: {
    name: 'Bar Chart',
    fieldId: null,
    chartType: chartType.bar,
    interfaceUrl: '',
    span: 8,
    theme: 'blue',
    chartOption: configLibs(chartType.bar)
  },
  [chartType.line]: {
    name: 'Line chart',
    fieldId: null,
    chartType: chartType.line,
    interfaceUrl: '',
    span: 8,
    theme: 'blue',
    chartOption: configLibs(chartType.line)
  },
  [chartType.pie]: {
    name: 'Pie Chart',
    fieldId: null,
    chartType: chartType.pie,
    interfaceUrl: '',
    span: 8,
    chartOption: configLibs(chartType.pie)
  },
  [chartType.custom]: {
    name: 'Custom charts',
    fieldId: null,
    chartType: chartType.custom,
    interfaceUrl: '',
    span: 8,
    chartOption: {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    }
  },
  [chartType.lineBar]: {
    name: 'Folded Column Mixed Chart',
    fieldId: null,
    chartType: chartType.lineBar,
    interfaceUrl: '',
    dataPosition: ['series', 'data'],
    span: 8,
    chartOption: {
      grid,
      tooltip: {
        trigger: 'axis',
        axisPointer
        // formatter: (params) => {}
      },
      legend: {
        data: ['1', '2', '3', '4', '5']
      },
      title: {
        padding: 10,
        text: undefined,
        textStyle: {
          color: '#000',
          fontWeight: 'normal',
          fontSize: 18
        },
        title: 'center',
        left: 'center'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        triggerEvent: true,
        boundaryGap,
        axisLabel,
        axisLine: {
          onZero: false
        }
      },
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: function (value: number, index: number) {
              return value !== 0 ? value + '$' : 0
            },
            ...axisLabel
          },
          alignTicks: true
        },
        {
          type: 'value',
          axisLabel: {
            formatter: function (value: number, index: number) {
              return value !== 0 ? value + '$' : 0
            },
            ...axisLabel
          },
          alignTicks: true
        }
      ],
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          name: '1',
          barGap,
          itemStyle: {
            color: colors.lightBlue
          }
        },
        {
          key: 'kkk',
          data: [180, 250, 180, 30, 50, 150, 100],
          type: 'line',
          name: '2',
          barGap,
          itemStyle: {
            color: colors.mainBlue
          },
          yAxisIndex: 1
        }
      ]
    }
  }
}
