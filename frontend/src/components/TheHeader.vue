<template>
    <div class="logo">
        <img alt="Vue logo" class="logo" src="@/assets/images/hans-logo.svg" width="125" height="125" />
    </div>
    <nav>
        <ul>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/projekte">Projekte</RouterLink>
            </li>
            <li class="upload" v-show="loggedIn">
                <RouterLink to="/upload">Foto hochladen</RouterLink>
            </li>
            <li v-show="loggedIn">
                <RouterLink to="/images">Bilder({{store.imageCount}})</RouterLink>
            </li>
            <li v-show="isAdmin">
                <RouterLink to="/admin">Admin</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import { useImageStore } from '@/stores/useImageStore'

const loggedIn = ref(true)
const isAdmin = ref(false)
const store = useImageStore()
</script>

<style scoped lang="scss">
a {
    padding: 0 10px;
    text-decoration: none;
    text-transform: uppercase;
    color: darkblue;
}

.logo {
    justify-content: center;
    display: flex;
}

nav {
    padding: 100px 0 20px;
    display: flex;
    justify-content: center;

    ul {
        display: flex;
        list-style: none;
        padding: 0;
    }
}
</style>