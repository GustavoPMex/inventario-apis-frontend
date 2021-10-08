import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    // Home
    redesSociales: {
      facebook: '',
      twitter: '', 
      instagram: ''
    },
    redesSocialesStorage: {
      facebook: '',
      twitter: '', 
      instagram: ''
    },
    userAuth: true,
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
    },
    // Redes sociales --->
    cargarRedes(state, payload){
      state.redesSociales = payload
    },
    setReSoActuales(state){
      const redes = JSON.parse(localStorage.getItem('redes'))
      state.redesSocialesStorage = redes
    },
    setRedes(state, payload){
      state.redesSociales = payload
      localStorage.setItem('redes', JSON.stringify(state.redesSociales))
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
    },
    // Redes sociales --->
    loadRedes({commit}){
      if(localStorage.getItem('redes')){
        const redes = JSON.parse(localStorage.getItem('redes'))
        commit('cargarRedes', redes)
      } else {
        localStorage.setItem('redes', JSON.stringify({}))
      }
    },
    configReSoActuales({commit}){
      commit('setReSoActuales')
    },
    formRedesSociales({commit}, redes){
      commit('setRedes', redes)
    }

  },
  modules: {
  },
  getters:{
    // Home - redes
    getRedes(state){
      return state.redesSociales
    },
    getRedesActuales(state){
      return state.redesSocialesStorage
    },
    // Home - Autorizacion
    getAuth(state){
      return state.userAuth
    },

    // Articulos
    getArticulos(state){
      return state.articulos
    },
    getArticulo(state){
      return state.articulo
    },
  }
})
