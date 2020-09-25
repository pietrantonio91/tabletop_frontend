<template>
    <div>
        <h1 class="text-center mb-5">
            {{ category.name }}
        </h1>

        <h3 class="mt-5">
            Patterns:
        </h3>            
        <div>
            <patterns-table :items="category.patterns"></patterns-table>
        </div>
    </div>
</template>

<script>
import PatternsTable from './../tables/PatternsTable';

export default {
    data() {
        return {
            category: {}
        };
    },
    components: {
        'patterns-table': PatternsTable
    },
    mounted() {
        this.getCategory();
    },
    methods: {
        getCategory() {
            let _this = this;
            this.$http
                .get(this.$apiUrl + "/categories/" + _this.$route.params.id)
                .then(function(response) {
                    _this.category = response.data;
                })
                .catch(function(err) {
                    console.err(err);
                });
        },
    },
};
</script>
