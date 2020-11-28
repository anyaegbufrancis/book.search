import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Image,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./saved.css";
import AlertDismissibleExample from "../feedback/error/error";
const axios = require("axios");

function Saved() {
  const [saved, setSaved] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const url = "http://localhost:5000/books/find";
  
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await axios(url);
        setSaved(res.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
 
  
  function refreshPage(){ 
    window.location.reload(); 
}

  return (
    <>
      {saved.length > 0 ? (
        <h1 className="text-found">{saved.length} Items Saved !</h1>
      ) : (
        <h1 className="text-found">No Saved Items Found!</h1>
      )}

      {saved !== "" ? (
        saved.length > 0 ? (
          saved.map((data) => (
            <Container>
            <Card key={data._id} className="cards">
              <Card.Header as="h2">{data.title}</Card.Header>
              <Card.Body className="card-bottom">
                <Container>
                  <Row className="thumbnail">
                    <Col xs={6} md={4}>
                      <Image src={data.img} rounded />
                    </Col>
                  </Row>
                </Container>
                <Card.Title>Written by: {data.authors}</Card.Title>
                <Card.Text className="description">{data.desc}</Card.Text>

                <div className="button-post-search">
                  <DropdownButton
                    as={ButtonGroup}
                    title="Home/Details/Delete"
                    id="bg-nested-dropdown"
                  >
                    <Dropdown.Item eventKey="Home" href="/">
                      Home
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      eventKey="Details"
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Details
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      eventKey="Delete"
                      onClick={() =>   {
                        axios.post("http://localhost:5000/books/delete/", {params: data._id})
                                   .then((response) => { 
                                                        const report = response.data.title;                          
                                                        refreshPage()
                                                        })
                                   .catch((error) => console.error)
                                   ;
                      }
                               }
                    >
                      Delete
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </Card.Body>
            </Card>
            </Container>
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

export default Saved;
