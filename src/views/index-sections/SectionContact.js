import React, { useState } from "react";
import api from '../../services/api';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

// core components


function SectionNucleoIcons() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  async function SendEmailFunction(e) {
    e.preventDefault();   
    const data = { nome, email, telefone };    

    try {
      await api.post('sendEmail', data);
      alert('Recebemos seu contato com sucesso. Já já um de nossos consultores entrará em contato com você');
    }
    catch (ex) {
      alert('Não foi possivel enviar o e-mail. Tente novamente.')
    }
  }


  return (
    <>
      <a name="contact"></a>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="text-center">Want a quote?</h2>
              <Form className="contact-form" onSubmit={SendEmailFunction}>
                <Row>
                  <Col md="6">
                    <label>Name</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                    </InputGroup>
                  </Col>
                  <Col md="6">
                    <label>E-mail</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="E-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </InputGroup>
                  </Col>
                  <Col md="6">
                    <label>Phone</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Telefone" type="tel" value={telefone} onChange={e => setTelefone(e.target.value)} />
                    </InputGroup>
                  </Col>
                </Row>

                <Row>
                  <Col className="ml-auto mr-auto" md="4">
                    <Button
                      type="submit"
                      className="btn-fill"
                      color="info"
                      size="lg"
                    >
                      Send
                      </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
