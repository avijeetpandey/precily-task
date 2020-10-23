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

const UpdateModal=({quote,setQuote}) => {
  const [open, setOpen] = useState(false);

  const update = () => {};

  const handleChange = (event) => {
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button size="large" color="green">
          Update
        </Button>
      }
    >
      <Modal.Header>Please Update The Quote</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={mail} wrapped />
        <Modal.Description>
          <Header>Enter Your quote of the day to update</Header>
          <Form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              placeholder="enter here"
              onChange={handleChange}
              value={quote}
            />
            <Button color="black" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button
              content="Update Quote"
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

export default UpdateModal;
