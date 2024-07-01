import Post from "@/components/post";
import { Suspense } from "react";

export default async function Page({params}:{params:{id:string}}) {
    return (
        <main className="text-center py-10">
           <Suspense fallback="Loading...">
            <Post id={params.id}/>
           </Suspense>
        </main>
    );
}