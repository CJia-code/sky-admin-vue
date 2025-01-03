// 导入二次封装axios
import sky from "@/utils/axios";

// 统一管理接口
enum API {
  ADD = "/sky/tools/dicType/add",
  EXPORT = "/sky/tools/dicType/export",
  DELETE = "/sky/tools/dicType/del/",
  BATCH_DELETE = "/sky/tools/dicType/batch/del",
  UPDATE = "/sky/tools/dicType/update/",
  LIST_CATE = "/sky/tools/dicType/listCate",
  LIST_PAGE = "/sky/tools/dicType/list/page",
  GET_BY_ID = "/sky/tools/dicType/getById/",
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

// 获取对应字典的字典信息列表
export const listCate = (params: any) => sky.get(API.LIST_CATE, params);

// 分页查询
export const listPage = (params: any) => sky.get(API.LIST_PAGE, params);

// 根据ID进行查询
export const getById = (id: any) => sky.get(API.GET_BY_ID + id);
