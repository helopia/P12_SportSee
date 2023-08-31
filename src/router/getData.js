import {getUserActivity, getUserAverageSessions, getUserData, getUserPerformance} from "../utils/api";

// import {getUserActivity, getUserAverageSessions, getUserData, getUserPerformance} from "./mockedData";


export const getData = async (type, id) => {
    let data = [];

    switch (type) {
        case "USER_ACTIVITY" :
            data = await getUserActivity(id);
            break;
        case "USER_PERFORMANCE":
            data = await getUserPerformance(id);
            break;
        case "USER_AVERAGE_SESSIONS" :
            data = await getUserAverageSessions(id);
            break;
        case "USER_MAIN_DATA" :
            data = await getUserData(id);
            break;
    }
    return data;
}
