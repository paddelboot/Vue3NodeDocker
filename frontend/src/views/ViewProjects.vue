<template>

    <LayoutSidebar>

        <template #sidebar>
        </template>

        <template #main>
            <TheProject />
        </template>

    </LayoutSidebar>

</template>

<script setup lang="ts">
import LayoutSidebar from "@/layouts/LayoutSidebar.vue";
import TheProject from "@/components/TheProject.vue";
</script>