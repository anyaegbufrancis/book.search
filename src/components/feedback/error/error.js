import React, { useState } from "react";
import { Container, Alert} from "react-bootstrap";

export default function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Container>
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>No Matching Books Found!</Alert.Heading>
          <p>
            It looks like the book you are searching for does not exist. Please change the book title and try again. Thank you.
          </p>
        </Alert>
        </Container>
      );
    }
    return <div onClick={() => setShow(true)}></div>;
  }
  
