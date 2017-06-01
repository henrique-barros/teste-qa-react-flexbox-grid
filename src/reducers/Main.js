const initialState = {
  teste: 'Teste reducer',
  phone: ''
};

const {
  PHONE_CHANGED
} = require('../actions/consts');

const { getMaskedString } = require('../util/mask');

const Main = (state = initialState, action) => {
  switch(action.type) {
    case PHONE_CHANGED: {
      let phone = action.text;
      phone = getMaskedString(phone, '(##)#####-####');
      return {
        ...state,
        phone: phone
      };
    }
    default: {
      return state;
    }
  }
}

export default Main;