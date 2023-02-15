import axios from "axios"
import ApiResult from "../model/api"
import Category from "../model/category"
import Note from "../model/note";


export const getCategories = async ()=> {
    const { data } = await axios.get<ApiResult<Category[]>>("http://localhost:31374/category");
    return data.payload;
}

export const getPinNotes = async () => {
    const id = '13446686-f4f8-48be-b373-e2553afb98ab';
    const {data:noteResponse} = await axios.get<ApiResult<Note>>(`http://localhost:31374/note/${id}`);
    return noteResponse;
}

