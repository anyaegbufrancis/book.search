import React from "react";
import { Container } from "react-bootstrap";
import JumboComponent from "../jombotron/jumbotron";
import SearchComponent from "../search/SearchComponent";

function BodyComponent() {
  return (
    <Container>
      <JumboComponent />
      <SearchComponent />
    </Container>
  );
}
export default BodyComponent;
