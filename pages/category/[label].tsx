import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import * as api from "../../code/api/category"
import Category from "../../code/model/category";
import headerPhoto from "../../styles/header.png";

import style from "./category.module.css"


export default ({ category }: Props) => {
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
    <div className={style.main}>
      <header className={style.header}>
        <img src={`/images/${category.avatar}`} className={style.header_icon} />
        <div className={style.header_content}>
          <h1>{category.label}</h1>
          <p>{category.description}</p>
        </div>
      </header>
      <div className={style.main_content}>
        <div className="row">
          {
            (category.notes!.length > 0)
              ?
              category.notes?.map((note) => <>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <Link className="link" href={`/note/${note.title.replaceAll(' ', '_')}`}>
                    <div className={style.card}>
                      {
                        note.photo
                          ? <img src={`/images/${note.photo}`} />
                          : <div><p>بدون تصویر</p></div>
                      }
                      <h5 className="around">{note.title}</h5>
                    </div>
                  </Link>
                </div>
              </>)
              : <h4>توی این دسته بندی هنوز نوشته ای گذاشته نشده</h4>
          }
        </div>
      </div>
    </div>
    <style jsx>{`
      header {
        background: ${category.color ?? 'var(--header-color)'} url(${headerPhoto.src});
        background-size: 1000px;
      }
    `}</style>
  </>
}

interface Props {
  category: Category
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { payload: result } = await api.list();

  const paths = result.map((cat) => {
    return { params: { label: cat.label.replaceAll(' ', '_') } }
  });

  return {
    paths: paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { label } = params!;
  const { payload: list } = await api.list();

  for (const item of list) {
    const { id, label: cat_label } = item;
    if (cat_label.replaceAll(' ', '_') === label!.toString().replaceAll(' ', '_')) {
      const { payload, success } = await api.get(id)
      if (!success) { return { notFound: true } }
      return {
        props: { category: payload },
        revalidate: 1
      }
    }
  }

  return { notFound: true }
}
