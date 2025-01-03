import {reactive, onMounted} from "vue";
import {listCate} from "@/apis/sky/tools/dicType/index";

export function useSkyDict(dictType: Array<string>) {
  let skyDict: any = reactive({});
  onMounted(async () => {
    if (dictType.length > 0) {
      for (const type of dictType) {
        const res: any = await listCate({dictName: type, status: true});
        if (res.data != null) {
          skyDict[type] = res.data;
        }
      }
    }
  });
  return {skyDict};
}
