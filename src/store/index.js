import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    // ---------- Home -----------
    redesSociales: {
      facebook: '',
      twitter: '', 
      instagram: ''
    },
    // Sirve para almacenar las redes sociales actuales
    // de manera temporal
    redesSocialesStorage: {
      facebook: '',
      twitter: '', 
      instagram: ''
    },
    // Autorización del usuario(Token)
    userAuth: true,
    // ---------- INVENTARIO -----------
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
    // ---------- Redes sociales -----------
    // Establecemos las redes sociales que actualmente tengamos almacenadas
    // En el local storage
    cargarRedes(state, payload){
      state.redesSociales = payload
    },
    // Establecemos temporalmente las redes sociales que tenemos almacenadas
    // actualmente para visualizarlas en el formulario
    setReSoActuales(state, payload){
      state.redesSocialesStorage = payload
    },
    // Establecemos las nuevas redes sociales que nos provee el formulario
    setRedes(state, payload){
      state.redesSociales = payload
    },
    // ---------- Articulos -----------
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
    // ---------- Redes sociales -----------
    // Carga las redes sociales que tenamos almacenadas actualmente
    // En caso de que no tengamos, se crea el objeto vacío
    loadRedes({commit}){
      if(localStorage.getItem('redes')){
        const redes = JSON.parse(localStorage.getItem('redes'))
        commit('cargarRedes', redes)
      } else {
        localStorage.setItem('redes', JSON.stringify({
          facebook: '',
          twitter: '', 
          instagram: ''
        }))
      }
    },
    // Cuando se llama a ésta funcion, establecemos las redes sociales actuales.
    // Que son almacenadas temporalmente para que podamos utilizarlas 
    // en el formulario
    configReSoActuales({commit}){
      const redes = JSON.parse(localStorage.getItem('redes'))
      commit('setReSoActuales', redes)
    },
    // Procesamos el formulario para establecer las nuevas redes sociales
    // y almacenarlas en el local storage
    formRedesSociales({commit, state}, redes){
      commit('setRedes', redes)
      localStorage.setItem('redes', JSON.stringify(state.redesSociales))
      // Limpiamos "las redes sociales actuales" que se usan para
      // visualizarlas en el formulario
      commit('setReSoActuales', {
        facebook: '',
        twitter: '', 
        instagram: ''
      })
    }

  },
  modules: {
  },
  getters:{
    // ---------- Redes sociales -----------
    getRedes(state){
      return state.redesSociales
    },
    getRedesActuales(state){
      return state.redesSocialesStorage
    },
    // Autorizacion
    getAuth(state){
      return state.userAuth
    },

    // ---------- Articulos -----------
    getArticulos(state){
      return state.articulos
    },
    getArticulo(state){
      return state.articulo
    },
  }
})
