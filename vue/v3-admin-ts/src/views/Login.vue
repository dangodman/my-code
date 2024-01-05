<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <!-- v-model 双向绑定 性能不好 表单的目的是收集数据 -->
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-conntent"
      >
        <el-form-item  prop="username">
          <el-input
            autofocus
            v-model="param.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="param.password"
            type="password"
            placeholder="请输入密码"
            @keyup.enter="submitForm(login)"
          ></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm(login)">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage,FormInstance} from "element-plus";
import { reactive, ref,onMounted } from "vue";
import {usePermissStore} from '../store/permiss'
import { useRouter } from "vue-router";


const permiss = usePermissStore()
const router = useRouter()
interface LoginInfo {
  username: string;
  password: string;
}
const rules = {
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
};
// 和ref 区别 复杂reactive
// proxy
// 标注一个dom元素 
const login = ref<FormInstance>();
console.log(login.value)
onMounted(() => {
  console.log(login.value)
})
const param = reactive<LoginInfo>({
  username: "",
  password: "",
});
// submit event  elementplus formEl
const submitForm = (formEl:FormInstance | undefined) => {
  if (!formEl) {
    return;
  }
  formEl.validate((valid) => {
    if (valid) {
      ElMessage.error("登录成功");
      localStorage.setItem("ms_username",param.username)
      const keys = permiss.roleList[param.username === 'admin' ? 'admin' :'user']
      localStorage.setItem("ms_keys",JSON.stringify(keys))
      router.push("/");
    } else {
      ElMessage.error("请校验表单");
    }
  });
};
</script>

<style scoped></style>
