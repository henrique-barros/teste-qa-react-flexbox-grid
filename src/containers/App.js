import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppComponent from '../components/AppComponent';

class App extends Component {
  render() {
    const { actions, phone } = this.props;
    return (
      <AppComponent />
    );

    return (
      <Grid className="App" fluid>
        <Row>
          <Col md={6} lg={6} xs={6} sm={6}>
            {this.props.varTeste}
          </Col>
          <Col md={6} lg={6} xs={6} sm={6}>
            <input type="text" value={phone} onChange={(e) => actions.PhoneChanged(e.target.value)}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    varTeste: state.Main.teste,
    phone: state.Main.phone
  }
}

function mapDispatchToProps(dispatch) {

  return {
      actions: bindActionCreators(
        {
          PhoneChanged: require('../actions/phoneChanged')
        },
        dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
