import axios from "axios";

const api =  axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

const apiToken = axios.create({
    baseURL: import.meta.env.VITE_APP_TOKEN,
    headers: {
        "Content-Type": "application/json",
    },
});

const apiAuth = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    withCredentials: true
});

export const signInUserAuthenticated = async (email: string, password: string) => {
    try {
        await getToken();
        const res = await api.post("login",{
            email : email,
            password: password,
        });
        const token = res.data.user.token;
        localStorage.setItem("token", token);
        return res.data;
    }catch (err){
        console.log('')
    }
};

export const getUser = async () => {
  try {
      const res = await apiAuth.get("app/profile");
      return res.data;
  }catch (error){
      console.log(error);
  }
};

export const getToken = async () => {
    try {
        return await apiToken.get('/sanctum/csrf-cookie');
    }catch (err){
        console.log('error get token!!')
    }
}
export const getCourses = async() => {
    try {
        const res = await api.get("courses");
        console.log(res.data);
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
};

export const openChatForTopic = async (topic : number, course: number) => {
    try {
        const res =
            await apiAuth.get("app/chat/" + course + '/topic/' + topic + '/message');
        console.log(res);
        return res.data;
    }catch (err){
        console.log('error open chat')
    }
};

export const fetchTopic = async (topic : number) => {
    try {
        const res = await api.post("fetchTopic",{
            id: topic
        });
        return res.data.topic;
    }catch (error){
        console.log(error);
    }
}