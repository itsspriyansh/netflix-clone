import fetcher from "@/lib/fetcher"
import useSwr from "swr"

const useBillboards = () => {
    const { data, error, isLoading } = useSwr("/api/random", fetcher, {
        revalidateIfStale : false,
        revalidateOnFocus : false,
        revalidateOnReconnect : false,
    })

    return {
        data, error, isLoading
    }
}

export default useBillboards