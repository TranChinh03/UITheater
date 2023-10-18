import { UserName, UserState } from "../Types/user.type";
import http from "../utils/http"
export const getUser = (page: number | string , limit: number | string) => 
    http.get<UserState>("me",{
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        params: 
        {
            _page: page,
            _limit: limit
        }
    });
export const getUserName = (page: number | string , limit: number | string) => 
    http.get<UserName>("me",{
        params: 
        {
            _page: page,
            _limit: limit
        }
    });