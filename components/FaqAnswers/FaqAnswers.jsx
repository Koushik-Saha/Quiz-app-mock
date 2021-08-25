import React, {useState} from "react";
import { Card, ListGroup, Modal} from "react-bootstrap";
import {useForm} from "react-hook-form";
import withAuthUser from "../../auth/withAuthUser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'

const FaqAnswers = () => {
    const {register, handleSubmit} = useForm()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = (data) => {

        let answers = {
            id: 1,
            answer: data?.description
        }

        localStorage.setItem('answers', JSON.stringify(answers));
        setShow(false)
    }

    let parseObject = null
    let parseAnswer = null

    if (typeof window !== 'undefined') {
        let retrievedObject = localStorage.getItem('question')
        parseObject = JSON.parse(retrievedObject)

        let retrievedAnswer = localStorage.getItem('answers')
        parseAnswer = JSON.parse(retrievedAnswer)
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-center h-100">
                <div className='p-5'>
                    <Card style={{ width: '18rem' }} border='success'>
                        <Card.Body>
                            <Card.Title>Question</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><span>{parseObject?.qs}</span></Card.Subtitle>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{parseAnswer?.answer} - <span style={{ cursor : "pointer"}} onClick={handleShow}><FontAwesomeIcon icon={faEdit} /></span></ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Answers</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group" style={{marginBottom: '5%'}}>
                            <label htmlFor="p_description">Answers <span
                                style={{color: "red"}}>*</span></label>
                            <textarea
                                id="p_description"
                                className="form-control"
                                placeholder="Enter your answer"
                                rows={10}
                                {...register('description', { required: true })}>
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default withAuthUser(FaqAnswers)
