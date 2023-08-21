import { generate } from "randomstring";
import { Caption } from "../../../code/model/note"
import NoteRich from "./note.rich"

export default ({ caption }: Props) => {
  return <div style={{ margin: '20px' }}>
    {
      caption.link
        ? <a className="link" href={caption.link} target="_blank">
          {
            caption.content.map((rich) => {
              return <NoteRich key={generate()} richtext={rich} />
            })
          }
        </a>
        : caption.content.map((rich) => {
          return <NoteRich key={generate()} richtext={rich} />
        })
    }
  </div>
}

interface Props {
  caption: Caption
}
