import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "@/styles/HomeNoAuth.module.scss"
import HeaderNoAuth from "@/src/components/HomeNoAuth/HeaderNoAuth";
import PresentationSection from "@/src/components/HomeNoAuth/presentationSection";
import CardsSection from "@/src/components/HomeNoAuth/cardsSection";
import courseService, { CourseType } from "@/src/services/courseServices";
import { ReactNode, useEffect } from "react";
import { GetStaticProps } from "next/types";
import SlideSection from "@/src/components/HomeNoAuth/slideSection";
import Footer from "@/src/components/common/footerComponent";
import AOS from "aos";
import "aos/dist/aos.css";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  return {
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24,
  };
};

export default function HomeNoAuth({ course }: IndexPageProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
			  <meta property="og:title" content="Onebitflix" key="title" />
				<meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil." />
      </Head>
      <main>
        <div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="1600">
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <div data-aos="fade-right" data-aos-duration="1200">
          <CardsSection />
        </div>
        <div data-aos="fade-up" data-aos-duration="1350">
          <SlideSection newestCourses={course} />
        </div>
        <Footer />
      </main>
    </>
  );
}
