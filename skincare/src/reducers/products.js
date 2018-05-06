const frequency = category => ({
  // cleanse twice a day
  // toner twice a day
  // serum mornings
  // cream moisturizer twice a day
  // face oil once a day
  //exfoliate twice a week
  //professional grade peel once a quarter
})

const setFrequency = (id, category) => ({
  id: id,
  frequency: frequency(category),
})

const products = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          categoty: action.category
        }
      ],
    case 'SET_FREQUENCY':
      return setFrequency(action.id, action.category);
    default:
      return state
  }
}

export default products
