import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios 
    .get('http://localhost:3001/books')
    .then((result) => {
      this.setState({
        books: result.data
      })
    })
    .catch ((error) =>{
      console.log(error)
    })
  }
  render() {

    /* TODO: render all the books in a Carousel */

      return (
        <div style={{display : 'flex', justifyContent: 'space-evenly'}}>
          {this.state.books.length ? (
            <div style={{ width: "1000px" }}>
              <Carousel fade>
                {this.state.books.map((item) => {
                  return(
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      style={{width : '1000px', height: '500px'}}
                      src="https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                      alt="Slide"
                    />
                    <Carousel.Caption>
                      <h3>Title : {item.title}</h3>
                      <p> Description: {item.description}</p>
                      <p>Status: {item.status}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  )
                })}
              </Carousel>
            </div>
          ) : (
            <h3>No Books Found :(</h3>
          )}
        </div>
      );
    }
  }

  
export default BestBooks;
