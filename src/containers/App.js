import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppComponent from '../components/AppComponent';

class App extends Component {
  render() {
    const { actions, phone } = this.props;

    return (
      <AppComponent phone={phone} onPhoneChange={actions.PhoneChanged} />
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
