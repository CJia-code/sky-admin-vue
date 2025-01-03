/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import Logo from "@/layout/components/Logo/index.vue";
import Dark from "@/layout/components/Header/components/Dark.vue";
import User from "@/layout/components/Header/components/User.vue";
import ColumnSubMenu from "@/layout/components/Menu/ColumnSubMenu.vue";
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
const mobileDrawer = ref(false);
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElContainer;
    /** @type { [typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("layout-container") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("layout-container") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElHeader;
    /** @type { [typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("layout-header flex items-center flex-justify-between") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("layout-header flex items-center flex-justify-between") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-30px flex items-center") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
    /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.SvgIcon, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {} }, name: ("sky-mobile-menu"), width: ("30px"), height: ("30px"), }));
    const __VLS_14 = __VLS_13({ ...{ 'onClick': {} }, name: ("sky-mobile-menu"), width: ("30px"), height: ("30px"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onClick: (...[$event]) => {
            __VLS_ctx.mobileDrawer = true;
        }
    };
    let __VLS_15;
    let __VLS_16;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center") }, });
    // @ts-ignore
    [Dark, Dark,];
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(Dark, new Dark({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    // @ts-ignore
    [User, User,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(User, new User({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    [Main, Main,];
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(Main, new Main({}));
    const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_35 = __VLS_resolvedLocalAndGlobalComponents.MobileDrawer;
    /** @type { [typeof __VLS_components.MobileDrawer, typeof __VLS_components.MobileDrawer, ] } */
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{ style: ({}) }, modelValue: ((__VLS_ctx.mobileDrawer)), placement: ("left"), }));
    const __VLS_37 = __VLS_36({ ...{ style: ({}) }, modelValue: ((__VLS_ctx.mobileDrawer)), placement: ("left"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("transition-all mobile-drawer") }, });
    // @ts-ignore
    [Logo, Logo,];
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(Logo, new Logo({ layout: ("mobile"), }));
    const __VLS_42 = __VLS_41({ layout: ("mobile"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    const __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.ElScrollbar;
    /** @type { [typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, ] } */
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{ class: ("layout-scrollbar") }, }));
    const __VLS_48 = __VLS_47({ ...{ class: ("layout-scrollbar") }, }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    const __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.ElMenu;
    /** @type { [typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ] } */
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ defaultActive: ((__VLS_ctx.activeMenu)), collapseTransition: ((false)), uniqueOpened: ((__VLS_ctx.globalStore.uniqueOpened)), router: ((false)), ...{ class: ((__VLS_ctx.menuAnimate)) }, }));
    const __VLS_54 = __VLS_53({ defaultActive: ((__VLS_ctx.activeMenu)), collapseTransition: ((false)), uniqueOpened: ((__VLS_ctx.globalStore.uniqueOpened)), router: ((false)), ...{ class: ((__VLS_ctx.menuAnimate)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    // @ts-ignore
    [ColumnSubMenu, ColumnSubMenu,];
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(ColumnSubMenu, new ColumnSubMenu({ menuList: ((__VLS_ctx.menuList)), }));
    const __VLS_59 = __VLS_58({ menuList: ((__VLS_ctx.menuList)), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    __VLS_nonNullable(__VLS_57.slots).default;
    const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
    __VLS_nonNullable(__VLS_51.slots).default;
    const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
    __VLS_nonNullable(__VLS_40.slots).default;
    const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
    __VLS_styleScopedClasses['layout-container'];
    __VLS_styleScopedClasses['layout-header'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['flex-justify-between'];
    __VLS_styleScopedClasses['w-30px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['mobile-drawer'];
    __VLS_styleScopedClasses['layout-scrollbar'];
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
            Dark: Dark,
            User: User,
            ColumnSubMenu: ColumnSubMenu,
            Main: Main,
            globalStore: globalStore,
            menuAnimate: menuAnimate,
            menuList: menuList,
            activeMenu: activeMenu,
            mobileDrawer: mobileDrawer,
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