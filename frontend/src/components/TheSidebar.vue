<template>
    <ul>

        <li>
            <router-link :to="{ name: 'projekt', params: { project: 'die-steppe' }}">Die Steppe</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'projekt', params: { project: 'frauenhände' }}">Frauenhände</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'projekt', params: { project: 'dada' }}">Dada</router-link>
        </li>
    </ul>
</template>

<style scoped lang="scss">

 ul {
    list-style: none;
 }

 li{
    padding: 10px 0;

    a{
        text-decoration: none;
        color: #000;

        &:hover{
            color: darkblue;
        }
    }
 }

</style>