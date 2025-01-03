import {reactive, onMounted} from "vue";
import {listAll} from "@/apis/sky/system/dept";

export function useSkyDept() {
  let skyDept: any = reactive({});
  onMounted(async () => {
    const res: any = await listAll();
    if (res.data != null) {
      skyDept.dept = res.data;
    }
  });
  return {skyDept};
}

export function useSkyDeptObj(deptArr: Array<string>, deptId: any) {
  if (deptArr) {
    const dept: any = deptArr.find((item: any) => item.id === deptId);
    return dept?.name;
  }
}
