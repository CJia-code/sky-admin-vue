import type {PluginOption} from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCss from "unocss/vite";
import VueDevTools from 'vite-plugin-vue-devtools';
// keepAlive 组件name
import vueSetupExtend from "vite-plugin-vue-setup-extend";
// gzip压缩
import viteCompression from "vite-plugin-compression";
import compression from "vite-plugin-compression";

import appInfo from './app-info';
import createDevtools from './devtools';
import createAutoImport from './auto-import';
import createComponents from './components';
import createSvgIcon from './svg-icon';

export default function createVitePlugins(viteEnv: any, isBuild = false) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    appInfo(),
    vue(),
    UnoCss(),
    vueSetupExtend(),
    viteCompression(),
  ];

  vitePlugins.push(createDevtools(viteEnv));
  vitePlugins.push(compression());
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createComponents());
  vitePlugins.push(createSvgIcon(isBuild))

  return vitePlugins;
}