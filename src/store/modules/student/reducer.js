import produce from 'immer';

const INITIAL_STATE = {
  id: null,
};

export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/SIGN_IN': {
        draft.id = action.payload.id;
        break;
      }
      default:
    }
  });
}
