/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { useGlobalStore } from "@/store";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const globalStore = useGlobalStore();
// 切换图标
const changeCollapseIcon = () => {
    // 定义图标切换变量(true-折叠，false-展开)
    globalStore.isCollapse = globalStore.setCollapse(globalStore.isCollapse);
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...{ class: ("collapse-icon sky-icon") }, size: ((20)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...{ class: ("collapse-icon sky-icon") }, size: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.changeCollapseIcon)
    };
    let __VLS_3;
    let __VLS_4;
    if (!__VLS_ctx.globalStore.isCollapse) {
        const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.SvgIcon, ] } */
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ name: ("sky-menu-left"), width: ("20px"), height: ("20px"), }));
        const __VLS_10 = __VLS_9({ name: ("sky-menu-left"), width: ("20px"), height: ("20px"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    }
    if (__VLS_ctx.globalStore.isCollapse) {
        const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.SvgIcon, ] } */
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ name: ("sky-menu-right"), width: ("20px"), height: ("20px"), }));
        const __VLS_16 = __VLS_15({ name: ("sky-menu-right"), width: ("20px"), height: ("20px"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['collapse-icon'];
    __VLS_styleScopedClasses['sky-icon'];
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
            globalStore: globalStore,
            changeCollapseIcon: changeCollapseIcon,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=Collapse.vue.js.map