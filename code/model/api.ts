export default interface ApiResult<T> {
  code: number
  message: string
  success: boolean
  payload: T
}