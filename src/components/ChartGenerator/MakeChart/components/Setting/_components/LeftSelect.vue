<template>
  <a-select class="LeftSelect" :value="value" style="width: 100%" @change="onChange" :getPopupContainer="(triggerNode) => triggerNode.parentNode">
    <a-select-option value="left">{{ $t('Left') }}</a-select-option>
    <a-select-option value="center">{{ $t('Center') }}</a-select-option>
    <a-select-option value="right">{{ $t('Right') }}</a-select-option>
  </a-select>
</template>
<script lang="ts" setup name="LeftSelect">
import {} from 'vue'

const props = defineProps({
  value: String
})

const emit = defineEmits(['update:value'])
const onChange = (val) => {
  emit('update:value', val)
}
</script>
<style lang="less">
.LeftSelect {
}
</style>
