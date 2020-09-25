<template>
    <div class="text-left">
        <h1 class="text-center mb-5">
            {{ dimension.name }}
        </h1>

        <h3>
            Definizione:
        </h3>
        <div>
            <p>
                {{ dimension.definition }}
            </p>
        </div>

        <h3 class="mt-5">
            Patterns:
        </h3>            
        <div>
            <patterns-table :items="dimension.patterns"></patterns-table>
        </div>
    </div>
</template>

<script>
import PatternsTable from './../tables/PatternsTable';

export default {
    data() {
        return {
            dimension: {}
        };
    },
    components: {
        'patterns-table': PatternsTable
    },
    mounted() {
        this.getDimension();
    },
    methods: {
        getDimension() {
            let _this = this;
            this.$http
                .get(this.$apiUrl + "/dimensions/" + _this.$route.params.id)
                .then(function(response) {
                    _this.dimension = response.data;
                })
                .catch(function(err) {
                    console.err(err);
                });
        },
    },
};
</script>
