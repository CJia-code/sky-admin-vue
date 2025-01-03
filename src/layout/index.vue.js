/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import ThemeConfig from "./components/ThemeConfig/index.vue";
import LayoutVertical from "./LayoutVertical/index.vue";
import LayoutColumns from "./LayoutColumns/index.vue";
import LayoutClassic from "./LayoutClassic/index.vue";
import LayoutHorizontal from "./LayoutHorizontal/index.vue";
import LayoutOptimum from "./LayoutOptimum/index.vue";
import LayoutMobile from "./LayoutMobile/index.vue";
import { useScreenStore } from "@/hooks/screen";
import { useGlobalStore } from "@/store";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const globalStore = useGlobalStore();
const layout = computed(() => globalStore.layout);
const { isMobile } = useScreenStore();
const LayoutComponent = {
    vertical: LayoutVertical,
    columns: LayoutColumns,
    classic: LayoutClassic,
    horizontal: LayoutHorizontal,
    optimum: LayoutOptimum
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [ThemeConfig, ThemeConfig,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ThemeConfig, new ThemeConfig({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    if (!__VLS_ctx.isMobile) {
        const __VLS_5 = ((__VLS_ctx.LayoutComponent[__VLS_ctx.layout]));
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
        const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
    }
    if (__VLS_ctx.isMobile) {
        const __VLS_11 = ((__VLS_ctx.LayoutMobile));
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
        const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    }
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
            ThemeConfig: ThemeConfig,
            LayoutMobile: LayoutMobile,
            layout: layout,
            isMobile: isMobile,
            LayoutComponent: LayoutComponent,
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