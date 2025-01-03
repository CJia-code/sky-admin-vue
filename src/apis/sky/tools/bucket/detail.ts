// 导入二次封装axios
import sky from "@/utils/axios";

// 统一管理接口
enum API {
  EXPORT = "/sky/tools/file/export",
  DELETE = "/sky/tools/file/del/",
  BATCH_DELETE = "/sky/tools/file/batch/del",
  UPDATE = "/sky/tools/file/update/",
  LIST_PAGE = "/sky/tools/file/listPage",
  GET_BY_ID = "/sky/tools/file/getById/",
  GET_STATISTICS = "/sky/tools/file/statistics",
}

// 导出
export const exportExcel = () => sky.export(API.EXPORT);

// 删除
export const deleteById = (id: any) => sky.delete(API.DELETE + id);

// 批量删除
export const batchDelete = (ids: any) => sky.post(API.BATCH_DELETE, ids);

// 更新
export const update = (id: any, data: any) => sky.put(API.UPDATE + id, data);

// 获取文件类型统计
export const getStatistics = (params: any) => sky.get(API.GET_STATISTICS, params);

// 分页查询
export const listPage = (params: any) => sky.get(API.LIST_PAGE, params);

// 根据ID进行查询
export const getById = (id: any) => sky.get(API.GET_BY_ID + id);
