import { logout } from "@/actions/actions";
import { validateRequest } from "@/lib/validate-request";
import Link from "next/link";

export default async function Home() {

const user= await validateRequest()
  return (
    <main className="text-center p-10 ">
      <h1 className="text-4xl mb-3 md:text-6xl font-bold">Welcome to the blogs</h1>
      <p className="max-w-[750px] mx-auto leading-8 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, consequuntur error eius accusantium sapiente nostrum quaerat ducimus. Aliquid odio soluta laborum. Excepturi aliquam dolorem nobis, assumenda quod necessitatibus laudantium eos sint ut ipsam quasi nam cupiditate? Modi alias repellendus praesentium libero ut porro tempora eos neque, consequuntur, pariatur error magni!</p>
    {user && <form action={logout}><button>Logout</button></form>}
    {!user && <Link href='/login'>Login</Link>}
    {!user && <Link href='/signup'>sign up</Link>}
    </main>
  );
}
