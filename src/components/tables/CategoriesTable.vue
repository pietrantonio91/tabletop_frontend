<template>
    <div>
        <div class="mt-3">
            <b-form-group
                class="mb-0"
            >
                <b-input-group size="sm">
                    <b-form-input
                        v-model="filter"
                        type="search"
                        id="filterInput"
                        placeholder="Cerca..."
                    ></b-form-input>
                    <b-input-group-append>
                        <b-button :disabled="!filter" @click="filter = ''"
                            >Resetta</b-button
                        >
                    </b-input-group-append>
                </b-input-group>
            </b-form-group>
        </div>
        <div class="mt-2 table-responsive">
            <b-table 
                hover 
                :items="items" 
                :fields="fields"
                :filter="filter">
                <template v-slot:cell(name)="data">
                    <b-link :to="{name: 'category', params: {id: data.item.id}}">{{ data.value }}</b-link>
                </template>    
            </b-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filter: null,
            fields: [
                {
                    key: "name",
                    sortable: true,
                    class: "text-left",
                },
            ],
        };
    },
    props: [
        'items'
    ]
};
</script>
