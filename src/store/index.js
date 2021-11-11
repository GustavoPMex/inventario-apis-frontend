import { createStore, storeKey } from 'vuex'

export default createStore({
  state: {
    // <<< ------------------------------ Inicio ------------------------------ >>>
    redesSociales: {
      facebook: '',
      twitter: '', 
      instagram: ''
    },
    // Sirve para almacenar las redes sociales actuales
    // de manera temporal
    redesSocialesTemporal: {
      facebook: '',
      twitter: '', 
      instagram: ''
    },
    // Autorización del usuario(Token)
    userAuth: true,
    // <<< ------------------------------ Inventario ------------------------------ >>>
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
    // <<< ------------------------------ Redes sociales ------------------------------ >>>
    // Establecemos las redes sociales que actualmente tengamos almacenadas
    // En el local storage
    ESTABLECER_REDES(state, payload){
      state.redesSociales = payload
    },
    // Establecemos temporalmente las redes sociales que tenemos almacenadas
    // actualmente para visualizarlas en el formulario
    ESTABLECER_REDES_TEMPORALES(state, payload){
      state.redesSocialesTemporal = payload
    },
    // Añadimos las nuevas redes sociales que nos provee el formulario
    NUEVAS_REDES_SOCIALES(state, payload){
      state.redesSociales = payload
    },
    // <<< ------------------------------ Articulos ------------------------------ >>>
    // Establece los articulos almacenados en memoria
    ESTABLECER_ARTICULOS(state, payload){
      state.articulos = payload
    },
    // Para establecer un articulo de manera temporal
    ESTABLECER_ARTICULO_TEMPORAL(state, payload){
      state.articulo = payload
    },
    // Añadimos un nuevo articulo y lo establecemos
    NUEVO_ARTICULO(state, payload){
      state.articulos.push(payload)
    },
    // Actualizamos el articulo 
    ACTUALIZAR_ARTICULO(state, payload){
      state.articulos = state.articulos.map(item => item.id === payload.id ? payload : item)
    },
    // Elimina el articulo almacenado en "Articulo" que se utilizar 
    // para visualizar en el formulario
    ELIMINAR_ARTICULO_ALMACENADO(state){
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
    // Eliminar articulo en especifico
    ELIMINAR_ARTICULO(state, payload){
      state.articulos = state.articulos.filter(item => item.id !== payload)
      
    },
    // <<< ------------------------------ Categorias ------------------------------ >>>
    // Establemos lo que tengamos almacenado en memoria
    ESTABLECER_CATEGORIAS(state, payload){
      state.categorias = payload
    },
    // Añade una nueva categoria a la lista de categorias
    NUEVA_CATEGORIA(state, payload){
      state.categorias.push(payload)
    },
    // Elimina la categoria almacenada de manera temporal
    ELIMINAR_CATEGORIA_ALMACENADA(state){
      state.categoria.id = 0
      state.categoria.nombre = ''
    },
    // Eliminar categoria
    ELIMINAR_CATEGORIA(state, payload){
      state.categorias = state.categorias.filter(item => item.id !== payload)
      
    }
  },
  actions: {
    // <<< ------------------------------ Articulos ------------------------------ >>>
    // Carga todos los articulos que tengamos almacenados actualmente
    establecerArticulos({commit}){
      if (localStorage.getItem('articulos')){
        const articulos = JSON.parse(localStorage.getItem('articulos'))
        commit('ESTABLECER_ARTICULOS', articulos)
      } else {
        localStorage.setItem('articulos', JSON.stringify([]))
      }
    },
    // Configuramos el articulo para poder visualizarlo en el formulario
    establecerArticuloTemporal({commit}, articulo){
      commit('ESTABLECER_ARTICULO_TEMPORAL', articulo)
    },
    // Añadimos un nuevo articulo
    nuevoArticulo({commit, state}, articulo){
      articulo.id = Math.floor((Math.random() * 1000) + 1)
      commit('NUEVO_ARTICULO', articulo)
      localStorage.setItem('articulos', JSON.stringify(state.articulos))
    },
    // Editamos un articulo
    actualizarArticulo({commit, state}, articulo){
      commit('ACTUALIZAR_ARTICULO', articulo)
      localStorage.setItem('articulos', JSON.stringify(state.articulos))
    },
    // Eliminamos lo que se encuentre en state.articulo
    eliminarArticuloAlmacenado({commit}){
      commit('ELIMINAR_ARTICULO_ALMACENADO')
    },
    eliminarArticulo({commit, state}, id){
      commit('ELIMINAR_ARTICULO', id)
      localStorage.setItem('articulos', JSON.stringify(state.articulos))
    },
    // <<< ------------------------------ Categorias ------------------------------ >>>
    // Carga los articulos almacenados en el local storage
    establecerCategorias({commit}){
      if (localStorage.getItem('categorias')){
        const categorias = JSON.parse(localStorage.getItem('categorias'))
        commit('ESTABLECER_CATEGORIAS', categorias)
      } else {
        localStorage.setItem('categorias', JSON.stringify([]))
      }
    },
    // Agreamos una categoria y le añadimos un id aleatorio
    nuevaCategoria({commit, state} ){
      const nuevaCat = JSON.parse(JSON.stringify(state.categoria))
      nuevaCat.id = Math.floor((Math.random() * 1000) + 1)
      commit('NUEVA_CATEGORIA', nuevaCat)
      localStorage.setItem('categorias', JSON.stringify(state.categorias))

      state.categoria.id = 0
      state.categoria.nombre = ''
    },
    // Elimina la categoria temporal almacenada
    eliminarCategoriaAlmacenada({commit}){
      commit('ELIMINAR_CATEGORIA_ALMACENADA')
    },
    // Categoria
    eliminarCategoria({commit, state}, id){
      commit('ELIMINAR_CATEGORIA', id)
      localStorage.setItem('categorias', JSON.stringify(state.categorias))
    },
    // <<< ------------------------------ Redes sociales ------------------------------ >>>
    // Carga las redes sociales que tenamos almacenadas actualmente
    // En caso de que no tengamos, se crea el objeto vacío
    establecerRedes({commit}){
      if(localStorage.getItem('redes')){
        const redes = JSON.parse(localStorage.getItem('redes'))
        commit('ESTABLECER_REDES', redes)
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
    establecerRedesTemporales({commit}){
      const redes = JSON.parse(localStorage.getItem('redes'))
      commit('ESTABLECER_REDES_TEMPORALES', redes)
    },
    // Procesamos el formulario para establecer las nuevas redes sociales
    // y almacenarlas en el local storage
    nuevasRedesSociales({commit, state}, redes){
      commit('NUEVAS_REDES_SOCIALES', redes)
      localStorage.setItem('redes', JSON.stringify(state.redesSociales))
      // Limpiamos "las redes sociales actuales" que se usan para
      // visualizarlas en el formulario
      commit('ESTABLECER_REDES_TEMPORALES', {
        facebook: '',
        twitter: '', 
        instagram: ''
      })
    }

  },
  modules: {
  },
  getters:{
    // <<< ------------------------------ Redes sociales ------------------------------ >>>
    getRedesSociales(state){
      return state.redesSociales
    },
    getRedesTemporales(state){
      return state.redesSocialesTemporal
    },
    // Autorizacion
    getAuth(state){
      return state.userAuth
    },

    // <<< ------------------------------ Articulos ------------------------------ >>>
    getArticulos(state){
      return state.articulos
    },
    getArticulo(state){
      return state.articulo
    },
    // <<< ------------------------------ Categorias ------------------------------ >>>
    getCategorias(state){
      return state.categorias
    },
    getCategoria(state){
      return state.categoria
    }
  }
})
