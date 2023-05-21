import Billbaord from "@/components/Billbaord";
import Navbar from "@/components/Navbar";
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
      <Navbar />
      <Billbaord />
    </>
  )
}
