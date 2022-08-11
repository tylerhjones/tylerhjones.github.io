import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Mininav } from "../../components/mininav/MiniNav";

export const Posts = () => {
  return (
    <>
      <Mininav>
        <Form.Control size="md" type="text" placeholder="search" />
      </Mininav>
    </>
  );
};
