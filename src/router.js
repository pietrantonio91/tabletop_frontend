
import VueRouter from 'vue-router';

// pages
import Home from './components/pages/Home';
import Patterns from './components/pages/Patterns';
import Pattern from './components/pages/Pattern';
import Categories from './components/pages/Categories';
import Category from './components/pages/Category';
import Issues from './components/pages/Issues';
import Issue from './components/pages/Issue';
import Dimensions from './components/pages/Dimensions';
import Dimension from './components/pages/Dimension';

const routes = [
    {
		name: 'home',
        path: '/',
        component: Home,
        meta: {
            breadcrumb: 'Home'
        }
    },
    {
		name: 'patterns',
        path: '/patterns',
        component: Patterns,
        meta: {
            breadcrumb: 'Patterns'
        }
    },
    {
        name: 'pattern',
        path: '/patterns/:id',
        component: Pattern,
        meta: {
            breadcrumb: 'Patterns'
        }
    },
    {
		name: 'categories',
        path: '/categories',
        component: Categories,
        meta: {
            breadcrumb: 'Categorie'
        }
    },
    {
		name: 'category',
        path: '/categories/:id',
        component: Category,
        meta: {
            breadcrumb: 'Categorie'
        }
    },
    {
		name: 'issues',
        path: '/issues',
        component: Issues,
        meta: {
            breadcrumb: 'Criticità'
        }
    },
    {
		name: 'issue',
        path: '/issues/:id',
        component: Issue,
        meta: {
            breadcrumb: 'Criticità'
        }
    },
    {
		name: 'dimensions',
        path: '/dimensions',
        component: Dimensions,
        meta: {
            breadcrumb: 'Dimensioni'
        }
    },
    {
		name: 'dimension',
        path: '/dimensions/:id',
        component: Dimension,
        meta: {
            breadcrumb: 'Dimensioni'
        }
    },
    {
      path: '*',
      redirect: '/'
    }
];

export default new VueRouter({
    routes,
});