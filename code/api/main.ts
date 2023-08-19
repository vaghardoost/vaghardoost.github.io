import axios from "axios"
import ApiResult from "../model/api"
import Category from "../model/category"
import Note from "../model/note";
import { namespace } from "./_namespace";


export const getCategories = async () => {
    const { data } = await axios.get<ApiResult<Category[]>>(`http://localhost:31376/category/${namespace}`);
    return data.payload;
}

export const getPinNotes = async () => {
    const list = [
        '64d8cd3142d55f88a06365b5',
        '64d8cb1b42d55f88a06365aa',
        '64d8cd8042d55f88a06365b9'
    ];
    const result: Note[] = [];
    for (const id of list) {
        const { data } = await axios.get<ApiResult<Note>>(`http://localhost:31376/note/${namespace}/${id}`);
        result.push(data.payload);
    }
    return result;
}

