/**
 * @description 生成唯一 uuid
 * @returns {String}
 */
export function generateUUID() {
  let uuid = "";
  for (let i = 0; i < 32; i++) {
    let random = (Math.random() * 16) | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) uuid += "-";
    uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
  }
  return uuid;
}

/**
 * @description 禁用节点
 * @param nodes 列表
 * @param disableType 'parent' | 'child'
 * @returns {Array}
 */
export function disableNodes(nodes: any, disableType: any) {
  if (disableType === 'parent') {
    nodes.forEach((node: any) => {
      if (node.children && node.children.length > 0) {
        disableNodes(node.children, 'parent');
        node.disabled = true;
      } else if (node.parent) {
        node.disabled = true;
      }
    });
  } else if (disableType === 'child') {
    nodes.forEach((node: any) => {
      if (node.children && node.children.length > 0) {
        disableNodes(node.children, 'child');
      } else {
        node.disabled = true;
      }
    });
  }
  return nodes;
}

/**
 * @description 获取当前年月日
 */
export function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月份加1
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

/**
 * @description 获取当前时间
 */
export function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 月份是从0开始的，所以需要加1
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${year}年${month}月${day}日 ${hours}时${minutes}分${seconds}秒`;
}

/**
 * @description 封装或指定表格字段的显示状态
 * @param value 字段名
 * @param data 字段表
 * @returns {boolean|*} true or false
 */
export function fieldVisible(value: string, data: any[]) {
  let obj = data.find((item: any) => item.title === value);
  return obj.visible;
}

/**
 * @description 使用递归过滤出需要渲染在左侧菜单动态数据的列表 (需剔除 isHide == 0 隐藏的菜单)
 * @param {Array} menuList 菜单列表
 * @returns {Array}
 * */
export function getShowStaticAndDynamicMenuList(menuList: any): any {
  let newMenuList: any = JSON.parse(JSON.stringify(menuList));
  return newMenuList.filter((item: any) => {
    return item.isHide == false || item.meta?.isHide == false;
  });
}

/**
 * @description 使用递归找出所有面包屑存储到 pinia 中
 * @param {Array} menuList 菜单列表
 * @param {Array} parent 父级菜单
 * @param {Object} result 处理后的结果
 * @returns {Object}
 */
export const getAllBreadcrumbList = (menuList: any, parent = [], result: { [key: string]: any } = {}) => {
  for (const item of menuList) {
    result[item.path] = [...parent, item];

    if (item.children) getAllBreadcrumbList(item.children, result[item.path], result);
  }
  return result;
};

const mode = import.meta.env.VITE_ROUTER_MODE;

/**
 * @description 获取不同路由模式所对应的 url + params
 * @returns {String}
 */
export function getUrlWithParams() {
  const url = {
    hash: location.hash.substring(1),
    history: location.pathname + location.search
  };
  // @ts-ignore
  return url[mode];
}

/**
 * @description 获取浏览器默认语言
 * @returns {String}
 */
export function getBrowserLang() {
  // @ts-ignore
  let browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
  let defaultBrowserLang = "";
  if (["cn", "zh", "zh-cn"].includes(browserLang.toLowerCase())) {
    defaultBrowserLang = "zh";
  } else {
    defaultBrowserLang = "en";
  }
  return defaultBrowserLang;
}

/**
 * @description 获取assets静态资源
 * @param url
 * @returns
 */
export const getAssets = (url: string) => {
  return new URL(`../assets/${url}`, import.meta.url).href;
};
