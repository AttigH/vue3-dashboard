<template>
  <a-layout :class="['layout', device]">
    <!-- SideMenu -->
    <a-drawer v-if="isMobile" placement="left" :class="`drawer-sider ${navTheme}`" :closable="false" :open="collapsed" @close="drawerClose" width="256px">
      <side-menu mode="inline" :menus="menus" :theme="navTheme" :collapsed="false" :collapsible="true" @menuSelect="menuSelect"></side-menu>
    </a-drawer>

    <side-menu v-else-if="isSideMenu()" mode="inline" :menus="menus" :theme="navTheme" :collapsed="collapsed" :collapsible="true"></side-menu>
    <a-layout :class="[layoutMode, `content-width-${contentWidth}`]" :style="{ paddingLeft: contentPaddingLeft, minHeight: '100vh' }">
      <!-- layout header -->
      <global-header :mode="layoutMode" :menus="menus" :theme="navTheme" :collapsed="collapsed" :device="device" @toggle="toggle" @refresh="onRefresh" />

      <!-- layout content -->
      <a-layout-content
        id="layoutContent"
        :style="{
          height: '100%',
          margin: '24px 24px 0',
          paddingTop: fixedHeader ? '64px' : '0'
        }"
      >
        <multi-tab v-if="multiTab"></multi-tab>
        <transition name="page-transition">
          <section>
            <route-view v-if="showRouter" />
          </section>
        </transition>
      </a-layout-content>

      <!-- layout footer -->
      <a-layout-footer>
        <global-footer />
      </a-layout-footer>
      <FastDevelopBall />
      <setting-drawer></setting-drawer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup name="BasicLayout">
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { triggerWindowResizeEvent, isMobile, isDesktop } from '@/utils/device'
import RouteView from './RouteView.vue'
import MultiTab from '@/components/MultiTab/index.vue'
import SideMenu from '@/components/Menu/SideMenu.vue'
import GlobalHeader from '@/components/GlobalHeader/index.vue'
import GlobalFooter from '@/components/GlobalFooter/index.vue'
import SettingDrawer from '@/components/SettingDrawer/index.vue'
import { convertRoutes } from '@/router/generateAsyncRoutes'
import { filteRouterPermission } from '@/router/permission'
import { PERMISSION, SET_SIDEBAR_TYPE } from '@/store/mutation-types'
import { cloneDeep } from 'lodash-es'
import useSiteSettings from '@/store/useSiteSettings'
import ls from '@/utils/Storage'
import { systemConfig } from '@/store/reactiveState'
import { useRouter } from 'vue-router'
import emitter from '@/utils/eventBus'
import FastDevelopBall from '@/components/FastDevelopBall/index.vue'

const router = useRouter()
const collapsed = ref(false)
const menus = ref([])
const { fixSidebar, sidebarOpened, multiTab, device, layoutMode, contentWidth, fixedHeader, navTheme, isSideMenu } = useSiteSettings()

const contentPaddingLeft = computed(() => {
  if (!fixSidebar.value || isMobile.value) {
    return '0'
  }
  if (sidebarOpened.value) {
    return '256px'
  }
  return '80px'
})

watch(
  () => sidebarOpened.value,
  (val) => {
    collapsed.value = !val
  }
)

const mainMenu = cloneDeep(router.getRoutes())
const orginRoutes = filteRouterPermission(mainMenu, ls.get(PERMISSION))

const routes = convertRoutes(orginRoutes.find((item) => item.path === '/'))
menus.value = (routes && routes.children) || []
collapsed.value = !sidebarOpened.value

onMounted(() => {
  const userAgent = navigator.userAgent
  if (userAgent.indexOf('Edge') > -1) {
    nextTick(() => {
      collapsed.value = !collapsed.value
      setTimeout(() => {
        collapsed.value = !collapsed.value
      }, 16)
    })
  }
})

const toggle = () => {
  collapsed.value = !collapsed.value
  systemConfig.commit(SET_SIDEBAR_TYPE, !collapsed.value)
  triggerWindowResizeEvent()
}
const paddingCalc = () => {
  let left = ''
  if (sidebarOpened.value) {
    left = isDesktop.value ? '256px' : '80px'
  } else {
    left = (isMobile.value && '0') || (fixSidebar.value && '80px') || '0'
  }
  return left
}
const menuSelect = () => {}
const drawerClose = () => {
  collapsed.value = false
}

const showRouter = ref(true)
const onRefresh = () => {
  emitter.all.clear()
  showRouter.value = false
  nextTick(() => (showRouter.value = true))
}
</script>

<style lang="less">
.page-transition-enter {
  opacity: 0;
}

.page-transition-leave-active {
  opacity: 0;
}

.page-transition-enter .page-transition-container,
.page-transition-leave-active .page-transition-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
