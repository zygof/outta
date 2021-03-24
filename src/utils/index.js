import storeManager from './storeManager';

const capitalizeFirstLetter = str => {
  return str && str.length
    ? str.charAt (0).toUpperCase () + str.slice (1)
    : str;
};
export {storeManager, capitalizeFirstLetter};
