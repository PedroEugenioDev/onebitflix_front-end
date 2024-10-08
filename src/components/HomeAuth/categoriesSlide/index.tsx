import useSWR from "swr";
import SlideComponent from "../../common/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss" 
import categoriesService from "@/src/services/categoryServices";
import PageSpinner from "../../common/spinner";

interface props {
    categoryId: number;
    categoryName: string;
  }
  
  const ListCategoriesSlide = function ({ categoryId, categoryName }: props) {
    const { data, error } = useSWR(`categories/${categoryId}`, () => categoriesService.getCourses(categoryId))
    if (error) return error;
    if (!data) {
      return <PageSpinner />
  }

    return 	<>
        <p className={styles.titleCategory}>{categoryName.toUpperCase()}</p>
        <SlideComponent courses={data.data.courses} />
    </>;
  };
  
  export default ListCategoriesSlide;