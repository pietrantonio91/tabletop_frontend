<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-nav>

                <b-link :to="{name: 'home'}"><b-navbar-brand>Progettazione Giochi da Tavolo</b-navbar-brand></b-link>

                <b-nav-item :to="{name: 'patterns'}" :class="($route.path.includes('patterns') ? 'active' : '')">Patterns</b-nav-item>

                <b-nav-item :to="{name: 'categories'}" :class="($route.path.includes('categories') ? 'active' : '')">Categorie</b-nav-item>

                <b-nav-item :to="{name: 'issues'}" :class="($route.path.includes('issues') ? 'active' : '')">Criticità</b-nav-item>

                <b-nav-item :to="{name: 'dimensions'}" :class="($route.path.includes('dimensions') ? 'active' : '')">Dimensioni</b-nav-item>

            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Navbar",
};
</script>
