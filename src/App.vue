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
						v-if="$route.path.split('/')[1] !== undefined && $route.name != 'home'" 
						:to="{name: $route.path.split('/')[1]}">
						{{ $route.meta.breadcrumb }}
					</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
            <div class="row">
                <div class="bg-white col-lg-10 col-md-12 offset-lg-1 p-5">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import Navbar from "./components/parts/Navbar";
import MyFooter from "./components/parts/MyFooter";

export default {
    name: "App",
    components: {
        Navbar,
        MyFooter
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
