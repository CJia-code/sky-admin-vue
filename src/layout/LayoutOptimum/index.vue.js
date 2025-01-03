/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import Logo from "@/layout/components/Logo/index.vue";
import Collapse from "@/layout/components/Header/components/Collapse.vue";
import Toolbar from "@/layout/components/Header/components/Toolbar.vue";
import ColumnSubMenu from "@/layout/components/Menu/ColumnSubMenu.vue";
import Main from "@/layout/components/Main/index.vue";
import settings from "@/settings";
import { useRoute } from "vue-router";
import { useAuthStore, useGlobalStore } from "@/store";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const globalStore = useGlobalStore();
// 动态绑定左侧菜单animate动画
const menuAnimate = ref(settings.menuAnimate);
// 隐藏静态路由中isHide == false的数据
const menuList = computed(() => authStore.showMenuList.filter((item) => item.meta.isHide === false));
const columnActive = ref("");
const subMenuList = ref([]);
// 点击加载子菜单数据
const handleSubMenu = (item) => {
    columnActive.value = item.path;
    if (item.children?.length) {
        // 该一级菜单，若是有子菜单，就会给第二个分栏菜单赋值。
        // router.push(item.path); // 加这个，点击最左侧菜单会重定向第一个子菜单。
        subMenuList.value = item.children;
        return;
    }
    // 若是没有子菜单，则给子菜单变量赋值为空，并且跳转路由。例如：首页。
    subMenuList.value = [];
    router.push(item.path);
};
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));
const rowMenuColor = computed(() => {
    if (globalStore.asideInverted && globalStore.headerInverted)
        return "white";
    if (globalStore.asideInverted)
        return "black";
    if (globalStore.headerInverted)
        return "white";
});
watch(() => [menuList, route], () => {
    // 当前菜单没有数据直接 return
    if (!menuList.value.length)
        return;
    columnActive.value = route.path;
    const menuItem = menuList.value.filter((item) => {
        // 刷新浏览器，一级路由就会变成点击的二级路由，所以需要加上`/${route.path.split("/")[1]}` 进行获取，否则就没有默认选中的颜色。
        return route.path === item.path || `/${route.path.split("/")[1]}` === item.path;
    });
    // 若获取的路由没有子菜单，则赋值为空。
    if (!menuItem[0].children?.length)
        return (subMenuList.value = []);
    // 若有子菜单则赋值给子菜单变量。
    subMenuList.value = menuItem[0].children;
}, {
    deep: true,
    immediate: true
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
    __VLS_ctx.rowMenuColor;
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElContainer;
    /** @type { [typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("layout-container") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("layout-container") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.subMenuList.length !== 0) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElAside;
        /** @type { [typeof __VLS_components.ElAside, typeof __VLS_components.elAside, typeof __VLS_components.ElAside, typeof __VLS_components.elAside, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("layout-aside transition-all") }, ...{ style: (({ width: !__VLS_ctx.globalStore.isCollapse ? __VLS_ctx.globalStore.menuWidth + 'px' : __VLS_ctx.settings.columnMenuCollapseWidth })) }, }));
        const __VLS_8 = __VLS_7({ ...{ class: ("layout-aside transition-all") }, ...{ style: (({ width: !__VLS_ctx.globalStore.isCollapse ? __VLS_ctx.globalStore.menuWidth + 'px' : __VLS_ctx.settings.columnMenuCollapseWidth })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
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
        [ColumnSubMenu, ColumnSubMenu,];
        // @ts-ignore
        const __VLS_29 = __VLS_asFunctionalComponent(ColumnSubMenu, new ColumnSubMenu({ menuList: ((__VLS_ctx.subMenuList)), }));
        const __VLS_30 = __VLS_29({ menuList: ((__VLS_ctx.subMenuList)), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
        __VLS_nonNullable(__VLS_28.slots).default;
        const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25);
        __VLS_nonNullable(__VLS_22.slots).default;
        const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
        __VLS_nonNullable(__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-left") }, });
    // @ts-ignore
    [Collapse, Collapse,];
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(Collapse, new Collapse({}));
    const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-row ml-18px") }, });
    const __VLS_51 = __VLS_resolvedLocalAndGlobalComponents.ElScrollbar;
    /** @type { [typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, ] } */
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({}));
    const __VLS_53 = __VLS_52({}, ...__VLS_functionalComponentArgsRest(__VLS_52));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.handleSubMenu(item);
                } }, key: ((item.path)), ...{ class: ("left-row") }, ...{ class: (({
                    'is-active': __VLS_ctx.columnActive === item.path || `/${__VLS_ctx.columnActive.split('/')[1]}` === item.path
                })) }, });
        if (item.meta.icon) {
            const __VLS_57 = __VLS_resolvedLocalAndGlobalComponents.SkyGlobalIcon;
            /** @type { [typeof __VLS_components.SkyGlobalIcon, typeof __VLS_components.SkyGlobalIcon, ] } */
            // @ts-ignore
            const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ name: ((item.meta.icon)), size: ("18"), }));
            const __VLS_59 = __VLS_58({ name: ((item.meta.icon)), size: ("18"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("title") }, });
        (item.meta.title);
    }
    __VLS_nonNullable(__VLS_56.slots).default;
    const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
    // @ts-ignore
    [Toolbar, Toolbar,];
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(Toolbar, new Toolbar({}));
    const __VLS_64 = __VLS_63({}, ...__VLS_functionalComponentArgsRest(__VLS_63));
    __VLS_nonNullable(__VLS_45.slots).default;
    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
    // @ts-ignore
    [Main, Main,];
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(Main, new Main({}));
    const __VLS_69 = __VLS_68({}, ...__VLS_functionalComponentArgsRest(__VLS_68));
    __VLS_nonNullable(__VLS_39.slots).default;
    const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['layout-container'];
    __VLS_styleScopedClasses['layout-aside'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['layout-scrollbar'];
    __VLS_styleScopedClasses['layout-header'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['header-left'];
    __VLS_styleScopedClasses['layout-row'];
    __VLS_styleScopedClasses['ml-18px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['left-row'];
    __VLS_styleScopedClasses['is-active'];
    __VLS_styleScopedClasses['title'];
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
            Collapse: Collapse,
            Toolbar: Toolbar,
            ColumnSubMenu: ColumnSubMenu,
            Main: Main,
            settings: settings,
            globalStore: globalStore,
            menuAnimate: menuAnimate,
            menuList: menuList,
            columnActive: columnActive,
            subMenuList: subMenuList,
            handleSubMenu: handleSubMenu,
            activeMenu: activeMenu,
            rowMenuColor: rowMenuColor,
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