<template>
    <footer class="bg-dark text-light py-2">
        <small>Copyright &copy; {{ getCurrentYear }} RoyalMyanmar Restaurant</small>
    </footer>
</template>

<script>
export default {
    computed: {
        getCurrentYear() {
            return this.$store.getters.getCurrentYear
        }
    }
}
</script>

<style scoped>

</style>