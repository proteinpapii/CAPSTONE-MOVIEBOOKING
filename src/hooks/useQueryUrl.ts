import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import qs from 'qs';
export const useQueryUrl = () => {
    const [searchParams, ] = useSearchParams()
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = Object.fromEntries(searchParams)
    const setQueryParams = (params: string) => {
        const queryString = qs.stringify(params, {
            addQueryPrefix: true
        })
        navigate(location.pathname + queryString)
    }
    return [queryParams, setQueryParams]
}
