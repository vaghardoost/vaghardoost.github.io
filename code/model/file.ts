export default interface File {
  id: string
  path: string
  type: "photo" | "audio" | "video" | "doc"
  postfix: string
}
