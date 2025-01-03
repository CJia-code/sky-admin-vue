/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import Maximize from "./components/Maximize.vue";
import Tabs from "@/layout/components/Tabs/index.vue";
import { storeToRefs } from "pinia";
import { useDebounceFn } from "@vueuse/core";
import { useGlobalStore, useKeepAliveStore } from "@/store";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const globalStore = useGlobalStore();
const keepAliveStore = useKeepAliveStore();
// 路由动画
const { transition } = storeToRefs(globalStore);
// 刷新当前路由页面缓存方法
const isRouterShow = ref(true);
const refreshCurrentPage = (val) => (isRouterShow.value = val);
provide("refresh", refreshCurrentPage);
/** 监听窗口大小变化，折叠侧边栏 */
const screenWidth = ref(0);
const showTabs = ref(true);
const listeningWindow = useDebounceFn(() => {
    screenWidth.value = document.body.clientWidth;
    if (!globalStore.isCollapse && screenWidth.value < 1200)
        globalStore.setGlobalState("isCollapse", true);
    if (globalStore.isCollapse && screenWidth.value > 1200)
        globalStore.setGlobalState("isCollapse", false);
    showTabs.value = screenWidth.value >= 520;
}, 100);
window.addEventListener("resize", listeningWindow, false);
onBeforeUnmount(() => {
    window.removeEventListener("resize", listeningWindow);
});
// 监听当前页面是否最大化，动态添加 class
watch(() => globalStore.maximize, () => {
    const app = document.getElementById("app");
    if (globalStore.maximize)
        app.classList.add("main-maximize");
    else
        app.classList.remove("main-maximize");
    // 浏览器没有实际变化的情况下，触发一次浏览器尺寸变化的逻辑。保证全屏切换的时候，表格阔以进行自适应。
    const event = new Event("resize");
    window.dispatchEvent(event);
}, { deep: true, immediate: true });
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
    // @ts-ignore
    [Maximize,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Maximize, new Maximize({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.globalStore.maximize) }, null, null);
    if (__VLS_ctx.showTabs) {
        // @ts-ignore
        [Tabs, Tabs,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(Tabs, new Tabs({}));
        const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    }
    const __VLS_10 = __VLS_resolvedLocalAndGlobalComponents.ElMain;
    /** @type { [typeof __VLS_components.ElMain, typeof __VLS_components.elMain, typeof __VLS_components.ElMain, typeof __VLS_components.elMain, ] } */
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{ class: ("layout-main") }, }));
    const __VLS_12 = __VLS_11({ ...{ class: ("layout-main") }, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    const __VLS_16 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
    const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_21.slots);
        const [{ Component, route }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_22 = __VLS_resolvedLocalAndGlobalComponents.transition;
        /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ] } */
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ name: ((__VLS_ctx.transition)), mode: ("out-in"), appear: (true), }));
        const __VLS_24 = __VLS_23({ name: ((__VLS_ctx.transition)), mode: ("out-in"), appear: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
        const __VLS_28 = __VLS_resolvedLocalAndGlobalComponents.KeepAlive;
        /** @type { [typeof __VLS_components.KeepAlive, typeof __VLS_components.keepAlive, typeof __VLS_components.KeepAlive, typeof __VLS_components.keepAlive, ] } */
        // @ts-ignore
        const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ max: ((16)), include: ((__VLS_ctx.keepAliveStore.keepAliveName)), }));
        const __VLS_30 = __VLS_29({ max: ((16)), include: ((__VLS_ctx.keepAliveStore.keepAliveName)), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
        if (__VLS_ctx.isRouterShow) {
            const __VLS_34 = ((Component));
            // @ts-ignore
            const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ key: ((route.fullPath)), }));
            const __VLS_36 = __VLS_35({ key: ((route.fullPath)), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
        }
        __VLS_nonNullable(__VLS_33.slots).default;
        const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30);
        __VLS_nonNullable(__VLS_27.slots).default;
        const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24);
        __VLS_nonNullable(__VLS_21.slots)['' /* empty slot name completion */];
    }
    const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
    __VLS_nonNullable(__VLS_15.slots).default;
    const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
    __VLS_styleScopedClasses['layout-main'];
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
            Maximize: Maximize,
            Tabs: Tabs,
            globalStore: globalStore,
            keepAliveStore: keepAliveStore,
            transition: transition,
            isRouterShow: isRouterShow,
            showTabs: showTabs,
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