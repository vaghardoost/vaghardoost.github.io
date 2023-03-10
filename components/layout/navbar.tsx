import Link from "next/link"
import style from "./navbar.module.css"

export default () => {
  return <>
    <div className={style.navbar + ' _navbar'}>
      <div className='container-fluid nav'>
        <ul>
          <li> <Link className={style.navLink} href="/">صفحه ی اصلی</Link> </li>
          <li> <Link className={style.navLink} href="/category">دسته بندی ها</Link> </li>
          <li> <Link className={style.navLink} href="/resume">رزومه</Link> </li>
        </ul>
      </div>
    </div>
  </>
}
