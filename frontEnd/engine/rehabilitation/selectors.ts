// Modules
const selfSelector = (state) => state.rehabillitationReducer;

const pendingSelector = (state: any) => selfSelector(state).pending;
const rehabillitationSelector = (state: any) => selfSelector(state).rehabillitations;
const currentExerciseSelectors = (state: any) => selfSelector(state).currentExercise;

const rehabillitationTabSelectors = {
  currentExercise: currentExerciseSelectors,
  pending: pendingSelector,
  rehabillitations: rehabillitationSelector,
};

export default rehabillitationTabSelectors;
