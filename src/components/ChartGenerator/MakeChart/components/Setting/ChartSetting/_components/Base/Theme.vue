<template>
  <div class="ThemeSetting">
    <a-form-item :label="$t('Theme')" name="theme" :rules="null">
      <a-select @change="onChangeTheme" :value="value">
        <a-select-option value="auto">{{ $t('Automatic') }}</a-select-option>
        <a-select-option value="dark">{{ $t('Dark') }}</a-select-option>
      </a-select>
    </a-form-item>
  </div>
</template>
<script lang="ts" setup name="ThemeSetting">
import { ref } from 'vue'
import { themes } from '@/components/ChartGenerator/MakeChart/components/Echarts/chartTools'

const props = defineProps({
  value: String,
  objs: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['update:value'])
const onChangeTheme = (val) => {
  emit('update:value', val)
  props.objs.forEach((item, index) => {
    if (!item.itemStyle) {
      item.itemStyle = {}
    }
    item.itemStyle.color = themes[val][index]
  })
}
</script>
<style lang="less">
.ThemeSetting {
}
</style>
