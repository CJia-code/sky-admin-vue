// 导入二次封装axios
import sky from "@/utils/axios";

// 统一管理接口
enum API {
  ADD = "/sky/system/dept/add",
  EXPORT = "/sky/system/dept/export",
  DELETE = "/sky/system/dept/del/",
  BATCH_DELETE = "/sky/system/dept/batch/del",
  UPDATE = "/sky/system/dept/update/",
  LIST_TREE = "/sky/system/dept/listTree",
  LIST_ALL = "/sky/system/dept/listAll",
  GET_BY_ID = "/sky/system/dept/getById/",
}

// 添加
export const add = (data: any) => sky.post(API.ADD, data);

// 导出
export const exportExcel = () => sky.export(API.EXPORT);

// 删除
export const deleteById = (id: any) => sky.delete(API.DELETE + id);

// 批量删除
export const batchDelete = (ids: any) => sky.post(API.BATCH_DELETE, ids);

// 更新
export const update = (id: any, data: any) => sky.put(API.UPDATE + id, data);

// 分页查询
export const listTree = (params: any) => sky.get(API.LIST_TREE, params);

// 列表查询
export const listAll = () => sky.get(API.LIST_ALL);

// 根据ID进行查询
export const getById = (id: any) => sky.get(API.GET_BY_ID + id);
