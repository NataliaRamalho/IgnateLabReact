import { useContext} from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { MenuStatusContext} from "../context/MenuStatusContext";
import { useGetFirstLessonQuery } from "../graphql/generated";

export function Event(){
    const {slug} = useParams<{slug: string}>();
    const {data} = useGetFirstLessonQuery();
    const {isMenuOpen} = useContext(MenuStatusContext)

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            {
                isMenuOpen ? 
                (
                    <main className="flex flex-1 lg:flex-row flex-col">
                        <Sidebar/>
                    </main>
                ) : 
                (
                    <main className="flex flex-1 lg:flex-row flex-col">
                        {slug ? <Video lessonSlug = {slug}/> : data?.lessons[0] ? 
                                <Video lessonSlug = {data?.lessons[0].slug}/>  : <div className="flex-1"></div>
                        }
                        <div className="lg:block hidden ">
                            <Sidebar/>
                        </div>
                    </main>
                )
            }
        </div>
    )
}