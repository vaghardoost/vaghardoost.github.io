import Category from "../../code/model/category";
import style from "./category.module.css"
import { CSSProperties } from "react";
import headerIMG from "../../styles/header.png"
import Link from "next/link";

export default ({ category, showNotes }: Props) => {
  const headerStyle: CSSProperties = {
    backgroundPosition: 'center',
    background: `url(${headerIMG.src}) ${category.color ?? 'var(--header-color)'}`,
    backgroundSize: '600px',
    height: '125px',
    textAlign: 'center',
    borderRadius: '15px 15px 0 0',
    marginBottom: '30px',
  }
  const height: CSSProperties = (showNotes) ? {} : { height: '300px' };
  return <>
    <div className={`${style.card}`} style={height}>
      <div style={headerStyle}>
        <img className={style.image} src={`/images/${category.avatar}`} />
      </div>
      <div className={`${style.card_content} around center`}>
        <h4>{category.label}</h4>
        <p>{category.description}</p>
        {
          (showNotes)
            ?
            <ul>
              {
                category.notes?.map((note) =>
                  <li>
                    <Link className="link" href={`/note/${note.title.replaceAll(' ', '_')}`}>{note.title}</Link>
                  </li>)
              }
            </ul>
            :
            <></>
        }
      </div>
    </div>
  </>
};


interface Props {
  category: Category
  showNotes?: boolean
}
