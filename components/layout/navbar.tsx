import Link from "next/link"
import { Container } from "react-bootstrap"
import style from "../../styles/navbar.module.css"

export default ()=> {
  return <>
    <div className={style.navbar}>
      <Container className='nav'>
        <ul>
          <li> <Link className={style.navLink} href="/">صفحه ی اصلی</Link> </li>
          <li> <Link className={style.navLink} href="/category">دسته بندی ها</Link> </li>
          <li> <Link className={style.navLink} href="#">درباره ما</Link> </li>
        </ul>
      </Container>
    </div>

    <style jsx>
      {`
        li {
          display: inline-flex;
        }
      `}
    </style>
  </>
}