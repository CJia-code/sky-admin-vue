/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { useI18n } from "vue-i18n";
import { useGlobalStore } from "@/store";
import { SwitchFilled } from "@element-plus/icons-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const i18n = useI18n();
const globalStore = useGlobalStore();
const language = computed(() => globalStore.language);
const languageList = [
    { label: "简体中文", value: "zh" },
    { label: "English", value: "en" }
];
const changeLanguage = (lang) => {
    i18n.locale.value = lang;
    globalStore.setGlobalState("language", lang);
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
    /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ placement: ("left"), content: ("语言翻译"), }));
    const __VLS_2 = __VLS_1({ placement: ("left"), content: ("语言翻译"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElDropdown;
    /** @type { [typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onCommand': {} }, }));
    const __VLS_8 = __VLS_7({ ...{ 'onCommand': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onCommand: (__VLS_ctx.changeLanguage)
    };
    let __VLS_9;
    let __VLS_10;
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ class: ("sky-icon m-r-18px") }, size: ((20)), }));
    const __VLS_16 = __VLS_15({ ...{ class: ("sky-icon m-r-18px") }, size: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.SwitchFilled;
    /** @type { [typeof __VLS_components.SwitchFilled, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
    const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_nonNullable(__VLS_19.slots).default;
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { dropdown: __VLS_thisSlot } = __VLS_nonNullable(__VLS_11.slots);
        const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownMenu;
        /** @type { [typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ] } */
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
        const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.languageList))) {
            const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
            // @ts-ignore
            const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ key: ((item.value)), command: ((item.value)), disabled: ((__VLS_ctx.language === item.value)), }));
            const __VLS_34 = __VLS_33({ key: ((item.value)), command: ((item.value)), disabled: ((__VLS_ctx.language === item.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
            (item.label);
            __VLS_nonNullable(__VLS_37.slots).default;
            const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
        }
        __VLS_nonNullable(__VLS_31.slots).default;
        const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    }
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
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
            SwitchFilled: SwitchFilled,
            language: language,
            languageList: languageList,
            changeLanguage: changeLanguage,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=Language.vue.js.map