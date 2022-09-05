import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Modal, Button, Form } from "react-bootstrap";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: "false",
    };
  }
  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
      .get("https://my-books-can.herokuapp.com/books")
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addBook = (event) => {
    event.preventDefault();
    const obj = {
      title: event.target.bookTitle.value,
      description: event.target.bookDescription.value,
      status: event.target.bookStatus.value,
    };
    axios
      .post(`https://my-books-can.herokuapp.com/books`, obj)
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  deleteBook = (id) => {
    axios
      .delete(`https://my-books-can.herokuapp.com/books/${id}`) //http://localhost:3001/deleteBook?id=${id}
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {this.state.books.length ? (
            <div style={{ width: "1000px" }}>
              <Carousel fade>
                {this.state.books.map((item) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        style={{ width: "1000px", height: "500px" }}
                        src="https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                        alt="Slide"
                      />
                      <Carousel.Caption>
                        <h3>Title : {item.title}</h3>
                        <p> Description: {item.description}</p>
                        <p>Status: {item.status}</p>
                        <Button
                          variant="secondary"
                          onClick={() => this.deleteBook(item._id)}
                        >
                          Delete
                        </Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          ) : (
            <h3>No Books Found :(</h3>
          )}
        </div>
        <>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "20vh" , marginTop: "10px"}}
          >
            <Button variant="primary" onClick={this.handleShow}>
              Add A Book!
            </Button>
          </div>

          <Modal show={this.state.show}>
            <Modal.Header onClick={this.handleClose} closeButton>
              <Modal.Title>Adding your Books</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <>
                <Form onSubmit={this.addBook}>
                  <Form.Group
                    className="mb-3"
                    name="title"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>title</Form.Label>
                    <Form.Control type="text" name="bookTitle" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    name="description"
                  >
                    <Form.Label>description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="bookDescription"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>status</Form.Label>
                    <Form.Select name="bookStatus" id="status">
                      <option value="Life Changing">Life Changing</option>
                      <option value="Favorite Five">Favorite Five</option>
                      <option value="Recommended To Me">
                        Recommended To Me
                      </option>
                    </Form.Select>
                    <Button
                      style={{marginTop : "20px"}}
                      variant="primary"
                      type="submit"
                      onClick={this.handleClose}
                    >
                      Save Changes
                    </Button>
                  </Form.Group>
                </Form>
              </>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
}

  
export default BestBooks;
