<template>
    <v-container>
        <v-form @submit.prevent="create">
            <v-text-field
            v-model="form.title"
            type="text"
            label="Title*"
            required
            ></v-text-field>

            <v-autocomplete
            :items="categories"
            v-model="form.category_id"
            label="Category"
            item-text="name"
            item-value="id"
            ></v-autocomplete>

            <!-- Old way
                <v-select
                :items="categories"
                v-model="form.category_id"
                label="Category"
                item-text="name"
                item-value="id"
                autocomplete
                ></v-select>

                <vue-simplemde v-model="form.body" ref="markdownEditor" />
                <markdown-editor v-model="form.body"></markdown-editor>
            -->

            <vue-simplemde v-model="form.body" />

            <v-btn
            color="green"
            type="submit"
            >
            Create
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
    import VueSimplemde from 'vue-simplemde'

    export default {
        components: {
            VueSimplemde
        },
        data(){
            return{
                form: {
                    title: null,
                    category_id: null,
                    body: null
                },
                categories: [],
                errors: {}
            }
        },
        created(){
            axios.get('/api/category')
            .then(res => this.categories = res.data.data)
            .catch(error => console.log(error.response.data))
        },
        methods:{
            create(){
                axios.post('/api/question', this.form)
                //.then(res => console.log(res.data))
                .then(res => this.$router.push(res.data.path))
                .catch(error => this.errors = error.response.data.error)
            }
        }
    }
</script>

<style>

</style>
