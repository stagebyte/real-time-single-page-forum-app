<template>
    <v-container>
        <v-form
            ref="form"
            @submit.prevent="login"
        >
            <v-text-field
            v-model="form.email"
            type="email"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="form.password"
            type="password"
            label="Password"
            required
            ></v-text-field>

            <v-btn
            color="green"
            type="submit"
            >
            Login
            </v-btn>

            <router-link to="/signup">
                <v-btn color="blue">Signup</v-btn>
            </router-link>
        </v-form>

    </v-container>
</template>

<script>
    export default {
        data(){
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        },
        created(){
            if(User.loggedIn()){
                this.$router.push({name: 'forum'})
            }
        },
        methods: {
            login(){
                //test the login
                //alert('login')
                //submit the login using axios
                User.login(this.form)
                //this.$router.push({name: 'forum'})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
