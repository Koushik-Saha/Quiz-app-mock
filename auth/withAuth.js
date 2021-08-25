import { useRouter } from "next/router"

const withAuth = (WrappedComponent, path = null) => {

    return (props) => {

        let parseObject = null

        if (typeof window !== 'undefined') {
            let retrievedObject = localStorage.getItem('admin_info')
            parseObject = JSON.parse(retrievedObject)
        }

        if (typeof window !== "undefined") {
            const Router = useRouter()

            // If there is no access token we redirect to "/" page.
            if (parseObject?.email !== "admin@gmail.com" && parseObject?.password !== "12345678") {
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