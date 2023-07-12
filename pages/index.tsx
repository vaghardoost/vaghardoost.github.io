import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Col, Container } from "react-bootstrap"
import * as api from "../code/api/main"
import Category from "../code/model/category";
import Note from "../code/model/note";
import Header from "../components/landing/header";

import style from "./index.module.css";

const Home = ({ category, notes }: Props) => {
  return <>
    <Head>
      <title>فرهنگ وقردوست</title>
    </Head>
    <Header data={category} />
    <Container>

      <Col md={12} className="center">
        <h2 className="around">تاپیک</h2>
        <p>
          مطالب از جهت کلی توی این سیستم به قسمت های زیر تقسیم میشن
        </p>
      </Col>

      <div className={`row ${style.cat_row}`}>
        {
          category.map(({ parent, label, description }) => {
            if (parent === "" || !parent) {
              return <div className="col-md-4">
                <Link className="link" href={`/category/${label.replaceAll(' ', '_')}`}>
                  <div className={style.card_cat}>
                    <h2>{label}</h2>
                    <p>{description}</p>
                  </div>
                </Link>
              </div>
            }
          })
        }
      </div>

      <Col md={12} className="center">
        <h2 className="around">نوشته های برتر</h2>
        <p>
          فهرست بعضی از نوشته هایی که منتشر شده
        </p>
      </Col>

      <div className="row">
        {
          notes.map((note) =>
            <div className="col-md-4">
              <Link className="link" href={`/note/${note.title.replaceAll(' ', '_')}`}>
                <div className={style.card_note}>
                  <img src={`/images/${note.photo}`} />
                  <div className={style.card_note_content}>
                    <h5>{note.title}</h5>
                    {
                      category.map((item) => {
                        if (item.id === note.category!.toString()) {
                          return <p>{item.label}</p>
                        }
                      })
                    }
                  </div>
                </div>
              </Link>
            </div>
          )
        }
      </div>
    </Container>
  </>
}

interface Props {
  category: Category[]
  notes: Note[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const category = await api.getCategories();
  // const notes = await api.getPinNotes();
  return {
    props: {
      category: category,
      notes: []
    },
    revalidate: 1
  }
}

export default Home;