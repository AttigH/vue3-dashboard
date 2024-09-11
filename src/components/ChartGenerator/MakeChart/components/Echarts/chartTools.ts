import { subtract, divide, add } from 'xe-utils'
import dayjs from 'dayjs'

export const grid = {
  top: 50,
  left: 10,
  right: 10,
  bottom: 5,
  containLabel: true
}

export const titleLeftChartGrid = {
  top: '80px',
  left: '10px',
  right: '10px',
  bottom: '5px',
  containLabel: true
}

export const fontSize = 14
export const months = new Array(12).fill(null).map((_, index) => index + 1 + '月')
export const colors = {
  lighterBlue: '#C8E1FA',
  lightBlue: '#84B7F9',
  mainBlue: '#4095E5',
  green: '#6EC89D',
  gray: '#D9D9D9',
  yellow: '#D9BD7B',
  orange: '#F6B66A',
  up: '#d95556',
  down: '#28bd74'
}

export const axisPointer = {
  type: 'shadow'
}

export const axisLabel = {
  interval: 0,
  fontSize
}

export const boundaryGap = true

export const barGap = '0%'

export const customerToolTip = (data) => {
  const { params, firstData, lastData, middleData } = data

  let result = ''
  params.forEach((item, index) => {
    const seriesName = item.seriesName
    const value = item.value || 0
    const marker = item.marker
    const dataIndex = item.dataIndex
    const normalData = `${marker}${seriesName}: ${value}${moneyUnit}`
    if (index === 0) {
      result += (firstData?.(item, dataIndex) || normalData) + '<br/>'
    } else if (params.length === index + 1) {
      result += (lastData?.(item, dataIndex) || normalData) + '<br/>'
    } else {
      const tempRes = middleData?.(item, dataIndex)
      result += tempRes === 'doEmpty' ? '' : (middleData?.(item, dataIndex) || normalData) + '<br/>'
    }
  })
  return result
}

export const moneyUnit = '$'

export const diffTip = ({ marker, seriesName, value }, { index, data, diffValOrPer, yuceKey = 'Forecast Net Profit', shijiKey = 'Actual net profit', hiddenIndex = null }) => {
  const yuce = data[yuceKey][index]
  const shiji = data[shijiKey][index]
  const orginDotTip = `${marker}${seriesName}: ${value || 0}${moneyUnit}<br/>`
  let dopTip = ''

  if (hiddenIndex !== null) {
    if (index > hiddenIndex) {
      return ''
    }
  }

  if (shiji) {
    const diff = subtract(shiji, yuce)

    if (diffValOrPer === '1') {
      dopTip = ` <span style='display:inline-block;width:15px'></span>profit <span style="color: ${
        colors[diff >= 0 ? 'up' : 'down']
      }">${diff >= 0 ? 'Increase' : 'reduce'}: ${Math.abs(diff)}${moneyUnit}</span>`
    } else if (diffValOrPer === '2') {
      const difference = subtract(shiji, yuce)
      const diff = divide(difference, yuce).toFixed(2) + '%'

      dopTip = ` <span style='display:inline-block;width:15px'></span>profit <span style="color: ${colors[difference >= 0 ? 'up' : 'down']}">${difference >= 0 ? 'Increase' : 'reduce'}: ${diff}</span>`
    }
  }

  return orginDotTip + dopTip
}

export const currentMonthIndex = new Date().getMonth()
export const rightCharMonthStyle = new Array(12).fill(null).map((_, index) => {
  return {
    value: index + 1 + '月',
    textStyle: {
      color: currentMonthIndex === index ? colors.mainBlue : ''
    }
  }
})

export const currentYear = new Date().getFullYear()
export const YYYY_MM = (monthId) => dayjs(new Date(currentYear, monthId - 1, 1)).format('YYYY-MM')

export const themes = {
  auto: [null, null, null, null, null, null, null, null],
  dark: ['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.05)', 'rgba(0,0,0,0.02)']
}
