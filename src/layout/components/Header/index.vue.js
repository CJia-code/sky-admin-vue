/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import Collapse from "./components/Collapse.vue";
import BreadCrumb from "./components/BreadCrumb.vue";
import Toolbar from "./components/Toolbar.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-left") }, });
    // @ts-ignore
    [Collapse, Collapse,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Collapse, new Collapse({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [BreadCrumb, BreadCrumb,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(BreadCrumb, new BreadCrumb({ ...{ class: ("<md:visible") }, }));
    const __VLS_6 = __VLS_5({ ...{ class: ("<md:visible") }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    [Toolbar, Toolbar,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(Toolbar, new Toolbar({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['header-left'];
    __VLS_styleScopedClasses['<md:visible'];
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
            Collapse: Collapse,
            BreadCrumb: BreadCrumb,
            Toolbar: Toolbar,
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