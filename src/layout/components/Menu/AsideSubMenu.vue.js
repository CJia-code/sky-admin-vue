/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import AsideSubMenu from "@/layout/components/Menu/AsideSubMenu.vue";
import { useRouter } from "vue-router";
import { skyMsgWarning } from "@/utils/sky";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    menuList: {
        type: Array,
    }
});
const router = useRouter();
/* 打开标签页 或 外部链接 */
const handleMenuRouter = (value) => {
    if (value.meta?.isLink) {
        if (/^https?:\/\//.test(value.meta?.isLink)) {
            return window.open(value.meta.isLink, "_blank");
        }
        else {
            skyMsgWarning("非正确链接地址，禁止跳转");
            return;
        }
    }
    router.push(value.path);
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        menuList: {
            type: Array,
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
    __VLS_styleScopedClasses['is-active'];
    __VLS_styleScopedClasses['el-sub-menu'];
    __VLS_styleScopedClasses['is-active'];
    __VLS_styleScopedClasses['el-sub-menu__title'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuList))) {
        (item.path);
        if (item.children?.length) {
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElSubMenu;
            /** @type { [typeof __VLS_components.ElSubMenu, typeof __VLS_components.elSubMenu, typeof __VLS_components.ElSubMenu, typeof __VLS_components.elSubMenu, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ index: ((item.path)), }));
            const __VLS_2 = __VLS_1({ index: ((item.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
                if (item.meta.icon) {
                    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.SkyGlobalIcon;
                    /** @type { [typeof __VLS_components.SkyGlobalIcon, typeof __VLS_components.SkyGlobalIcon, ] } */
                    // @ts-ignore
                    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ name: ((item.meta.icon)), size: ("18"), }));
                    const __VLS_8 = __VLS_7({ name: ((item.meta.icon)), size: ("18"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
                }
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                __VLS_directiveAsFunction(__VLS_directives.vText)(null, { ...__VLS_directiveBindingRestFields, value: (item.meta.title) }, null, null);
            }
            // @ts-ignore
            [AsideSubMenu,];
            // @ts-ignore
            const __VLS_12 = __VLS_asFunctionalComponent(AsideSubMenu, new AsideSubMenu({ menuList: ((item.children)), }));
            const __VLS_13 = __VLS_12({ menuList: ((item.children)), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
            const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        }
        else {
            const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
            /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
            // @ts-ignore
            const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ ...{ 'onClick': {} }, index: ((item.path)), }));
            const __VLS_19 = __VLS_18({ ...{ 'onClick': {} }, index: ((item.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
            let __VLS_23;
            const __VLS_24 = {
                onClick: (...[$event]) => {
                    if (!(!((item.children?.length))))
                        return;
                    __VLS_ctx.handleMenuRouter(item);
                }
            };
            let __VLS_20;
            let __VLS_21;
            if (item.meta.icon) {
                const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.SkyGlobalIcon;
                /** @type { [typeof __VLS_components.SkyGlobalIcon, typeof __VLS_components.SkyGlobalIcon, ] } */
                // @ts-ignore
                const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ name: ((item.meta.icon)), size: ("18"), }));
                const __VLS_27 = __VLS_26({ name: ((item.meta.icon)), size: ("18"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_22.slots);
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                __VLS_directiveAsFunction(__VLS_directives.vText)(null, { ...__VLS_directiveBindingRestFields, value: (item.meta.title) }, null, null);
            }
            const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19);
        }
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
            AsideSubMenu: AsideSubMenu,
            handleMenuRouter: handleMenuRouter,
        };
    },
    props: {
        menuList: {
            type: Array,
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        menuList: {
            type: Array,
        }
    },
});
;
//# sourceMappingURL=AsideSubMenu.vue.js.map