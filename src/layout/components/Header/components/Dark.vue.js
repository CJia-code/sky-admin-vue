/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { useGlobalStore } from "@/store";
import { useTheme } from "@/utils/theme";
import { Sunny, Moon } from "@element-plus/icons-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    size: {
        type: Number,
        default: 22
    }
});
const globalStore = useGlobalStore();
const { switchDark } = useTheme();
// 暗黑主题和明亮主题切换
const handleSwitchDark = async (event) => {
    const x = event.clientX;
    const y = event.clientY;
    // 画圆
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    // @ts-ignore
    if (document.startViewTransition === undefined) {
        /** 明亮和暗黑模式核心逻辑 */
        // 定义图标切换变量(true-月亮，false-太阳)
        globalStore.setGlobalState("isDark", !globalStore.isDark);
        switchDark();
        /** 明亮和暗黑模式核心逻辑 */
    }
    else {
        // @ts-ignore
        const transition = document.startViewTransition(() => {
            /** 明亮和暗黑模式核心逻辑 */
            // 定义图标切换变量(true-月亮，false-太阳)
            globalStore.setGlobalState("isDark", !globalStore.isDark);
            switchDark();
            /** 明亮和暗黑模式核心逻辑 */
        });
        await transition.ready;
        const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
        document.documentElement.animate({
            clipPath: globalStore.isDark ? clipPath : [...clipPath].reverse()
        }, {
            duration: 300,
            easing: "ease-in",
            pseudoElement: globalStore.isDark ? "::view-transition-new(root)" : "::view-transition-old(root)"
        });
    }
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        size: {
            type: Number,
            default: 22
        }
    },
});
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
    __VLS_styleScopedClasses['dark'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    if (!__VLS_ctx.globalStore.isDark) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ content: ("明亮模式"), }));
        const __VLS_2 = __VLS_1({ content: ("明亮模式"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, ...{ class: ("sky-icon m-r-18px") }, size: ((__VLS_ctx.size)), }));
        const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, ...{ class: ("sky-icon m-r-18px") }, size: ((__VLS_ctx.size)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        let __VLS_12;
        const __VLS_13 = {
            onClick: (__VLS_ctx.handleSwitchDark)
        };
        let __VLS_9;
        let __VLS_10;
        const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.Sunny;
        /** @type { [typeof __VLS_components.Sunny, ] } */
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
        const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
        __VLS_nonNullable(__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        __VLS_nonNullable(__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (__VLS_ctx.globalStore.isDark) {
        const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ content: ("暗黑模式"), }));
        const __VLS_22 = __VLS_21({ content: ("暗黑模式"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onClick': {} }, ...{ class: ("sky-icon m-r-18px") }, size: ((__VLS_ctx.size)), }));
        const __VLS_28 = __VLS_27({ ...{ 'onClick': {} }, ...{ class: ("sky-icon m-r-18px") }, size: ((__VLS_ctx.size)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
        let __VLS_32;
        const __VLS_33 = {
            onClick: (__VLS_ctx.handleSwitchDark)
        };
        let __VLS_29;
        let __VLS_30;
        const __VLS_34 = __VLS_resolvedLocalAndGlobalComponents.Moon;
        /** @type { [typeof __VLS_components.Moon, ] } */
        // @ts-ignore
        const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({}));
        const __VLS_36 = __VLS_35({}, ...__VLS_functionalComponentArgsRest(__VLS_35));
        __VLS_nonNullable(__VLS_31.slots).default;
        const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
        __VLS_nonNullable(__VLS_25.slots).default;
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    }
    __VLS_styleScopedClasses['sky-icon'];
    __VLS_styleScopedClasses['m-r-18px'];
    __VLS_styleScopedClasses['sky-icon'];
    __VLS_styleScopedClasses['m-r-18px'];
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
            Sunny: Sunny,
            Moon: Moon,
            globalStore: globalStore,
            handleSwitchDark: handleSwitchDark,
        };
    },
    props: {
        size: {
            type: Number,
            default: 22
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        size: {
            type: Number,
            default: 22
        }
    },
});
;
//# sourceMappingURL=Dark.vue.js.map