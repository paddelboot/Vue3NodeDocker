<template>

    <section class="layout default">

        <header>
            <slot name="header">
                <TheHeader />
            </slot>
        </header>

        <main>
            <slot name="main"></slot>
        </main>

        <footer>
            <slot name="footer"></slot>
        </footer>

    </section>

</template>

<style scoped lang="scss">
@media (min-width: 1024px) {

    section {
        display: grid;
        width: 100vw;
        max-width: 100%;
        padding: 90px 0px 40px;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 2fr 5fr 1fr;
        row-gap: 20px;
        grid-template-areas:
            "header header header header header"
            ". main main main ."
            "footer footer footer footer footer";
    }

    header{
        grid-area: header;
    }
    main{
        grid-area: main;
        display: flex;
        justify-content: center;
    }
    footer{
        grid-area: footer;
    }
}
</style>

<script setup lang="ts">
    import TheHeader from '@/components/TheHeader.vue';
</script>