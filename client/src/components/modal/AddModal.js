import React, { useState } from "react";
import {
  Modal,
  Header,
  Form,
  FormInput,
  Button,
  Image,
} from "semantic-ui-react";

import mail from "../../assets/mail.png";

import axios from "axios";
const AddModal = ({ quote, setQuote }) => {
  const [open, setOpen] = useState(false);
  const [addQuote, setAddQuote] = useState("");

  const add = () => {};

  const handleChange = (event) => {
    setAddQuote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/add", {
        quote: addQuote,
      })
      .then((response) => window.alert("Quote added "))
      .catch((err) => console.log(err));
    setQuote(addQuote);
    setAddQuote("");
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button size="large" color="purple">
          Add
        </Button>
      }
    >
      <Modal.Header>Enter the Quote to Add</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={mail} wrapped />
        <Modal.Description>
          <Header>Enter Your quote of the day to add</Header>
          <Form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              placeholder="enter here"
              onChange={handleChange}
              value={addQuote}
            />
            <Button color="black" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button
              content="Add Quote"
              labelPosition="right"
              icon="checkmark"
              type="submit"
              positive
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default AddModal;
