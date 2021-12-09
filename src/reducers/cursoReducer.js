

export const cursoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CURSO':
      const checkIfCursoAlreadyExists = state.filter(curso => (
        curso.id === action.payload.id
      ));
      if (!checkIfCursoAlreadyExists.length) {
        return [...state, action.payload];
      }
      return state;
    default:
      return state;
  }
}