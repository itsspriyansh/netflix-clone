import serverAuth from "@/lib/serverAuth";
import { without } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const favorite = async (req : NextApiRequest, res : NextApiResponse) => {
    try {
        if (req.method === "POST") {
            const { currentUser } = await serverAuth(req)
            const { movieId } = req.body
            
            const existingMovie = prismadb.movie.findUnique({
                where : {
                    id : movieId
                }
            })
            
            if (!existingMovie) {
                throw new Error("Invalid ID")
            }
            
            const user = await prismadb.user.update({
                where : {
                    email : currentUser.email || ""
                },
                data : {
                    favoriteIds : {
                        push : movieId
                    }
                }
            })
            return res.status(200).json(user)
        }


        if (req.method === "DELETE") {
            const { currentUser } = await serverAuth(req)
            const { movieId } = req.body

            const existingMovie = await prismadb.movie.findUnique({
                where : {
                    id : movieId
                }
            })

            if (!existingMovie) {
                throw new Error("Invalid ID")
            }

            const updatedFavoriteIds = without(currentUser.favoriteIds, movieId)
            const user = await prismadb.user.update({
                where : {
                    email : currentUser.email || ""
                },
                data : {
                    favoriteIds : updatedFavoriteIds
                }
            })

            return res.status(200).json(user)
        }
    } catch (error) {
        console.log(error)
        return res.status(400).end()
    }
}

export default favorite