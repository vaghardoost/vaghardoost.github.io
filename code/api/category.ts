import axios from "axios"
import ApiResult from "../model/api";
import Category from "../model/category";

export const list = async () => {
  const { data } = await axios.get<ApiResult<Category[]>>('http://localhost:31374/category')
  return data;
}

export const rootlist = async () => {
  const { payload: data } = await list();
  const result: Category[] = [];
  data.forEach(category => {
    if (!category.parent || category.parent === "") {
      result.push(category);
    }
  })
  return result;
}

export const get = async (id: string) => {
  const { data } = await axios.get<ApiResult<Category>>(`http://localhost:31374/category/${id}`);
  return data;
}
