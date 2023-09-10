import serverAuth from "@/lib/serverAuth"
import { NextApiRequest, NextApiResponse } from "next"

const favorites = async (req : NextApiRequest, res : NextApiResponse) => {
    if (req.method !== "GET") {
        try {
            const { currentUser } = await serverAuth(req, res)
            const favorites = await prismadb.movie.findMany({
                where : {
                    id : {
                        in : currentUser?.favoriteIds
                    }
                }
            })
            return res.status(200).json(favorites)
        } catch (error) {
            console.log(error)
            return res.status(400).end()
        }
    }
}

export default favorites
