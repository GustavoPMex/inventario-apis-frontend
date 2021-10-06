import { createStore } from 'vuex'

export default createStore({
  state: {
    // Inventario
    articulos: [],
    articulo: {
      nombre: '',
      categorias: [],
      proveedor: '',
      precio: 0,
      cantidad: 0
    },
    modificaciones: [],
    ventas: [],
    userAuth: true
  },
  mutations: {
    cargarArticulos(state, payload){
      state.articulos = payload
    },
    nuevoArticulo(state, payload){
      state.articulos.push(payload)
      localStorage.setItem('articulos', JSON.stringify(state.articulos))
    }
  },
  actions: {
    loadInventario({commit}){
      if (localStorage.getItem('articulos')){
        const articulos = JSON.parse(localStorage.getItem('articulos'))
        commit('cargarArticulos', articulos)
      } else {
        localStorage.setItem('articulos', JSON.stringify([]))
      }
    },
    
    formNuevoArticulo({commit}, articulo){
      commit('nuevoArticulo', articulo)
    }
  },
  modules: {
  },
  getters:{
    getArticulos(state){
      return state.articulos
    },
    getArticulo(state){
      return state.articulo
    }
  }
})
