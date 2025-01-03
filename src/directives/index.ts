import {App} from "vue";
import adaptive from "./modules/adaptive";
import adaptiveTree from "./modules/adaptiveTree";
import auth from "./modules/auth";
import copy from "./modules/copy";
import debounce from "./modules/debounce";
import debounceInput from "./modules/debounceInput";
import draggable from "./modules/draggable";
import throttle from "./modules/throttle";
import throttleInput from "./modules/throttleInput";
import waterMarker from "./modules/waterMarker";

const directivesList: any = {
  adaptive,
  adaptiveTree,
  auth,
  copy,
  debounce,
  debounceInput,
  draggable,
  throttle,
  throttleInput,
  waterMarker,
};

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach(key => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key]);
    });
  }
};

export default directives;
