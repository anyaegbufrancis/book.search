import React, { useState } from "react";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  Image,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Modal
} from "react-bootstrap";
import "./search.css";
import { useInput } from "../../util/hooks/hook";
import AlertDismissibleExample from "../feedback/error/error";
import { useAlert } from 'react-alert'
const axios = require("axios");

function SearchComponent(props) {
  const { value, bind, reset } = useInput("");
  const [searched, setSearched] = useState("");
  
  
  const a = useAlert()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
    reset();
  };

  function fetchBooks() {
    const q = value;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: { q },
      })
      .then((res) => {
        const data = res.data;
        setSearched(data);
        console.log(res);
      })
      .catch((error) => {
        console.error();
      });
  }
  
  

  return (
    <>    
      <Form className="search-area">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Book Name to Begin</Form.Label>
          <Form.Control
            className="search-box"
            placeholder="Start Search Here..."
            hmj
            {...bind}
          />
          {searched.items ? (
            ""
          ) : (
            <Form.Text className="text-muted">
              We'll get your book if it exists...
            </Form.Text>
          )}
        </Form.Group>
        <Button
          variant="primary"
          value="Submit"
          type="submit"
          className="button"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>

      {searched.items && (
        <h1 className="text-found">
          {searched.items.length} matching records found!
        </h1>
      )}
      {searched !== "" ? (
        searched.items ? (
          searched.items.map((data) => (
            <Card key={data.etag} className="cards">
              <Card.Header as="h2">{data.volumeInfo.title}</Card.Header>
              <Card.Body className="card-bottom">
                <Container>
                  <Row className="thumbnail">
                    <Col xs={6} md={4}>
                      {data.volumeInfo.imageLinks ? (
                        <Image
                          src={data.volumeInfo.imageLinks.thumbnail}
                          rounded
                        />
                      ) : (
                        <Image
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmigJ9osXHu1i_iPjOTFJPHPG1h1O8CXCYqw&usqp=CAU"
                          rounded
                        />
                      )}
                    </Col>
                  </Row>
                </Container>
                <Card.Title>Written by: {data.volumeInfo.authors}</Card.Title>
                <Card.Text className="description">
                  {data.volumeInfo.description}
                </Card.Text>
                <div className="button-post-search">
                  <DropdownButton
                    as={ButtonGroup}
                    title="View Details or Save Books"
                    id="bg-nested-dropdown"
                  >                 
                    <Dropdown.Item
                      eventKey="Save Book"
                      onClick={() => {
                        axios.post("http://localhost:5000/books/save", {
                          title: data.volumeInfo.title,
                          img: data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmigJ9osXHu1i_iPjOTFJPHPG1h1O8CXCYqw&usqp=CAU",
                          authors: data.volumeInfo.authors ? data.volumeInfo.authors[0] : "Anonymous",
                          desc: data.volumeInfo.description,
                          url: data.volumeInfo.infoLink ,
                          ID: data.etag,
                        })
                                   .then(() => {
                                     const d = data.volumeInfo.title;
                                     a.show(d + " Added Successfully");
                                     })
                                   .catch((error) => {alert("Book Already Added!");})
                                   ;
                      }}
                    >
                      Save Book
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      eventKey="View Details"
                      href={data.volumeInfo.infoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Details
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <AlertDismissibleExample />
        )
      ) : (
        ""
      )}
    </>
  );
}

export default SearchComponent;
