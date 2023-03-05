import style from "./styles/navbar.module.css";
import headerStyle from "./styles/header.module.css";
import Category from "../../code/model/category";
import Link from "next/link";

export default ({ data }: Props) => <>
  <div className={headerStyle.header}>
    <div className={headerStyle.title}>
      <p>افتادگی آموز اگر طالب فیضی ، هرگز نخورد آب زمینی که بلند است</p>
    </div>
    <div className={headerStyle.title}>
      <h1>فرهنگ وقردوست</h1>
      <p>وبلاگ شخصی و مطالب و موضوعات مختلف</p>
    </div>

    <nav className={style.navbar}>
      <ul className={style.navbar__list}>
        <li className={style.navbar__has_megamenu}>
          <Link href="/category">دسته بندی مطالب</Link>
          <div className={style.navbar__megamenu}>
            <div className="container">
              <div className="row">
                {
                  data.map(category =>
                    <>
                      <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3">
                        <Link href={`/category/${category.label.replaceAll(' ', '_')}`}>
                          <div className={`${style.megamenu__item} `}>
                            <img src={`/images/${category.avatar}`} />
                            <div>
                              <p className={style.megamenu__item_title}>{category.label}</p>
                              <p className={style.megamenu__item_desc}>{category.description}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </li>
        <li><a href="/resume">روزمه</a></li>
        {/* <li><a href="#">ارتباط</a></li> */}
      </ul>
    </nav>

  </div>
</>

interface Props {
  data: Category[]
}
