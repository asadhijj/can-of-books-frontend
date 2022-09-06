import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class Updated extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.updateHandleClose}>
                <Modal.Header closeButton onClick={this.props.updateHandleClose}>
                    <Modal.Title>Update Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.props.updateBook}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control type="text" placeholder="Book Title" name="bookTitle" defaultValue={this.props.currentBooks.title}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" name="bookDescription"  defaultValue={this.props.currentBooks.description}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Status</Form.Label>
                            <Form.Select name="bookStatus" id="status" defaultValue={this.props.currentBooks.status}>
                                <option value="Life Changing">Life Changing</option>
                                <option value="Favorite Five">Favorite Five</option>
                                <option value="Recommended To Me">
                                    Recommended To Me
                                </option>
                            </Form.Select>
                        </Form.Group>

                        <Button variant="primary" onClick={this.props.updateHandleClose} type="submit">
                            update
                        </Button>

                    </Form>
                </Modal.Body>
                
            </Modal>
        )
    }
}

export default Updated;