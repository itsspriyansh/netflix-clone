import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <>
    <div className=" text-green-500">Home Page</div>
    <button
      onClick={() => signOut()} 
      className="bg-white px-5 py-2">Logout</button>
    </>
  )
}
