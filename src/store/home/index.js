import { reqCategoryList } from '@/api'
//home模块的小仓库
const state = {
    //state中数据默认初始值，服务器返回对象、服务器返回数组。【根据接口返回值初始化】
    catagoryList: []
};
const mutations = {
    CATGORYLIST(state, catagoryList) {
        state.catagoryList = catagoryList;
    }
};
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async catagoryList({commit}){
        let result = await reqCategoryList();
        if(result.code==200){
            commit("CATGORYLIST",result.data);
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}