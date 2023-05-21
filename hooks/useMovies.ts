import fetcher from "@/lib/fetcher"
import useSwr from "swr"

const useMovies = () => {
    const { data, isLoading, error } = useSwr("/api/movies", fetcher, {
        revalidateOnFocus : false,
        revalidateIfStale : false,
        revalidateOnReconnect : false,
    })

    return {
        data, isLoading, error
    }
}

export default useMovies
