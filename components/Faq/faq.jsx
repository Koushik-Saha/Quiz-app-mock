import React, {useState} from "react";
import withAuth from "../../auth/withAuth";
import {Button, Card, ListGroup, Modal} from "react-bootstrap";
import {useForm} from "react-hook-form";

const Faq = () => {
    const {register, handleSubmit} = useForm()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = (data) => {

        let questions = {
            id: 1,
            qs: data?.description
        }

        localStorage.setItem('question', JSON.stringify(questions));
        setShow(false)
    }

    let parseObject = null

    if (typeof window !== 'undefined') {
        let retrievedObject = localStorage.getItem('question')
        parseObject = JSON.parse(retrievedObject)
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
                                    <ListGroup.Item>I am fine - <span style={{color: "red", fontWeight: "bold"}}>User01</span></ListGroup.Item>
                                    <ListGroup.Item>I am not find - <span style={{color: "red", fontWeight: "bold"}}>User02</span></ListGroup.Item>
                                    <ListGroup.Item>Good to know that - <span style={{color: "red", fontWeight: "bold"}}>User03</span></ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='p-5'>
                    <div className="d-flex align-items-center justify-content-center">
                        <button type="submit" className="btn btn-primary btn-block" onClick={handleShow}>Add Question</button>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group" style={{marginBottom: '5%'}}>
                            <label htmlFor="p_description">Question <span
                                style={{color: "red"}}>*</span></label>
                            <textarea
                                id="p_description"
                                className="form-control"
                                placeholder="Enter your question"
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
export default withAuth(Faq)
