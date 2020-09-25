<template>
    <div class="row">
        <div class="col-10 offset-1 bg-white p-5">
            <h1>
                Dimensioni
            </h1>
            <dimensions-table :items="dimensions"></dimensions-table>
        </div>
    </div>
</template>

<script>
import DimensionsTable from '../tables/DimensionsTable';

export default {
    data() {
        return {
            dimensions: []
        };
    },
    mounted() {
        this.getDimensions();
    },
    components: {
        'dimensions-table': DimensionsTable
    },
    methods: {
        getDimensions() {
            let _this = this;
            this.$http
                .get(this.$apiUrl + "/dimensions")
                .then(function(response) {
                    _this.dimensions = response.data;
                })
                .catch(function(err) {
                    console.err(err);
                });
        },
    },
};
</script>
