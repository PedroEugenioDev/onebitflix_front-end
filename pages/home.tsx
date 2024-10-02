import ListCategoriesSlide from "@/src/components/HomeAuth/categoriesSlide";
import FavoriteCategory from "@/src/components/HomeAuth/favoriteCategory";
import FeaturedCategory from "@/src/components/HomeAuth/featuredCategory";
import FeaturedSection from "@/src/components/HomeAuth/featuredSection";
import ListCategories from "@/src/components/HomeAuth/listCategories";
import NewestCategory from "@/src/components/HomeAuth/newestCategory";
import Head from "next/head";

const HomeAuth = function () {
    return (
      <>
        <Head>
          <title>Onebitflix - Home</title>
          <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
          <FeaturedSection />
          <NewestCategory />
          <FavoriteCategory />
          <FeaturedCategory />
          <ListCategories />
        </main>
      </>
    );
  };
  
  export default HomeAuth;