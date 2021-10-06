import { createStore } from 'vuex'
import router from '../router'

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
    },
    setArticulo(state, payload){
      state.articulo = payload
    },
    reemplazarArticulo(state, payload){
      state.articulos = state.articulos.map(item => item.nombre === payload.nombre ? payload : item)
      localStorage.setItem('articulos', JSON.stringify(state.articulos))
    },
    eliminarArticulo(state){
      state.articulo = {
          nombre: '',
          categorias: [],
          proveedor: '',
          precio: 0,
          cantidad: 0
        }
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
    },
    configArticulo({commit}, articulo){
      commit('setArticulo', articulo)
    },
    limpiarArticulo({commit}){
      commit('eliminarArticulo')
    },
    formModificarArticulo({commit}, articulo){
      commit('reemplazarArticulo', articulo)
      router.go()
      
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
