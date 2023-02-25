import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import headerIMG from "../../styles/header.png"
import * as api from "../../code/api/note"
import { Col, Container, Row } from "react-bootstrap"
import Navbar from "../../components/layout/navbar"
import style from "./note.module.css"
import Note from "../../code/model/note"
import NoteComponent from "../../components/note.view"
import { useRouter } from "next/router"
import Category from "../../components/layout/category"

export default ({ note }: Props) => {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <>
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{ textAlign: 'center' }}>
            <h1>درحال بارگذاری</h1>
            <p>شکیبا باشید</p>
          </div>
        </div>
      </div>
    </>
  }
  return <>
    <Navbar />
    <Container>
      <Row>
        <Col md={8}>
          <div className={`${style.card} ${style.meduimFont}`}>
            <div className={style.title}>
              <h2>{note.title}</h2>
              <p>{new Date(Number.parseInt(note.createAt)).toLocaleDateString('fa-IR')}</p>
            </div>
            {
              (note.photo)
                ? <img className={style.card_img} src={`/images/${note.photo}`} />
                : <></>
            }
            <div className="around">
              <NoteComponent note={note} />
            </div>
          </div>
        </Col>
        <Col md={4}>
          {
            (note.category)
              ? <Category showNotes category={note.category} />
              : <></>
          }

          <div className="sticky-top">
            <div className={`${style.card} ${style.card_links} around`}>
              <h4 className="around center">{note.title}</h4>
              <ul>
                {
                  note.content!.map(section => {
                    if (section.type === 'title') {
                      return <li>
                        <Link className={style.link} href={`#${section.text}`}> {section.text} </Link>
                      </li>
                    }
                  })
                }
              </ul>
            </div>
          </div>

        </Col>
      </Row>
    </Container>
    <style jsx>{`
      .cardHeader{
        background: url(${headerIMG.src}) ${note.category?.color ?? "var(--dark-color)"};
        height: 120px;
        text-align: center;
        border-radius: 15px 15px 0 0;
        background-position: center;
        background-size: 600px;
        margin-bottom: 40px;
      }
    `}</style>
  </>
}

interface Props {
  note: Note
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { title: titleParams } = params!;
  const { payload: list } = await api.list();

  for (const item of list) {
    const { id, title } = item;

    if (title.replaceAll(' ', '_') === titleParams!.toString()) {
      const { payload: note, success } = await api.get(id);
      if (!success) {
        return { notFound: true }
      }
      return {
        props: { note: note },
        revalidate: 1
      }
    }

  }
  return { notFound: true }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { payload } = await api.list();
  const paths = payload.map(note => {
    return {
      params: { title: note.title.replaceAll(' ', '_') }
    }
  });
  return {
    paths: paths,
    fallback: true,
  }
}
