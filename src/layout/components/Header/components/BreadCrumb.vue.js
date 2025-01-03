/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { useRoute, useRouter } from "vue-router";
import { HOME_URL } from "@/config";
import { useAuthStore } from "@/store";
import { ArrowRight } from "@element-plus/icons-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const breadcrumbList = computed(() => {
    let breadcrumbData = authStore.getBreadcrumbList[route.matched[route.matched.length - 1].path] ?? [];
    // 不需要首页面包屑可删除以下判断
    if (breadcrumbData[0].path !== HOME_URL) {
        breadcrumbData = [{ path: HOME_URL, meta: { icon: "HomeFilled", title: "分析页" } }, ...breadcrumbData];
    }
    return breadcrumbData;
});
// 点击面包屑
const handleBreadcrumb = (item, index) => {
    if (index !== breadcrumbList.value.length - 1)
        router.push(item.redirect);
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
    __VLS_styleScopedClasses['breadcrumb-title'];
    __VLS_styleScopedClasses['el-breadcrumb__inner'];
    __VLS_styleScopedClasses['el-breadcrumb__inner'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((['breadcrumb-box', 'mask-image'])) }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElBreadcrumb;
    /** @type { [typeof __VLS_components.ElBreadcrumb, typeof __VLS_components.elBreadcrumb, typeof __VLS_components.ElBreadcrumb, typeof __VLS_components.elBreadcrumb, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ separatorIcon: ((__VLS_ctx.ArrowRight)), }));
    const __VLS_2 = __VLS_1({ separatorIcon: ((__VLS_ctx.ArrowRight)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.TransitionGroup;
    /** @type { [typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ name: ("breadcrumb"), }));
    const __VLS_8 = __VLS_7({ name: ("breadcrumb"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.breadcrumbList))) {
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElBreadcrumbItem;
        /** @type { [typeof __VLS_components.ElBreadcrumbItem, typeof __VLS_components.elBreadcrumbItem, typeof __VLS_components.ElBreadcrumbItem, typeof __VLS_components.elBreadcrumbItem, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((item.path)), }));
        const __VLS_14 = __VLS_13({ key: ((item.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.handleBreadcrumb(item, index);
                } }, ...{ class: ("el-breadcrumb__inner is-link") }, ...{ class: (({ 'item-no-icon': !item.meta.icon })) }, });
        if (item.meta.icon) {
            const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.SkyGlobalIcon;
            /** @type { [typeof __VLS_components.SkyGlobalIcon, typeof __VLS_components.SkyGlobalIcon, ] } */
            // @ts-ignore
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("breadcrumb-icon") }, name: ((item.meta.icon)), size: ("16"), }));
            const __VLS_20 = __VLS_19({ ...{ class: ("breadcrumb-icon") }, name: ((item.meta.icon)), size: ("16"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("breadcrumb-title") }, });
        (item.meta.title);
        __VLS_nonNullable(__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['breadcrumb-box'];
    __VLS_styleScopedClasses['mask-image'];
    __VLS_styleScopedClasses['el-breadcrumb__inner'];
    __VLS_styleScopedClasses['is-link'];
    __VLS_styleScopedClasses['item-no-icon'];
    __VLS_styleScopedClasses['breadcrumb-icon'];
    __VLS_styleScopedClasses['breadcrumb-title'];
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
            ArrowRight: ArrowRight,
            breadcrumbList: breadcrumbList,
            handleBreadcrumb: handleBreadcrumb,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=BreadCrumb.vue.js.map