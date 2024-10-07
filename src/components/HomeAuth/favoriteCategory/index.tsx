import useSWR from "swr";
import SlideComponent from "../../common/slideComponent";
import courseService from "@/src/services/courseServices";
import styles from "../../../../styles/slideCategory.module.scss" 
import PageSpinner from "../../common/spinner";

const NewestCategory = function () {
    const { data, error } = useSWR("/favorites", courseService.getFavCourses);
    if (error) return error;
    if (!data) {
        return <PageSpinner />
    }

    return 	<>
        <p className={styles.titleCategory}>MINHA LISTA</p>
        {data.data.courses.lenght >= 1 ? 
            (<SlideComponent courses={data.data} />) : 
            (
                <p className="h5 text-center pt-3">
                    <strong>Você não tem nenhum curso na lista</strong>
                </p>
            )}
    </>;
  };
  
  export default NewestCategory;