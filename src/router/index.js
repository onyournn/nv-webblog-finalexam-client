import Vue from 'vue'
import Router from 'vue-router'
import CourseIndex from '@/components/Course/Index'
import CourseEdit from '@/components/Course/EditCourse'
import CourseShow from '@/components/Course/ShowCourse'
import CourseCreate from '@/components/Course/CreateCourse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/course/create',
      name: 'course-create',
      component: CourseCreate
    },
    {
      path: '/course/edit/:courseId',
      name: 'course-edit',
      component: CourseEdit
    },
    {
      path: '/course/:courseId',
      name: 'course',
      component: CourseShow
    },
    {
      path: '/courses',
      name: 'courses',
      component: CourseIndex
    },

    

  ]
})
