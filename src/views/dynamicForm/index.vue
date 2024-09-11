<template>
  <div class="DynamicFormDemo">
    <a-alert
      style="margin-bottom: 15px"
      message="Provide an idea. When the form content is large, you can use the configuration file to automatically generate the form content. The simplified version of the demo has been written and can be expanded by yourself."
    />
    <DynamicForm :formProps="formProps" :formModel="formModel" :colNumber="1" :disabledAll="disabledAll" labelAlign="left">
      <template #zidingyi>
        <div>You can write a custom component here {{ formModel.input }}</div>
      </template>
    </DynamicForm>
  </div>
</template>
<script lang="ts" setup name="DynamicFormDemo">
import { ref } from 'vue'
import DynamicForm from '@/components/FormComponents/DynamicForm.vue'

const onSelectchange = (val) => {
  formModel.value.input = val
}

const formProps = ref([
  {
    name: 'select',
    type: 'select',
    label: 'Select',
    hidden: false,
    disabled: false,
    rules: undefined,
    allowClear: false,
    options: [
      { label: 1, value: 1 },
      { label: 2, value: 2 }
    ],
    onChange: onSelectchange
  },
  {
    name: 'input',
    type: 'input',
    label: 'Input box',
    hidden: false,
    disabled: false,
    rules: undefined
  }
])
const formModel = ref({ select: undefined, input: undefined })

const disabledAll = ref(false)
</script>
<style lang="less">
.DynamicFormDemo {
  width: 350px;
}
</style>
