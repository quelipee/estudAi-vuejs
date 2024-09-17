import {defineStore} from 'pinia';
import {
    fetchMessageChat,
    getCourse,
    getCourses,
    getCourseTopics,
    getTopic,
    getUser,
    openChatForTopic,
    yourCourses
} from "@/api/api";
import {Chat, Course, Topic, User} from "@/types/types";

export const useCourseStore = defineStore('book',{
    // state -> propriedades reativas
    state: () => ({
        books: [] as Array<any>,
        topics: [] as Array<Topic>,
        courses : [] as Array<Course>,
        selectedCourse : {} as Course,
        selectedTopic : {} as Topic,
        chat :{} as Array<Chat>,
        user: {} as User,
        topic : {} as Topic,
    }),
    // actions -> metodos
    actions:{
        async fetchUser() {
          try {
              this.user = await getUser();
          }catch (error){
              console.log(error);
          }
        },
        async setCourse(course: number | string | string[]) : Promise<void> {
            try {
                this.selectedCourse = await getCourse(course);
            } catch (err) {
                console.error('Error setting course');
            }
        },
        async fetchYourCourses() {
          try {
              this.courses = await yourCourses();
          }catch (error){
              console.log(error)
          }
        },
        async fetchBooks() : Promise<void> {//TODO LATER
            try {
                const data = await getCourses();
                this.books = data.courses;
            } catch (err) {
                console.error('Error getting books:', err);
            }
        },
        async updateBooks(courses: Course[]) {
            this.books = courses;
        },
        async updateYourCourses(courses: Course[]) {
            console.log(courses);
            this.courses = courses;
        },
        async catchCourseTopics(id : string | string[]) : Promise<void>  {
            try {
                this.topics = await getCourseTopics(id);
            }catch (err){
                console.error('Error getting books:', err);
            }
        },
        async setTopic(id : number){
          try {
              this.selectedTopic = await getTopic(id);
          }catch (err){
              console.log(err);
          }
        },
        async updateTopics(topics: Topic[]) {
            this.topics = topics;
        },
        async openChat(course_id : number, topic_id : number, action : string) : Promise<void>  {
            try {
                this.chat = await openChatForTopic(course_id, topic_id, action);
            }catch (err){
                console.error('Error opening chat');
            }
        },
        async fetchMessageForAPI(topic_id : number) {
            try {
                this.chat = await fetchMessageChat(topic_id);
            }catch (err){
                console.log(err);
            }
        }
    },
    // getters -> propriedades computadas
    getters:{
        showTitleCourse() : any {
            return this.selectedCourse.title;
        },
        showTitleTopics() : any {
            return this.topics;
        },
        showTitleTopic() : any {
            return this.topic.title
        },
        showMessage() : any {
            return this.chat
        },
    }
});