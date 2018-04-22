const trips = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TRIP':
      return [
        ...state,
        {
          id: action.id,
          description: action.description,
          booked: false,
        }
      ]
        case 'BOOK_TRIP':
        return state.map(trip =>
        (trip.id === action.id)
          ? {...trip, booked: true}
          : trip
      )
    default:
      return state
  }
}

export default trips
