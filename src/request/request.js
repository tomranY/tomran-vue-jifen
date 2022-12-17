//封装请求,通常是为了发送请求做一些准备工作
import axios from "axios";

//创建出axios的实例
const instance = axios.create({
    baseURL:'http://kumanxuan1.f3322.net:8881/cms',
    timeout:4000
})

//请求拦截器：前端向后端发送请求前做一些操作
instance.interceptors.request.use(
    config=>{
        let token =  localStorage.getItem('x-auth-token');
        if(token){
            config.headers['x-auth-token'] = token;
        }
        console.log("请求拦截：",config)
        return config;
    },
    error=>{

    }
)

//响应拦截器：前端接受后端的信息前做一些操作
instance.interceptors.response.use(
    response=>{
        return response.data;//将响应数据返回
    },
    error=>{

    }
)

//导出该实例
export default instance;