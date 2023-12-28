import { Card } from "../card/Card"
import articles from "../../assets/posts.json"

export const Container = ()=>{
  return(
    <div className="w-full my-10 flex justify-center">
      <div className="max-sm:w-5/6 sm:w-5/6 lg:w-4/6 flex flex-col gap-10">
        <h1 className="text-lg font-semibold">Artigos recomendados</h1>
        <div className="grid max-sm:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          {articles.map((article)=>{
            return(
              <Card
                key={article.title}
                image={article.image}
                title={article.title}
                description={article.description}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}