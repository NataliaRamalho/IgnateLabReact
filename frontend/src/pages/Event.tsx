import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useGetFirstLessonQuery } from "../graphql/generated";

export function Event(){
    const {slug} = useParams<{slug: string}>();
    const {data} = useGetFirstLessonQuery();

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                {slug ? <Video lessonSlug = {slug}/> : data?.lessons[0] ? 
                        <Video lessonSlug = {data?.lessons[0].slug}/>  : <div className="flex-1"></div>
                }
                <Sidebar/>
            </main>
        </div>
    )
}