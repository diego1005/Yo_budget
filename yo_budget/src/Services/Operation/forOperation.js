import { sendByApi } from "../../Common/Operation/api";

export const addOperation = async (body) => {
    const data = await sendByApi("operation", "add", undefined, "POST", body);
    return data;
}

export const editOperation = async (body, id) => {
    const data = await sendByApi("operation", "edit", id, "PUT", body);
    return data
}