<template>
    <div class="row">
        <div class="col-10 offset-1 bg-white p-5">
            <h1>
                Lista delle criticità
            </h1>
            <issues-table :items="issues"></issues-table>
        </div>
    </div>
</template>

<script>
import IssuesTable from '../tables/IssuesTable';

export default {
    data() {
        return {
            issues: []
        };
    },
    mounted() {
        this.getIssues();
    },
    components: {
        'issues-table': IssuesTable
    },
    methods: {
        getIssues() {
            let _this = this;
            this.$http
                .get(this.$apiUrl + "/issues")
                .then(function(response) {
                    _this.issues = response.data;
                })
                .catch(function(err) {
                    console.err(err);
                });
        },
    },
};
</script>
