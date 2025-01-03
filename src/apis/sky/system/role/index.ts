// 导入二次封装axios
import sky from "@/utils/axios";

// 统一管理接口
enum API {
  ADD = "/sky/system/role/add",
  EXPORT = "/sky/system/role/export",
  DELETE = "/sky/system/role/del/",
  BATCH_DELETE = "/sky/system/role/batch/del",
  UPDATE = "/sky/system/role/update/",
  SAVE_ROLE_MENU = "/sky/system/role/saveRoleMenu/",
  SAVE_ROLE_PERMISSION = "/sky/system/role/saveRolePermission/",
  LIST_BY_MENU = "/sky/system/role/list/roleByMenu/",
  LIST_PAGE = "/sky/system/role/listPage",
  LIST_ALL = "/sky/system/role/listAll",
  GET_BY_ID = "/sky/system/role/getById/",
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

// 保存角色分配的菜单
export const saveRoleMenu = (id: any, data: any) => sky.put(API.SAVE_ROLE_MENU + id, data);

// 保存角色分配的菜单权限
export const saveRolePermission = (id: any, data: any) => sky.put(API.SAVE_ROLE_PERMISSION + id, data);

// 获取指定角色的分配菜单和权限列表
export const listByMenu = (id: any) => sky.get(API.LIST_BY_MENU + id);

// 分页查询
export const listPage = (params: any) => sky.get(API.LIST_PAGE, params);

// 列表查询
export const listAll = () => sky.get(API.LIST_ALL);

// 根据ID进行查询
export const getById = (id: any) => sky.get(API.GET_BY_ID + id);
