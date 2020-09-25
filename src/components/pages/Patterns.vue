<template>
    <div class="row">
        <div class="col-10 offset-1 bg-white p-5">
            <h1>
                Lista dei patterns
            </h1>
            <patterns-table :items="patterns"></patterns-table>
        </div>
    </div>
</template>

<script>
import PatternsTable from '../tables/PatternsTable';

export default {
    data() {
        return {
            patterns: []
        };
    },
    mounted() {
        this.getPatterns();
    },
    components: {
        'patterns-table': PatternsTable
    },
    methods: {
        getPatterns() {
            let _this = this;
            this.$http
                .get(this.$apiUrl + "/patterns")
                .then(function(response) {
                    _this.patterns = response.data;
                })
                .catch(function(err) {
                    console.err(err);
                });
        },
    },
};
</script>
