import { generate } from "randomstring"
import { Frame } from "../../../code/model/note"
import NoteRich from "./note.rich"
import style from "../styles/frame.module.css"

export const NoteComponentFrame = ({ frame }: Props) => {
  return <>
    <div className={`${style.frame}`}>
      {
        frame.status
          ? <img src={`/static/ic_${frame.status}.png`} />
          : <></>
      }
      {
        frame.content.map((rich) => {
          return <div>
            {
              frame.title
                ? <h2>{frame.title}</h2>
                : <></>
            }
            <NoteRich key={generate()} richtext={rich} />
          </div>
        })
      }
    </div>
  </>
}


interface Props {
  frame: Frame
}
