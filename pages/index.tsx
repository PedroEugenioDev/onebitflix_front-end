import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "@/styles/HomeNoAuth.module.scss"
import HeaderNoAuth from "@/src/components/HomeNoAuth/HeaderNoAuth";
import PresentationSection from "@/src/components/HomeNoAuth/presentationSection";
import CardsSection from "@/src/components/HomeNoAuth/cardsSection";
import courseService, { CourseType } from "@/src/services/courseServices";
import { ReactNode } from "react";
import { GetStaticProps } from "next/types";
import SlideSection from "@/src/components/HomeNoAuth/slideSection";

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
  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
			  <meta property="og:title" content="Onebitflix" key="title" />
				<meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil." />
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection/>
        <SlideSection newestCourses={course} />
      </main> 
    </>
  );
}
