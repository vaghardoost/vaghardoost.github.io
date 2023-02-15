import Note from "./note"
export default interface Category {
  id: string
  label: string
  parent: string
  description: string
  avatar: string
  color: string
  notes?: Note[]
  avatarPostfix: string
}