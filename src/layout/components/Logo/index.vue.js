/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import settings from "@/settings";
import { useGlobalStore } from "@/store";
import { getAssets } from "@/utils";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const globalStore = useGlobalStore();
// 接收父组件传递的参数
const props = defineProps({
    isCollapse: {
        require: false, // true显示，false隐藏
        type: Boolean
    },
    layout: {
        require: "vertical", // 布局模式 (纵向：vertical | 分栏：columns | 经典：classic | 上左：optimum | 横向：horizontal )
        type: String
    }
});
const title = ref(settings.logoTitle);
const titleSize = ref(`${settings.loginTitleSize}px`);
const logoUrl = ref(`${getAssets(settings.logoUrl)}`);
const hidden = ref(settings.logoHidden);
const logoSize = ref(settings.logoSize);
const titleAnimate = ref(settings.logoTitleAnimate);
const logoWidth = ref();
watch(() => globalStore.layout, () => {
    if (globalStore.layout === "classic" || globalStore.layout === "horizontal") {
        logoWidth.value = "220px";
    }
    else {
        logoWidth.value = "100%";
    }
}, {
    deep: true,
    immediate: true
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        isCollapse: {
            require: false, // true显示，false隐藏
            type: Boolean
        },
        layout: {
            require: "vertical", // 布局模式 (纵向：vertical | 分栏：columns | 经典：classic | 上左：optimum | 横向：horizontal )
            type: String
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
    // CSS variable injection 
    __VLS_ctx.logoWidth;
    __VLS_ctx.logoSize;
    __VLS_ctx.logoSize;
    __VLS_ctx.titleSize;
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sky-logo") }, });
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.hidden) }, null, null);
    if (props.layout === 'vertical' || props.layout === 'mobile') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("m-l-15px m-r-12px sky-logo-img rounded-full select-none") }, src: ((__VLS_ctx.logoUrl)), alt: ("avatar"), });
    }
    if (props.layout === 'classic') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("m-l--3px m-r-12px sky-logo-img rounded-full select-none") }, src: ((__VLS_ctx.logoUrl)), alt: ("avatar"), });
    }
    if (props.layout === 'columns' || props.layout === 'optimum') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("m-l-6px m-r-12px sky-logo-img rounded-full select-none") }, src: ((__VLS_ctx.logoUrl)), alt: ("avatar"), });
    }
    if (props.layout === 'horizontal') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("m-l-17px m-r-12px sky-logo-img rounded-full select-none") }, src: ((__VLS_ctx.logoUrl)), alt: ("avatar"), });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sky-title chroma-text font-bold truncate") }, ...{ class: ((__VLS_ctx.titleAnimate)) }, });
    __VLS_directiveAsFunction(__VLS_directives.vText)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.title) }, null, null);
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!props.isCollapse) }, null, null);
    __VLS_styleScopedClasses['sky-logo'];
    __VLS_styleScopedClasses['m-l-15px'];
    __VLS_styleScopedClasses['m-r-12px'];
    __VLS_styleScopedClasses['sky-logo-img'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['select-none'];
    __VLS_styleScopedClasses['m-l--3px'];
    __VLS_styleScopedClasses['m-r-12px'];
    __VLS_styleScopedClasses['sky-logo-img'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['select-none'];
    __VLS_styleScopedClasses['m-l-6px'];
    __VLS_styleScopedClasses['m-r-12px'];
    __VLS_styleScopedClasses['sky-logo-img'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['select-none'];
    __VLS_styleScopedClasses['m-l-17px'];
    __VLS_styleScopedClasses['m-r-12px'];
    __VLS_styleScopedClasses['sky-logo-img'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['select-none'];
    __VLS_styleScopedClasses['sky-title'];
    __VLS_styleScopedClasses['chroma-text'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['truncate'];
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
            title: title,
            titleSize: titleSize,
            logoUrl: logoUrl,
            hidden: hidden,
            logoSize: logoSize,
            titleAnimate: titleAnimate,
            logoWidth: logoWidth,
        };
    },
    props: {
        isCollapse: {
            require: false, // true显示，false隐藏
            type: Boolean
        },
        layout: {
            require: "vertical", // 布局模式 (纵向：vertical | 分栏：columns | 经典：classic | 上左：optimum | 横向：horizontal )
            type: String
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        isCollapse: {
            require: false, // true显示，false隐藏
            type: Boolean
        },
        layout: {
            require: "vertical", // 布局模式 (纵向：vertical | 分栏：columns | 经典：classic | 上左：optimum | 横向：horizontal )
            type: String
        }
    },
});
;
//# sourceMappingURL=index.vue.js.map