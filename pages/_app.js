import '../styles/globals.scss'
import {AuthProvider} from "../context/auth-context";

const QuizApp = ({Component, pageProps}) => {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}

export default QuizApp
