<h1 align="center">Vue 3 Dashboard</h1>
<div align="center">
An out-of-box UI solution for enterprise applications as a Vue boilerplate. based on  <a href="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" target="_blank">Ant Design of Vue</a>
</div>


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




#### Basic structure

- Routing file Configure routing in router.ts according to the agreed syntax.
- Backend routing: Set whether to enable or not through useAsyncRouter in defaultSettings.ts. The format of backend routing is in userNav of mockUtils.ts.
- The component corresponding to the backend routing automatically imports the logic in batchImportFiles, and automatically imports the vue file under view as the page
- For ordinary routing, refer to exampleRouterMap
- Menu generation generates menus according to routing configuration. The menu item name, nested path and routing are highly coupled. For specific configuration content, please refer to [Ant Design Pro Vue](https://pro.antdv.com/docs/router-and-nav)
- How to write the menu to jump to a third-party URL meta: { title: 'user.login.login', icon: 'account-book', target: 'http://www.baidu.com', blank: false } If you do not want to check in in a new window, please write blank: false. Otherwise, blank is not written or any value means true.






- The project uses vite-plugin-theme to generate themes (css)
- Currently, it can support automatic switching of themes, including production mode,
- Through research, it is found that antv (element has official support) currently has two mainstream switching modes, and both require webpack/vite plug-ins:
1. Pass in the color variables and values ​​that need to be changed in advance, such as: @primary-color: [#0094ff, #fff, #000, etc.], and then read these variables when webpack is compiled, and then statically generate these css files,
- Advantages, 1. When switching themes, just load different css files to save performance,
- Disadvantages: 1. Consume server space, 2. Only a few pre-defined themes can be customized 3. The variable name to be modified needs to be dynamically written, such as @primary-color, @success-colo, etc., and the replacement is not complete
2. The second solution, based on the vite-plugin-theme plug-in,

- Advantages

1. You can choose the theme color arbitrarily in the production environment;

2. There is no problem 3 of the previous bill, and the theme change is more comprehensive

- Disadvantages:
1. Since the theme color is dynamically generated, there will be performance loss
2. The color number of the antv main color must be found first, otherwise the theme replacement function will fail, so when the antv main color is changed, the code needs to be changed accordingly. It is recommended to lock the antv version to avoid this problem;
- The guessing principle, according to the plug-in description and the code running phenomenon, is to generate several adjacent colors with the main color and then find the corresponding CSS styles containing these colors in the entire project and then compare and replace them. For example, it was originally [a, b, c, d], and now it is [1, 2, 3, 4], then a becomes 1, b becomes 2, and then the corresponding replacement is written to the bottom of the body to complete the theme switching. There is no need to search according to the definition of @primary-color. This is a more complete color replacement.
*** The dark mode currently uses the dark css of the antv official website, which is completed by dynamically adding links and cannot be adapted to all pages. Therefore, some compatible styles are written in darkModePatch.less***

~~**3. This project uses the third solution: Use the official antv V3 version of the css variable to modify the theme, achieving the optimal solution for performance and volume**~~(antv 4.0 and later use css in js, no need to modify the less variable, directly set the color in the a-config-provider component, for details, see the official website tutorial)

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

- ​​In order to keep the ant vue pro style consistent, some codes are quoted from [ant vue pro](https://2x.antdv.com/components/overview-cn/), such as global.less, some plug-ins and principles are borrowed from [vben](https://vvbin.cn/next/), thanks to both of you

- Currently <script setup lang="ts"></script> has a bug, which will cause the .ts file to be unable to be imported, and the error The requested module '/src/views/user/ty.ts' does not provide an export named 'FormState' is reported

- There are some comments in the document, which are better when used with the vscode plug-in better-comments:
Comments TODO: To be completed
bug:todo: bug
info:todo: Some situations found
warn:todo: There may be bugs
ques:todo: Questions
Only uppercase 'TODO' indicates an unfinished function, and lowercase todo is just for the convenience of searching
(If the plug-in does not change color in the vue file, you can refer to https://blog.csdn.net/weixin_47872719/article/details/126743867
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
