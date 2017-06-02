import React, { Component } from 'react';
import '../styles/App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class AppComponent extends Component {
  render() {
    const { onPhoneChange, phone } = this.props;
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
            <Row center="xs">
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} xs={12} sm={12}>
                <div>
                  <form className="search-house">
                    <input className="search-house-input" placeholder="Busque por bairro, rua ou código do imóvel" type="text"></input>
                    <a className="search-house-button">content</a>
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
                <input className="request-app-input" placeholder="Insira seu número" type="tel" value={phone}  onChange={(e) => onPhoneChange(e.target.value)}></input>
                <a className="request-app-button">Enviar link!</a>
              </form>
            </Col>
          </Row>
        </Grid>
        <Grid fluid className="grid-funcionamento">
          <Row>
            <Col xs={12} md={12} lg={12} sm={12}>
              <h1>Como funciona o quinto andar?</h1>
            </Col>
          </Row>
          <Row className="sub-title">
            <Col xs={12} md={12} lg={12} sm={12}>
              <h2>Usamos tecnologia e design para simplificar a locação de imóveis residenciais.</h2>
              <h2>Somos o jeito mais simples e seguro de alugar um imóvel.</h2>
            </Col>
          </Row>
          <Row className="feature-list">
            <Col lg={4} md={4} sm={4} xs={12}>
              <Row>
                <div></div>
              </Row>
              <Row>
                <h1>Escolha e agende</h1>
              </Row>
              <Row>
                <h3>Fotos de qualidade, busca pelo mapa e filtros exclusivos. Fácil de usar para não precisar falar com ninguém. Você mesmo agenda pelo site as suas visitas com os melhores corretores.</h3>
              </Row>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
              <Row>
                <div></div>
              </Row>
              <Row>
                <h1>Visite com os melhores</h1>
              </Row>
              <Row>
                <h3>Corretores selecionados para garantir um atendimento bacana, fácil e eficaz. Visite os imóveis selecionados com quem sabe tudo sobre o lugar onde você quer morar.</h3>
              </Row>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
              <Row>
                <div></div>
              </Row>
              <Row>
                <h1>Alugue sem fiador</h1>
              </Row>
              <Row>
                <h3>O seguro-fiança é por nossa conta. Você não precisa se preocupar em pedir ajuda pra ninguém, não precisa correr atrás de uma seguradora nem precisa depositar três meses de aluguel de uma vez. É mais fácil, e você não paga nada a mais por isso.</h3>
              </Row>
            </Col>
          </Row>
        </Grid>
        <Grid className="grid-midia">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2>O quinto andar na mídia</h2>
            </Col>
          </Row>
          <Row className="row-news" around="lg" center="xs">
            <Col xs={12} sm={4} md={3} lg={2}>
              <a>
                <div className="news-button exame">
                </div>
              </a>
            </Col>
            <Col xs={12} sm={4} md={3} lg={2}>
              <a>
                <div className="news-button infomoney">
                </div>
              </a>
            </Col>
            <Col xs={12} sm={4} md={3} lg={2}>
              <a>
                <div className="news-button estadao">
                </div>
              </a>
            </Col>
            <Col xs={12} sm={4} md={3} lg={2}>
              <a>
                <div className="news-button pegn">
                </div>
              </a>
            </Col>
          </Row>
        </Grid>
        <Grid className="grid-navegacao">
          <Row>
            <Col lg={2} md={2} lgOffset={4}>
              <ul className="naveg">
                <li className="title">
                  QUANTO COBRAR?
                </li>
                <li>
                  Calcule seu aluguel
                </li>
                <li className="title mtop">
                  NAVEGUE
                </li>
                <li>
                  Todos os imóveis
                </li>
                <li>
                  Imóveis em São Paulo
                </li>
                <li>
                  Imóveis em Campinas
                </li>
              </ul>
            </Col>
            <Col lg={2} md={2}>
              <ul className="naveg">
                <li className="title">
                  COMO FUNCIONA
                </li>
                <li>
                  Para você corretor
                </li>
                <li>
                  Para você inquilino
                </li>
                <li>
                  Para você proprietário
                </li>
                <li>
                  Indique um imóvel
                </li>
                <li>
                  Ajuda
                </li>
              </ul>
            </Col>
            <Col lg={2} md={2}>
              <ul className="naveg">
                <li className="title">
                  O QUINTO ANDAR
                </li>
                <li>
                  Quem somos
                </li>
                <li>
                  Carreira
                </li>
                <li>
                  Imprensa
                </li>
                <li>
                  Fale conosco
                </li>
              </ul>
            </Col>
            <Col lg={2} md={2}>
              <ul className="naveg">
                <li className="title">
                  FIQUE CONECTADO
                </li>
                <li>
                  Facebook
                </li>
                <li>
                  Instagram
                </li>
                <li>
                  Twitter
                </li>
                <li>
                  Medium
                </li>
                <li>
                  Linkedin
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
        <Grid className="footer">
          <Row between="lg">
            <Col lg={4} md={4}>
              <a>Termos de uso</a>
            </Col>
            <Col lg={4} md={4}>
              <a>Política de privacidade</a>
            </Col>
            <Col lg={4} md={4}>
              <a>® Quinto Andar Serviços Imobiliários Ltda. - CRECI-SP J24.344</a>
            </Col>
          </Row>
        </Grid>
      </Grid>
    );
  }
}
