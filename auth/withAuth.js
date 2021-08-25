import { useRouter } from "next/router"
import Cookies from 'js-cookie'

const withAuth = (WrappedComponent, path = null) => {

    return (props) => {
        // const { loggedIn } = useAuth()
        const tokenData = Cookies.get('admin_info')
        // checks whether we are on client / browser or server.
        if (typeof window !== "undefined") {
            const Router = useRouter()

            // If there is no access token we redirect to "/" page.
            if (!tokenData) {
                Router.replace(`/auth/login?next=${Router.asPath}`)
                return null
            }

            return <WrappedComponent {...props} />
        }

        // If we are on server, return null
        return null
    }
}

export default withAuth