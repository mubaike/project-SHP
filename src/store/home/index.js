import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api'
//home模块的小仓库
const state = {
    //state中数据默认初始值，服务器返回对象、服务器返回数组。【根据接口返回值初始化】
    //home仓库中存储三级菜单的数据
    catagoryList: [],
    //轮播图的数据
    bannerList: [],
    //floor的数据
    floorList: []
};
const mutations = {
    CATGORYLIST(state, catagoryList) {
        state.catagoryList = catagoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
};
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async catagoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATGORYLIST", result.data);
        }
    },
    //获取首页轮播图的数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }
    },
    //获取floor数据
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data);
        }
    }
};
//计算属性
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}