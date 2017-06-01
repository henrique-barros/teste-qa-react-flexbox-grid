const getMaskedString = (value, mask) => {
  //For masks: 
  // * corresponds to any value
  // @ corresponds to letter
  // # corresponds to number
  
  /*
  if (valueExcedesMaskLimit(value, mask)) {
    return value.substring(0, value.length - 1);
  }
  */

  /*
  if (!isNumeric(value.substring(value.length - 1, 1))) {
    return value;
  }
  */

  const unmaskedString = getUnmaskedString(value, mask);

  console.log(unmaskedString);

  return applyMask(unmaskedString, mask);
};

const valueExcedesMaskLimit = (value, mask) => {
  return value.length > mask.length;
};

const getUnmaskedString = (value, mask) => {
  if (!mask.includes("@")) {
    return value.replace(/\D/g,'');
  }
  else if (!mask.includes("#")) {
    return value.replace(/\W/g, '');
  }
  return value.replace(/\W/g, '').replace(/\D/g,'');
};

const isNumeric = (value) => {
  return /^\d+$/.test(value);
};

const isLetter = (value) => {
  return /^\w+$/.test(value);
};

const applyMask = (text, mask) => {
  let maskedString = "";

  let textCharacterIndex = 0;
  let maskCharacterIndex = 0;

  while (textCharacterIndex < text.length && maskCharacterIndex < mask.length) 
  {
    if (mask[maskCharacterIndex] !== '@' && mask[maskCharacterIndex] !== '#' 
        && mask[maskCharacterIndex] !== '*') {
      maskedString = maskedString.concat(mask[maskCharacterIndex]);
      console.log(maskedString)
      maskCharacterIndex++;
    }
    else if (mask[maskCharacterIndex] === '@') {
      if (isLetter(text[textCharacterIndex])) {
        maskedString = maskedString.concat(text[textCharacterIndex]);
        maskCharacterIndex++;
      }
      textCharacterIndex++;
    }
    else if (mask[maskCharacterIndex] === '#') {
      if (isNumeric(text[textCharacterIndex])) {
        maskedString = maskedString.concat(text[textCharacterIndex]);
        maskCharacterIndex++;
      }
      textCharacterIndex++;
    }
    else if (mask[maskCharacterIndex] ==='*') {
      if (isNumeric(text[textCharacterIndex]) || isLetter(text[textCharacterIndex])) {
        maskedString.concat(text[textCharacterIndex]);
        maskCharacterIndex++;
      }
      textCharacterIndex++;
    }
  }
  
  return maskedString;
};

module.exports = { getMaskedString };