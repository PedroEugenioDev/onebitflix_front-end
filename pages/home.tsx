import Footer from "@/src/components/common/footerComponent";
import PageSpinner from "@/src/components/common/spinner";
import FavoriteCategory from "@/src/components/HomeAuth/favoriteCategory";
import FeaturedCategory from "@/src/components/HomeAuth/featuredCategory";
import FeaturedSection from "@/src/components/HomeAuth/featuredSection";
import ListCategories from "@/src/components/HomeAuth/listCategories";
import NewestCategory from "@/src/components/HomeAuth/newestCategory";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const HomeAuth = function () {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("onebitflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <PageSpinner />;
  }

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
          <Footer />
        </main>
      </>
    );
  };
  
  export default HomeAuth;