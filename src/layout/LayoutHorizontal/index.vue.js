/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import Logo from "@/layout/components/Logo/index.vue";
import Toolbar from "@/layout/components/Header/components/Toolbar.vue";
import HorizontalSubMenu from "@/layout/components/Menu/HorizontalSubMenu.vue";
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
    __VLS_styleScopedClasses['is-active'];
    __VLS_styleScopedClasses['is-active'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElContainer;
    /** @type { [typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("layout-container") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("layout-container") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElHeader;
    /** @type { [typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("layout-header") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("layout-header") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-items-center") }, });
    // @ts-ignore
    [Logo, Logo,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(Logo, new Logo({ layout: ((__VLS_ctx.globalStore.layout)), }));
    const __VLS_13 = __VLS_12({ layout: ((__VLS_ctx.globalStore.layout)), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.ElScrollbar;
    /** @type { [typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, ] } */
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({}));
    const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
    const __VLS_23 = __VLS_resolvedLocalAndGlobalComponents.ElMenu;
    /** @type { [typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ] } */
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ mode: ("horizontal"), defaultActive: ((__VLS_ctx.activeMenu)), router: ((false)), ...{ class: ((__VLS_ctx.menuAnimate)) }, }));
    const __VLS_25 = __VLS_24({ mode: ("horizontal"), defaultActive: ((__VLS_ctx.activeMenu)), router: ((false)), ...{ class: ((__VLS_ctx.menuAnimate)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    // @ts-ignore
    [HorizontalSubMenu,];
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(HorizontalSubMenu, new HorizontalSubMenu({ menuList: ((__VLS_ctx.menuList)), }));
    const __VLS_30 = __VLS_29({ menuList: ((__VLS_ctx.menuList)), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    __VLS_nonNullable(__VLS_28.slots).default;
    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25);
    __VLS_nonNullable(__VLS_22.slots).default;
    const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
    // @ts-ignore
    [Toolbar, Toolbar,];
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(Toolbar, new Toolbar({}));
    const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.ElMain;
    /** @type { [typeof __VLS_components.ElMain, typeof __VLS_components.elMain, typeof __VLS_components.ElMain, typeof __VLS_components.elMain, ] } */
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ ...{ class: ("layout-main") }, }));
    const __VLS_41 = __VLS_40({ ...{ class: ("layout-main") }, }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    // @ts-ignore
    [Main, Main,];
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(Main, new Main({}));
    const __VLS_46 = __VLS_45({}, ...__VLS_functionalComponentArgsRest(__VLS_45));
    __VLS_nonNullable(__VLS_44.slots).default;
    const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['layout-container'];
    __VLS_styleScopedClasses['layout-header'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-items-center'];
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
            Logo: Logo,
            Toolbar: Toolbar,
            HorizontalSubMenu: HorizontalSubMenu,
            Main: Main,
            globalStore: globalStore,
            menuAnimate: menuAnimate,
            menuList: menuList,
            activeMenu: activeMenu,
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