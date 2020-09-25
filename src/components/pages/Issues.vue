<template>
    <div>
        <h1>
            Lista delle criticità
        </h1>
        <issues-table :items="issues"></issues-table>
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
