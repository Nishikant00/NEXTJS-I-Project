export default async function Post({id}:{id:String}) {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await response.json()
    return (
        <div>
            <h1 className="text-6xl font-bold">{data.title}</h1>
            <p className="text-justify pt-10 max-w-[700px] mx-auto">{data.body}</p>
        </div>
    );
}