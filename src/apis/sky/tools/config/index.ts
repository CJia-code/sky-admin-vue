// 导入二次封装axios
import sky from "@/utils/axios";

// 统一管理接口
enum API {
  UPDATE = "/sky/tools/config/update/",
  GET_BY_ID = "/sky/tools/config/getById/",
}

// 更新
export const update = (id: any, data: any) => sky.put(API.UPDATE + id, data);

// 根据ID进行查询
export const getById = (id: any) => sky.get(API.GET_BY_ID + id);
