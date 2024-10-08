<template>
  <div class="DragChart">
    <div class="layout-left">
      <h5>Preset Charts</h5>
      <Items />
    </div>
    <div class="layout-center">
      <h5>Console <a-button @click="() => console.log(contentData)" size="small">Get table configuration</a-button></h5>
      <Content @showSetting="onShowSetting" @change="onDragged"></Content>
    </div>
    <div class="layout-right">
      <h5>Chart properties</h5>
      <Setting :index="selectedIndex" :item="selectedItem" @save="onSaveSetting"></Setting>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Items from './components/Items/index.vue'
import Content from './components/Content/index.vue'
import Setting from './components/Setting/index.vue'
import { ChartItem } from './types'

export default defineComponent({
  name: 'DragChart',
  components: {
    Items,
    Content,
    Setting
  },
  setup() {
    const selectedIndex = ref(0)
    const selectedItem = ref({})
    const contentData = ref([])
    const onShowSetting = (index: number, item: ChartItem) => {
      selectedIndex.value = index
      selectedItem.value = item
    }
    const onSaveSetting = (fun: Function) => {
      fun(selectedItem)
    }
    const onDragged = (data: any) => {
      contentData.value = data
    }
    return {
      selectedIndex,
      selectedItem,
      onShowSetting,
      onSaveSetting,
      onDragged,
      contentData,
      console: window.console
    };
  },
})
</script>
<style lang="less">
.DragChart {
  width: 100%;
  height: 95vh;
  display: flex;
  flex-flow: row nowrap;

  h5 {
    height: 40px;
    font-weight: 600;
    font-size: 12px;
    margin-left: 8px;
  }

  .layout-left {
    width: 255px;
    height: 100%;
    overflow-y: scroll;
    box-shadow: 5px 0px 5px -2px #0000001a;
    margin-right: 10px;
  }

  .layout-center {
    height: 100%;
    flex: 1;
    overflow-y: scroll;
  }

  .layout-right {
    width: 360px;
    height: 100%;
    overflow-y: scroll;
    box-shadow: -5px 0px 5px -2px #0000001a;
    margin-left: 10px;
  }

  & ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  & ::-webkit-scrollbar-track {
    background: transparent;
  }

  & ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(144, 147, 153, 0.3);
    transition: background-color 0.3s;
  }

  & ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(144, 147, 153, 0.5);
  }
}
</style>
