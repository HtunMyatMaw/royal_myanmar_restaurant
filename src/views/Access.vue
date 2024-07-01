<template>
    <main class="container py-5">
        <h2 class="bottom_border p-2 mb-3">アクセス</h2>
        <section class="d-flex flex-column col col-md-6 mb-5">
            <div class="d-flex gap-3">
                <i class="bi bi-mailbox-flag"></i>
                <address>
                    〒 902-0067 <br>
                    沖縄県那覇市安里384-5 栄町市場 <br>
                    安里駅より 徒歩2分
                </address>
            </div>

            <div class="d-flex gap-3">
                <i class="bi bi-envelope-at"></i>
                <span>royalmyanmarokinawa@gmail.com</span>
            </div>

            <div class="d-flex gap-3">
                <i class="bi bi-telephone"></i>
                <a href="tel:+098-884-5711">098-884-5711</a>
            </div>

            <div class="d-flex gap-3">
                <i class="bi bi-facebook"></i>
                <a href="https://www.facebook.com/profile.php?id=100057256188403" target="_blank">Royal Myanmar</a>
            </div>
        </section>

        <section class="d-flex flex-column col col-md-6 mb-5">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7158.708482229995!2d127.696882!3d26.217677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e569640412af6b%3A0x13494be22540e329!2sRoyal%20Myanmar!5e0!3m2!1sen!2sjp!4v1714881569847!5m2!1sen!2sjp"
                height="300" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>

        <section class="mb-5">
            <div class="text-center mb-0">
                <h3>営業時刻表</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>曜日</th>
                            <th>時間</th>
                            <th>営業</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="obj in getWorkingDays">
                            <th>{{ obj.dayName }}</th>
                            <td>{{ obj.workingHours }}</td>
                            <td>
                                <span v-if="obj.isHoliday">✖</span>
                                <span v-else>✔</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    computed: {
        getWorkingDays() {
            return this.$store.getters.getWorkingDays
        }
    },
    created() {
        // do fetch process from firestore
        this.$store.dispatch('getWorkingDaysAction')
    }
}
</script>

<style scoped></style>