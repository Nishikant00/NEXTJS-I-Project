import Post from "@/components/post";
import Upvote from "@/components/upvote";
import { Suspense } from "react";

export default async function Page({params}:{params:{id:number}}) {
    return (
        <main className="text-center py-10">
           <Suspense fallback="Loading...">
            <Post id={params.id}/>
           <Upvote/>
           </Suspense>

        </main>
    );
}