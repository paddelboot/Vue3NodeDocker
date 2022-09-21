<template>
    <header>
        <div class="logo">
            <img alt="Vue logo" class="logo" src="@/assets/images/hans-logo.svg" width="125" height="125" />
        </div>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/upload">Foto hochladen</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
header {
    grid-area: header;
    display: flex;
    flex-direction: column;

    a {
        padding: 0 5px;
        text-decoration: none;
        text-transform: uppercase;
        color: darkblue;
    }

    .logo {
        justify-content: center;
        display: flex;
    }

    nav {
        padding: 20px 0;
        display: flex;
        justify-content: center;

        ul{
            display: flex;
            list-style: none;
            padding: 0;
        }
    }
}
</style>