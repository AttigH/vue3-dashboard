<template>
  <div class="YAxisSetting">
    <div class="title">{{ title }}</div>
    <a-form-item :label="$t('Show y-axis')" name="show" :rules="null">
      <a-switch v-model:checked="yAxis.show" />
    </a-form-item>
    <a-form-item :label="$t('Id')" name="id" :rules="null">
      <a-input v-model:value="yAxis.id" />
    </a-form-item>
    <a-form-item :label="$t('Axis name')" name="name" :rules="null">
      <a-input v-model:value="yAxis.name" />
    </a-form-item>
    <a-form-item :label="$t('Axis name color')" name="nameTextStyleColor" :rules="null">
      <a-input v-model:value="yAxis.nameTextStyle.color">
        <template #suffix>
          <ColorPickerPopHover v-model:value="yAxis.nameTextStyle.color" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item :label="$t('Text Color')" name="axisLabelColor" :rules="null">
      <a-input v-model:value="yAxis.axisLabel.color">
        <template #suffix>
          <ColorPickerPopHover v-model:value="yAxis.axisLabel.color" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item :label="$t('Text rotation')" name="rotate" :rules="null">
      <a-slider v-model:value="yAxis.axisLabel.rotate" :min="-90" :max="90" />
    </a-form-item>
    <a-form-item :label="$t('Show Axis Lines')" name="axisLineShow" :rules="null">
      <a-switch v-model:checked="yAxis.axisLine.show" @change="onChangeAxisLineShow" />
    </a-form-item>
    <a-form-item :label="$t('Axis Color')" name="axisLineStyle" :rules="null">
      <a-input v-model:value="yAxis.axisLine.lineStyle.color">
        <template #suffix>
          <ColorPickerPopHover v-model:value="yAxis.axisLine.lineStyle.color" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item :label="$t('Horizontal dividing line')" name="splitLineShow" :rules="null">
      <a-switch v-model:checked="yAxis.splitLine.show" />
    </a-form-item>
    <a-form-item :label="$t('Horizontal dividing line style')" name="splitLinelineStyle" :rules="null">
      <a-select v-model:value="yAxis.splitLine.lineStyle.type">
        <a-select-option value="solid"> solid </a-select-option>
        <a-select-option value="dashed"> dashed line </a-select-option>
        <a-select-option value="dotted"> dotted line </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :label="$t('Scale dividing line')" name="axisTick" :rules="null">
      <a-switch v-model:checked="yAxis.axisTick.show" />
    </a-form-item>
    <a-form-item :label="$t('Custom Units')" name="customLabel" :rules="null">
      <a-switch v-model:checked="yAxis.axisLabel.customLabel.open" @change="onChangeCustomLabel" />
    </a-form-item>
    <a-form-item :label="$t('Reduce the scale')" name="scale" :rules="null">
      <a-input-number v-model:value="yAxis.axisLabel.customLabel.scale" :min="1" @change="onChangeScale" />
    </a-form-item>
    <a-form-item :label="$t('Unit text')" name="unit" :rules="null">
      <a-input v-model:value="yAxis.axisLabel.customLabel.unit" @change="onChangeUnit" />
    </a-form-item>
  </div>
</template>
<script lang="ts" setup name="YAxisSetting">
import { ref } from 'vue'
import ColorPickerPopHover from '@/components/ChartGenerator/MakeChart/components/ColorPicker/ColorPickerPopHover.vue'
import LeftSelect from '../components/LeftSelect.vue'

const props = defineProps({
  yAxis: Object,
  grid: Object,
  title: String
})

const onChangeColor = (color) => {
  props.yAxis.title.textStyle.color = color
}

const onChangeAxisLineShow = (val) => {
  props.yAxis.axisLine.lineStyle.color = val ? '#888' : ''
}

const onChangeCustomLabel = (val) => {
  if (!val) {
    props.yAxis.axisLabel.customLabel.scale = 1
    props.yAxis.axisLabel.customLabel.unit = ''
  }
}

const onChangeScale = (val) => {
  console.log(val)
}

const onChangeUnit = (e) => {
  const val = e.target.value
}
</script>
<style lang="less">
.YAxisSetting {
  .title {
  }
}
</style>
