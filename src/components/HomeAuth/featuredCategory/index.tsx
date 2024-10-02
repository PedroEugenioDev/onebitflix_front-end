import useSWR from "swr";
import SlideComponent from "../../common/slideComponent";
import courseService from "@/src/services/courseServices";
import styles from "../../../../styles/slideCategory.module.scss" 

const NewestCategory = function () {
    const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);
    if (error) return error;
    if (!data) return <p>Loading...</p>

    return 	<>
        <p className={styles.titleCategory}>EM DESTAQUE</p>
        <SlideComponent courses={data.data} />
    </>;
  };
  
  export default NewestCategory;