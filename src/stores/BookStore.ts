import { defineStore } from 'pinia';
import {getCourses} from "@/api/api";

export const useCourseStore = defineStore('book',{
    // state -> propriedades reativas
    state: () => ({
        count: 0,
        books: [] as Array<any>,
    }),
    // actions -> metodos
    actions:{
        incrementCounter(): void{
            this.count++
        },
        async fetchBooks() {
            try {
                const data = await getCourses();
                this.books = data.courses;
            } catch (err) {
                console.error('Error getting books:', err);
            }
        }
    },
    // getters -> propriedades computadas
    getters:{
        showCount(): string{
            return 'O valor do count é: ' +this.count
        }
    }
});