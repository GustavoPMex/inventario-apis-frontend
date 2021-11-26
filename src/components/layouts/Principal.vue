<template>
    <Menu />
    <router-view/>
</template>

<script>
import { useStore } from 'vuex';
import Menu from '../Menu.vue'

export default {
    setup(){
        const store = useStore()
        
        const establecerLayout = () => {
            store.dispatch('setLayout', 'principal-layout')
        }

        return {
            establecerLayout,
        }
    },
    components: {
        Menu
    },
    beforeCreate(){
        document.body.classList.remove('registrobody');
    },
    created(){
        this.establecerLayout()
    }
}
</script>
