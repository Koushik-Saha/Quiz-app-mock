import React, {useContext, useState} from "react";
import withAuth from "../../auth/withAuth";

const Faq = ({faqsData}) => {
    const [pageData, setPageData] = useState(null);

    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <button type="submit" className="btn btn-primary btn-block">Add Question</button>
            </div>
        </>
    )
}
export default withAuth(Faq)
