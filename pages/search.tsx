import styles from "../styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/src/services/courseServices";
import { Container } from "reactstrap";
import SearchCard from "@/src/components/common/searchCard";
import Footer from "@/src/components/common/footerComponent";
import PageSpinner from "@/src/components/common/spinner";

const Search = function () {
    const router = useRouter();
    const searchName: any = router.query.name;   
    const [searchResult, setSearchResult] = useState<CourseType[]>([]);
    const [loading, setLoading] = useState(true);
  
/*     useEffect(() => {
      if (!sessionStorage.getItem("onebitflix-token")) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    }, []);
  
    if (loading) {
      return <PageSpinner />;
    } */

    const searchCourses = async function () {
        if (typeof searchName === "string") {
            const res = await courseService.getSearch(searchName);
            setSearchResult(res.data.courses);
        }
    };

    useEffect(() => {
        searchCourses();
    }, [searchName]);

  return (
    <>
      <Head>
        <title>Onebitflix - {searchName} </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <HeaderAuth />
        </div>

        <div>
          <p className={styles.searchTitle}>Resultados para: {searchName}</p>
          <section className={styles.mainContent}>
            {searchResult.length >= 1 ? (
                <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
                  {searchResult?.map((course) => (
                      <SearchCard key={course.id} course={course} />
                ))}
                </Container>
              ) : (
              <p className={styles.noSearchText}>Nenhum resultado encontrado!</p>
              )
            }
          </section>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Search;