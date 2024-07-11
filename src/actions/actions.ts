'use server';
import { db } from "@/db/index";
import { lucia } from "@/db";
import { validateRequest } from "@/lib/validate-request";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Posts } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function createPost(formData:FormData){
    const title=formData.get('title') as string;
    const body=formData.get('body') as string;
    await db.insert(Posts).values({title:title,body:body})
	revalidatePath('/posts') //Bust the cache or RSC payload
}

export async function logout(){
	
	const { session } = await validateRequest();
	if (!session) {
		return {
			error: "Unauthorized"
		};
	}

	await lucia.invalidateSession(session.id);

	const sessionCookie = lucia.createBlankSessionCookie();
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/login");
}