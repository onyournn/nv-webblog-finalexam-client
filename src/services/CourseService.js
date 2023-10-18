import Api from '@/services/Api'
export default {
    index(course) {
        return Api().get('courses')
    },
    show(courseId) {
        return Api().get('course/' + courseId)
    },
    post(course) {
        return Api().post('course', course)
    },
    put(course) {
        return Api().put('course/' + course.id, course)
    },
    delete(course) {
        return Api().delete('coorse/' + course.id, course)
    },
}