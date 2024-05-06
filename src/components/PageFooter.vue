<template>
    <footer class="bg-dark text-light py-2 container-fluid">
        <div>
            <small>Copyright &copy; {{ getCurrentYear }} RoyalMyanmar Restaurant</small>
        </div>
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

<style scoped></style>