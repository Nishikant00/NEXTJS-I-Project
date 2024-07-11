import { db } from "@/db";
import { Posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function Post({id}:{id:number}) {
    
    const data = await db.query.Posts.findFirst({
        where:eq(Posts.id,id)
    })
    if (!data){
        notFound()
    }
    return (
        <div>
            <h1 className="text-6xl font-bold">{data.title}</h1>
            <p className="text-justify pt-10 max-w-[700px] mx-auto">{data.body}</p>
        </div>
    );
}