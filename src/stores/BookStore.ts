import {defineStore} from 'pinia';
import {getCourse, getCourses, getCourseTopics} from "@/api/api";
import {Course} from "@/types/types";

export const useCourseStore = defineStore('book',{
    // state -> propriedades reativas
    state: () => ({
        books: [] as Array<any>,
        topics: [] as Array<any>,
        selectedCourse : {} as Course,
    }),
    // actions -> metodos
    actions:{
        async setCourse(course: number | string | string[]) {
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
        async catchCourseTopics(id : string | string[]) : Promise<void>  {
            try {
                this.topics = await getCourseTopics(id);
            }catch (err){
                console.error('Error getting books:', err);
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
        // showCount(): string{
        //     return 'O valor do count é: ' +this.count
        // }
    }
});