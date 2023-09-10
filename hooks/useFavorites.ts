import fetcher from "@/lib/fetcher"
import useSwr from "swr"

const useFavorites = () => {
    const { data, isLoading, mutate, error } = useSwr("/api/favorites", fetcher, {
        revalidateIfStale : false,
        revalidateOnFocus : false,
        revalidateOnReconnect : false,
    })

    return {
        data, isLoading, mutate, error
    }
}

export default useFavorites
