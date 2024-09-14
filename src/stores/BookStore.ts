import {defineStore} from 'pinia';
import { getCourse, getCourses, getCourseTopics, getTopic, getUser, openChatForTopic} from "@/api/api";
import {Chat, Course, Topic} from "@/types/types";

export const useCourseStore = defineStore('book',{
    // state -> propriedades reativas
    state: () => ({
        books: [] as Array<any>,
        topics: [] as Array<Topic>,
        selectedCourse : {} as Course,
        selectedTopic : {} as Topic,
        chat : {} as Chat,
        user: {} as Array<any>,
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
        async fetchBooks() : Promise<void> {
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
        async openChat(topic_id : number, course_id : number) : Promise<void>  {
            try {
                this.chat = await openChatForTopic(topic_id, course_id);
            }catch (err){
                console.error('Error opening chat');
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
        }
    }
});