// 把所有的模块做统一处理
// 导出一个统一的方法 useStore

import React from "react";
import LoginStore from "./loginStore";
import UserStore from "./userStore";

class RootStore {
    // 组合模块
    constructor() {
        this.loginStore = new LoginStore()
        this.userStore = new UserStore()
    }
}

// 实例化根
// 导出 useStore context
const context = React.createContext(new RootStore())
const useStore = () => React.useContext(context)

export { useStore }

