import { createPost } from "@/actions/actions";

export default function Page() {
    return (
        <main className="text-center pt-10">
            <h1  className="text-4xl mb-3 md:text-6xl font-bold">Create a post</h1>
            <form className="flex flex-col max-w-[400px] mx-auto m-10" action={createPost}>
                <input className="font-bold p-2 p-1" type="text" name='title' placeholder="Title" required/>
                <textarea name="body" className="mt-2 p-2 font-bold" 
                rows={8} 
                placeholder="Body"
                required
                ></textarea>
                <button type="submit" className="rounded py-2 font-bold bg-blue-600 text-white mt-2">
                    Submit
                </button>
            </form>
        </main>
    );
}