// 导入二次封装axios
import sky from "@/utils/axios";

// 统一管理接口
enum API {
  ADD = "/sky/tools/bucket/add",
  DELETE = "/sky/tools/bucket/del/",
  UPDATE = "/sky/tools/bucket/update/",
  LIST_PAGE = "/sky/tools/bucket/listPage",
  GET_BY_ID = "/sky/tools/bucket/getById/",
}

// 添加
export const add = (data: any) => sky.post(API.ADD, data);

// 删除
export const deleteById = (id: any) => sky.delete(API.DELETE + id);

// 更新
export const update = (id: any, data: any) => sky.put(API.UPDATE + id, data);

// 分页查询
export const listPage = (params: any) => sky.get(API.LIST_PAGE, params);

// 根据ID进行查询
export const getById = (id: any) => sky.get(API.GET_BY_ID + id);
