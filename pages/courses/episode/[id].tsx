import { useRouter } from "next/router";
import styles from "../../../styles/episodePlayer.module.scss";
import Head from "next/head";
import HeaderGeneric from "@/src/components/common/HeaderGenericComponent";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/src/services/courseServices";
import PageSpinner from "@/src/components/common/spinner";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";
import Footer from "@/src/components/common/footerComponent";

const EpisodePlayer = function () {
    const router = useRouter();
    const episodeOrder = parseFloat(router.query.id?.toString() || "");
    const courseId = router.query.courseid?.toString() || "";
    const [course, setCourse] = useState<CourseType>();

    const getCourse = async function () {
      if (typeof courseId !== "string") return;
      const res = await courseService.getEpisodes(courseId);
      if (res.status === 200) {
        setCourse(res.data);
      }
    };

    const handlePreviousEpisode = () => {
        router.push(`/courses/episode/${episodeOrder - 1}?courseid=${course?.id}`);
    };
    const handleNextEpisode = () => {
        router.push(`/courses/episode/${episodeOrder + 1}?courseid=${course?.id}`);
    };
  
    useEffect(() => {
      getCourse();
    }, [courseId]);

    if (course?.episodes == undefined) return <PageSpinner />;
    
  return (
    <>
      <Head>
        <title>Onebitflix - {course.episodes[episodeOrder].name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric logoUrl="/home" btnContent={`Voltar para o curso`} btnUrl={`/courses/${courseId}`} />
        <Container className="d-flex flex-column align-items-center gap-3 pt-3">
            <p className={styles.episodeTitle}>
                {course.episodes[episodeOrder].name}
            </p>
            {typeof window == "undefined" ? (null) : (
                <ReactPlayer
                    className={styles.player}
                    url={`${process.env.NEXT_PUBLIC_BASEURL}/episodes/stream?videoUrl=${course.episodes[episodeOrder].videoUrl}&token=${sessionStorage.getItem("onebitflix-token")}`}
                    controls
                />
            )}
            <div className={styles.episodeButton}>
                <Button className={styles.episodeButton} disabled={episodeOrder === 0 ? true : false} onClick={handlePreviousEpisode}>&#x2B05;</Button>
                <Button className={styles.episodeButton} disabled={episodeOrder+1 === course.episodes.length ? true : false} onClick={handleNextEpisode}>&#x27A1;</Button>
            </div>
            <p className="text-center pb-4">
                {course.episodes[episodeOrder].synopsis}
            </p>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default EpisodePlayer;