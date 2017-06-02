import React, { Component } from 'react';
import '../styles/App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class AppComponent extends Component {
  render() {
    const { actions, phone } = this.props;
    return (
      <Grid fluid className="App" id="App">
        <Grid fluid className="actions-grid">
          <Row className="header">
            <Col lg={6} md={6} xs={6} sm={6}>
              <div className="logo"></div>
            </Col>
            <Col lg={6} md={6} xs={6} sm={6}>
              <div className="header-menu">
                <div className="header-menu-entrar">Entrar</div>
                <div className="header-menu-favoritos">Favoritos</div>
                <div className="header-menu-anunciar">Anunciar imóvel</div>
              </div>
            </Col>
          </Row>
          <Grid fluid className="rent">
            <Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} xs={12} sm={12}>
                <h1>O jeito fácil de alugar e morar</h1>
              </Col>
            </Row>
            <Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} xs={12} sm={12}>
                <h2>Alugue rápido, sem fiador e com segurança</h2>
              </Col>
            </Row>
            <Row center="md" center="xs">
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} xs={12} sm={12}>
                <div>
                  <form className="search-house">
                    <input className="search-house-input" placeholder="Busque por bairro, rua ou código do imóvel" type="text"></input>
                    <a className="search-house-button"></a>
                  </form>
                </div>
              </Col>
              <Col lg={2} md={2} xs={4} sm={4}>
              </Col>
            </Row>
            <Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} xs={12} sm={12}>
                <h3>Imóveis em São Paulo, ABC e Campinas</h3>
              </Col>
            </Row>
          </Grid>
        </Grid>
        <Grid fluid className="app-grid">
          <Row>
            <Col lg={6} md={6} lgOffset={6} mdOffset={6} sm={12} xs={12}>
              <div className="apple-image"></div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} lgOffset={6} mdOffset={6} sm={12} xs={12}>
              <h1>Baixe o aplicativo QuintoAndar!</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} lgOffset={6} mdOffset={6} sm={12} xs={12}>
              <h2>Receba o link para download no seu celular:</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} lgOffset={6} mdOffset={6} sm={12} xs={12}>
              <form className="request-app">
                <input className="request-app-input" placeholder="Insira seu número" type="tel"></input>
                <a className="request-app-button">Enviar link!</a>
              </form>
            </Col>
          </Row>
        </Grid>
      </Grid>
    );
  }
}
