import { GetStaticProps } from "next"
import CategoryModel from "../../code/model/category"
import * as api from "../../code/api/category"
import { Container, Row } from "react-bootstrap"
import Navbar from "../../components/layout/navbar"
import Category from "../../components/layout/category"
import Link from "next/link"

export default ({ list }: Props) => {
  return <>
    <Navbar />
    <Container>
      <h1 className='around center'>تاپیک ها</h1>
      <h4 className='around center'>تمامی دسته بندی ها ی مطالب</h4>
      <div>
        <Row>
          {
            list.map(cat => <>
              <div className="col-md-4 col-sm-12 col-lg-4">
                <Link className="link" href={`/category/${cat.label.replaceAll(' ', '_')}`}>
                  <Category category={cat} />
                </Link>
              </div>
            </>)
          }
        </Row>
      </div>

    </Container>
  </>
}

interface Props {
  list: CategoryModel[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { payload: result } = await api.list()
  return {
    props: {
      list: result
    },
    revalidate: 1
  }
}
