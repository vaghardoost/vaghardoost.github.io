import { Photo } from "../../../code/model/note"
import NoteRich from "./note.rich"
import style from "../styles/photo.module.css"

export const NoteComponentPhoto = ({ photo }: Props) => {
  const hasCaption = photo.richtext.length > 0;
  const url = photo.url.split('/')
  return <>
    <div className={style.cardContainer}>
      <div className={style.card}>
        <img className={(hasCaption) ? style.cardImg : style.cardImgSolid} src={`/images/${url[url.length - 1]}`} />
        {
          (hasCaption)
            ?
            <div className={style.cardDesc}>
              {
                photo.richtext.map((richtext) => <NoteRich richtext={richtext} />)
              }
            </div>
            :
            <></>
        }
      </div>
    </div>
  </>
}

interface Props {
  photo: Photo
}
