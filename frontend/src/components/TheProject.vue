<template>
{{ route.name }}
</template>

<script setup lang="ts">
import LayoutSidebar from "@/layouts/LayoutSidebar.vue";
import { useRoute } from 'vue-router';

const route = useRoute();

</script>