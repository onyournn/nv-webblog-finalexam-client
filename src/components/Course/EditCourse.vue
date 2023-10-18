<template>
  <div>
    <h1>Create Course</h1>
    <form v-on:submit.prevent="createCourse">
      <p>title: <input type="text" v-model="course.title" /></p>
      <p>instructor: <input type="text" v-model="course.instructor" /></p>
      <p>description: <input type="text" v-model="course.description" /></p>
      <p>total_stunent: <input type="text" v-model="course.total_student" /></p>
      <p>status: <input type="text" v-model="course.status" /></p>
      <p>type: <input type="text" v-model="course.type" /></p>
      <p><button type="submit">create course</button></p>
    </form>
    <hr />
    <div>
      <p>title: {{ course.title }}</p>
      <p>instructor: {{ course.instructor }}</p>
      <p>description: {{ course.description }}</p>
      <p>total_stunent: {{ course.total_student }}</p>
      <p>status: {{ course.status }}</p>
      <p>type: {{ course.type }}</p>
    </div>
  </div>
</template>
<script>
import CourseService from "@/services/CourseService";

export default {
  data() {
    return {
      course: {
        title: "",
        instructor: "",
        description: "",
        total_student: "",
        status: "",
        type: "",
        status: "active"
      }
    };
  },
  methods: {
    async editCourse() {
      try {
        await CourseService.put(this.course);
        this.$router.push({
          name: "course"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let courseId = this.$route.params.courseIdId;
      this.course = (await CourseService.show(courseId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
