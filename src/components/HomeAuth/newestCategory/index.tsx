import useSWR from "swr";
import SlideComponent from "../../common/slideComponent";
import courseService from "@/src/services/courseServices";
import styles from "../../../../styles/slideCategory.module.scss" 
import PageSpinner from "../../common/spinner";

const NewestCategory = function () {
    const { data, error } = useSWR("/newest", courseService.getNewestCourses);
    if (error) return error;
    if (!data) {
        return <PageSpinner />
    }

    return 	<>
        <p className={styles.titleCategory}>LANÇAMENTOS</p>
        <SlideComponent courses={data.data} />
    </>;
  };
  
  export default NewestCategory;