// 导入二次封装axios
import sky from "@/utils/axios";

// 统一管理接口
enum API {
  ADD = "/sky/system/menu/add",
  EXPORT = "/sky/system/menu/export",
  DELETE = "/sky/system/menu/del/",
  BATCH_DELETE = "/sky/system/menu/batch/del",
  UPDATE = "/sky/system/menu/update/",
  LIST_ROUTE = "/sky/system/menu/list/route",
  LIST_TREE = "/sky/system/menu/listTree",
  LIST_ROLE = "/sky/system/menu/listRole",
  GET_BY_ID = "/sky/system/menu/getById/",
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

// 获取用户菜单所有列表
export const listRoute = () => sky.get(API.LIST_ROUTE);

// 分页查询
export const listTree = (params: any) => sky.get(API.LIST_TREE, params);

// 获取角色授权菜单列表
export const listRole = () => sky.get(API.LIST_ROLE);

// 根据ID进行查询
export const getById = (id: any) => sky.get(API.GET_BY_ID + id);


