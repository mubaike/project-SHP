//当前这个模块：API进行统一管理
//引入二次封装的axios（带有请求、相应的拦截器）
import requests from "./request";
import mockRequests from "./mockAjax"

//三级联动接口
///api/product/getBaseCategoryList get 无参数
//发请求：aixos发送请求返回结果Promise对象
export const reqCategoryList = () => {
    return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

//获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => {
    return mockRequests.get('/banner')
}

//获取floor数据
export const reqFloorList = () => {
    return mockRequests.get('/floor')
}

//获取搜索模块地址 地址:/api/list  请求方式：post  参数：需要带参数
export const reqGetSearchInfo = (params) => requests({
    url: "/list",
    method: "post",
    data: params
})