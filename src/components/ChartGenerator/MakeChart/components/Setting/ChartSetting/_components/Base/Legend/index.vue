<template>
  <div class="LegendSetting">
    <Theme v-model:value="total.theme" :objs="total.chartOption.series" />
    <a-form-item :label="$t('Display')" name="show" :rules="null">
      <a-switch v-model:checked="legend.show" />
    </a-form-item>
    <a-form-item :label="$t('Font size')" name="fontSize" :rules="null">
      <a-input-number v-model:value="legend.textStyle.fontSize" />
    </a-form-item>
    <a-form-item :label="$t('Top Margin')" name="top" :rules="null">
      <a-slider v-model:value="legend.top" @change="onChangeTop" />
    </a-form-item>
    <a-form-item :label="$t('Location')" name="left" :rules="null">
      <LeftSelect v-model:value="legend.left" />
    </a-form-item>
    <LegendName :legend="legend" :total="total"></LegendName>
  </div>
</template>
<script lang="ts" setup name="LegendSetting">
import {} from 'vue'
import LeftSelect from '@/components/ChartGenerator/MakeChart/components/Setting/_components/LeftSelect.vue'
import LegendName from './LegendName.vue'
import Theme from '../Theme.vue'

const props = defineProps({
  legend: Object,
  total: Object
})

const onChangeTop = (val) => {
  props.legend.top = val
}
</script>
<style lang="less">
.LegendSetting {
}
</style>
