<h1 align="center">Vue 3 Dashboard</h1>
<div align="center">
An out-of-box UI solution for enterprise applications as a Vue boilerplate. based on  <a href="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" target="_blank">Ant Design of Vue</a>
</div>



```bash
Node version during development: v18.17.1, do not lower than this version, otherwise the project may not run

#Pull project code
git clone https://github.com/AttigH/vue3-dashboard.git
cd vue3-dashboard
#Install dependencies
pnpm install
# Run in development mode
pnpm dev without development ball
pnpm dev-ui with development ball
#compile project
pnpm run build-only
```

Routing and Menus
----

#### Basic structure
- Routing file Configure routing in router.ts according to the agreed syntax.
- Backend routing: Set whether to enable or not through useAsyncRouter in defaultSettings.ts. The format of backend routing is in userNav of mockUtils.ts.
- The component automatic import logic corresponding to the backend routing is in batchImportFiles, which will automatically import the vue file under view as the page
- For ordinary routing, refer to exampleRouterMap
- Menu generation generates menus according to routing configuration. Menu item names, nested paths are highly coupled with routing, and the specific configuration content refers to
[Ant Design Pro Vue](https://pro.antdv.com/docs/router-and-nav) 即可
- 菜单跳转第三方网址的写法meta: { title: 'user.login.login', icon: 'account-book', target: '#', blank: false }
If you do not want to check in in a new window, please write blank: false. Otherwise, leave blank blank or any value means true.

layout
----

- The layout does not use the new version of the pro-layout plug-in, because the secondary packaging is not conducive to personalized customization, and pro-layout is all written in jsx, so the ant-pro 2.0 code is still used to modify it.

Add a new page
----

## Completed
1. Register and log in vue3 syntax
2. Automatically generate internationalization (multi-level folders use . connection, such as tools.UserMenu)
3. Storage (including encryption)
4. vueuse responsive judgment device (mobile phone, tablet, pc)
5. Enter the command to generate a view/component template
6. There is a development ball on the page, click the button to create a view/component (yarn dev does not have a development ball, dev-ui has it)
7. Since viser-vue does not support vue3, it is rewritten using g2-plot, and night mode is supported
(If you don't need this page, in addition to deleting the dashboard folder, don't forget to delete the two libraries "@antv/g2plot" and "@vue/babel-plugin-jsx")
8. Imitation win10 lock screen page, dynamically display whether it is connected to the Internet, whether it is charging, and can change the wallpaper freely (stored in indexedDB, it is recommended that the picture is not too large, it is easy to get stuck), click the lock button in the lower right corner to display the password box or change wallpaper button
9. You can create in the views folder user.store.ts is used as the file of vuex, in which the user before the file name .store.ts will be implemented as the module name. For specific implementation, please see the genStore method
10. New upgrade of vite4, antv4, all vue files are replaced with setup writing
11. Global routing prompt/global error prompt when the project reports an error
12. Add two new pages: dynamic form and flow chart
13. All contents in the system settings drawer have been replaced by reactiveState instead of vuex, reducing the workload of changing the state management library (such as vuex to pinia, etc.)
14. Echarts chart designer
15. The vite version has been upgraded to 5.0, which is faster and stronger, and the mock plug-in has also been replaced with the latest

## TODO
1. Detailed documentation
2. Delete all i18n.global.t in the project and only use i18n in hooks
3. Antv4.0 version night mode adaptation
5. Optimize the chart generator (combine one component instead of two)
5. Use alova to replace axios

## Browser compatibility
Edge Chrome and other modern browsers. Currently only Chrome has been tested. I don't have a Mac so Safari has not been tested.

## Some tips

1. If you want to change the prefix prefixCls of antv 3, you don't need to compile the less file into css as in the official example, because after compilation, it becomes css and there is no way to dynamically change the theme. One way is:

```javascript

import 'ant-design-vue/dist/antd.variable.less';

import { ConfigProvider } from 'ant-design-vue';
ConfigProvider.config({
  prefixCls: 'test',
  theme: {
    primaryColor: '#25b864',
  },
});

export default defineConfig({
    css: {
        preprocessorOptions: {
            less: {

                javascriptEnabled: true,

                modifyVars: {
                    '@ant-prefix': 'coseffect',
                }
            },
        },
    },
})

#   v u e 3 - d a s h b o a r d  
 