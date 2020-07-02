
// 引入vue和vuex
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

// 将vuex挂载到vue
Vue.use(Vuex);

const state = {
	userInfo:null, // 用户信息
	login: true, // 登录状态
	cartList:{}, // 购物车列表
	note:null, // 订单备注
	invoice:null, // 发票数据
}

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
});