import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  Card,
  Form,
  CardBody,
  FormGroup,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  UncontrolledAlert,
} from 'reactstrap';

export default function ContactUs() {
  const [showAlert, setAlert] = useState(false);
  const clearForm = () => {
    setAlert(true);
    document.getElementById('contact-form').reset();
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        'user_nwjWlSXmtIAaLMYr6dhQe'
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === 'OK') {
            clearForm();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section className='section section-lg pt-lg-0 section-contact-us' style={{paddingTop:"0px"}}>
      <Container>
        <Row className='justify-content-center mt--300'>
          <Col >
            {showAlert && (
              <UncontrolledAlert color='success' fade={true}>
                <span className='alert-inner--icon'>
                  <i className='ni ni-like-2' />
                </span>
                <span className='alert-inner--text ml-1'>
                  <strong>Success!</strong> Your Message recived , i will reply
                  to you ASAP!
                </span>
              </UncontrolledAlert>
            )}
            <Card className='bg-gradient-secondary shadow'>
              <CardBody className='p-lg-5'>
                <h4 className='mb-1'>Want to work with Me?</h4>
                <p className='mt-0'>Your project is very important.</p>
                <Form id='contact-form' onSubmit={sendEmail}>
                  <FormGroup className='mt-5 true'>
                    <InputGroup className='input-group-alternative'>
                      <InputGroupAddon addonType='prepend'>
                        <InputGroupText>
                          <i className='ni ni-user-run' />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder='Your name'
                        type='text'
                        name='user_name'
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className='focused true'>
                    <InputGroup className='input-group-alternative'>
                      <InputGroupAddon addonType='prepend'>
                        <InputGroupText>
                          <i className='ni ni-email-83' />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder='Email address'
                        type='email'
                        name='user_email'
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className='mb-4'>
                    <Input
                      className='form-control-alternative'
                      cols='80'
                      name='message'
                      placeholder='Type a message...'
                      rows='4'
                      type='textarea'
                    />
                  </FormGroup>
                  <div>
                    <Button
                      block
                      className='btn-round'
                      color='default'
                      size='lg'
                      type='submit'
                    >
                      Send Message
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
