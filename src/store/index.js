import { createStore } from 'vuex'

export default createStore({
  state: {
    // Inventario
    articulos: [],
    modificaciones: [],
    ventas: [],
    userAuth: true
  },
  mutations: {
    nuevoArticulo(state, payload){
      state.articulos.push(payload)
      localStorage.setItem('articulos', JSON.stringify(state.articulos))
    }
  },
  actions: {
    formNuevoArticulo({commit}, articulo){
      commit('nuevoArticulo', articulo)
    }
  },
  modules: {
  },
  getters:{
    getArticulos(state){
      return state.articulos
    }
  }
})
