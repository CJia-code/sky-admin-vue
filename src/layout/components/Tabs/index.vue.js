/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import TabMenu from "./components/TabMenu.vue";
import Sortable from "sortablejs";
import { useRoute, useRouter } from "vue-router";
import { HOME_URL } from "@/config";
import { useAuthStore, useTabsStore } from "@/store";
import { skyMsgWarning } from "@/utils/sky";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// 获取当前路由
const route = useRoute();
// 路由跳转
const router = useRouter();
// 获取选项卡仓库
const tabsStore = useTabsStore();
// 获取权限仓库
const authStore = useAuthStore();
// 获取选项卡数据
const tabList = computed(() => {
    return tabsStore.getTabs;
});
// 1、初始化需要固定的 tabs[isAffix[配置固定tabs项]，在进入系统的时候，获取对应权限菜单数据，如果里面有固定tabs配置项，则进行添加]
const initTabs = () => {
    authStore.menuList.forEach((item) => {
        if (item.meta.isAffix === true && item.meta.isHide === false && item.meta.isFull === false) {
            const tabsParams = {
                icon: item.meta.icon,
                title: item.meta.title,
                path: item.path,
                name: item.name,
                closeIcon: false,
                isKeepAlive: item.meta.isKeepAlive
            };
            tabsStore.addTab(tabsParams);
        }
    });
};
// 2、添加后激活选项卡
const activeTab = ref(route.fullPath);
const setActiveTab = () => {
    activeTab.value = route.fullPath;
};
// 3、添加选项卡
const addTab = () => {
    // 解构路由数据
    const { meta, fullPath } = route;
    // 构造选项卡数据
    const tab = {
        icon: meta.icon,
        title: meta.title,
        path: fullPath,
        name: route.name,
        closeIcon: route.meta.isAffix === false, // true则显示关闭图标
        isKeepAlive: route.meta.isKeepAlive,
    };
    if (fullPath === HOME_URL) {
        // 如果是首页的话，就固定不可关闭。
        tab.closeIcon = false;
    }
    // 添加到选项卡仓库里面
    tabsStore.addTab(tab);
};
// 4、移除选项卡
const removeTab = (fullPath) => {
    // 最后一个选项卡不被允许关闭
    const ObjectNumber = tabsStore.tabList.filter((item) => typeof item === "object").length;
    if (ObjectNumber === 1) {
        skyMsgWarning("到我的底线了，哼🌻");
        return;
    }
    tabsStore.removeTab(fullPath, fullPath === route.fullPath, "NULL");
};
// 5、点击切换选项卡
const clickToggleTab = (tab) => {
    const { props } = tab;
    // 将切换的选项卡进行添加路由操作
    router.push({ path: props.name });
};
// 6、tabs 拖拽排序
const tabsDrop = () => {
    Sortable.create(document.querySelector(".el-tabs__nav"), {
        draggable: ".el-tabs__item",
        animation: 300,
        // @ts-ignore
        onEnd({ newIndex, oldIndex }) {
            const tabsList = [...tabsStore.tabList];
            // 获取当前移动的索引的数据
            const currentRow = tabsList.splice(oldIndex, 1)[0];
            // 将 currentRow 元素插入到 tabsList 数组的指定位置 newIndex。0 是删除的元素数量，这里不需要删除任何元素
            tabsList.splice(newIndex, 0, currentRow);
            // 更新排序后的tabs仓库数据
            tabsStore.setTab(tabsList);
        }
    });
};
// 7、右键菜单
const tabMenuRef = ref();
const handleTabsMenuParent = (path, value) => {
    if (tabMenuRef.value) {
        tabMenuRef.value.handleTabsMenu(path, value);
    }
    else {
        skyMsgWarning("右键获取属性失败，请刷新页面重试🌻");
    }
};
// 监听当前路由，路由path发生变化添加选项卡数据
watch(() => route.fullPath, () => {
    if (route.meta.isFull === true)
        return;
    // 2、激活选中的选项卡
    setActiveTab();
    // 3、添加选项卡
    addTab();
});
// 页面创建后，立即初始化选项卡 AND 拖拽函数
onMounted(() => {
    addTab(); // 添加选项卡[进入根页面，立即添加首页]
    setActiveTab(); // 设置激活选项卡[进入根页面，立即激活首页]
    initTabs(); // 进入根页面，初始化需要固定的页面
    tabsDrop(); // 初始化拖拽功能
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['el-tabs__item'];
    __VLS_styleScopedClasses['el-tabs__item'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElTabs;
    /** @type { [typeof __VLS_components.ElTabs, typeof __VLS_components.elTabs, typeof __VLS_components.ElTabs, typeof __VLS_components.elTabs, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onTabRemove': {} }, ...{ 'onTabClick': {} }, modelValue: ((__VLS_ctx.activeTab)), type: ("card"), ...{ class: ("sky-tabs") }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onTabRemove': {} }, ...{ 'onTabClick': {} }, modelValue: ((__VLS_ctx.activeTab)), type: ("card"), ...{ class: ("sky-tabs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onTabRemove: (__VLS_ctx.removeTab)
    };
    const __VLS_8 = {
        onTabClick: (__VLS_ctx.clickToggleTab)
    };
    let __VLS_3;
    let __VLS_4;
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.tabList))) {
        const __VLS_9 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
        /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, ] } */
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ key: ((item.path)), label: ((item.title)), name: ((item.path)), closable: ((item.closeIcon)), }));
        const __VLS_11 = __VLS_10({ key: ((item.path)), label: ((item.title)), name: ((item.path)), closable: ((item.closeIcon)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { label: __VLS_thisSlot } = __VLS_nonNullable(__VLS_14.slots);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onContextmenu: (...[$event]) => {
                        __VLS_ctx.handleTabsMenuParent(item.path, $event);
                    } }, ...{ class: ("flex justify-center flex-items-center") }, });
            const __VLS_15 = __VLS_resolvedLocalAndGlobalComponents.SkyGlobalIcon;
            /** @type { [typeof __VLS_components.SkyGlobalIcon, typeof __VLS_components.SkyGlobalIcon, ] } */
            // @ts-ignore
            const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{ class: ("m-r-2px") }, name: ((item.icon)), size: ("16"), }));
            const __VLS_17 = __VLS_16({ ...{ class: ("m-r-2px") }, name: ((item.icon)), size: ("16"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
            __VLS_directiveAsFunction(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (item.icon) }, null, null);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-t-1px") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            (item.title);
        }
        const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11);
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    // @ts-ignore
    [TabMenu, TabMenu,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(TabMenu, new TabMenu({ ref: ("tabMenuRef"), }));
    const __VLS_22 = __VLS_21({ ref: ("tabMenuRef"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    // @ts-ignore navigation for `const tabMenuRef = ref()`
    __VLS_ctx.tabMenuRef;
    var __VLS_26 = {};
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(TabMenu, __VLS_22);
    __VLS_styleScopedClasses['sky-tabs'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['flex-items-center'];
    __VLS_styleScopedClasses['m-r-2px'];
    __VLS_styleScopedClasses['p-t-1px'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "tabMenuRef": __VLS_26,
    };
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TabMenu: TabMenu,
            tabList: tabList,
            activeTab: activeTab,
            removeTab: removeTab,
            clickToggleTab: clickToggleTab,
            tabMenuRef: tabMenuRef,
            handleTabsMenuParent: handleTabsMenuParent,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=index.vue.js.map