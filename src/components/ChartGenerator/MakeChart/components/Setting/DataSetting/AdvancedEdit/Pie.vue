<template>
  <div class="PieDataSetting">
    <div v-if="['static', 'api'].includes(dataOrgion)">
      <a-button type="primary" size="small" style="margin-bottom: 10px" @click="onAddData">
        {{ $t('Add data') }}
      </a-button>
    </div>
    <div v-for="(d, i) in data.series.data" class="seriesWrapper">
      <a-form-item name="Id" :rules="null">
        <template #label>Id
          <FormItemTooltip txt="Id can be used as a backend identification field and must be unique" />
        </template>
        <div style="display: flex">
          <a-input v-model:value="d.id" />
          <a-tooltip>
            <template #title>{{ $t('Double click to delete data') }}</template>
            <a-button style="width: 25px; padding: 0" type="link" danger @dblclick="onDelSeries(i, d.name)">
              <DeleteOutlined />
            </a-button>
          </a-tooltip>
        </div>
      </a-form-item>
      <a-form-item :label="$t('Legend Name')" name="dataOrgion" :rules="null">
        <a-input v-model:value="d.name" />
      </a-form-item>
      <a-form-item :label="$t('color')" name="color" :rules="null">
        <a-input v-model:value="d.itemStyle.color">
          <template #suffix>
            <ColorPickerPopHover v-model:value="d.itemStyle.color" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item v-if="dataOrgion === 'static'" :label="$t('data')" name="value" :rules="null">
        <a-input-number style="width: 100%" v-model:value="d.value" />
      </a-form-item>
      <a-divider class="divider" />
    </div>
  </div>
</template>
<script lang="ts" setup name="PieDataSetting">
import { ref } from 'vue'
import FormItemTooltip from '@/components/ChartGenerator/MakeChart/components/FormItemTooltip.vue'
import { DeleteOutlined } from '@ant-design/icons-vue'
import ColorPickerPopHover from '@/components/ChartGenerator/MakeChart/components/ColorPicker/ColorPickerPopHover.vue'
import { themes } from '@/components/ChartGenerator/MakeChart/components/Echarts/chartTools'

const props = defineProps({
  selectedChartId: String,
  data: {
    type: Object,
    default: null
  },
  total: {
    type: Object,
    default: null
  },
  dataOrgion: {
    type: String,
    default: ''
  }
})

const onAddData = () => {
  props.data.series.data.push({
    value: 0,
    name: '',
    itemStyle: {
      color: themes[props.total.theme][props.data.series.data.length]
    }
  })
}

const onDelSeries = (index, name) => {
  props.data.series.data.splice(index, 1)
}
</script>
<style lang="less">
.PieDataSetting {}
</style>
