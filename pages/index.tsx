import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps (context : NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect : {
        destination : "/Auth",
        permanent : false
      }
    }
  }

  return {
    props : {}
  }
}


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
