import Vue from 'vue'
import Vuex from 'vuex'

import testS from './modules/testStor'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      testS
  }
})
