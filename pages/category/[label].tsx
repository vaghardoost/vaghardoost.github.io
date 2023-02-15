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
    <header className={`header ${style.header}`}>
      <img className={style.icon} src={`/images/${category.avatar}`} />
      <h1>{category.label}</h1>
      <p>{category.description}</p>
    </header>
    <div className={`container ${style.container}`}>
      <div className="row">
        {
          (category.notes!.length > 0)
            ?
            category.notes!.map(note => <>
              <div className="col-lg-3 col-md-4 col-sm-2">
                <div className={style.card}>
                  <Link className="link" href={`/note/${note.title.replaceAll(' ', '_')}`}>
                    <h5>{note.title}</h5>
                  </Link>
                  <p>{new Date(Number.parseInt(note.createAt)).toLocaleDateString('fa-IR')}</p>
                </div>
              </div>
            </>)
            :
            <div className="col-md-12 center">
              <p>این دسته بندی مطلبی ندارد</p>
            </div>
        }
      </div>
    </div>
    <style jsx>{`
    .header {
      background: ${category.color ?? 'var(--dark-color)'} url(${headerPhoto.src});
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
