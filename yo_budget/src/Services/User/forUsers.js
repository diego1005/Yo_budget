import { sendByApi } from "../../Common/Api/api";

export const sendReg = async (body) => {
    const data = await sendByApi("user", "signin", undefined, "POST", body);
    return data;
}

export const sendLog = async (body) => {
    const data = await sendByApi("user", "login", undefined, "POST", body);
    return data;
}