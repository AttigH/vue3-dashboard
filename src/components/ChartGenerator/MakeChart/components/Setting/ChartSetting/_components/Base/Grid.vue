<template>
  <div class="GridSetting">
    <a-form-item :label="$t('Top')" name="top" :rules="null">
      <a-slider v-model:value="grid.top" @change="onChangeTop" />
    </a-form-item>
    <a-form-item :label="$t('Right')" name="right" :rules="null">
      <a-slider v-model:value="grid.right" />
    </a-form-item>
    <a-form-item :label="$t('Bottom')" name="bottom" :rules="null">
      <a-slider v-model:value="grid.bottom" />
    </a-form-item>
    <a-form-item :label="$t('Left')" name="left" :rules="null">
      <a-slider v-model:value="grid.left" />
    </a-form-item>
  </div>
</template>
<script lang="ts" setup name="GridSetting">
import { ref } from 'vue'
const props = defineProps({
  grid: Object,
  legend: Object
})

const onChangeTop = (val) => {
  props.grid.top = val
  props.legend.top = val - 35
}
</script>
<style lang="less">
.GridSetting {
}
</style>
