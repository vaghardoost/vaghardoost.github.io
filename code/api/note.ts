import axios from "axios"
import ApiResult from "../model/api";
import Category from "../model/category";
import Note from "../model/note";
import { namespace } from "./_namespace";

export const get = async (id: string) => {
  const { data: noteResponse } = await axios.get<ApiResult<Note>>(`http://localhost:31376/note/${namespace}/${id}`);
  if (noteResponse.success) {
    const note = noteResponse.payload;
    const { data: catResponse } = await axios.get<ApiResult<Category>>(`http://localhost:31376/category/${namespace}/${note.category}`);
    if (catResponse.success) {
      note.category = catResponse.payload;
    }
  }
  return noteResponse;
}

export const list = async () => {
  const { data } = await axios.get<ApiResult<Note[]>>(`http://localhost:31376/note/${namespace}`);
  return data;
}

