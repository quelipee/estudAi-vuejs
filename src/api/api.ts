import axios from "axios";

const api =  axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    headers: {
        "Content-Type": "application/json"
    },
});

export const getCourses = async() => {
    try {
        const res = await api.get("courses");
        return res.data;
    }catch(err) {
        console.log('Error getting courses');
        throw err;
    }
};

export const getCourseTopics = async (id : string | string[]) => {
    try {
        const res = await api.get("topics/" + id);
        return res.data;
    }catch(err) {
        console.log('Error getting course topics');
    }
};

export const getCourse = async (course : number | string | string[]) => {
    try {
        const res = await api.get("findCourse/" + course);
        return res.data;
    }catch (err){
        console.error('Error getting course');
    }
}