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
      <h4 className='around center'>تقسیم بندی محتوای سایت</h4>
      <div>
        <Row style={{ justifyContent: 'center' }}>
          {
            list.map(cat => <>
              <div className="col-md-6 col-sm-12 col-lg-6">
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
  const result = await api.rootlist();
  return {
    props: {
      list: result
    },
    revalidate: 1
  }
}
