<template>
        <RouterView />
</template>

<script setup lang="ts">
import { watch } from "vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();

// watch( route, ( newRoute ) => {
//         console.log( newRoute.params.project );
// } );

// console.log( route.name );
</script>
