/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import mittBus from "@/utils/mittBus";
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/store";
// 明亮主题和暗黑主题配色工具类
import { useTheme } from "@/utils/theme";
import { CircleCheckFilled, Notification, QuestionFilled } from "@element-plus/icons-vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const globalStore = useGlobalStore();
const { changeThemeColor, changeGreyOrWeak, setAsideTheme, setHeaderTheme } = useTheme();
const { layout, isCollapse, transition, uniqueOpened, menuWidth, isGrey, isWeak, asideInverted, headerInverted } = storeToRefs(globalStore);
/** 主题设置弹出框 */
const skyDialogRef = ref();
// 打开主题配置
const handleThemeConfig = () => {
    skyDialogRef.value.skyOpen();
};
// 布局切换
const setLayout = (value) => {
    globalStore.setGlobalState("layout", value);
    setAsideTheme();
};
// 打开主题配置对话框，on 接收事件
mittBus.on("handleThemeConfig", () => {
    handleThemeConfig();
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
    __VLS_styleScopedClasses['themeSelected'];
    __VLS_styleScopedClasses['themeSelected'];
    __VLS_styleScopedClasses['layout-dark'];
    __VLS_styleScopedClasses['layout-light'];
    __VLS_styleScopedClasses['layout-content'];
    __VLS_styleScopedClasses['layout-dark'];
    __VLS_styleScopedClasses['layout-light'];
    __VLS_styleScopedClasses['layout-content'];
    __VLS_styleScopedClasses['layout-dark'];
    __VLS_styleScopedClasses['layout-container'];
    __VLS_styleScopedClasses['layout-light'];
    __VLS_styleScopedClasses['layout-content'];
    __VLS_styleScopedClasses['layout-dark'];
    __VLS_styleScopedClasses['layout-container'];
    __VLS_styleScopedClasses['layout-light'];
    __VLS_styleScopedClasses['layout-content'];
    __VLS_styleScopedClasses['layout-dark'];
    __VLS_styleScopedClasses['layout-content'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.SkyDialog;
    /** @type { [typeof __VLS_components.SkyDialog, typeof __VLS_components.SkyDialog, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ref: ("skyDialogRef"), title: ("主题配置"), footerHidden: ((true)), closeOnClickModal: ((true)), top: ("6vh"), height: ((660)), }));
    const __VLS_2 = __VLS_1({ ref: ("skyDialogRef"), title: ("主题配置"), footerHidden: ((true)), closeOnClickModal: ((true)), top: ("6vh"), height: ((660)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore navigation for `const skyDialogRef = ref()`
    __VLS_ctx.skyDialogRef;
    var __VLS_6 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { content: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
        const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
        const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ xs: (({ span: 24 })), sm: (({ span: 12 })), }));
        const __VLS_15 = __VLS_14({ xs: (({ span: 24 })), sm: (({ span: 12 })), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.changeThemeColor('#2992FF');
                } }, ...{ class: ("shadow-sm border-#9AC9F9 dark:border-#9AC9F9 sm:hover:border-#2992FF transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black") }, ...{ class: (({ themeSelected: __VLS_ctx.globalStore.themeColor === '#2992FF' })) }, ...{ style: (({ 'border-color': __VLS_ctx.globalStore.themeColor === '#2992FF' ? '#2992FF' : '' })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-l-4px w-8px h-50px bg-#2992FF rounded-md") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-l-10px m-t-9px w-100% h-50px text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-b-4px c-#2992FF") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("c-#2992FF") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_nonNullable(__VLS_18.slots).default;
        const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15);
        const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ xs: (({ span: 24 })), sm: (({ span: 12 })), ...{ class: ("p-l-5px") }, }));
        const __VLS_21 = __VLS_20({ xs: (({ span: 24 })), sm: (({ span: 12 })), ...{ class: ("p-l-5px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.changeThemeColor('#6169FF');
                } }, ...{ class: ("shadow-sm border-#A6ABF9 dark:border-#A6ABF9 sm:hover:border-#6169FF transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black") }, ...{ class: (({ themeSelected: __VLS_ctx.globalStore.themeColor === '#6169FF' })) }, ...{ style: (({ 'border-color': __VLS_ctx.globalStore.themeColor === '#6169FF' ? '#6169FF' : '' })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-l-4px w-8px h-50px bg-#6169FF rounded-md") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-l-10px m-t-9px w-100% h-50px text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-b-4px c-#6169FF") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("c-#6169FF") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_nonNullable(__VLS_24.slots).default;
        const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21);
        __VLS_nonNullable(__VLS_12.slots).default;
        const __VLS_12 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
        const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{ class: ("p-t-10px") }, }));
        const __VLS_27 = __VLS_26({ ...{ class: ("p-t-10px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ xs: (({ span: 24 })), sm: (({ span: 12 })), }));
        const __VLS_33 = __VLS_32({ xs: (({ span: 24 })), sm: (({ span: 12 })), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.changeThemeColor('#fa7e23');
                } }, ...{ class: ("shadow-sm border-#edc3ae dark:border-#edc3ae sm:hover:border-#fa7e23 transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black") }, ...{ class: (({ themeSelected: __VLS_ctx.globalStore.themeColor === '#fa7e23' })) }, ...{ style: (({ 'border-color': __VLS_ctx.globalStore.themeColor === '#fa7e23' ? '#fa7e23' : '' })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-l-4px w-8px h-50px bg-#fa7e23 rounded-md") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-l-10px m-t-9px w-100% h-50px text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-b-4px c-#fa7e23") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("c-#fa7e23") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_nonNullable(__VLS_36.slots).default;
        const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
        const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ xs: (({ span: 24 })), sm: (({ span: 12 })), ...{ class: ("p-l-5px") }, }));
        const __VLS_39 = __VLS_38({ xs: (({ span: 24 })), sm: (({ span: 12 })), ...{ class: ("p-l-5px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.changeThemeColor('#F9A407');
                } }, ...{ class: ("shadow-sm border-#f8df72 dark:border-#f8df72 sm:hover:border-#F9A407 transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black") }, ...{ class: (({ themeSelected: __VLS_ctx.globalStore.themeColor === '#F9A407' })) }, ...{ style: (({ 'border-color': __VLS_ctx.globalStore.themeColor === '#F9A407' ? '#F9A407' : '' })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-l-4px w-8px h-50px bg-#F9A407 rounded-md") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-l-10px m-t-9px w-100% h-50px text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-b-4px c-#F9A407") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("c-#F9A407") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_nonNullable(__VLS_42.slots).default;
        const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
        __VLS_nonNullable(__VLS_30.slots).default;
        const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
        const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ ...{ class: ("p-t-10px") }, }));
        const __VLS_45 = __VLS_44({ ...{ class: ("p-t-10px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_44));
        const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ xs: (({ span: 24 })), sm: (({ span: 12 })), }));
        const __VLS_51 = __VLS_50({ xs: (({ span: 24 })), sm: (({ span: 12 })), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.changeThemeColor('#20a162');
                } }, ...{ class: ("shadow-sm border-#83cbac dark:border-#83cbac sm:hover:border-#20a162 transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black") }, ...{ class: (({ themeSelected: __VLS_ctx.globalStore.themeColor === '#20a162' })) }, ...{ style: (({ 'border-color': __VLS_ctx.globalStore.themeColor === '#20a162' ? '#20a162' : '' })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-l-4px w-8px h-50px bg-#20a162 rounded-md") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-l-10px m-t-9px w-100% h-50px text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-b-4px c-#20a162") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("c-#20a162") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_nonNullable(__VLS_54.slots).default;
        const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51);
        const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ xs: (({ span: 24 })), sm: (({ span: 12 })), ...{ class: ("p-l-5px") }, }));
        const __VLS_57 = __VLS_56({ xs: (({ span: 24 })), sm: (({ span: 12 })), ...{ class: ("p-l-5px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.changeThemeColor('#ee4866');
                } }, ...{ class: ("shadow-sm border-#FC98AA dark:border-#FC98AA sm:hover:border-#ee4866 transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black") }, ...{ class: (({ themeSelected: __VLS_ctx.globalStore.themeColor === '#ee4866' })) }, ...{ style: (({ 'border-color': __VLS_ctx.globalStore.themeColor === '#ee4866' ? '#ee4866' : '' })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-l-4px w-8px h-50px bg-#ee4866 rounded-md") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-l-10px m-t-9px w-100% h-50px text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-b-4px c-#ee4866") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("c-#ee4866") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_nonNullable(__VLS_60.slots).default;
        const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
        __VLS_nonNullable(__VLS_48.slots).default;
        const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45);
        const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{ class: ("p-t-10px") }, }));
        const __VLS_63 = __VLS_62({ ...{ class: ("p-t-10px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_62));
        const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ xs: (({ span: 24 })), sm: (({ span: 12 })), }));
        const __VLS_69 = __VLS_68({ xs: (({ span: 24 })), sm: (({ span: 12 })), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.changeThemeColor('#FF0000');
                } }, ...{ class: ("shadow-sm border-#FB8F8F dark:border-#FB8F8F sm:hover:border-#FF0000 transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black") }, ...{ class: (({ themeSelected: __VLS_ctx.globalStore.themeColor === '#FF0000' })) }, ...{ style: (({ 'border-color': __VLS_ctx.globalStore.themeColor === '#FF0000' ? '#FF0000' : '' })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-l-4px w-8px h-50px bg-#FF0000 rounded-md") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-l-10px m-t-9px w-100% h-50px text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-b-4px c-#FF0000") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("c-#FF0000") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_nonNullable(__VLS_72.slots).default;
        const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69);
        const __VLS_73 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ xs: (({ span: 24 })), sm: (({ span: 12 })), ...{ class: ("p-l-5px") }, }));
        const __VLS_75 = __VLS_74({ xs: (({ span: 24 })), sm: (({ span: 12 })), ...{ class: ("p-l-5px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_74));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.changeThemeColor('#1E71EE');
                } }, ...{ class: ("shadow-sm border-#90BBFB dark:border-#90BBFB sm:hover:border-#1E71EE transition-all duration-300 border-dashed border-2 rounded-lg cursor-pointer text-sm w-300px h-62px flex flex-items-center dark:bg-black") }, ...{ class: (({ themeSelected: __VLS_ctx.globalStore.themeColor === '#1E71EE' })) }, ...{ style: (({ 'border-color': __VLS_ctx.globalStore.themeColor === '#1E71EE' ? '#1E71EE' : '' })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-l-4px w-8px h-50px bg-#1E71EE rounded-md") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-l-10px m-t-9px w-100% h-50px text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-b-4px c-#1E71EE") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("c-#1E71EE") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_nonNullable(__VLS_78.slots).default;
        const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_73, __VLS_75);
        __VLS_nonNullable(__VLS_66.slots).default;
        const __VLS_66 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
        const __VLS_79 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({}));
        const __VLS_81 = __VLS_80({}, ...__VLS_functionalComponentArgsRest(__VLS_80));
        const __VLS_85 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ xs: (({ span: 24 })), sm: (({ span: 24 })), }));
        const __VLS_87 = __VLS_86({ xs: (({ span: 24 })), sm: (({ span: 24 })), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
        const __VLS_91 = __VLS_resolvedLocalAndGlobalComponents.ElDivider;
        /** @type { [typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ] } */
        // @ts-ignore
        const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ ...{ class: ("divider") }, contentPosition: ("center"), }));
        const __VLS_93 = __VLS_92({ ...{ class: ("divider") }, contentPosition: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
        const __VLS_97 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({}));
        const __VLS_99 = __VLS_98({}, ...__VLS_functionalComponentArgsRest(__VLS_98));
        const __VLS_103 = __VLS_resolvedLocalAndGlobalComponents.Notification;
        /** @type { [typeof __VLS_components.Notification, ] } */
        // @ts-ignore
        const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({}));
        const __VLS_105 = __VLS_104({}, ...__VLS_functionalComponentArgsRest(__VLS_104));
        __VLS_nonNullable(__VLS_102.slots).default;
        const __VLS_102 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99);
        __VLS_nonNullable(__VLS_96.slots).default;
        const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93);
        __VLS_nonNullable(__VLS_90.slots).default;
        const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
        __VLS_nonNullable(__VLS_84.slots).default;
        const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_79, __VLS_81);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-box") }, });
        const __VLS_109 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({ content: ("纵向"), placement: ("top"), showAfter: ((200)), }));
        const __VLS_111 = __VLS_110({ content: ("纵向"), placement: ("top"), showAfter: ((200)), }, ...__VLS_functionalComponentArgsRest(__VLS_110));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.setLayout('vertical');
                } }, ...{ class: ((['layout-item layout-vertical', { 'is-active': __VLS_ctx.layout === 'vertical' }])) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-dark") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-light") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-content") }, });
        if (__VLS_ctx.layout === 'vertical') {
            const __VLS_115 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
            // @ts-ignore
            const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({}));
            const __VLS_117 = __VLS_116({}, ...__VLS_functionalComponentArgsRest(__VLS_116));
            const __VLS_121 = __VLS_resolvedLocalAndGlobalComponents.CircleCheckFilled;
            /** @type { [typeof __VLS_components.CircleCheckFilled, ] } */
            // @ts-ignore
            const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({}));
            const __VLS_123 = __VLS_122({}, ...__VLS_functionalComponentArgsRest(__VLS_122));
            __VLS_nonNullable(__VLS_120.slots).default;
            const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117);
        }
        __VLS_nonNullable(__VLS_114.slots).default;
        const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_109, __VLS_111);
        const __VLS_127 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({ content: ("分栏"), placement: ("top"), showAfter: ((200)), }));
        const __VLS_129 = __VLS_128({ content: ("分栏"), placement: ("top"), showAfter: ((200)), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.setLayout('columns');
                } }, ...{ class: ((['layout-item layout-columns', { 'is-active': __VLS_ctx.layout === 'columns' }])) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-dark") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-light") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-content") }, });
        if (__VLS_ctx.layout === 'columns') {
            const __VLS_133 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
            // @ts-ignore
            const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({}));
            const __VLS_135 = __VLS_134({}, ...__VLS_functionalComponentArgsRest(__VLS_134));
            const __VLS_139 = __VLS_resolvedLocalAndGlobalComponents.CircleCheckFilled;
            /** @type { [typeof __VLS_components.CircleCheckFilled, ] } */
            // @ts-ignore
            const __VLS_140 = __VLS_asFunctionalComponent(__VLS_139, new __VLS_139({}));
            const __VLS_141 = __VLS_140({}, ...__VLS_functionalComponentArgsRest(__VLS_140));
            __VLS_nonNullable(__VLS_138.slots).default;
            const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135);
        }
        __VLS_nonNullable(__VLS_132.slots).default;
        const __VLS_132 = __VLS_pickFunctionalComponentCtx(__VLS_127, __VLS_129);
        const __VLS_145 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({ content: ("经典"), placement: ("top"), showAfter: ((200)), }));
        const __VLS_147 = __VLS_146({ content: ("经典"), placement: ("top"), showAfter: ((200)), }, ...__VLS_functionalComponentArgsRest(__VLS_146));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.setLayout('classic');
                } }, ...{ class: ((['layout-item layout-classic', { 'is-active': __VLS_ctx.layout === 'classic' }])) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-dark") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-light") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-content") }, });
        if (__VLS_ctx.layout === 'classic') {
            const __VLS_151 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
            // @ts-ignore
            const __VLS_152 = __VLS_asFunctionalComponent(__VLS_151, new __VLS_151({}));
            const __VLS_153 = __VLS_152({}, ...__VLS_functionalComponentArgsRest(__VLS_152));
            const __VLS_157 = __VLS_resolvedLocalAndGlobalComponents.CircleCheckFilled;
            /** @type { [typeof __VLS_components.CircleCheckFilled, ] } */
            // @ts-ignore
            const __VLS_158 = __VLS_asFunctionalComponent(__VLS_157, new __VLS_157({}));
            const __VLS_159 = __VLS_158({}, ...__VLS_functionalComponentArgsRest(__VLS_158));
            __VLS_nonNullable(__VLS_156.slots).default;
            const __VLS_156 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153);
        }
        __VLS_nonNullable(__VLS_150.slots).default;
        const __VLS_150 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147);
        const __VLS_163 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_164 = __VLS_asFunctionalComponent(__VLS_163, new __VLS_163({ content: ("上左"), placement: ("top"), showAfter: ((200)), }));
        const __VLS_165 = __VLS_164({ content: ("上左"), placement: ("top"), showAfter: ((200)), }, ...__VLS_functionalComponentArgsRest(__VLS_164));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.setLayout('optimum');
                } }, ...{ class: ((['layout-item layout-optimum', { 'is-active': __VLS_ctx.layout === 'optimum' }])) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-dark") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-light") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-content") }, });
        if (__VLS_ctx.layout === 'optimum') {
            const __VLS_169 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
            // @ts-ignore
            const __VLS_170 = __VLS_asFunctionalComponent(__VLS_169, new __VLS_169({}));
            const __VLS_171 = __VLS_170({}, ...__VLS_functionalComponentArgsRest(__VLS_170));
            const __VLS_175 = __VLS_resolvedLocalAndGlobalComponents.CircleCheckFilled;
            /** @type { [typeof __VLS_components.CircleCheckFilled, ] } */
            // @ts-ignore
            const __VLS_176 = __VLS_asFunctionalComponent(__VLS_175, new __VLS_175({}));
            const __VLS_177 = __VLS_176({}, ...__VLS_functionalComponentArgsRest(__VLS_176));
            __VLS_nonNullable(__VLS_174.slots).default;
            const __VLS_174 = __VLS_pickFunctionalComponentCtx(__VLS_169, __VLS_171);
        }
        __VLS_nonNullable(__VLS_168.slots).default;
        const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_163, __VLS_165);
        const __VLS_181 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_182 = __VLS_asFunctionalComponent(__VLS_181, new __VLS_181({ content: ("横向"), placement: ("top"), showAfter: ((200)), }));
        const __VLS_183 = __VLS_182({ content: ("横向"), placement: ("top"), showAfter: ((200)), }, ...__VLS_functionalComponentArgsRest(__VLS_182));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.setLayout('horizontal');
                } }, ...{ class: ((['layout-item layout-horizontal', { 'is-active': __VLS_ctx.layout === 'horizontal' }])) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-dark") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("layout-content") }, });
        if (__VLS_ctx.layout === 'horizontal') {
            const __VLS_187 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
            // @ts-ignore
            const __VLS_188 = __VLS_asFunctionalComponent(__VLS_187, new __VLS_187({}));
            const __VLS_189 = __VLS_188({}, ...__VLS_functionalComponentArgsRest(__VLS_188));
            const __VLS_193 = __VLS_resolvedLocalAndGlobalComponents.CircleCheckFilled;
            /** @type { [typeof __VLS_components.CircleCheckFilled, ] } */
            // @ts-ignore
            const __VLS_194 = __VLS_asFunctionalComponent(__VLS_193, new __VLS_193({}));
            const __VLS_195 = __VLS_194({}, ...__VLS_functionalComponentArgsRest(__VLS_194));
            __VLS_nonNullable(__VLS_192.slots).default;
            const __VLS_192 = __VLS_pickFunctionalComponentCtx(__VLS_187, __VLS_189);
        }
        __VLS_nonNullable(__VLS_186.slots).default;
        const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_181, __VLS_183);
        const __VLS_199 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
        /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
        // @ts-ignore
        const __VLS_200 = __VLS_asFunctionalComponent(__VLS_199, new __VLS_199({ labelWidth: ("auto"), labelPosition: ("left"), ...{ class: ("p-t-8px p-l-3px") }, }));
        const __VLS_201 = __VLS_200({ labelWidth: ("auto"), labelPosition: ("left"), ...{ class: ("p-t-8px p-l-3px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_200));
        const __VLS_205 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        const __VLS_206 = __VLS_asFunctionalComponent(__VLS_205, new __VLS_205({}));
        const __VLS_207 = __VLS_206({}, ...__VLS_functionalComponentArgsRest(__VLS_206));
        const __VLS_211 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_212 = __VLS_asFunctionalComponent(__VLS_211, new __VLS_211({ xs: (({ span: 24 })), sm: (({ span: 13 })), }));
        const __VLS_213 = __VLS_212({ xs: (({ span: 24 })), sm: (({ span: 13 })), }, ...__VLS_functionalComponentArgsRest(__VLS_212));
        const __VLS_217 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_218 = __VLS_asFunctionalComponent(__VLS_217, new __VLS_217({}));
        const __VLS_219 = __VLS_218({}, ...__VLS_functionalComponentArgsRest(__VLS_218));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("m-r-2px") }, });
        const __VLS_223 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_224 = __VLS_asFunctionalComponent(__VLS_223, new __VLS_223({ placement: ("bottom"), content: ("路由加载动画模式"), }));
        const __VLS_225 = __VLS_224({ placement: ("bottom"), content: ("路由加载动画模式"), }, ...__VLS_functionalComponentArgsRest(__VLS_224));
        const __VLS_229 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_230 = __VLS_asFunctionalComponent(__VLS_229, new __VLS_229({ ...{ class: ("m-r-10px") }, }));
        const __VLS_231 = __VLS_230({ ...{ class: ("m-r-10px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_230));
        const __VLS_235 = __VLS_resolvedLocalAndGlobalComponents.QuestionFilled;
        /** @type { [typeof __VLS_components.QuestionFilled, ] } */
        // @ts-ignore
        const __VLS_236 = __VLS_asFunctionalComponent(__VLS_235, new __VLS_235({}));
        const __VLS_237 = __VLS_236({}, ...__VLS_functionalComponentArgsRest(__VLS_236));
        __VLS_nonNullable(__VLS_234.slots).default;
        const __VLS_234 = __VLS_pickFunctionalComponentCtx(__VLS_229, __VLS_231);
        __VLS_nonNullable(__VLS_228.slots).default;
        const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_223, __VLS_225);
        const __VLS_241 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
        /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
        // @ts-ignore
        const __VLS_242 = __VLS_asFunctionalComponent(__VLS_241, new __VLS_241({ placeholder: ("请选择路由动画"), modelValue: ((__VLS_ctx.transition)), clearable: (true), ...{ style: ({}) }, }));
        const __VLS_243 = __VLS_242({ placeholder: ("请选择路由动画"), modelValue: ((__VLS_ctx.transition)), clearable: (true), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_242));
        const __VLS_247 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_248 = __VLS_asFunctionalComponent(__VLS_247, new __VLS_247({ label: ("默认"), value: ("fade-default"), }));
        const __VLS_249 = __VLS_248({ label: ("默认"), value: ("fade-default"), }, ...__VLS_functionalComponentArgsRest(__VLS_248));
        const __VLS_253 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_254 = __VLS_asFunctionalComponent(__VLS_253, new __VLS_253({ label: ("淡入淡出"), value: ("fade"), }));
        const __VLS_255 = __VLS_254({ label: ("淡入淡出"), value: ("fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_254));
        const __VLS_259 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_260 = __VLS_asFunctionalComponent(__VLS_259, new __VLS_259({ label: ("滑动"), value: ("fade-slide"), }));
        const __VLS_261 = __VLS_260({ label: ("滑动"), value: ("fade-slide"), }, ...__VLS_functionalComponentArgsRest(__VLS_260));
        const __VLS_265 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_266 = __VLS_asFunctionalComponent(__VLS_265, new __VLS_265({ label: ("渐变"), value: ("zoom-fade"), }));
        const __VLS_267 = __VLS_266({ label: ("渐变"), value: ("zoom-fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_266));
        const __VLS_271 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_272 = __VLS_asFunctionalComponent(__VLS_271, new __VLS_271({ label: ("底部滑出"), value: ("fade-bottom"), }));
        const __VLS_273 = __VLS_272({ label: ("底部滑出"), value: ("fade-bottom"), }, ...__VLS_functionalComponentArgsRest(__VLS_272));
        const __VLS_277 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_278 = __VLS_asFunctionalComponent(__VLS_277, new __VLS_277({ label: ("缩放消退"), value: ("fade-scale"), }));
        const __VLS_279 = __VLS_278({ label: ("缩放消退"), value: ("fade-scale"), }, ...__VLS_functionalComponentArgsRest(__VLS_278));
        __VLS_nonNullable(__VLS_246.slots).default;
        const __VLS_246 = __VLS_pickFunctionalComponentCtx(__VLS_241, __VLS_243);
        __VLS_nonNullable(__VLS_222.slots).default;
        const __VLS_222 = __VLS_pickFunctionalComponentCtx(__VLS_217, __VLS_219);
        __VLS_nonNullable(__VLS_216.slots).default;
        const __VLS_216 = __VLS_pickFunctionalComponentCtx(__VLS_211, __VLS_213);
        const __VLS_283 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_284 = __VLS_asFunctionalComponent(__VLS_283, new __VLS_283({ xs: (({ span: 24 })), sm: (({ span: 11 })), }));
        const __VLS_285 = __VLS_284({ xs: (({ span: 24 })), sm: (({ span: 11 })), }, ...__VLS_functionalComponentArgsRest(__VLS_284));
        const __VLS_289 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_290 = __VLS_asFunctionalComponent(__VLS_289, new __VLS_289({ label: ("折叠菜单"), }));
        const __VLS_291 = __VLS_290({ label: ("折叠菜单"), }, ...__VLS_functionalComponentArgsRest(__VLS_290));
        const __VLS_295 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_296 = __VLS_asFunctionalComponent(__VLS_295, new __VLS_295({}));
        const __VLS_297 = __VLS_296({}, ...__VLS_functionalComponentArgsRest(__VLS_296));
        const __VLS_301 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
        /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
        // @ts-ignore
        const __VLS_302 = __VLS_asFunctionalComponent(__VLS_301, new __VLS_301({ modelValue: ((__VLS_ctx.isCollapse)), activeText: ("展开"), inactiveText: ("折叠"), activeValue: ((true)), inactiveValue: ((false)), inlinePrompt: ((true)), }));
        const __VLS_303 = __VLS_302({ modelValue: ((__VLS_ctx.isCollapse)), activeText: ("展开"), inactiveText: ("折叠"), activeValue: ((true)), inactiveValue: ((false)), inlinePrompt: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_302));
        __VLS_nonNullable(__VLS_300.slots).default;
        const __VLS_300 = __VLS_pickFunctionalComponentCtx(__VLS_295, __VLS_297);
        __VLS_nonNullable(__VLS_294.slots).default;
        const __VLS_294 = __VLS_pickFunctionalComponentCtx(__VLS_289, __VLS_291);
        __VLS_nonNullable(__VLS_288.slots).default;
        const __VLS_288 = __VLS_pickFunctionalComponentCtx(__VLS_283, __VLS_285);
        __VLS_nonNullable(__VLS_210.slots).default;
        const __VLS_210 = __VLS_pickFunctionalComponentCtx(__VLS_205, __VLS_207);
        const __VLS_307 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        const __VLS_308 = __VLS_asFunctionalComponent(__VLS_307, new __VLS_307({}));
        const __VLS_309 = __VLS_308({}, ...__VLS_functionalComponentArgsRest(__VLS_308));
        const __VLS_313 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_314 = __VLS_asFunctionalComponent(__VLS_313, new __VLS_313({ xs: (({ span: 24 })), sm: (({ span: 13 })), }));
        const __VLS_315 = __VLS_314({ xs: (({ span: 24 })), sm: (({ span: 13 })), }, ...__VLS_functionalComponentArgsRest(__VLS_314));
        const __VLS_319 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_320 = __VLS_asFunctionalComponent(__VLS_319, new __VLS_319({}));
        const __VLS_321 = __VLS_320({}, ...__VLS_functionalComponentArgsRest(__VLS_320));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("m-r-2px") }, });
        const __VLS_325 = __VLS_resolvedLocalAndGlobalComponents.ElTooltip;
        /** @type { [typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ] } */
        // @ts-ignore
        const __VLS_326 = __VLS_asFunctionalComponent(__VLS_325, new __VLS_325({ placement: ("bottom"), content: ("左侧菜单是否展开单个子菜单[启用-单个/关闭-多个]"), }));
        const __VLS_327 = __VLS_326({ placement: ("bottom"), content: ("左侧菜单是否展开单个子菜单[启用-单个/关闭-多个]"), }, ...__VLS_functionalComponentArgsRest(__VLS_326));
        const __VLS_331 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_332 = __VLS_asFunctionalComponent(__VLS_331, new __VLS_331({ ...{ class: ("m-r-10px") }, }));
        const __VLS_333 = __VLS_332({ ...{ class: ("m-r-10px") }, }, ...__VLS_functionalComponentArgsRest(__VLS_332));
        const __VLS_337 = __VLS_resolvedLocalAndGlobalComponents.QuestionFilled;
        /** @type { [typeof __VLS_components.QuestionFilled, ] } */
        // @ts-ignore
        const __VLS_338 = __VLS_asFunctionalComponent(__VLS_337, new __VLS_337({}));
        const __VLS_339 = __VLS_338({}, ...__VLS_functionalComponentArgsRest(__VLS_338));
        __VLS_nonNullable(__VLS_336.slots).default;
        const __VLS_336 = __VLS_pickFunctionalComponentCtx(__VLS_331, __VLS_333);
        __VLS_nonNullable(__VLS_330.slots).default;
        const __VLS_330 = __VLS_pickFunctionalComponentCtx(__VLS_325, __VLS_327);
        const __VLS_343 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
        /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
        // @ts-ignore
        const __VLS_344 = __VLS_asFunctionalComponent(__VLS_343, new __VLS_343({ activeText: ("启用"), inactiveText: ("停用"), activeValue: ((true)), inactiveValue: ((false)), inlinePrompt: ((true)), modelValue: ((__VLS_ctx.uniqueOpened)), }));
        const __VLS_345 = __VLS_344({ activeText: ("启用"), inactiveText: ("停用"), activeValue: ((true)), inactiveValue: ((false)), inlinePrompt: ((true)), modelValue: ((__VLS_ctx.uniqueOpened)), }, ...__VLS_functionalComponentArgsRest(__VLS_344));
        __VLS_nonNullable(__VLS_324.slots).default;
        const __VLS_324 = __VLS_pickFunctionalComponentCtx(__VLS_319, __VLS_321);
        __VLS_nonNullable(__VLS_318.slots).default;
        const __VLS_318 = __VLS_pickFunctionalComponentCtx(__VLS_313, __VLS_315);
        const __VLS_349 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_350 = __VLS_asFunctionalComponent(__VLS_349, new __VLS_349({ xs: (({ span: 24 })), sm: (({ span: 11 })), }));
        const __VLS_351 = __VLS_350({ xs: (({ span: 24 })), sm: (({ span: 11 })), }, ...__VLS_functionalComponentArgsRest(__VLS_350));
        const __VLS_355 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_356 = __VLS_asFunctionalComponent(__VLS_355, new __VLS_355({ label: ("菜单宽度"), }));
        const __VLS_357 = __VLS_356({ label: ("菜单宽度"), }, ...__VLS_functionalComponentArgsRest(__VLS_356));
        const __VLS_361 = __VLS_resolvedLocalAndGlobalComponents.ElInputNumber;
        /** @type { [typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ] } */
        // @ts-ignore
        const __VLS_362 = __VLS_asFunctionalComponent(__VLS_361, new __VLS_361({ min: ((210)), max: ((260)), step: ((2)), modelValue: ((__VLS_ctx.menuWidth)), }));
        const __VLS_363 = __VLS_362({ min: ((210)), max: ((260)), step: ((2)), modelValue: ((__VLS_ctx.menuWidth)), }, ...__VLS_functionalComponentArgsRest(__VLS_362));
        __VLS_nonNullable(__VLS_360.slots).default;
        const __VLS_360 = __VLS_pickFunctionalComponentCtx(__VLS_355, __VLS_357);
        __VLS_nonNullable(__VLS_354.slots).default;
        const __VLS_354 = __VLS_pickFunctionalComponentCtx(__VLS_349, __VLS_351);
        __VLS_nonNullable(__VLS_312.slots).default;
        const __VLS_312 = __VLS_pickFunctionalComponentCtx(__VLS_307, __VLS_309);
        const __VLS_367 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        const __VLS_368 = __VLS_asFunctionalComponent(__VLS_367, new __VLS_367({}));
        const __VLS_369 = __VLS_368({}, ...__VLS_functionalComponentArgsRest(__VLS_368));
        const __VLS_373 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_374 = __VLS_asFunctionalComponent(__VLS_373, new __VLS_373({ xs: (({ span: 24 })), sm: (({ span: 13 })), }));
        const __VLS_375 = __VLS_374({ xs: (({ span: 24 })), sm: (({ span: 13 })), }, ...__VLS_functionalComponentArgsRest(__VLS_374));
        const __VLS_379 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_380 = __VLS_asFunctionalComponent(__VLS_379, new __VLS_379({ label: ("灰色模式"), }));
        const __VLS_381 = __VLS_380({ label: ("灰色模式"), }, ...__VLS_functionalComponentArgsRest(__VLS_380));
        const __VLS_385 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
        /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
        // @ts-ignore
        const __VLS_386 = __VLS_asFunctionalComponent(__VLS_385, new __VLS_385({ ...{ 'onChange': {} }, activeText: ("启用"), inactiveText: ("停用"), activeValue: ((true)), inactiveValue: ((false)), inlinePrompt: ((true)), modelValue: ((__VLS_ctx.isGrey)), }));
        const __VLS_387 = __VLS_386({ ...{ 'onChange': {} }, activeText: ("启用"), inactiveText: ("停用"), activeValue: ((true)), inactiveValue: ((false)), inlinePrompt: ((true)), modelValue: ((__VLS_ctx.isGrey)), }, ...__VLS_functionalComponentArgsRest(__VLS_386));
        let __VLS_391;
        const __VLS_392 = {
            onChange: (...[$event]) => {
                __VLS_ctx.changeGreyOrWeak('grey', !!$event);
            }
        };
        let __VLS_388;
        let __VLS_389;
        const __VLS_390 = __VLS_pickFunctionalComponentCtx(__VLS_385, __VLS_387);
        __VLS_nonNullable(__VLS_384.slots).default;
        const __VLS_384 = __VLS_pickFunctionalComponentCtx(__VLS_379, __VLS_381);
        __VLS_nonNullable(__VLS_378.slots).default;
        const __VLS_378 = __VLS_pickFunctionalComponentCtx(__VLS_373, __VLS_375);
        const __VLS_393 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_394 = __VLS_asFunctionalComponent(__VLS_393, new __VLS_393({ xs: (({ span: 24 })), sm: (({ span: 11 })), }));
        const __VLS_395 = __VLS_394({ xs: (({ span: 24 })), sm: (({ span: 11 })), }, ...__VLS_functionalComponentArgsRest(__VLS_394));
        const __VLS_399 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_400 = __VLS_asFunctionalComponent(__VLS_399, new __VLS_399({ label: ("色弱模式"), }));
        const __VLS_401 = __VLS_400({ label: ("色弱模式"), }, ...__VLS_functionalComponentArgsRest(__VLS_400));
        const __VLS_405 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
        /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
        // @ts-ignore
        const __VLS_406 = __VLS_asFunctionalComponent(__VLS_405, new __VLS_405({ ...{ 'onChange': {} }, activeText: ("启用"), inactiveText: ("停用"), activeValue: ((true)), inactiveValue: ((false)), inlinePrompt: ((true)), modelValue: ((__VLS_ctx.isWeak)), }));
        const __VLS_407 = __VLS_406({ ...{ 'onChange': {} }, activeText: ("启用"), inactiveText: ("停用"), activeValue: ((true)), inactiveValue: ((false)), inlinePrompt: ((true)), modelValue: ((__VLS_ctx.isWeak)), }, ...__VLS_functionalComponentArgsRest(__VLS_406));
        let __VLS_411;
        const __VLS_412 = {
            onChange: (...[$event]) => {
                __VLS_ctx.changeGreyOrWeak('weak', !!$event);
            }
        };
        let __VLS_408;
        let __VLS_409;
        const __VLS_410 = __VLS_pickFunctionalComponentCtx(__VLS_405, __VLS_407);
        __VLS_nonNullable(__VLS_404.slots).default;
        const __VLS_404 = __VLS_pickFunctionalComponentCtx(__VLS_399, __VLS_401);
        __VLS_nonNullable(__VLS_398.slots).default;
        const __VLS_398 = __VLS_pickFunctionalComponentCtx(__VLS_393, __VLS_395);
        __VLS_nonNullable(__VLS_372.slots).default;
        const __VLS_372 = __VLS_pickFunctionalComponentCtx(__VLS_367, __VLS_369);
        const __VLS_413 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
        /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
        // @ts-ignore
        const __VLS_414 = __VLS_asFunctionalComponent(__VLS_413, new __VLS_413({}));
        const __VLS_415 = __VLS_414({}, ...__VLS_functionalComponentArgsRest(__VLS_414));
        const __VLS_419 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_420 = __VLS_asFunctionalComponent(__VLS_419, new __VLS_419({ xs: (({ span: 24 })), sm: (({ span: 13 })), }));
        const __VLS_421 = __VLS_420({ xs: (({ span: 24 })), sm: (({ span: 13 })), }, ...__VLS_functionalComponentArgsRest(__VLS_420));
        const __VLS_425 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_426 = __VLS_asFunctionalComponent(__VLS_425, new __VLS_425({ label: ("侧边栏反转色"), }));
        const __VLS_427 = __VLS_426({ label: ("侧边栏反转色"), }, ...__VLS_functionalComponentArgsRest(__VLS_426));
        const __VLS_431 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
        /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
        // @ts-ignore
        const __VLS_432 = __VLS_asFunctionalComponent(__VLS_431, new __VLS_431({ ...{ 'onChange': {} }, activeText: ("启用"), inactiveText: ("停用"), activeValue: ((true)), inactiveValue: ((false)), inlinePrompt: ((true)), modelValue: ((__VLS_ctx.asideInverted)), }));
        const __VLS_433 = __VLS_432({ ...{ 'onChange': {} }, activeText: ("启用"), inactiveText: ("停用"), activeValue: ((true)), inactiveValue: ((false)), inlinePrompt: ((true)), modelValue: ((__VLS_ctx.asideInverted)), }, ...__VLS_functionalComponentArgsRest(__VLS_432));
        let __VLS_437;
        const __VLS_438 = {
            onChange: (__VLS_ctx.setAsideTheme)
        };
        let __VLS_434;
        let __VLS_435;
        const __VLS_436 = __VLS_pickFunctionalComponentCtx(__VLS_431, __VLS_433);
        __VLS_nonNullable(__VLS_430.slots).default;
        const __VLS_430 = __VLS_pickFunctionalComponentCtx(__VLS_425, __VLS_427);
        __VLS_nonNullable(__VLS_424.slots).default;
        const __VLS_424 = __VLS_pickFunctionalComponentCtx(__VLS_419, __VLS_421);
        const __VLS_439 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_440 = __VLS_asFunctionalComponent(__VLS_439, new __VLS_439({ xs: (({ span: 24 })), sm: (({ span: 11 })), }));
        const __VLS_441 = __VLS_440({ xs: (({ span: 24 })), sm: (({ span: 11 })), }, ...__VLS_functionalComponentArgsRest(__VLS_440));
        const __VLS_445 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_446 = __VLS_asFunctionalComponent(__VLS_445, new __VLS_445({ label: ("头部反转色"), }));
        const __VLS_447 = __VLS_446({ label: ("头部反转色"), }, ...__VLS_functionalComponentArgsRest(__VLS_446));
        const __VLS_451 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
        /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
        // @ts-ignore
        const __VLS_452 = __VLS_asFunctionalComponent(__VLS_451, new __VLS_451({ ...{ 'onChange': {} }, activeText: ("启用"), inactiveText: ("停用"), activeValue: ((true)), inactiveValue: ((false)), inlinePrompt: ((true)), modelValue: ((__VLS_ctx.headerInverted)), }));
        const __VLS_453 = __VLS_452({ ...{ 'onChange': {} }, activeText: ("启用"), inactiveText: ("停用"), activeValue: ((true)), inactiveValue: ((false)), inlinePrompt: ((true)), modelValue: ((__VLS_ctx.headerInverted)), }, ...__VLS_functionalComponentArgsRest(__VLS_452));
        let __VLS_457;
        const __VLS_458 = {
            onChange: (__VLS_ctx.setHeaderTheme)
        };
        let __VLS_454;
        let __VLS_455;
        const __VLS_456 = __VLS_pickFunctionalComponentCtx(__VLS_451, __VLS_453);
        __VLS_nonNullable(__VLS_450.slots).default;
        const __VLS_450 = __VLS_pickFunctionalComponentCtx(__VLS_445, __VLS_447);
        __VLS_nonNullable(__VLS_444.slots).default;
        const __VLS_444 = __VLS_pickFunctionalComponentCtx(__VLS_439, __VLS_441);
        __VLS_nonNullable(__VLS_418.slots).default;
        const __VLS_418 = __VLS_pickFunctionalComponentCtx(__VLS_413, __VLS_415);
        __VLS_nonNullable(__VLS_204.slots).default;
        const __VLS_204 = __VLS_pickFunctionalComponentCtx(__VLS_199, __VLS_201);
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['border-#9AC9F9'];
    __VLS_styleScopedClasses['dark:border-#9AC9F9'];
    __VLS_styleScopedClasses['sm:hover:border-#2992FF'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['border-dashed'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['w-300px'];
    __VLS_styleScopedClasses['h-62px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-items-center'];
    __VLS_styleScopedClasses['dark:bg-black'];
    __VLS_styleScopedClasses['themeSelected'];
    __VLS_styleScopedClasses['m-l-4px'];
    __VLS_styleScopedClasses['w-8px'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['bg-#2992FF'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['p-l-10px'];
    __VLS_styleScopedClasses['m-t-9px'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['p-b-4px'];
    __VLS_styleScopedClasses['c-#2992FF'];
    __VLS_styleScopedClasses['c-#2992FF'];
    __VLS_styleScopedClasses['p-l-5px'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['border-#A6ABF9'];
    __VLS_styleScopedClasses['dark:border-#A6ABF9'];
    __VLS_styleScopedClasses['sm:hover:border-#6169FF'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['border-dashed'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['w-300px'];
    __VLS_styleScopedClasses['h-62px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-items-center'];
    __VLS_styleScopedClasses['dark:bg-black'];
    __VLS_styleScopedClasses['themeSelected'];
    __VLS_styleScopedClasses['m-l-4px'];
    __VLS_styleScopedClasses['w-8px'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['bg-#6169FF'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['p-l-10px'];
    __VLS_styleScopedClasses['m-t-9px'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['p-b-4px'];
    __VLS_styleScopedClasses['c-#6169FF'];
    __VLS_styleScopedClasses['c-#6169FF'];
    __VLS_styleScopedClasses['p-t-10px'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['border-#edc3ae'];
    __VLS_styleScopedClasses['dark:border-#edc3ae'];
    __VLS_styleScopedClasses['sm:hover:border-#fa7e23'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['border-dashed'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['w-300px'];
    __VLS_styleScopedClasses['h-62px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-items-center'];
    __VLS_styleScopedClasses['dark:bg-black'];
    __VLS_styleScopedClasses['themeSelected'];
    __VLS_styleScopedClasses['m-l-4px'];
    __VLS_styleScopedClasses['w-8px'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['bg-#fa7e23'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['p-l-10px'];
    __VLS_styleScopedClasses['m-t-9px'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['p-b-4px'];
    __VLS_styleScopedClasses['c-#fa7e23'];
    __VLS_styleScopedClasses['c-#fa7e23'];
    __VLS_styleScopedClasses['p-l-5px'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['border-#f8df72'];
    __VLS_styleScopedClasses['dark:border-#f8df72'];
    __VLS_styleScopedClasses['sm:hover:border-#F9A407'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['border-dashed'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['w-300px'];
    __VLS_styleScopedClasses['h-62px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-items-center'];
    __VLS_styleScopedClasses['dark:bg-black'];
    __VLS_styleScopedClasses['themeSelected'];
    __VLS_styleScopedClasses['m-l-4px'];
    __VLS_styleScopedClasses['w-8px'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['bg-#F9A407'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['p-l-10px'];
    __VLS_styleScopedClasses['m-t-9px'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['p-b-4px'];
    __VLS_styleScopedClasses['c-#F9A407'];
    __VLS_styleScopedClasses['c-#F9A407'];
    __VLS_styleScopedClasses['p-t-10px'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['border-#83cbac'];
    __VLS_styleScopedClasses['dark:border-#83cbac'];
    __VLS_styleScopedClasses['sm:hover:border-#20a162'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['border-dashed'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['w-300px'];
    __VLS_styleScopedClasses['h-62px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-items-center'];
    __VLS_styleScopedClasses['dark:bg-black'];
    __VLS_styleScopedClasses['themeSelected'];
    __VLS_styleScopedClasses['m-l-4px'];
    __VLS_styleScopedClasses['w-8px'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['bg-#20a162'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['p-l-10px'];
    __VLS_styleScopedClasses['m-t-9px'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['p-b-4px'];
    __VLS_styleScopedClasses['c-#20a162'];
    __VLS_styleScopedClasses['c-#20a162'];
    __VLS_styleScopedClasses['p-l-5px'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['border-#FC98AA'];
    __VLS_styleScopedClasses['dark:border-#FC98AA'];
    __VLS_styleScopedClasses['sm:hover:border-#ee4866'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['border-dashed'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['w-300px'];
    __VLS_styleScopedClasses['h-62px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-items-center'];
    __VLS_styleScopedClasses['dark:bg-black'];
    __VLS_styleScopedClasses['themeSelected'];
    __VLS_styleScopedClasses['m-l-4px'];
    __VLS_styleScopedClasses['w-8px'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['bg-#ee4866'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['p-l-10px'];
    __VLS_styleScopedClasses['m-t-9px'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['p-b-4px'];
    __VLS_styleScopedClasses['c-#ee4866'];
    __VLS_styleScopedClasses['c-#ee4866'];
    __VLS_styleScopedClasses['p-t-10px'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['border-#FB8F8F'];
    __VLS_styleScopedClasses['dark:border-#FB8F8F'];
    __VLS_styleScopedClasses['sm:hover:border-#FF0000'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['border-dashed'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['w-300px'];
    __VLS_styleScopedClasses['h-62px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-items-center'];
    __VLS_styleScopedClasses['dark:bg-black'];
    __VLS_styleScopedClasses['themeSelected'];
    __VLS_styleScopedClasses['m-l-4px'];
    __VLS_styleScopedClasses['w-8px'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['bg-#FF0000'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['p-l-10px'];
    __VLS_styleScopedClasses['m-t-9px'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['p-b-4px'];
    __VLS_styleScopedClasses['c-#FF0000'];
    __VLS_styleScopedClasses['c-#FF0000'];
    __VLS_styleScopedClasses['p-l-5px'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['border-#90BBFB'];
    __VLS_styleScopedClasses['dark:border-#90BBFB'];
    __VLS_styleScopedClasses['sm:hover:border-#1E71EE'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['border-dashed'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['w-300px'];
    __VLS_styleScopedClasses['h-62px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-items-center'];
    __VLS_styleScopedClasses['dark:bg-black'];
    __VLS_styleScopedClasses['themeSelected'];
    __VLS_styleScopedClasses['m-l-4px'];
    __VLS_styleScopedClasses['w-8px'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['bg-#1E71EE'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['p-l-10px'];
    __VLS_styleScopedClasses['m-t-9px'];
    __VLS_styleScopedClasses['w-100%'];
    __VLS_styleScopedClasses['h-50px'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['p-b-4px'];
    __VLS_styleScopedClasses['c-#1E71EE'];
    __VLS_styleScopedClasses['c-#1E71EE'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['layout-box'];
    __VLS_styleScopedClasses['layout-item'];
    __VLS_styleScopedClasses['layout-vertical'];
    __VLS_styleScopedClasses['is-active'];
    __VLS_styleScopedClasses['layout-dark'];
    __VLS_styleScopedClasses['layout-container'];
    __VLS_styleScopedClasses['layout-light'];
    __VLS_styleScopedClasses['layout-content'];
    __VLS_styleScopedClasses['layout-item'];
    __VLS_styleScopedClasses['layout-columns'];
    __VLS_styleScopedClasses['is-active'];
    __VLS_styleScopedClasses['layout-dark'];
    __VLS_styleScopedClasses['layout-light'];
    __VLS_styleScopedClasses['layout-content'];
    __VLS_styleScopedClasses['layout-item'];
    __VLS_styleScopedClasses['layout-classic'];
    __VLS_styleScopedClasses['is-active'];
    __VLS_styleScopedClasses['layout-dark'];
    __VLS_styleScopedClasses['layout-container'];
    __VLS_styleScopedClasses['layout-light'];
    __VLS_styleScopedClasses['layout-content'];
    __VLS_styleScopedClasses['layout-item'];
    __VLS_styleScopedClasses['layout-optimum'];
    __VLS_styleScopedClasses['is-active'];
    __VLS_styleScopedClasses['layout-dark'];
    __VLS_styleScopedClasses['layout-container'];
    __VLS_styleScopedClasses['layout-light'];
    __VLS_styleScopedClasses['layout-content'];
    __VLS_styleScopedClasses['layout-item'];
    __VLS_styleScopedClasses['layout-horizontal'];
    __VLS_styleScopedClasses['is-active'];
    __VLS_styleScopedClasses['layout-dark'];
    __VLS_styleScopedClasses['layout-content'];
    __VLS_styleScopedClasses['p-t-8px'];
    __VLS_styleScopedClasses['p-l-3px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['m-r-2px'];
    __VLS_styleScopedClasses['m-r-10px'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['m-r-2px'];
    __VLS_styleScopedClasses['m-r-10px'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "skyDialogRef": __VLS_6,
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
            CircleCheckFilled: CircleCheckFilled,
            Notification: Notification,
            QuestionFilled: QuestionFilled,
            globalStore: globalStore,
            changeThemeColor: changeThemeColor,
            changeGreyOrWeak: changeGreyOrWeak,
            setAsideTheme: setAsideTheme,
            setHeaderTheme: setHeaderTheme,
            layout: layout,
            isCollapse: isCollapse,
            transition: transition,
            uniqueOpened: uniqueOpened,
            menuWidth: menuWidth,
            isGrey: isGrey,
            isWeak: isWeak,
            asideInverted: asideInverted,
            headerInverted: headerInverted,
            skyDialogRef: skyDialogRef,
            setLayout: setLayout,
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