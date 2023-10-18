<template>
  <div>
    <h1>Show Course</h1>
    <p>title: {{ course.title }}</p>
      <p>instructor: {{ course.instructor }}</p>
      <p>description: {{ course.description }}</p>
      <p>total_stunent: {{ course.total_student }}</p>
      <p>status: {{ course.status }}</p>
      <p>type: {{ course.type }}</p>
  </div>
</template>
<script>
import CourseService from "@/services/CourseService";

export default {
  data() {
    return {
      user: null
    };
  },
  async created() {
    let courseId = this.$route.params.courseId;
    this.course = (await CourseService.show(courseId)).data
    console.log(this.courseId)
  }
};
</script>
<style scoped></style>
