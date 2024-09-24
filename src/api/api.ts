import axios from "axios";
import {User} from "@/types/types";

const api =  axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

const apiToken = axios.create({
    baseURL: import.meta.env.VITE_APP_TOKEN,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});
export const signUpUserAuthenticated = async (user : User) => {
    try {
        const res = await api.post("/register", {
           name: user.name,
           email: user.email,
           password: user.password,
           password_confirmation: user.confirmPassword,
        });
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}
export const getToken = async () => {
    try {
        return await apiToken.get('/sanctum/csrf-cookie');
    }catch (err){
        console.log('error get token!!')
    }
}
export const signInUserAuthenticated = async (email: string, password: string) => {
        await getToken();
        const res = await api.post("login",{
            email : email,
            password: password,
        }).then((res : any) => {
            const token = res.data.user.token;
            localStorage.setItem("token", token);
            return res.data;
        });

};
export const signOutUserAuthenticated = async () => {
  try {
      const res = await api.post("app/logout",{},{
          headers : {
              "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
      });
      return res.data
  }catch (err){
      console.log(err);
  }
};

export const getUser = async () => {
  try {
      const res = await api.get("app/profile",{
          headers:{
              "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
      });
      return res.data.profile;
  }catch (error){
      console.log(error);
  }
};

export const getCourses = async() => {
    try {
        const res = await api.get("app/courses",{
            headers : {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        });
        return res.data;
    }catch(err) {
        console.log('Error getting courses');
    }
};

export const yourCourses = async() => {
    try {
        const res = await api.get('app/your_courses',{
            headers : {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        });
        return res.data.courses;
    }catch (err){
        console.log(err)
    }
}

export const getCourseTopics = async (id : string | string[]) => {
    try {
        const res = await api.get("app/topics/" + id,{
            headers : {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        });
        return res.data.topics;
    }catch(err) {
        console.log('Error getting course topics');
    }
};

export const getCourse = async (course : number | string | string[]) => {
    try {
        const res = await api.get("app/findCourse/" + course,{
            headers : {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        });
        return res.data.course;
    }catch (err){
        console.error('Error getting course');
    }
};
export const getTopic = async (id : number) => {
    try {
        const res = await api.get('app/findTopic/' + id,{
            headers : {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        });
        return res.data.course;
    }catch (err){
        console.log(err);
    }
};
export const openChatForTopic = async (course : number, topic: number, action : string) => {
    try {
        const res =
            await api.post("app/chat/" + course + '/topic/' + topic + '/message',{ action },
                {
                headers : {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            });
        return res.data;
    }catch (err){
        console.log('error open chat')
    }
};
export const fetchMessageChat = async (topicId : number) => {
    try {
        const res = await api.get("app/messageChat/" + topicId,{
            headers : {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        });
        return res.data.responseChat.message_history;
    }catch (err){
        console.log('Error fetching messageChat', err);
    }
};

export const joinUserForCourse = async(course : number) => {
    try {
        const res = await api.get('app/join-course/' + course,{
            headers : {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        });
        return res.data;
    }catch (err){
        console.log(err);
    }
};
export const message_day = async () => {
    try {
        const res = await api.get('message_day');
        return res.data.message_day
    }catch (err){
        console.log(err);
    }
};
export const firstMessage = async (topic : number) => {
    try {
        const res = await api.get('app/introduction/' + topic,{
            headers : {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        });
        return res.data.first_response.message_history[0].message;
    }catch (err){
        console.log(err);
    }
};