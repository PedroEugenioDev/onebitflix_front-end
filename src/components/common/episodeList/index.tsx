import styles from "./styles.module.scss";
import { CourseType, EpisodeType } from "../../../services/courseServices";
import { useRouter } from "next/router";

interface props {
  episode: EpisodeType;
  course: CourseType;
}

const EpisodeList = function ({ episode, course }: props) {
    const router = useRouter();
    const handleEpisodePlayer = () => {
      router.push(`/courses/episode/${episode.order - 1}?courseid=${course.id}&episodeid=${episode.id}`);
    };

    const handleSecondsToMin = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        function toString(num: number) {
          return num.toString().padStart(2, "0");
        }
        const result = `${toString(minutes)}:${toString(seconds)}`;
        return result;
      };
  return <>
    <div className={styles.episodeCard} onClick={handleEpisodePlayer}>
	    <div className={styles.episodeOrderTime}>
	        <p className={styles.episodeOrder}>Episódio Nº {episode.order}</p>
            <p className={styles.episodeTime}>{handleSecondsToMin(episode.secondsLong)}</p>
        </div>
        <div className={styles.episodeTitleDescription}>
            <p className={styles.episodeTitle}>{episode.name}</p>
            <p className={styles.episodeDescription}>{episode.synopsis}</p>
        </div>
    </div>
  </>;
};

export default EpisodeList;