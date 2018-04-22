import * as actions from './index'

describe('trips action', () => {
  const description = 'Art Basel in Hong Kong';
  const id = 0;

  describe('addTrip', () => {
    it('returns an object with type ADD_TRIP', () => {
      const ADD_TRIP = 'ADD_TRIP'

      expect(actions.addTrip(description)).toEqual({
        type: ADD_TRIP,
        id: id,
        description: description,
        booked: false
      })
    })
  })

  describe('bookTrip', () => {
    it('returns an object with type BOOK_TRIP', () => {
      const BOOK_TRIP = 'BOOK_TRIP'

      expect(actions.bookTrip(id)).toEqual({
        type: BOOK_TRIP,
        id: id
      })
    })
  })
})
