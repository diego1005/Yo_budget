import { getByApi } from "../../Common/Api/api";

export const listAllUsers = async () => {
    const data = await getByApi("user", "list");
    return data;
}

export const listOneUser = async (id) => {
    const data = await getByApi("user", "list", id);
    return data;
}

export const logoutUser = async () => {
    const { status } = await getByApi("user", "logout");
    return status;
}

export const checkToken = async () => {
    const data = await getByApi("user", "checkToken");
    return data;
}