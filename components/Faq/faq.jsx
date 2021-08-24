import React, {useContext, useState} from "react";
import {Accordion, AccordionContext, Button, useAccordionToggle} from 'react-bootstrap'

function QuestionToggle({children, eventKey, callback}) {
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );
    const isCurrentEventKey = currentEventKey === eventKey;
    return (
        <Accordion.Toggle
            as={Button}
            className="item__btn"
            eventKey={eventKey}
            onClick={decoratedOnClick}
        >
            {children}
            <span>
                {/*<FontAwesomeIcon className="item__btn__fa" icon={['fas', `${isCurrentEventKey ? 'minus' : 'plus'}`]} />*/}
            </span>
        </Accordion.Toggle>
    );
}

const Faq = ({faqsData}) => {
    const [pageData, setPageData] = useState(null);

    return (
        <div className=" py-4 py-sm-5">
            <div className="container">
                <div className="faqItems">
                    <div className="col-lg-6 pr-3 pr-xl-4">
                        <Accordion defaultActiveKey="0">
                            <div className="item">
                                <QuestionToggle eventKey={1}>Questions</QuestionToggle>
                                <Accordion.Collapse eventKey={``}>
                                    <div className="answer">
                                        Answers
                                    </div>
                                </Accordion.Collapse>
                            </div>
                        </Accordion>
                    </div>
                    <div className="col-lg-6 pr-3 pr-xl-4">
                        <Accordion>
                            <div className="item">
                                <QuestionToggle eventKey={1}>Questions</QuestionToggle>
                                <Accordion.Collapse eventKey={``}>
                                    <div className="answer">
                                        Answers`
                                    </div>
                                </Accordion.Collapse>
                            </div>
                        </Accordion>
                    </div>

                </div>
                <div className="questionMore text-center pt-3 pt-sm-5">
                    {/*{pageData?.text ?? 'Have more question?'} <Link href={`${pageData?.button?.link ?? ''}`}><a>{pageData?.button?.text ?? 'View More'}</a></Link>*/}
                </div>
            </div>
        </div>
    )
}
export default Faq
