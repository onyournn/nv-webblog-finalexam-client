<template>
  <div>
    <h1>Get All Course</h1>
    <div>จํานวนผู้ใช้งาน {{ users.length }}</div>
    <div v-for="user in users" v-bind:key="user.id">
      <div>id: {{ user.id }}</div>
      <div>ชื่อ-นามสกุล: {{ user.name }} - {{ user.lastname }}</div>
      <div>email: {{ user.email }}</div>
      <div>password: {{ user.password }}</div>
      <p>
        <button v-on:click="navigateTo('/course/' + course.id)">
          ดูข้อมูลผู้ใช้
        </button>
        <button v-on:click="navigateTo('/course/edit/' + course.id)">
          แกไขข้อมูล
        </button>
        <button v-on:click="deleteUser(course)">ลบข้อมูล</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import CourseServices from "@/services/CourseService";
export default {
  data() {
    return {
      course: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteCourse(course) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await CourseServices.delete(course);
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.courses = (await CourseServices.index()).data;
    }
  },
  async created() {
    this.courses = (await CourseServices.index()).data;
  }
};
</script>
<style scoped></style>
