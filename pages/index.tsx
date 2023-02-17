import { GetStaticProps } from "next";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap"
import * as api from "../code/api/main"
import Category from "../code/model/category";
import Note from "../code/model/note";
import Header from "../components/landing/header";
import NoteViewer from "../components/note.view";

const Home = ({ category, note }: Props) => {
  return <>
    <Header data={category} />
    <Container>
      <Row>
        <Col md={12} className="center">
          <h2 className="around">درباره ما</h2>
          <h5 className="around">این بلاگ چیست و چه هدفی را دنبال میکند؟</h5>
          <p style={{ marginBottom: '150px' }}>
            همون حرف هایی که توی توییتر یا تلگرام میزنن،من فقط دلم خواست اتاقم رو خودم بسازم،همین :)
          </p>
        </Col>

        <Col md={12} className="center">
          <h2 className="around">مطلب برتر</h2>
          <Link className='link' href={`/note/${note.title.replaceAll(' ', '_')}`}>
            <h5>{note.title}</h5>
          </Link>
        </Col>

        <Col md={12}>
          <div className={" around"}>
            <NoteViewer note={note} />
          </div>
        </Col>

      </Row>
    </Container>
  </>
}

interface Props {
  category: Category[]
  note: Note
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const category = await api.getCategories();
  const { payload: note } = await api.getPinNotes();
  return {
    props: {
      category: category,
      note: note
    },
    revalidate: 1
  }
}

export default Home;