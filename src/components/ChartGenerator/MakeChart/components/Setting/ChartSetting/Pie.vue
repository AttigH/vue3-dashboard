<template>
  <a-collapse :bordered="false" ghost class="collapse" accordion expandIconPosition="end">
    <a-collapse-panel key="Title" forceRender>
      <template #header> {{ $t('Title settings') }} </template>
      <Title :title="data.title" />
    </a-collapse-panel>

    <a-collapse-panel key="Legend" :header="$t('Legend')" forceRender>
      <Theme v-model:value="total.theme" :objs="data.series.data" />
      <a-form-item :label="$t('Display')" name="show" :rules="null">
        <a-switch v-model:checked="data.legend.show" />
      </a-form-item>
      <a-form-item :label="$t('Font size')" name="fontSize" :rules="null">
        <a-input-number v-model:value="data.legend.textStyle.fontSize" />
      </a-form-item>
      <a-form-item :label="$t('direction')" name="orient" :rules="null">
        <a-switch v-model:checked="data.legend.orient" checked-children="Horizontal" checkedValue="horizontal" un-checked-children="vertical" unCheckedValue="vertical" />
      </a-form-item>
      <a-form-item :label="$t('Top Margin')" name="top" :rules="null">
        <a-slider v-model:value="data.legend.top" />
      </a-form-item>
      <a-form-item :label="$t('Location')" name="left" :rules="null">
        <LeftSelect v-model:value="data.legend.left" />
      </a-form-item>
    </a-collapse-panel>
    <a-collapse-panel key="Pie" forceRender>
      <template #header> {{ $t('Pie Chart Settings') }} </template>
      <a-form-item :label="$t('Show Tags')" name="label" :rules="null">
        <a-switch v-model:checked="data.series.label.show" />
      </a-form-item>
      <a-form-item :label="$t('Font size')" name="fontSize" :rules="null">
        <a-input-number v-model:value="data.series.label.fontSize" />
      </a-form-item>
      <a-form-item :label="$t('Outer Radius')" name="outer" :rules="null">
        <a-slider v-model:value="data.series.radius[1]" />
      </a-form-item>
      <a-form-item :label="$t('Inner radius')" name="inner" :rules="null">
        <a-slider v-model:value="data.series.radius[0]" />
      </a-form-item>
      <a-form-item :label="$t('Pie chart rounded corners')" name="borderRadius" :rules="null">
        <a-slider v-model:value="data.series.itemStyle.borderRadius" :min="0" :max="50" />
      </a-form-item>
      <a-form-item :label="$t('Stroke Width')" name="borderWidth" :rules="null">
        <a-slider v-model:value="data.series.itemStyle.borderWidth" :min="0" :max="10" />
      </a-form-item>
      <a-form-item :label="$t('Whether to display as Nightingale chart')" name="roseType" :rules="null">
        <a-switch v-model:checked="data.series.roseType" checked-children="是" un-checked-children="否" checkedValue="radius" :unCheckedValue="false" />
      </a-form-item>
    </a-collapse-panel>
  </a-collapse>
</template>
<script lang="ts" name="BarSetting" setup>
import { ref, watch, defineAsyncComponent, computed } from 'vue'
import { chartType } from '@/components/ChartGenerator/MakeChart/types'
import LeftSelect from '@/components/ChartGenerator/MakeChart/components/Setting/_components/LeftSelect.vue'
import { themes } from '@/components/ChartGenerator/MakeChart/components/Echarts/chartTools'
import Theme from './_components/Base/Theme.vue'

const Title = defineAsyncComponent(() => import('./_components/Base/Title.vue'))

const props = defineProps({
  selectedChartId: String,
  data: {
    type: Object,
    default: null
  },
  total: {
    type: Object,
    default: null
  }
})
</script>
<style lang="less">
.BarSetting {
}
</style>
