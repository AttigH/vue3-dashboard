<template>
  <div class="XAxisSetting">
    <a-form-item :label="$t('Show x-axis')" name="show" :rules="null">
      <a-switch v-model:checked="xAxis.show" />
    </a-form-item>
    <a-form-item :label="$t('Id')" name="id" :rules="null">
      <a-input v-model:value="xAxis.id" />
    </a-form-item>
    <a-form-item :label="$t('Axis name')" name="name" :rules="null">
      <a-input v-model:value="xAxis.name" @change="onChangeName" />
    </a-form-item>
    <a-form-item :label="$t('Axis name color')" name="nameTextStyleColor" :rules="null">
      <a-input v-model:value="xAxis.nameTextStyle.color">
        <template #suffix>
          <ColorPickerPopHover v-model:value="xAxis.nameTextStyle.color" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item :label="$t('Scale interval')" name="interval" :rules="null">
      <a-slider v-model:value="xAxis.axisLabel.interval" :min="0" :max="6" />
    </a-form-item>
    <a-form-item :label="$t('Text Color')" name="axisLabelColor" :rules="null">
      <a-input v-model:value="xAxis.axisLabel.color">
        <template #suffix>
          <ColorPickerPopHover v-model:value="xAxis.axisLabel.color" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item :label="$t('Text rotation')" name="rotate" :rules="null">
      <a-slider v-model:value="xAxis.axisLabel.rotate" :min="-90" :max="90" />
    </a-form-item>
    <a-form-item :label="$t('Axis Color')" name="axisLineStyle" :rules="null">
      <a-input v-model:value="xAxis.axisLine.lineStyle.color">
        <template #suffix>
          <ColorPickerPopHover v-model:value="xAxis.axisLine.lineStyle.color" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item :label="$t('Vertical dividing line')" name="splitLineShow" :rules="null">
      <a-switch v-model:checked="xAxis.splitLine.show" />
    </a-form-item>
    <a-form-item :label="$t('Vertical dividing line style')" name="splitLinelineStyle" :rules="null">
      <a-select v-model:value="xAxis.splitLine.lineStyle.type">
        <a-select-option value="solid"> solid Line </a-select-option>
        <a-select-option value="dashed"> dashed line </a-select-option>
        <a-select-option value="dotted"> dotted line </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :label="$t('Axis dividing line')" name="axisTick" :rules="null">
      <a-switch v-model:checked="xAxis.axisTick.show" />
    </a-form-item>
  </div>
</template>
<script lang="ts" setup name="XAxisSetting">
import { ref } from 'vue'
import ColorPickerPopHover from '@/components/ChartGenerator/MakeChart/components/ColorPicker/ColorPickerPopHover.vue'
import LeftSelect from '../../components/LeftSelect.vue'

const props = defineProps({
  xAxis: Object,
  grid: Object
})

const onChangeColor = (color) => {
  props.xAxis.title.textStyle.color = color
}

const onChangeName = (e) => {
  props.grid.right = e.target.value.length * 12 + 15
}
</script>
<style lang="less">
.XAxisSetting {
}
</style>
