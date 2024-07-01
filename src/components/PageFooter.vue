<template>
    <footer class="bg-dark text-light py-2 container-fluid" style="background-color: #7e3c22 !important;">
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