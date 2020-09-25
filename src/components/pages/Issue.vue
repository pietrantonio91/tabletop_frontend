<template>
    <div class="row">
        <div class="col-10 offset-1 bg-white p-5 text-left">
            <h1 class="text-center mb-5">
                {{ issue.name }}
            </h1>

            <h3>
                Definizione:
            </h3>
            <div>
                <p>
                    {{ issue.definition }}
                </p>
            </div>

            <h3 class="mt-5">
                Patterns:
            </h3>            
            <div>
                <patterns-table :items="issue.patterns"></patterns-table>
            </div>
        </div>
    </div>
</template>

<script>
import PatternsTable from './../tables/PatternsTable';

export default {
    data() {
        return {
            issue: {}
        };
    },
    components: {
        'patterns-table': PatternsTable
    },
    mounted() {
        this.getIssue();
    },
    methods: {
        getIssue() {
            let _this = this;
            this.$http
                .get(this.$apiUrl + "/issues/" + _this.$route.params.id)
                .then(function(response) {
                    _this.issue = response.data;
                })
                .catch(function(err) {
                    console.err(err);
                });
        },
    },
};
</script>
