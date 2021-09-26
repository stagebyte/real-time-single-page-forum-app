<template>
    <div>
        <toolbar></toolbar>
        <!-- component matched by the route will render here -->
        <router-view></router-view>
        <!-- <login></login> -->
        <app-footer></app-footer>
    </div>
</template>

<script>
import toolbar from './Toolbar'
import AppFooter from './AppFooter'
import Login from './login/Login.vue'
export default {
    components: {toolbar, AppFooter, Login}
}
</script>

<style lang="scss" scoped>

</style>
