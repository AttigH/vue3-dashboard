<template>
  <div class="BarSetting">
    <a-form layout="horizontal" :model="form">
      <a-form-item label="X-axis data">
        <a-input v-model:value="form.xAxisData" />
      </a-form-item>
      <a-form-item label="Interface address">
        <a-input v-model:value="form.interfaceUrl" />
      </a-form-item>
      <a-form-item label="Space occupied(1-24)">
        <a-input-number v-model:value="form.span" :min="1" :max="24" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="onSaveSetting">Save</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, onMounted, Ref, watch, nextTick } from 'vue'
import { cloneDeep } from 'lodash-es'
import { ChartItem } from '../../types'
export default defineComponent({
  name: 'BarSetting',
  props: {
    item: {
      type: Object,
      default: {}
    },
    index: {
      type: Number,
      default: -1
    }
  },
  setup(props, { emit }) {
    const form = reactive({ xAxisData: '', interfaceUrl: '', span: 0 })
    watch(
      () => props.item,
      () => {
        nextTick(() => {
          form.xAxisData = cloneDeep(props.item.chartOption.xAxis.data.join(','))
          form.interfaceUrl = cloneDeep(props.item.interfaceUrl)
          form.span = cloneDeep(props.item.span)
        })
      },
      { deep: true, immediate: true }
    )
    const onSaveSetting = () => {
      emit('save', (item: Ref<ChartItem>) => {
        item.value.chartOption.xAxis.data = form.xAxisData.split(',')
        item.value.interfaceUrl = form.interfaceUrl
        item.value.span = form.span
      })
    }
    return {
      form,
      onSaveSetting
    }
  }
})
</script>
<style lang="less">
.BarSetting {
}
</style>
