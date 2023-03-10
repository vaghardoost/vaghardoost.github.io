import { GetStaticProps } from "next"
import Head from "next/head";
import style from "./resume.module.css";
import linkIcon from "../../styles/images/link.svg";
import eduIcon from "../../styles/images/edu.svg";
import codeIcon from "../../styles/images/code.svg";
import brainIcon from "../../styles/images/brain.svg";
import textuer from "../../styles/images/bedge-grunge.png";

export default ({ }: Props) => {
  return <>
    <Head>
      <title>روزمه من</title>
    </Head>
    <div className="container">
      <div className="row">

        <div className="col-md-12">
          <div className={style.card}>
            <div className={style.card_bar}>
              <ul>
                <li><a className="link" href="#">تحصیلات</a></li>
                <li><a className="link" href="#">مهارت</a></li>
                <li><a className="link" href="#">نمونه کار</a></li>
                <li><a className="link" href="#">لینک</a></li>
              </ul>
              <ul>
                <li>
                  <a className="link" href="#">بلاگ</a>
                </li>
              </ul>
            </div>
            <div className={style.card_header}>
              <div className="row">
                <div className="col-md-4">
                  <img className={style.card_img} src="/images/4b70fb29d7da578ce7310d2765a8c56f.jpeg" alt="" />
                </div>
                <div className="col-md-8">
                  <div className={style.card_content}>
                    <h6>برنامه نویس و توسعه دهنده نرم افزار</h6>
                    <h1>فرهنگ وقردوست</h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={style.card_item}>
                <div className={style.card_item_icon}>
                  <img src={eduIcon.src} alt="" />
                  <h3>تحصیلات</h3>
                </div>
                <div className={style.card_item_content}>
                  <p>
                    از 1393 تا 1395 آموزشکده فنی پسران رشت (شهید چمران)
                    <br />
                    از 1395 تا 1397 دانشکده فنی پسران شیراز (شهید باهنر)
                  </p>
                </div>
              </div>
              <div className={style.card_item}>
                <div className={style.card_item_icon}>
                  <img src={brainIcon.src} alt="" />
                  <h3>مهارت</h3>
                </div>
                <div className={style.card_item_content}>
                  <p>
                    برنامه نویسی سمت backend با node.js (فریمورک های nest js و express js)
                    <br />
                    طراحی وب (HTML و CSS) و برنامه نویسی سمت frontend با node.js (فریمورک nextjs  و کتابخانه react.js)
                    <br />
                    طراحی اپلیکیشن با فریمورک Flutter برای دستگاه های android و desktop
                  </p>
                </div>
              </div>
              {/* <div className={style.card_item}>
                <div className={style.card_item_icon}>
                  <img src={codeIcon.src} alt="" />
                  <h3>نمونه ها</h3>
                </div>
                <div className={style.card_item_content}>
                  لینک های گیت هاب و کافه بازار رو بذار
                </div>
              </div> */}
              <div className={style.card_item}>
                <div className={style.card_item_icon}>
                  <img src={linkIcon.src} alt="" />
                  <h3>لینک</h3>
                </div>
                <div className={style.card_item_content + " " + style.card_links}>
                  <a target="_blank" href="https://github.com/vaghardoost"><img height="32" width="32" src="https://cdn.simpleicons.org/github" /></a>
                  <br />
                  <a target="_blank" href="https://t.me.vaghardoost"><img height="32" width="32" src="https://cdn.simpleicons.org/telegram" /></a>
                  <br />
                  <a target="_blank" href="mailto:farhang.vaghardoost@gmail.com"><img height="32" width="32" src="https://cdn.simpleicons.org/gmail" /></a>
                  <br />
                  <a target="_blank" href="#"><img height="32" width="32" src="https://cdn.simpleicons.org/linkedin" /></a>
                </div>
              </div>


            </div>
          </div>
        </div>


      </div>
    </div>
    <style jsx global>{`
      body {
        background: var(--dark-color) url(${textuer.src});
        // background-size:1200px;
      }
    `}
    </style>
  </>
}

interface Props { }

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {}
  }
}

