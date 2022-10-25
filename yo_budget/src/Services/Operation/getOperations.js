import { getByApi } from "../../Common/Operation/api"

export const listAllOperations = async () => {
    const data = await getByApi("operation", "list")
    return data;
}

export const findOneOperation = async (id) => {
    const data = await getByApi("operation", "find", id);
    return data;
}

