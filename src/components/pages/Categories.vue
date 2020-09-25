<template>
    <div>
        <h1>
            Categorie
        </h1>
        <categories-table :items="categories"></categories-table>
    </div>
</template>

<script>
import CategoriesTable from '../tables/CategoriesTable';

export default {
    data() {
        return {
            categories: []
        };
    },
    mounted() {
        this.getCategories();
    },
    components: {
        'categories-table': CategoriesTable
    },
    methods: {
        getCategories() {
            let _this = this;
            this.$http
                .get(this.$apiUrl + "/categories")
                .then(function(response) {
                    _this.categories = response.data;
                })
                .catch(function(err) {
                    console.err(err);
                });
        },
    },
};
</script>
