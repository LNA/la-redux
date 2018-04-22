import trips from './trips'

describe('trips reducer', () => {
  const vacation = 'Day of the Dead in Oxaca';
  const id = 0;
  const booked = false

  it('returns an empty object by default', () => {
    expect(
      trips(undefined, {type: 'some-action'})
    ).toEqual({})
  });

  describe('ADD_TRIP action type', () => {
    it('handles ADD_TRIP', () => {
      const action = {
        type: 'ADD_TRIP',
        id: id,
        description: vacation,
        booked: booked,
      };

      const nextState = trips([], action);
      expect(nextState).toEqual([
        {
          "id": 0,
          "description": "Day of the Dead in Oxaca",
          "booked": false,
        }
      ]);
    })
  })

  describe('BOOK_TRIP action type', () => {
    it('returns true for booked', () => {
      const previousAction = {
        type: 'ADD_TRIP',
        description: vacation,
        booked: booked,
        id: id,
      };

      const nextAction = {
        type: 'BOOK_TRIP',
        description: vacation,
        booked: booked,
        id: id,
      };

      const previousState = trips([], previousAction);
      const nextState = trips(previousState, nextAction);
      expect(nextState[0]["booked"]).toEqual(true);
    })
  })
})
