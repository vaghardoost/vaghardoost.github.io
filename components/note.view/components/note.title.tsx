import { Title } from "../../../code/model/note"

export const NoteComponentTitle = ({ title }: Props) => {
  const TitleHeader = `${title.header}` as keyof JSX.IntrinsicElements;
  return <>
    <TitleHeader id={`${title.text}`} style={{ margin: '10px' }}>
      {
        (title.link)
          ? <a href={title.link} target="_blank" className="link">{title.text}</a>
          : title.text
      }
    </TitleHeader>
  </>
}

interface Props {
  title: Title
}
