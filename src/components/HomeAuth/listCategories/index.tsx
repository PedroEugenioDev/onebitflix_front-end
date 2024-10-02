import useSWR from "swr";
import categoriesService from "@/src/services/categoryServices";
import ListCategoriesSlide from "../categoriesSlide";

const listCategories = function () {
    const { data, error } = useSWR("/categories", categoriesService.getCategories);
    if (error) return error;
    if (!data) return <p>Loading...</p>

    return 	<>
        {data.data.categories?.map((category: CategoryType) => (
            <ListCategoriesSlide
                key={category.id}
                categoryId={category.id}
                categoryName={category.name}
            />
		))}
    </>;
  };
  
  export default listCategories;