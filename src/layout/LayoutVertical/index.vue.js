/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import Logo from "@/layout/components/Logo/index.vue";
import Header from "@/layout/components/Header/index.vue";
import AsideSubMenu from "@/layout/components/Menu/AsideSubMenu.vue";
import Main from "@/layout/components/Main/index.vue";
import settings from "@/settings";
import { useRoute } from "vue-router";
import { useAuthStore, useGlobalStore } from "@/store";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const authStore = useAuthStore();
const globalStore = useGlobalStore();
// 动态绑定左侧菜单animate动画
const menuAnimate = ref(settings.menuAnimate);
const menuList = computed(() => authStore.showMenuList);
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));
const menuHoverCollapse = ref(settings.asideMenuHoverCollapse);
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
    __VLS_ctx.menuHoverCollapse;
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElContainer;
    /** @type { [typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("layout-container") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("layout-container") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElAside;
    /** @type { [typeof __VLS_components.ElAside, typeof __VLS_components.elAside, typeof __VLS_components.ElAside, typeof __VLS_components.elAside, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("layout-aside transition-all") }, ...{ style: (({ width: !__VLS_ctx.globalStore.isCollapse ? __VLS_ctx.globalStore.menuWidth + 'px' : __VLS_ctx.settings.asideMenuCollapseWidth })) }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("layout-aside transition-all") }, ...{ style: (({ width: !__VLS_ctx.globalStore.isCollapse ? __VLS_ctx.globalStore.menuWidth + 'px' : __VLS_ctx.settings.asideMenuCollapseWidth })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    // @ts-ignore
    [Logo, Logo,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(Logo, new Logo({ isCollapse: ((__VLS_ctx.globalStore.isCollapse)), layout: ((__VLS_ctx.globalStore.layout)), }));
    const __VLS_13 = __VLS_12({ isCollapse: ((__VLS_ctx.globalStore.isCollapse)), layout: ((__VLS_ctx.globalStore.layout)), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.ElScrollbar;
    /** @type { [typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, ] } */
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ ...{ class: ("layout-scrollbar") }, }));
    const __VLS_19 = __VLS_18({ ...{ class: ("layout-scrollbar") }, }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    const __VLS_23 = __VLS_resolvedLocalAndGlobalComponents.ElMenu;
    /** @type { [typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ] } */
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ defaultActive: ((__VLS_ctx.activeMenu)), collapse: ((__VLS_ctx.globalStore.isCollapse)), collapseTransition: ((false)), uniqueOpened: ((__VLS_ctx.globalStore.uniqueOpened)), router: ((false)), ...{ class: ((__VLS_ctx.menuAnimate)) }, }));
    const __VLS_25 = __VLS_24({ defaultActive: ((__VLS_ctx.activeMenu)), collapse: ((__VLS_ctx.globalStore.isCollapse)), collapseTransition: ((false)), uniqueOpened: ((__VLS_ctx.globalStore.uniqueOpened)), router: ((false)), ...{ class: ((__VLS_ctx.menuAnimate)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    // @ts-ignore
    [AsideSubMenu, AsideSubMenu,];
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(AsideSubMenu, new AsideSubMenu({ menuList: ((__VLS_ctx.menuList)), }));
    const __VLS_30 = __VLS_29({ menuList: ((__VLS_ctx.menuList)), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    __VLS_nonNullable(__VLS_28.slots).default;
    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25);
    __VLS_nonNullable(__VLS_22.slots).default;
    const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_34 = __VLS_resolvedLocalAndGlobalComponents.ElContainer;
    /** @type { [typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ] } */
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({}));
    const __VLS_36 = __VLS_35({}, ...__VLS_functionalComponentArgsRest(__VLS_35));
    const __VLS_40 = __VLS_resolvedLocalAndGlobalComponents.ElHeader;
    /** @type { [typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, ] } */
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ class: ("layout-header") }, }));
    const __VLS_42 = __VLS_41({ ...{ class: ("layout-header") }, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    // @ts-ignore
    [Header, Header,];
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(Header, new Header({}));
    const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
    __VLS_nonNullable(__VLS_45.slots).default;
    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
    // @ts-ignore
    [Main, Main,];
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(Main, new Main({}));
    const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
    __VLS_nonNullable(__VLS_39.slots).default;
    const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['layout-container'];
    __VLS_styleScopedClasses['layout-aside'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['layout-scrollbar'];
    __VLS_styleScopedClasses['layout-header'];
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
            Logo: Logo,
            Header: Header,
            AsideSubMenu: AsideSubMenu,
            Main: Main,
            settings: settings,
            globalStore: globalStore,
            menuAnimate: menuAnimate,
            menuList: menuList,
            activeMenu: activeMenu,
            menuHoverCollapse: menuHoverCollapse,
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