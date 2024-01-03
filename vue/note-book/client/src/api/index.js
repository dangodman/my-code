// 封装axios
import axios from "axios";
import { showFailToast } from "vant";
import "vant/es/toast/style";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 5000;

// 请求拦截

// 响应拦截
axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
    // 程序错误
    showFailToast("服务端异常");
  } else {
    if (res.data.code !== "8000") {
      // 逻辑性错误
      showFailToast(res.data.msg);
      return Promise.reject(res);
    }
    return res.data;
  }
});

export default axios;
