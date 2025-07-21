import { useEffect } from "react"

export const useScrollToTop = (ref) => {
    useEffect(() => {
        ref.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, [ref]);
}