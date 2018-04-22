let nextTripId = 0;
const booked = false;

export const addTrip = (description) => ({
  type: 'ADD_TRIP',
  id: nextTripId++,
  description,
  booked: booked
})

export const bookTrip = (id) => ({
  type: 'BOOK_TRIP',
  id
})
