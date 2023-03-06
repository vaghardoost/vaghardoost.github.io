import axios from "axios"
import ApiResult from "../model/api"
import Category from "../model/category"
import Note from "../model/note";


export const getCategories = async () => {
    const { data } = await axios.get<ApiResult<Category[]>>("http://localhost:31374/category");
    return data.payload;
}

export const getPinNotes = async () => {
    const list = [
        '24ae5013e83ef5dd',
        '78ba8400bfd21fa6',
        'cb19c000d579cb4e'
    ];
    const result: Note[] = [];
    for (const id of list) {
        const { data } = await axios.get<ApiResult<Note>>(`http://localhost:31374/note/${id}`);
        result.push(data.payload);
    }
    return result;
}

