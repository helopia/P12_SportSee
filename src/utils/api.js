// import axios from "axios";
// // import React from "react";
//
// const api = axios.create({
//     baseURL: "http://localhost:3000/"
// });
//
// // export const getUserInfos = async (id) => {
// //     try {
// //         const res = await api.get(`user/${id}`);
// //         return res.data;
// //     } catch (e) {
// //         console.log(e);
// //     }
// // };
// export const getUserData = async (id) => {
//     const res = await api.get(`user/${id}`)
//         .catch(e => console.error(e))
//
//     return res.data;
// };
//
//
// export const getUserActivity = async (id) => {
//     const res = await api.get(`user/${id}/activity`)
//         .catch(e => console.error(e))
//
//     return res.data;
// };
// export const getUserAverageSessions = async (id) => {
//     const res = await api.get(`user/${id}/average-sessions`)
//         .catch(e => console.error(e))
//
//     return res.data;
// };
// export const getUserPerformance = async (id) => {
//     const res = await api.get(`user/${id}/performance`)
//         .catch(e => console.error(e))
//
//     return res.data;
// };
//
//
import axios from "axios";
import UserMainData from "../reformat/UserMainData";
import UserActivity from "../reformat/UserActivity";
import UserSession from "../reformat/UserSession";
import UserPerformance from "../reformat/UserPerformance";
import {USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE} from "../router/mockedData";

/** modify this const to use mocked data or api*/
const ENV = "dev";


export const getUserMainData = async (id) => {
    if (ENV === "dev") {
        const data = USER_MAIN_DATA.find(
            (element) => element.id.toString() === id
        );
        return new UserMainData(data);
    } else {
        try {
            const data = await axios
                .get(`http://localhost:3000/user/${id}`)
                .then((response) => response.data.data);
            return new UserMainData(data);
        } catch (error) {
            console.error("ERREUR API : " + error);
            alert("Erreur API, veuillez réessayer ultérieurement.");
        }
    }
};


export const getUserActivity = async (id) => {
    if (ENV === "dev") {
        const data = USER_ACTIVITY.find(
            (element) => element.userId.toString() === id
        );
        return new UserActivity(data);
    } else {
        try {
            const data = await axios
                .get(`http://localhost:3000/user/${id}/activity`)
                .then((response) => response.data.data);
            return new UserActivity(data);
        } catch (error) {
            console.error("ERREUR API : " + error);
            alert("Erreur API, veuillez réessayer ultérieurement.");
        }
    }
};


export const getUserSession = async (id) => {
    if (ENV === "dev") {
        const data = USER_AVERAGE_SESSIONS.find(
            (element) => element.userId.toString() === id
        );
        return new UserSession(data);
    } else {
        try {
            const data = await axios
                .get(`http://localhost:3000/user/${id}/average-sessions`)
                .then((response) => response.data.data);
            return new UserSession(data);
        } catch (error) {
            console.error("ERREUR API : " + error);
            alert("Erreur API, veuillez réessayer ultérieurement.");
        }
    }
};


export const getUserPerformance = async (id) => {
    if (ENV === "dev") {
        const data = USER_PERFORMANCE.find(
            (element) => element.userId.toString() === id
        );
        return new UserPerformance(data);
    } else {
        try {
            const data = await axios
                .get(`http://localhost:3000/user/${id}/performance`)
                .then((response) => response.data.data);
            return new UserPerformance(data);
        } catch (error) {
            console.error("ERREUR API : " + error);
            alert("Erreur API, veuillez réessayer ultérieurement.");
        }
    }
};
