<template>
    <div id="app">
        <navbar></navbar>
        <div class="container my-5 bg-light p-5">
			<div class="row">
				<b-breadcrumb
					class="bg-light col-10 offset-1 ">
					<b-breadcrumb-item :to="{name: 'home'}">
						Home
					</b-breadcrumb-item>
					<b-breadcrumb-item
						v-if="$route.path.split('/')[1] !== undefined" 
						:to="{name: $route.path.split('/')[1]}">
						{{ $route.meta.breadcrumb }}
					</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/parts/Navbar";

export default {
    name: "App",
    components: {
        Navbar,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
