// 在这里，从 @reduxjs/toolkit 库导入了 configureStore 函数。
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./reducer/reducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// 添加一个类型上的约束
export type AppDispatch = typeof store.dispatch;

export default store;
