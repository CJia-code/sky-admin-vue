/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { useRouter } from "vue-router";
import { useDebounceFn } from "@vueuse/core";
import { useAuthStore } from "@/store";
import { Search } from "@element-plus/icons-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const authStore = useAuthStore();
const menuList = computed(() => authStore.menuList.filter((item) => !item.meta.hide_menu && item.meta.parentId));
const activePath = ref("");
const mouseoverMenuItem = (menu) => {
    activePath.value = menu.path;
};
const menuInputRef = ref(null);
const isShowSearch = ref(false);
const searchMenu = ref("");
watch(isShowSearch, val => {
    if (val) {
        document.addEventListener("keydown", keyboardOperation);
    }
    else {
        document.removeEventListener("keydown", keyboardOperation);
    }
});
const handleMenuOpen = () => {
    isShowSearch.value = true;
    nextTick(() => {
        setTimeout(() => {
            menuInputRef.value?.focus();
        });
    });
};
const searchList = ref([]);
const updateSearchList = () => {
    searchList.value = searchMenu.value
        ? menuList.value.filter((item) => (item.path.toLowerCase().includes(searchMenu.value.toLowerCase()) ||
            item.meta.title.toLowerCase().includes(searchMenu.value.toLowerCase())) &&
            !item.meta?.hide_menu)
        : [];
    activePath.value = searchList.value.length ? searchList.value[0].path : "";
};
const debouncedUpdateSearchList = useDebounceFn(updateSearchList, 300);
watch(searchMenu, debouncedUpdateSearchList);
const menuListRef = ref(null);
const keyPressUpOrDown = (direction) => {
    const length = searchList.value.length;
    if (length === 0)
        return;
    const index = searchList.value.findIndex((item) => item.path === activePath.value);
    const newIndex = (index + direction + length) % length;
    activePath.value = searchList.value[newIndex].path;
    nextTick(() => {
        if (!menuListRef.value?.firstElementChild)
            return;
        const menuItemHeight = menuListRef.value.firstElementChild.clientHeight + 12 || 0;
        menuListRef.value.scrollTop = newIndex * menuItemHeight;
    });
};
const keyboardOperation = (event) => {
    if (event.key === "ArrowUp") {
        event.preventDefault();
        keyPressUpOrDown(-1);
    }
    else if (event.key === "ArrowDown") {
        event.preventDefault();
        keyPressUpOrDown(1);
    }
    else if (event.key === "Enter") {
        event.preventDefault();
        handleClickMenu();
    }
};
const handleClickMenu = () => {
    const menu = searchList.value.find((item) => item.path === activePath.value);
    if (!menu)
        return;
    if (menu.meta?.is_ext)
        window.open(menu.meta.redirect, "_blank");
    else
        router.push(menu.path);
    searchMenu.value = "";
    isShowSearch.value = false;
};
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
    __VLS_styleScopedClasses['menu-icon'];
    __VLS_styleScopedClasses['menu-title'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("search-menu") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
    /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ content: ("搜索菜单"), }));
    const __VLS_2 = __VLS_1({ content: ("搜索菜单"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, ...{ class: ("sky-icon m-x-18px") }, size: ((20)), }));
    const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, ...{ class: ("sky-icon m-x-18px") }, size: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onClick: (__VLS_ctx.handleMenuOpen)
    };
    let __VLS_9;
    let __VLS_10;
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.Search;
    /** @type { [typeof __VLS_components.Search, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ class: ("search-dialog") }, modelValue: ((__VLS_ctx.isShowSearch)), width: ((600)), showClose: ((false)), top: ("10vh"), }));
    const __VLS_22 = __VLS_21({ ...{ class: ("search-dialog") }, modelValue: ((__VLS_ctx.isShowSearch)), width: ((600)), showClose: ((false)), top: ("10vh"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ modelValue: ((__VLS_ctx.searchMenu)), ref: ("menuInputRef"), placeholder: ("菜单搜索：支持菜单名称、路径🌻"), size: ("large"), clearable: (true), prefixIcon: ((__VLS_ctx.Search)), }));
    const __VLS_28 = __VLS_27({ modelValue: ((__VLS_ctx.searchMenu)), ref: ("menuInputRef"), placeholder: ("菜单搜索：支持菜单名称、路径🌻"), size: ("large"), clearable: (true), prefixIcon: ((__VLS_ctx.Search)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    // @ts-ignore navigation for `const menuInputRef = ref()`
    __VLS_ctx.menuInputRef;
    var __VLS_32 = {};
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    if (__VLS_ctx.searchList.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-list") }, ref: ("menuListRef"), });
        // @ts-ignore navigation for `const menuListRef = ref()`
        __VLS_ctx.menuListRef;
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.searchList))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onMouseenter: (...[$event]) => {
                        if (!((__VLS_ctx.searchList.length)))
                            return;
                        __VLS_ctx.mouseoverMenuItem(item);
                    } }, ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.searchList.length)))
                            return;
                        __VLS_ctx.handleClickMenu();
                    } }, key: ((item.path)), ...{ class: ((['menu-item', { 'menu-active': item.path === __VLS_ctx.activePath }])) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-lf") }, });
            const __VLS_33 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
            // @ts-ignore
            const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ ...{ class: ("menu-icon") }, }));
            const __VLS_35 = __VLS_34({ ...{ class: ("menu-icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_34));
            const __VLS_39 = ((item.meta.icon));
            // @ts-ignore
            const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({}));
            const __VLS_41 = __VLS_40({}, ...__VLS_functionalComponentArgsRest(__VLS_40));
            __VLS_nonNullable(__VLS_38.slots).default;
            const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("menu-title") }, });
            (item.meta.title);
            const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
            // @ts-ignore
            const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{ 'onClick': {} }, size: ((20)), }));
            const __VLS_47 = __VLS_46({ ...{ 'onClick': {} }, size: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
            let __VLS_51;
            const __VLS_52 = {
                onClick: (__VLS_ctx.handleMenuOpen)
            };
            let __VLS_48;
            let __VLS_49;
            const __VLS_53 = __VLS_resolvedLocalAndGlobalComponents.Search;
            /** @type { [typeof __VLS_components.Search, ] } */
            // @ts-ignore
            const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({}));
            const __VLS_55 = __VLS_54({}, ...__VLS_functionalComponentArgsRest(__VLS_54));
            __VLS_nonNullable(__VLS_50.slots).default;
            const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
        }
    }
    else {
        const __VLS_59 = __VLS_resolvedLocalAndGlobalComponents.ElEmpty;
        /** @type { [typeof __VLS_components.ElEmpty, typeof __VLS_components.elEmpty, ] } */
        // @ts-ignore
        const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ ...{ class: ("mt20 mb20") }, imageSize: ((100)), description: ("暂无菜单"), }));
        const __VLS_61 = __VLS_60({ ...{ class: ("mt20 mb20") }, imageSize: ((100)), description: ("暂无菜单"), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
    }
    __VLS_nonNullable(__VLS_25.slots).default;
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    __VLS_styleScopedClasses['search-menu'];
    __VLS_styleScopedClasses['sky-icon'];
    __VLS_styleScopedClasses['m-x-18px'];
    __VLS_styleScopedClasses['search-dialog'];
    __VLS_styleScopedClasses['menu-list'];
    __VLS_styleScopedClasses['menu-item'];
    __VLS_styleScopedClasses['menu-active'];
    __VLS_styleScopedClasses['menu-lf'];
    __VLS_styleScopedClasses['menu-icon'];
    __VLS_styleScopedClasses['menu-title'];
    __VLS_styleScopedClasses['mt20'];
    __VLS_styleScopedClasses['mb20'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "menuInputRef": __VLS_32,
        "menuListRef": __VLS_nativeElements['div'],
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
            Search: Search,
            activePath: activePath,
            mouseoverMenuItem: mouseoverMenuItem,
            menuInputRef: menuInputRef,
            isShowSearch: isShowSearch,
            searchMenu: searchMenu,
            handleMenuOpen: handleMenuOpen,
            searchList: searchList,
            menuListRef: menuListRef,
            handleClickMenu: handleClickMenu,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=SearchMenu.vue.js.map