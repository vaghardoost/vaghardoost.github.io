import { generate } from "randomstring"
import { Frame } from "../../../code/model/note"
import NoteRich from "./note.rich"
import style from "../styles/frame.module.css"
export const NoteComponentFrame = ({frame}:Props) => {
  return <>
    <div className="center">
      <div className={`${style.frame}`}>
        {
          frame.richtext.map((rich)=>{
            return <>
              <NoteRich key={generate()} richtext={rich}/>
            </>
          })
        }
      </div>
    </div>
  </>
} 


interface Props {
  frame:Frame
}
