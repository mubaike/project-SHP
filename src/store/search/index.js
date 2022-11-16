import { reqGetSearchInfo } from "@/api"
//search模块的小仓库
//需要使用插件一次
const state = {
    //仓库的初始状态
    searchList: {}
};
const mutations = {
    GETEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
const actions = {
    //获取search模块数据
    async getSearchList({ commit }, params = {}) {
        //params形参：第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit("GETEARCHLIST", result.data);
        }
    }
};
//计算属性，在项目当中，为了简化数据而生
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}