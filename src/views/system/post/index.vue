<script setup lang="ts">
import {useRoute} from "vue-router";
import {useSkyDept, useSkyDeptObj} from "@/hooks/dept";
import {useScreenStore} from "@/hooks/screen";
import {getToday, fieldVisible} from "@/utils";
import {skyNoticeSuccess, skyNoticeError, skyMsgError, skyMsgWarning, skyMsgBox, skyMsgInfo, skyMsgSuccess} from "@/utils/sky.js";
import {
  add,
  exportExcel,
  deleteById,
  batchDelete,
  update,
  listPage,
  getById,
} from "@/apis/sky/system/post";

// 获取当前为[移动端、IPad、PC端]仓库，阔以使用 watchEffect(() => {}) 进行监听。
const {isScreen} = useScreenStore();
const route = useRoute();
const {skyDept} = useSkyDept();
const skyExcelRef = ref();
const skyDrawerRef = ref();
const formRef = ref();
const pageData = ref({
  showSearch: true,
  pageParams: {
    creator: null,
    modifier: null,
    status: true,
    name: "",
    code: "",
    page: 1,
    pageSize: 10,
  },
  ids: [],
  single: true,
  multiple: true,
  title: "岗位管理",
  confirmLoading: false,
  form: {
    id: null,
    name: "",
    code: "",
    sort: 1,
    status: true,
    belong_dept: null,
    remark: null,
  },
  rules: {
    name: [{required: true, message: "请输入岗位名称", trigger: "blur"}],
    code: [{required: true, message: "请输入岗位编号", trigger: "blur"}],
  },
  loading: false,
  total: 0,
  showTable: [
    {title: "岗位名称", visible: 1},
    {title: "岗位编码", visible: 1},
  ],
  tableList: [],
});
const method = reactive({
  /** 搜索 */
  handleSearch: () => {
    pageData.value.pageParams.page = 1;
    pageData.value.pageParams.pageSize = 10;
    method.handleListPage();
  },
  /** 重置 */
  resetSearch: () => {
    method.resetSearchParams();
    method.handleListPage();
  },
  /** 重置搜索参数 */
  resetSearchParams: () => {
    pageData.value.pageParams = {
      creator: null,
      modifier: null,
      status: true,
      name: "",
      code: "",
      page: 1,
      pageSize: 10,
    };
  },
  /** 添加 */
  handleAdd: () => {
    // 打开弹出框
    skyDrawerRef.value.skyOpen();
    // 重置表单
    method.resetForm();
    // 标题
    pageData.value.title = "添加";
  },
  /** 删除 */
  handleDelete: (row: any) => {
    const id = row.id;
    if (id === null || id === "") {
      skyMsgWarning("请选中需要删除的数据🌻");
      return;
    }
    skyMsgBox("您确认需要删除名称[" + row.name + "]么？")
      .then(async () => {
        try {
          await deleteById(id);
          await method.handleListPage();
          skyNoticeSuccess("删除成功🌻");
        } catch (error) {
          await method.handleListPage();
          skyNoticeError("删除失败，请刷新重试🌻");
        }
      })
      .catch(() => {
        skyMsgError("已取消🌻");
      });
  },
  /** 批量删除 */
  handleBatchDelete: () => {
    if (pageData.value.ids.length == 0) {
      skyMsgInfo("请选择需要删除的数据🌻");
      return;
    }
    skyMsgBox("您确认需要进行批量删除么？")
      .then(async () => {
        try {
          const res: any = await batchDelete(pageData.value.ids);
          await method.handleListPage();
          skyNoticeSuccess(`${res.msg}`);
        } catch (error) {
          await method.handleListPage();
          skyNoticeSuccess("批量删除失败，请刷新重试🌻");
        }
      })
      .catch(() => {
        skyMsgError("已取消🌻");
      });
  },
  /** 修改 */
  handleUpdate: (row: any) => {
    // 打开弹出框
    skyDrawerRef.value.skyOpen();
    // 重置表单
    method.resetForm();
    pageData.value.title = "修改";
    const id = row ? row.id : pageData.value.ids[0];
    if (id == null || id === "") {
      skyMsgError("请选中需要修改的数据🌻");
    }
    // 回显数据
    method.handleEcho(id);
  },
  /** 回显数据 */
  handleEcho: async (id: any) => {
    if (id === null || id === "") {
      skyMsgWarning("请选择需要修改的数据🌻");
      return;
    }
    try {
      const res = await getById(id);
      pageData.value.form = res.data;
    } catch (error) {
      skyNoticeError("数据获取失败，请刷新重试🌻");
    }
  },
  /** 确定  */
  handleConfirm: () => {
    if (!formRef.value) return;
    pageData.value.confirmLoading = true;
    (formRef.value).validate(async (valid: any) => {
      if (valid) {
        if (pageData.value.form.id) {
          try {
            await update(pageData.value.form.id, pageData.value.form);
            skyNoticeSuccess("修改成功🌻");
            pageData.value.confirmLoading = false;
            skyDrawerRef.value.skyQuickClose();
            method.resetForm();
            await method.handleListPage();
          } catch (error) {
            pageData.value.confirmLoading = false;
            skyNoticeError("修改失败，请刷新重试🌻");
          }
        } else {
          try {
            await add(pageData.value.form);
            skyNoticeSuccess("添加成功🌻");
            pageData.value.confirmLoading = false;
            skyDrawerRef.value.skyQuickClose();
            method.resetForm();
            await method.handleListPage();
          } catch (error) {
            pageData.value.confirmLoading = false;
            skyNoticeError("添加失败，请刷新重试🌻");
          }
        }
      } else {
        skyMsgError("验证失败，请检查填写内容🌻");
        pageData.value.confirmLoading = false;
      }
    });
  },
  /** 取消 */
  handleCancel: () => {
    skyDrawerRef.value.skyClose();
  },
  /** 清空表单数据 */
  resetForm: () => {
    nextTick(() => {
      if (formRef.value) {
        // 重置该表单项，将其值重置为初始值，并移除校验结果
        formRef.value.resetFields();
      }
    });
    pageData.value.form = {
      id: null,
      name: "",
      code: "",
      sort: 1,
      status: true,
      belong_dept: null,
      remark: null,
    };
  },
  /** 导入 */
  handleImportExcel: () => {
    let params = {
      title: "导入数据",
      isApi: true, // 是否后台上传
      importApi: "/sky/system/post/import"
    };
    skyExcelRef.value.excelParams(params);
  },
  /** 导入成功 */
  handleConfirmUpload: () => {
    method.handleListPage();
  },
  /** 下载模板 */
  handleTemplateExcel: () => {
    window.location.href = import.meta.env.VITE_GLOB_API_URL + "/static/templates/system/岗位管理导入模板.xlsx";
    skyMsgSuccess("模板下载成功🌻");
  },
  /** 导出 */
  handleDownload: async () => {
    const res: any = await exportExcel();
    const blob = new Blob([res], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
    const dom = document.createElement('a');
    const downUrl = window.URL.createObjectURL(blob);
    dom.href = downUrl;
    dom.download = `${route.meta.title}[${getToday()}]报表`;
    dom.style.display = 'none';
    document.body.appendChild(dom);
    dom.click();
    dom.parentNode.removeChild(dom);
    window.URL.revokeObjectURL(downUrl);
    skyMsgSuccess("导出成功🌻");
  },
  /** 是否多选 */
  handleSelectionChange: (selection: any) => {
    pageData.value.ids = selection.map((item: any) => item.id);
    pageData.value.single = selection.length !== 1; // 单选
    pageData.value.multiple = !selection.length; // 多选
  },
  /** 数据表格 */
  handleListPage: async () => {
    try {
      pageData.value.loading = true;
      pageData.value.tableList = [];
      const res: any = await listPage(pageData.value.pageParams);
      pageData.value.total = res.data.total;
      pageData.value.tableList = res.data.items;
      pageData.value.loading = false;
    } catch (error) {
      skyMsgError("数据查询失败，请刷新重试🌻");
    }
  },
});
onMounted(() => {
  method.handleListPage();
});
</script>

<template>
  <div class="sky-flex">
    <SkyCard>
      <!-- 搜索条件 -->
      <el-form v-show="pageData.showSearch" :inline="true" label-width="80px">
        <el-form-item label="岗位名称" prop="name">
          <el-input
            style="width: 240px"
            placeholder="请输入岗位名称"
            v-model="pageData.pageParams.name"
            clearable
            @keyup.enter.native="method.handleSearch"
          ></el-input>
        </el-form-item>
        <el-form-item label="岗位编码" prop="code">
          <el-input
            style="width: 240px"
            placeholder="请输入岗位编码"
            v-model="pageData.pageParams.code"
            clearable
            @keyup.enter.native="method.handleSearch"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="pageData.pageParams.status" style="width: 240px" clearable>
            <el-option label="启用" :value="true"/>
            <el-option label="禁用" :value="false"/>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="search" plain v-throttle="method.handleSearch">搜索</el-button>
          <el-button type="danger" icon="refresh" plain v-debounce="method.resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格头部按钮 -->
      <el-row :gutter="10">
        <el-col :span="1.5">
          <el-button type="primary" icon="plus" plain @click="method.handleAdd()">新增</el-button>
        </el-col>
        <el-col :span="1.5">
          <el-button type="danger" icon="delete" plain @click="method.handleBatchDelete()" :disabled="pageData.multiple">
            删除
          </el-button>
        </el-col>
        <el-col :span="1.5">
          <el-button type="success" icon="edit" plain @click="method.handleUpdate(null)" :disabled="pageData.single">
            修改
          </el-button>
        </el-col>
      </el-row>
      <br/>
      <!-- 表格头部按钮 -->
      <el-row :gutter="10">
        <el-col :span="1.5">
          <el-button type="info" icon="Upload" plain @click="method.handleImportExcel">导入</el-button>
          <!-- excel导入 -->
          <SkyExcel ref="skyExcelRef" @handleTemplateExcel="method.handleTemplateExcel"
                    @handleConfirmUpload="method.handleConfirmUpload"></SkyExcel>
        </el-col>
        <el-col :span="1.5">
          <el-button type="warning" icon="download" plain @click="method.handleDownload">导出</el-button>
        </el-col>
        <!-- 右侧操作栏 -->
        <SkyToolbar v-model:showSearch="pageData.showSearch" v-model:showColumns="pageData.showTable"
                    @refreshTable="method.handleListPage"></SkyToolbar>
      </el-row>
      <br/>
      <!-- 数据表格 -->
      <el-table
        v-loading="pageData.loading"
        border
        :data="pageData.tableList"
        empty-text="暂时没有数据哟🌻"
        @selection-change="method.handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center" fixed="left"/>
        <el-table-column label="主键ID" prop="id" width="110" align="center"/>
        <el-table-column v-if="fieldVisible('岗位名称', pageData.showTable)" label="岗位名称" prop="name"
                         width="150" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column v-if="fieldVisible('岗位编码', pageData.showTable)" label="岗位编码" prop="code"
                         width="150" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="状态" prop="status" width="150" align="center" :show-overflow-tooltip="true">
          <template #default="scope">
            <el-switch
              v-model="scope.row.status"
              class="ml-2"
              inline-prompt
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
              active-text="启用"
              inactive-text="禁用"
            />
          </template>
        </el-table-column>
        <el-table-column label="备注" prop="remark" width="200" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="排序" prop="sort" width="100" align="center"
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="数据归属部门" prop="belong_dept" width="170" align="center"
                         :show-overflow-tooltip="true">
          <template #default="scope">
            {{ useSkyDeptObj(skyDept.dept, scope.row.belong_dept) }}
          </template>
        </el-table-column>
        <el-table-column label="创建人" prop="creator" width="150" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="修改人" prop="modifier" width="150" align="center"
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="创建时间" prop="create_time" width="180" align="center"
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="修改时间" prop="update_time" width="180" align="center"
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="操作" align="center" width="120" fixed="right">
          <template #default="{ row }">
            <el-tooltip content="修改🌻" placement="top">
              <el-button
                type="primary"
                icon="Edit"
                circle
                plain
                @click="method.handleUpdate(row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="删除🌻" placement="top">
              <el-button
                type="danger"
                icon="Delete"
                circle
                plain
                @click="method.handleDelete(row)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <br/>
      <!-- 分页 -->
      <el-pagination
        v-model:current-page="pageData.pageParams.page"
        v-model:page-size="pageData.pageParams.pageSize"
        v-show="pageData.total > 0"
        background
        :page-sizes="[10, 20, 50, 100, 200]"
        :layout="isScreen?'total, sizes, jumper':'total, sizes, prev, pager, next, jumper'"
        :total="pageData.total"
        @size-change="method.handleListPage"
        @current-change="method.handleListPage"
      />
      <!-- 添加 OR 修改 -->
      <SkyDrawer
        ref="skyDrawerRef"
        :title="pageData.title"
        @skyConfirm="method.handleConfirm"
        @skyCancel="method.handleCancel"
        :loading="pageData.confirmLoading"
      >
        <template #content>
          <el-form ref="formRef" :rules="pageData.rules" :model="pageData.form" label-width="auto" status-icon>
            <el-row>
              <el-col :xs="{ span: 24 }" :sm="{ span: 24 }">
                <el-form-item label="岗位名称" prop="name">
                  <el-input v-model="pageData.form.name" placeholder="请输入岗位名称" clearable/>
                </el-form-item>
              </el-col>
              <el-col :xs="{ span: 24 }" :sm="{ span: 24 }">
                <el-form-item label="岗位编号" prop="code">
                  <el-input v-model="pageData.form.code" placeholder="请输入岗位编号" clearable/>
                </el-form-item>
              </el-col>
              <el-col :xs="{ span: 24 }" :sm="{ span: 24 }">
                <el-form-item label="排序" prop="sort">
                  <el-input-number style="width: 100%;" v-model="pageData.form.sort"/>
                </el-form-item>
              </el-col>
              <el-col :xs="{ span: 24 }" :sm="{ span: 24 }">
                <el-form-item label="状态" prop="status">
                  <el-select v-model="pageData.form.status" style="width: 100%;" clearable>
                    <el-option label="启用" :value="true"/>
                    <el-option label="禁用" :value="false"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="{ span: 24 }" :sm="{ span: 24 }">
                <el-form-item label="备注" prop="remark">
                  <el-input v-model="pageData.form.remark" :rows="5" type="textarea" placeholder="请输入备注"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </template>
      </SkyDrawer>
    </SkyCard>
  </div>
</template>

<style scoped lang="scss">

</style>
