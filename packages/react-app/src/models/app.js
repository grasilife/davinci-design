import { createModel } from "@rematch/core";

export const app = createModel()({
  state: {
    userinfo: null, // 用户信息
  },
  reducers: {
    setUserInfo(state, payload) {
      return { ...state, userinfo: payload };
    },
  },
  effects: {
    // 模拟获取用户信息
    async getUserinfo(params = {}) {
      console.log(params, "params");
      const user = { id: params.id, username: "admin" };
      this.setUserInfo(user); // 这个setUserInfo就是上面reducers中的setUserInfo
      return user;
    },
  },
});
