export default {
  // 开启命名空间
  namespaced: true,

  // 数据
  state: () => ({
    address: JSON.parse(uni.getStorageSync('address') || '{}'),
    token: uni.getStorageSync('token') || '',
    // 用户的信息对象
    userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}'),
    // 重定向的 Object 对象
    redirectInfo: null
  }),

  getters: {
    // 收货地址
    addstr(state) {
      if (!state.address.provinceName) return ''
      return state.address.provinceName + state.address.cityName + state.address.countyName + state.address.detailInfo
    }
  },

  // 方法
  mutations: {
	// 持久化存储 address
	saveAddressToStorage(state) {
	  uni.setStorageSync('address', JSON.stringify(state.address))
	},
	// 持久化存储 userInfo
	saveUserInfoToStorage(state) {
	  uni.setStorageSync('userinfo', JSON.stringify(state.userinfo))
	},
	// 持久化存储 token
	saveTokenToStorage(state) {
	  uni.setStorageSync('token', state.token)
	},
    // 更新收货地址
    updateAddress(state, address) {
      state.address = address
      this.commit('m_user/saveAddressToStorage')
    },
	// 更新用户信息
    updateUserInfo(state, userinfo) {
      state.userinfo = userinfo
      this.commit('m_user/saveUserInfoToStorage')
    },
	// 更新token
    updateToken(state, token) {
      state.token = token
      this.commit('m_user/saveTokenToStorage')
    },
	// 更新重定向路由
    updateRedirectInfo(state, info) {
      state.redirectInfo = info
    }
  }
}
