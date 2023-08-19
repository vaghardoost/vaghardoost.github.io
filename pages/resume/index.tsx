import { GetStaticProps } from "next"
import Head from "next/head";
import style from "./resume.module.css";
import ic_react from "../../styles/images/ic_react.png"
import ic_flutter from "../../styles/images/ic_flutter.png"
import ic_js from "../../styles/images/ic_js.png"
import telegram from "../../styles/images/telegram.png";
import instagram from "../../styles/images/instagram.png";
import call from "../../styles/images/call.png";
import linkedin from "../../styles/images/linkedin.png";
import edu from "../../styles/images/edu.svg";
import myAx from "../../styles/images/fa.v.jpg";
import backgroundImage from "../../styles/18240979_v748-toon-103.jpg";

export default ({ }: Props) => {
  return <>
    <Head>
      <title>فرهنگ وقردوست</title>
    </Head>
    <div className={style.card}>
      <div className={style.card_header}>
        <h1>فرهنگ وقردوست</h1>
        <p>برنامه نویس و توسعه دهنده نرم افزار</p>
        <img src={myAx.src} />
      </div>
      <div className={style.card_body}>
        <h2>فرهنگ وقردست</h2>
        <ul className={style.info}>
          <li>
            <p>تاریخ تولد</p>
            <p>۱۳۷۴/۰۴/۱۹</p>
          </li>
          <li>
            <p>محل سکونت</p>
            <p>تهران - جنت آباد</p>
          </li>
          <li>
            <p>مدرک تحصیلی </p>
            <p>کارشناسی نرم افزار</p>
          </li>
          <li>
            <p>وضعیت وظیفه عمومی</p>
            <p>پایان خدمت</p>
          </li>
          <li>
            <img src={call.src} />
            <p>۰۹۳۸۸۳۸۹۹۸۸</p>
          </li>
          <li>
            <img src={linkedin.src} />
            <a className={style.link} dir="ltr" target="_blank" href="https://linkedin.com/in/vaghardoost">vaghardoost</a>
          </li>
          <li>
            <img src={telegram.src} />
            <a className={style.link} dir="ltr" target="_blank" href="https://t.me/vaghardoost">@vaghardoost</a>
          </li>
          <li>
            <img src={instagram.src} />
            <a className={style.link} dir="ltr" target="_blank" href="https://instagram.com/fa.v_74">@fa.v_74</a>
          </li>
        </ul>
        <h2>مهارت ها</h2>
        <ul className={style.timeline}>
          <li>
            <div className={style.timeline_badge}>
              <img src={ic_flutter.src} />
            </div>
            <div className={style.timeline_panel}>
              <h3>flutter</h3>
              <h6>از تابستان ۱۴۰۰</h6>
              <ul className={style.skills}>
                <li>Dio</li>
                <li>Getx</li>
                <li>Sqflite</li>
                <li>BloC</li>
                <li>Provider</li>
                <li>Riverpod</li>
                <li>ObjectBox</li>
                <li>Clean-Architecture</li>
              </ul>
              <h5 className={style.cader_label}>نمونه ها</h5>
              <ul className={style.cader}>
                <li>
                  <a className={style.link} href="#">دستیار زبان کلمه</a>
                  <p> تابستان ۱۴۰۰ در کافه بازار منتشر شد این اپ با مدیریت وضعیت Get.X کار میکند و از پایگاه داده محلی (sqflite) بهره میبرد</p>
                </li>
                <li>
                  <a className={style.link} href="#">مدیریت زمان</a>
                  <p>اپلیکیشن با ابزار های مختلف برای محاسبات زمان و تاریخ که امکانات مختلفی را دارد انتشار در تابستان ۱۴۰۱ کافه بازار</p>
                </li>

                <li>
                  <a className={style.link} href="#">مجله سرگرمی قاصدک</a>
                  <p>اصل کار این اپ یک ساختار اجتماعی هست که فعلا به دلیل صرفه جویی در هزینه برای گرفتن سرور امکان تولید محتوا برای کاربرانش مهیا نیست ولی محیطی که امکان داشتن چند صفحه برای یک فضا مهیا میکند.</p>
                  <i>
                    <p>این اپ هنوز در مرحله انتشار نرسیده و کار روی آن در حال حاضر ادامه دارد.</p>
                  </i>
                </li>

              </ul>
            </div>
          </li>

          <li>
            <div className={style.timeline_badge}>
              <img src={ic_js.src} />
            </div>
            <div className={style.timeline_panel}>
              <h4>node.js</h4>
              <h6>از زمستان ۱۳۹۷</h6>
              <ul className={style.skills}>
                <li>nestjs</li>
                <li>express</li>
                <li>kafka</li>
                <li>mongoose</li>
                <li>redis</li>
                <li>docker</li>
                <li>JWT</li>
                <li>microservice-architectuer</li>
              </ul>
              <h5 className={style.cader_label}>نمونه ها</h5>
              <ul className={style.cader}>
                <li>
                  <a href="#" className={style.link}>سیستم مدیریت محتوا</a>
                  <p>
                    یک سیستم مدیریت محتوا در سمت backend با فریم ورک nestjs طراحی و توسعه داده میشود و از معماری میکروسرویس بهره میبرد که به صورت open source و رایگان در گیتهاب موجود است
                  </p>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className={style.timeline_badge}>
              <img src={ic_react.src} />
            </div>
            <div className={style.timeline_panel}>
              <h4>React js</h4>
              <h6>از بهار ۱۳۹۹</h6>
              <ul className={style.skills}>
                <li>redux</li>
                <li>axios</li>
                <li>next.js</li>
                <li>ant design</li>
                <li>react-router</li>
                <li>react-bootstrap</li>
              </ul>
              <h5 className={style.cader_label}>نمونه ها</h5>
              <ul className={style.cader}>
                <li>
                  <a className={style.link} href="#">پنل گرافیکی سیستم مدیریت محتوا</a>
                  <p>
                    پنل مدیریت محتوا برای سیستم backend سیستم مدیریت محتوا با استفاده از redux و ant design توسعه داده شده است.
                  </p>
                </li>
                <li>
                  <a className={style.link} href="#">وبلاگ شخصی</a> (همین این😅)
                  <p>
                    یک وبسایت نمایش پست ها دسته بندی که با استفاده از فریمورک nextjs توسعه داده شده که backend که همون سیستم مدیریت محتواست رو مرور میکنه و فایل های html و css و js به صورت static ایجاد میکنه.
                  </p>
                </li>
              </ul>
            </div>
          </li>

        </ul>
        <h2>تحصیلات</h2>
        <ul className={style.timeline}>
          <li>
            <div className={style.timeline_badge}>
              <img src={edu.src} />
            </div>
            <div className={style.timeline_panel}>
              <h4>کاردانی (۱۳۹۳ - ۱۳۹۵)</h4>
              <h6>آموزشکده فنی شهید چمران رشت</h6>
              <p>مهندسی کامپیوتر - شاخه مهندسی نرم افزار</p>
            </div>
          </li>

          <li>
            <div className={style.timeline_badge}>
              <img src={edu.src} />
            </div>
            <div className={style.timeline_panel}>
              <h4>کاردانی (۱۳۹۵ - ۱۳۹۷)</h4>
              <h6>دانشکده فنی شهید باهنر رشت</h6>
              <p>مهندسی کامپیوتر - شاخه مهندسی تکنولوژی نرم افزار</p>
            </div>
          </li>

        </ul>
      </div>
      <div className={style.card_footer}>
        <ul className={style.info_footer}>
          <li>
            <img src={call.src} />
            <p>۰۹۳۸۸۳۸۹۹۸۸</p>
          </li>
          <li>
            <img src={linkedin.src} />
            <a className={style.link} dir="ltr" target="_blank" href="https://linkedin.com/in/vaghardoost">vaghardoost</a>
          </li>
          <li>
            <img src={telegram.src} />
            <a className={style.link} dir="ltr" target="_blank" href="https://t.me/vaghardoost">@vaghardoost</a>
          </li>
          <li>
            <img src={instagram.src} />
            <a className={style.link} dir="ltr" target="_blank" href="https://instagram.com/fa.v_74">@fa.v_74</a>
          </li>
        </ul>
      </div>
    </div>
    <style>{`
    body{
      background-attachment: fixed;
      background-size: cover;
      background-image: url(${backgroundImage.src});
    }
    `}</style>
  </>
}

interface Props { }

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {}
  }
}

