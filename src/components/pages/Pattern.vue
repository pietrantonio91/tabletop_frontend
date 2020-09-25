<template>
    <div>
        <h1 class="text-center mb-5">
            {{ pattern.name }}
        </h1>

        <h3 v-if="!this.$_.isEmpty(pattern.categories)" class="mb-5">
            Categorie: <i>
                <span v-for="(category, key) in pattern.categories" :key="key">
                    <b-link :to="{name: 'category', params: {id: category.id}}">{{ category.name }}</b-link><span v-if="Object.keys(pattern.categories).length - 1 !== key">, </span>
                </span>
            </i>
        </h3>
        
        <h3>
            Definizione:
        </h3>
        <div>
            <p>
                {{ pattern.definition }}
            </p>
        </div>

        <h3 class="mt-5">
            Utile per le Criticità:
        </h3>            
        <div>
            <issues-table :items="pattern.issues"></issues-table>
        </div>
    </div>
</template>

<script>
import IssuesTable from '../tables/IssuesTable';

export default {
    data() {
        return {
            pattern: {}
        };
    },
    components: {
        'issues-table': IssuesTable
    },
    mounted() {
        this.getPattern();
    },
    methods: {
        getPattern() {
            let _this = this;
            this.$http
                .get(this.$apiUrl + "/patterns/" + _this.$route.params.id)
                .then(function(response) {
                    _this.pattern = response.data;
                })
                .catch(function(err) {
                    console.err(err);
                });
        },
    },
};
</script>
