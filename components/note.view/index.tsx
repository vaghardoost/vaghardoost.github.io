import Note, { Photo, Caption, Frame, Title, Code } from "../../code/model/note"
import { NoteComponentCode } from "./components/note.code";
import { NoteComponentFrame } from "./components/note.frame";
import { NoteComponentPhoto } from "./components/note.photo";
import { NoteComponentTitle } from "./components/note.title";
import NoteCaptionView from "./components/note.caption";
import { generate } from "randomstring";

export default function ({note}:Props) {
  return <>
  {
    note.content!.map((section)=>{
      const { type } = section;
      const key:React.Key = generate({length:8});
      switch (type) {
        case "caption":
          return <NoteCaptionView key={key} caption={section as Caption}/>
        case "photo":
          return <NoteComponentPhoto key={key} photo = {section as Photo}/>
        case "frame":
          return <NoteComponentFrame key={key} frame={section as Frame}/>
        case "title":
          return <NoteComponentTitle key={key} title={section as Title}/>
        case "code":
          return <NoteComponentCode key={key} code={section as Code} />
        default:
          return <></>
      }
    })
  }
</>
}


interface Props {
  note: Note
}