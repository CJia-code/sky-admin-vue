/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { useRoute, useRouter } from "vue-router";
import { HOME_URL } from "@/config";
import { useGlobalStore, useKeepAliveStore, useTabsStore } from "@/store";
import { Close, DArrowLeft, DArrowRight, FullScreen, Refresh, Remove, Star } from "@element-plus/icons-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const globalStore = useGlobalStore();
const keepAliveStore = useKeepAliveStore();
const tabsStore = useTabsStore();
// 点击鼠标右键点击出现菜单
const choosePath = ref();
const handleTabsMenu = (path, e) => {
    choosePath.value = path;
    const card = document.querySelector(".tabs-card");
    // 阻止默认右键菜单
    e.preventDefault();
    if (card != null) {
        // 设置 card 的位置为鼠标点击位置
        card.style.display = "block";
        card.style.left = (e.pageX + "px");
        card.style.top = (e.pageY + "px");
        // 点击数据时，菜单消失
        const hideCard = () => {
            if (card !== null) {
                card.style.display = "none";
            }
            // 移除点击事件监听器，以免影响其他操作
            window.removeEventListener("click", hideCard);
        };
        window.addEventListener("click", hideCard);
    }
    // 阻止事件冒泡到父元素[防止触发全局的 window.onclick]
    e.stopPropagation();
};
// 刷新当前页
const refreshCurrentPage = inject("refresh");
const handleRefresh = () => {
    setTimeout(() => {
        route.meta.keepalive && keepAliveStore.removeKeepAliveName(route.name);
        refreshCurrentPage(false);
        nextTick(() => {
            route.meta.keepalive && keepAliveStore.addKeepAliveName(route.name);
            refreshCurrentPage(true);
        });
    }, 0);
};
// 当前页全屏
const handleMaximize = () => {
    // 切换哪个，先跳转哪个
    router.push(choosePath.value);
    globalStore.setGlobalState("maximize", !globalStore.maximize);
};
// 关闭左边 OR 右边选项卡
const handleCloseSideTabs = (direction) => {
    // console.log("关闭左边 OR 右边选项卡", direction);
    if (choosePath.value) {
        tabsStore.closeSideTabs(choosePath.value, direction);
    }
    else {
        tabsStore.closeSideTabs(route.fullPath, direction);
    }
};
// 关闭当前选项卡
const handleCloseCurrentTab = () => {
    // console.log("关闭当前选项卡");
    if (choosePath.value) {
        tabsStore.removeTab(choosePath.value, true, route.fullPath);
    }
    else {
        tabsStore.removeTab(route.fullPath);
    }
};
// 关闭其他选项卡
const handleCloseOtherTabs = () => {
    // console.log("关闭其他选项卡");
    if (choosePath.value) {
        tabsStore.closeManyTabs(choosePath.value);
        router.push(choosePath.value);
    }
    else {
        tabsStore.closeManyTabs(route.fullPath);
    }
};
// 关闭全部选项卡
const handleCloseAllTabs = () => {
    // console.log("关闭全部选项卡");
    tabsStore.closeManyTabs();
    router.push(HOME_URL);
};
// 组件对外暴露
const __VLS_exposed = {
    handleTabsMenu,
};
defineExpose({
    handleTabsMenu,
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tabs-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleRefresh();
            } }, ...{ class: ("tab-menu-item c-#0C6ED0") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("m-r-2px") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("m-r-2px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.Refresh;
    /** @type { [typeof __VLS_components.Refresh, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    (__VLS_ctx.$t("tabs.refresh"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleMaximize();
            } }, ...{ class: ("tab-menu-item c-#646cff") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("m-r-2px") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("m-r-2px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.FullScreen;
    /** @type { [typeof __VLS_components.FullScreen, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_ctx.$t("tabs.maximize"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleCloseCurrentTab();
            } }, ...{ class: ("tab-menu-item c-#C93992") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("m-r-2px") }, }));
    const __VLS_26 = __VLS_25({ ...{ class: ("m-r-2px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.Close;
    /** @type { [typeof __VLS_components.Close, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_nonNullable(__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    (__VLS_ctx.$t("tabs.closeCurrent"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleCloseOtherTabs();
            } }, ...{ class: ("tab-menu-item c-#DD5858") }, });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ class: ("m-r-2px") }, }));
    const __VLS_38 = __VLS_37({ ...{ class: ("m-r-2px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.Star;
    /** @type { [typeof __VLS_components.Star, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_nonNullable(__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    (__VLS_ctx.$t("tabs.closeOther"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleCloseSideTabs('left');
            } }, ...{ class: ("tab-menu-item c-#31A24D") }, });
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ class: ("m-r-2px") }, }));
    const __VLS_50 = __VLS_49({ ...{ class: ("m-r-2px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.DArrowLeft;
    /** @type { [typeof __VLS_components.DArrowLeft, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
    const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
    __VLS_nonNullable(__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    (__VLS_ctx.$t("tabs.closeLeft"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleCloseSideTabs('right');
            } }, ...{ class: ("tab-menu-item c-#F77A05") }, });
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{ class: ("m-r-2px") }, }));
    const __VLS_62 = __VLS_61({ ...{ class: ("m-r-2px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.DArrowRight;
    /** @type { [typeof __VLS_components.DArrowRight, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
    const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
    __VLS_nonNullable(__VLS_65.slots).default;
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    (__VLS_ctx.$t("tabs.closeRight"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleCloseAllTabs();
            } }, icon: ("Remove"), ...{ class: ("tab-menu-item c-#7723B0") }, });
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ class: ("m-r-2px") }, }));
    const __VLS_74 = __VLS_73({ ...{ class: ("m-r-2px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.Remove;
    /** @type { [typeof __VLS_components.Remove, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({}));
    const __VLS_80 = __VLS_79({}, ...__VLS_functionalComponentArgsRest(__VLS_79));
    __VLS_nonNullable(__VLS_77.slots).default;
    const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
    (__VLS_ctx.$t("tabs.closeAll"));
    __VLS_styleScopedClasses['tabs-card'];
    __VLS_styleScopedClasses['tab-menu-item'];
    __VLS_styleScopedClasses['c-#0C6ED0'];
    __VLS_styleScopedClasses['m-r-2px'];
    __VLS_styleScopedClasses['tab-menu-item'];
    __VLS_styleScopedClasses['c-#646cff'];
    __VLS_styleScopedClasses['m-r-2px'];
    __VLS_styleScopedClasses['tab-menu-item'];
    __VLS_styleScopedClasses['c-#C93992'];
    __VLS_styleScopedClasses['m-r-2px'];
    __VLS_styleScopedClasses['tab-menu-item'];
    __VLS_styleScopedClasses['c-#DD5858'];
    __VLS_styleScopedClasses['m-r-2px'];
    __VLS_styleScopedClasses['tab-menu-item'];
    __VLS_styleScopedClasses['c-#31A24D'];
    __VLS_styleScopedClasses['m-r-2px'];
    __VLS_styleScopedClasses['tab-menu-item'];
    __VLS_styleScopedClasses['c-#F77A05'];
    __VLS_styleScopedClasses['m-r-2px'];
    __VLS_styleScopedClasses['tab-menu-item'];
    __VLS_styleScopedClasses['c-#7723B0'];
    __VLS_styleScopedClasses['m-r-2px'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
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
            Close: Close,
            DArrowLeft: DArrowLeft,
            DArrowRight: DArrowRight,
            FullScreen: FullScreen,
            Refresh: Refresh,
            Remove: Remove,
            Star: Star,
            handleRefresh: handleRefresh,
            handleMaximize: handleMaximize,
            handleCloseSideTabs: handleCloseSideTabs,
            handleCloseCurrentTab: handleCloseCurrentTab,
            handleCloseOtherTabs: handleCloseOtherTabs,
            handleCloseAllTabs: handleCloseAllTabs,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
});
;
//# sourceMappingURL=TabMenu.vue.js.map