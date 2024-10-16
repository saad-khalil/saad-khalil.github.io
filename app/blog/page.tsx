import {getCategorizedArticles} from "@/public/lib/article";
import ArticleItemList from "@/public/components/ArticleListItem/ArticleListItem";
import Image from 'next/image'

const HomePage = () => {

    const articles = getCategorizedArticles()
    console.log(articles)


    return (
        <div className={`bg-white`}>
            <section className="h-screen mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
                <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center">
                    <h1>blog</h1>
                </header>
                <Image src="https://www.mos.org/leonardo/sites/mos.org.leonardo/files/annunciation.jpg" alt={"leo"} width={500} height={200}/>
                <section className="md:grid md:grid-cols-2 flex flex-col gap-10 ">
                    {articles !== null &&
                        Object.keys(articles).map((article) => (
                            <ArticleItemList
                                category={article}
                                articles={articles[article]}
                                key={article}
                            />
                        ))}
                </section>
            </section>
        </div>
    )
}

export default HomePage