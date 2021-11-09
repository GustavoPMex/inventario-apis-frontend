import { createStore, storeKey } from 'vuex'
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
    // El objeto articulo almacenará de manera temporal el objeto para
    // visualizarlo en el formulario
    articulo: {
      id: 0,
      nombre: '',
      imagen: '',
      categoria: {},
      descripcion: '',
      proveedor: '',
      precio: 0,
      cantidad: 0
    },
    // Categorias
    categorias: [],
    // Sirve para almacenar una categoria de manera temporal
    categoria: {
      id: 0,
      nombre: ''
    }
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
    // Carga los articulos almacenados en memoria
    cargarArticulos(state, payload){
      state.articulos = payload
    },
    // Añadimos un nuevo articulo y lo establecemos
    nuevoArticulo(state, payload){
      state.articulos.push(payload)
      localStorage.setItem('articulos', JSON.stringify(state.articulos))
    },
    // Actualizamos el articulo 
    actualizarArticulo(state, payload){
      state.articulos = state.articulos.map(item => item.id === payload.id ? payload : item)
      localStorage.setItem('articulos', JSON.stringify(state.articulos))
    },
    // Elimina el articulo almacenado que se visualiza en el formulario de inventario
    eliminarArticuloAlmacenado(state){
      state.articulo = {
        id: 0,
        nombre: '',
        imagen: '',
        categoria: {},
        description: '',
        proveedor: '',
        precio: 0,
        cantidad: 0
      }
    },
    // Eliminar articulo
    quitarArticulo(state, payload){
      state.articulos = state.articulos.filter(item => item.id !== payload)
      localStorage.setItem('articulos', JSON.stringify(state.articulos))
    },
    // Para establecer un articulo de manera temporal
    setArticulo(state, payload){
      state.articulo = payload
    },
    // Establemos lo que tengamos almacenado en memoria
    cargarCategorias(state, payload){
      state.categorias = payload
    },
    // Añade una nueva categoria a la lista de categorias
    nuevaCategoria(state, payload){
      state.categorias.push(payload)
      localStorage.setItem('categorias', JSON.stringify(state.categorias))
    },
    // Elimina la categoria almacenada de manera temporal
    eliminarCategoriaAlmacenada(state){
      state.categoria.id = 0
      state.categoria.nombre = ''
    },
    // Eliminar categoria
    quitarCategoria(state, payload){
      state.categorias = state.categorias.filter(item => item.id !== payload)
      localStorage.setItem('categorias', JSON.stringify(state.categorias))
    }
  },
  actions: {
    // Carga todos los articulos que tengamos almacenados actualmente
    loadInventario({commit}){
      if (localStorage.getItem('articulos')){
        const articulos = JSON.parse(localStorage.getItem('articulos'))
        commit('cargarArticulos', articulos)
      } else {
        localStorage.setItem('articulos', JSON.stringify([]))
      }
    },
    // Añadimos un nuevo articulo
    formNuevoArticulo({commit}, articulo){
      articulo.id = Math.floor((Math.random() * 1000) + 1)
      commit('nuevoArticulo', articulo)
    },
    // Configuramos el articulo para poder visualizarlo en el formulario
    configArticulo({commit}, articulo){
      commit('setArticulo', articulo)
    },
    // Eliminamos lo que se encuentre en state.articulo
    limpiarArticulo({commit}){
      commit('eliminarArticuloAlmacenado')
    },
    // Editamos un articulo
    formModificarArticulo({commit}, articulo){
      commit('actualizarArticulo', articulo)
    },
    eliminarArticulo({commit}, id){
      commit('quitarArticulo', id)
    },
    // Carga los articulos almacenados en el local storage
    loadCategorias({commit}){
      if (localStorage.getItem('categorias')){
        const categorias = JSON.parse(localStorage.getItem('categorias'))
        commit('cargarCategorias', categorias)
      } else {
        localStorage.setItem('categorias', JSON.stringify([]))
      }
    },
    // Agreamos una categoria y le añadimos un id aleatorio
    agregarCategoria({commit, state} ){
      const nuevaCat = JSON.parse(JSON.stringify(state.categoria))
      nuevaCat.id = Math.floor((Math.random() * 1000) + 1)
      commit('nuevaCategoria', nuevaCat)

      state.categoria.id = 0
      state.categoria.nombre = ''
    },
    // Elimina la categoria temporal almacenada
    limpiarCategoria({commit}){
      commit('eliminarCategoriaAlmacenada')
    },
    // Categoria
    eliminarCategoria({commit}, id){
      commit('quitarCategoria', id)
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
    // Categorias
    getCategorias(state){
      return state.categorias
    },
    getCategoria(state){
      return state.categoria
    }
  }
})
