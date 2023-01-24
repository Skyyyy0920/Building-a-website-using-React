// 登录模块
import { makeAutoObservable } from "mobx"
import { http, setToken, getToken, clearToken } from '@/utils'


class LoginStore {
    token = getToken() || ''
    constructor() {
        // 响应式
        makeAutoObservable(this)
    }
    // 登录
    getToken = async ({ mobile, code }) => {
        // 调用登录接口
        const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
            mobile, code
        })
        // 存入token
        this.token = res.data.token
        // 存入local storage
        setToken(res.data.token)
    }
    Logout = () => {
        this.token = ''
        clearToken()
    }
}
export default LoginStore