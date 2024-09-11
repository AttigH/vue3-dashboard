<h1 align="center">Vue 3 Dashboard</h1>
<div align="center">
An out-of-box UI solution for enterprise applications as a Vue boilerplate. based on  <a href="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" target="_blank">Ant Design of Vue</a>
</div>

How to run
----

```bash
Node version for development: v18.17.1, do not use a version lower than this, otherwise the project may not run

# Pull project code
git clone https://github.com/bailihuiyue/ant-design-pro-vue3.git
cd ant-design-pro-vue3
# Install dependencies
pnpm install
# Run in development mode
pnpm dev without development ball
pnpm dev-ui with development ball
# Compile project
pnpm run build-only
```


Permission management
----

- Permission management is set in the meta.permission of the routing file. It can be an array or not written. Not writing means any permission.
- For backend routing, permissions are generally not required. Whatever is passed is what is passed.

Command line tool
----
Used to automatically generate a set of templates, including internationalization, vue files, service files, etc.
- Enter yarn c --moduleName=desired component name to generate a set of component templates in src/components
- Enter yarn v --moduleName=desired page name to generate a set of page templates in src/views
- Enter create-module-be to generate the backend interface called by the template for the front-end page with one click
- dev-ui Start the project and the template backend at the same time, enter the component/page name you want to create in the development ball, and refresh the page (vite hot update automatically) to indicate that the creation is successful

Other instructions
----

- Currently <script setup lang="ts"></script> has a bug, which will cause the .ts file to be unable to be imported, and the error The requested module '/src/views/user/ty.ts' does not provide an export named 'FormState' is reported


Specific steps:
1. Open C:\Users\Admin\\.vscode\extensions\bttter-comments
2. Open the configuration file aaron-bond.better-comments-3.0.2/out/parser.js
3. setDelimiter(languageCode) method in the end of case)
## Completed
1. Register and log in to vue3 syntax
2. Automatically generate internationalization (multi-level folders use. Connection, such as tools.UserMenu)
3. Storage (including encryption)
4. vueuse responsive judgment device (mobile phone, tablet, pc)
5. Enter the command to generate a view/component template
6. There is a development ball on the page, click the button to create a view/component (yarn dev does not have a development ball, only dev-ui has)
7. Since viser-vue does not support vue3, it is rewritten using g2-plot, and night mode is supported.
(If you do not need this page, in addition to deleting the dashboard folder, do not forget to delete the two libraries "@antv/g2plot" and "@vue/babel-plugin-jsx")
8. Imitation win10 lock screen page, dynamically display whether it is connected to the Internet, whether it is charged, and the wallpaper can be changed freely (stored in indexedDB, it is recommended that the picture should not be too large, it is easy to get stuck), click the lock button in the lower right corner to display the password box or the wallpaper change button
9. In the views folder, you can create user.store.ts as a vuex file, in which the user before the file name .store.ts will be implemented as the module name. For specific implementation, please see the genStore method
10. New upgrade vite4, antv4, all vue files are replaced with setup writing
11. Global routing prompts/global error prompts when the project reports an error
12. Add two new pages: dynamic forms and flow charts
13. All content in the system settings drawer has been replaced by reactiveState instead of vuex, Reduce the workload of changing state management libraries (such as vuex to pinia, etc.)
14. Echarts chart designer
15. The vite version has been upgraded to 5.0, which is faster and stronger, and the mock plug-in has also been replaced with the latest

## TODO
1. Detailed documentation
2. Delete all i18n.global.t in the project, and only use i18n in hooks
3. Antv4.0 version night mode adaptation
5. Optimize the chart generator (combine one component instead of two)
5. Use alova to replace axios

## Browser compatibility
Edge Chrome and other modern browsers, currently only Chrome has been tested, no Mac so Safari has not been tested

## Some tips

1. If you want to change antv 3 prefix prefixCls, there is no need to compile the less file into css as in the official example, because if it is compiled, it will become css, and there is no way to dynamically change the theme. One way is:

```javascript
//1. In main.ts (the most important step is to no longer import css, but directly import the customizable less)
import 'ant-design-vue/dist/antd.variable.less';
//2. In App.vue (if you do not change the theme, this step can be omitted)
import { ConfigProvider } from 'ant-design-vue';
ConfigProvider.config({
prefixCls: 'test',
theme: {
primaryColor: '#25b864',
},
});
//3. In vite.config.ts
export default defineConfig({
css: {
preprocessorOptions: {
less: {
// modifyVars: generateModifyVars(),
javascriptEnabled: true,
// Add this sentence (// ant-design-vue 4.x version is not needed)
modifyVars: {
'@ant-prefix': 'coseffect',
}
},
},
},
})
```
2. Volar does not seem to be able to call various formatting plug-ins like vetur, and can only use the prettier plug-in for now
```javascript
//1. Find .eslintrc.cjs in the project root directory
rules: {
'prettier/prettier': [
'warn' //Set warn here, don't use others
]
}
//2.prettierrc.json file
{
"printWidth": 200, //Add this line
}
```

3. Add the .colorfulTitle class name to the title of the root directory index.html file, which can achieve a colorful text effect when refreshing the page

4. Solve the problem of vscode after using vloar Slow formatting problem (may not work)

5. For vscode configuration, please refer to the project root directory.vscode/settings.json

6. The page cannot be rendered (vue3+ts+vite), and the error jsoneditor does not provide an export named 'default' is reported

```javascript
This is because vite 4 has poor compatibility with commonjs, which makes it impossible to introduce jsoneditor. You can use the @originjs/vite-plugin-commonjs plug-in to solve it.
