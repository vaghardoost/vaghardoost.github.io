import axios from "axios"
import ApiResult from "../model/api";
import Category from "../model/category";
import Note from "../model/note";

export const get = async (id:string) => {
  const {data:noteResponse} = await axios.get<ApiResult<Note>>(`http://localhost:31374/note/${id}`);
  if (noteResponse.success) {
    const note = noteResponse.payload;
    const { data:catResponse } = await axios.get<ApiResult<Category>>(`http://localhost:31374/category/${note.category}`);
    if (catResponse.success) {
      note.category = catResponse.payload;
    }
  }
  return noteResponse;
}

export const list = async () => {
  const { data } = await axios.get<ApiResult<Note[]>>(`http://localhost:31374/note`);  
  return data;
}

