<template>
  <a-form-item name="data" :rules="null">
    <template #label
      >Legend Name
      <FormItemTooltip txt="The legend content should correspond to the data and cannot be repeated. Press Enter to confirm." />
    </template>
    <TokenSplitInput v-model:value="legend.data" @change="onChangeLegend" />
  </a-form-item>
</template>
<script lang="ts" setup name="LegendName">
import FormItemTooltip from '@/components/ChartGenerator/MakeChart/components/FormItemTooltip.vue'
import { barGap, themes } from '@/components/ChartGenerator/MakeChart/components/Echarts/chartTools'
import TokenSplitInput from '@/components/ChartGenerator/MakeChart/components/Setting/_components/TokenSplitInput.vue'
const props = defineProps({
  legend: {
    type: Object
  },
  total: {
    type: Object
  }
})

const onChangeLegend = () => {
  const series = props.legend?.data?.map((name, index) => {
    const orginData = props.total.chartOption.series[index]?.data
    return {
      id: null,
      data: orginData || [],
      type: props.total.name,
      name,
      barGap,
      itemStyle: {
        color: themes[props.total.theme][index]
      }
    }
  })
  props.total.chartOption.series = series
}

const onChangeLegendData = () => {}
</script>
