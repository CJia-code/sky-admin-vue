<script setup lang="ts">
import settings from "@/settings";
import {useRouter} from "vue-router";
import {HOME_URL} from "@/config";
import {initDynamicRouter} from "@/router/modules/dynamicRouter";
import {useUserStore, useKeepAliveStore, useTabsStore} from "@/store";
import {getAssets} from "@/utils";
import {skyMsgSuccess, skyMsgError} from "@/utils/sky";
import {login} from "@/apis/sky/auth/login";
import {User, Lock} from "@element-plus/icons-vue";

const router = useRouter();
const logo = getAssets("images/logo/favicon.svg");
const refLoginForm = ref();
const userStore = useUserStore();
const keepAliveStore = useKeepAliveStore();
const tabsStore = useTabsStore();
const pageData = ref({
  loading: false,
  captcha: "",
  loginForm: {
    username: "SkyAdmin",
    password: "SkyAdmin@CJ222",
  },
  loginRules: {
    username: [{required: true, message: "用户名不能为空", trigger: "blur"}],
    password: [{required: true, message: "密码不能为空", trigger: "blur"}],
  },
});
const method = reactive({
  skyLogin: () => {
    if (!refLoginForm.value) return;
    refLoginForm.value.validate(async (valid: any) => {
      if (valid) {
        pageData.value.loading = true;
        try {
          const res: any = await login(pageData.value.loginForm);
          userStore.setToken(res.data.access_token);
          // 添加动态路由 AND 用户按钮 AND 角色信息 AND 用户个人信息
          await initDynamicRouter();
          // 清空 tabs数据、keepAlive缓存数据
          await tabsStore.setTab([]);
          await keepAliveStore.setKeepAliveName([]);
          // 跳转到首页
          pageData.value.loading = false;
          skyMsgSuccess(res.msg);
          await router.push(HOME_URL);
        } catch (error) {
          // 等待1秒关闭loading
          let loadingTime = 1;
          setInterval(() => {
            loadingTime--;
            if (loadingTime === 0) {
              pageData.value.loading = false;
            }
          }, 1000);
        }
      } else {
        skyMsgError("校验失败，信息填写有误🌻");
      }
    });
  },
});
</script>

<template>
  <div class="form center">
    <div class="flex items-center">
      <el-image class="rounded-full w-36px h-36px" :src="logo"/>
      <div class="ml-6px font-bold text-xl">{{ settings.loginTitle || "KOI-ADMIN 管理平台" }}</div>
    </div>
    <div class="flex items-center space-x-3 text-gray-400 mt-16px mb-16px">
      <span class="h-1px w-16 bg-gray-300 inline-block"></span>
      <span class="text-center">账号密码登录</span>
      <span class="h-1px w-16 bg-gray-300 inline-block"></span>
    </div>
    <!-- 输入框盒子 -->
    <el-form ref="refLoginForm" :model="pageData.loginForm" :rules="pageData.loginRules" class="w-260px">
      <el-row :gutter="24">
        <el-col :span="24">
          <el-form-item prop="username">
            <el-input type="text" v-model="pageData.loginForm.username" placeholder="请输入用户名" :prefix-icon="User" clearable/>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item prop="password">
            <el-input type="password" v-model="pageData.loginForm.password" placeholder="请输入密码" show-password
                      :prefix-icon="Lock" clearable/>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 登录按钮 -->
      <el-form-item>
        <el-button class="w-245px bg-[--el-color-primary]"
                   type="primary" v-if="!pageData.loading"
                   round @click="method.skyLogin">
          登录
        </el-button>
        <el-button class="w-245px bg-[--el-color-primary]" type="primary" v-if="pageData.loading" round
                   :loading="pageData.loading">
          登录中
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.form {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
