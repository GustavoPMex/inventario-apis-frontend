<template>
    <p>Si</p>
    <router-view> </router-view>
</template>

<script>
export default {
    beforeCreate: function() {
        document.body.className = 'registro'            
    }
}
</script>

<style>

</style>