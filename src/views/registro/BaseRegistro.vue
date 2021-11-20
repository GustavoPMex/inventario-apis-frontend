<template>
    <router-view> </router-view>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()

        const establecerLayout = () => {
            store.dispatch('setLayout', 'login-layout')
        }

        return {
            establecerLayout
        }
    },
    mounted(){
        this.establecerLayout()
    }
}
</script>

<style>

</style>