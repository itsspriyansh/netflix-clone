import useCurrentUser from "@/hooks/useCurrentUser";
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

  const { data : user, isLoading } = useCurrentUser()

  return (
    <>
    <div className=" text-green-500">Home Page</div>
    <p className="text-white">logged in as {user?.email}</p>
    <button
      onClick={() => signOut()} 
      className="bg-white px-5 py-2">Logout</button>
    </>
  )
}
