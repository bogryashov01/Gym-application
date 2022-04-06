// Modules
const selfSelector = (state) => state.gymReducer;

const pendingSelector = (state: any) => selfSelector(state).pending;
const gymExerciseSelector = (state: any) => selfSelector(state).gymExercise;
const currentExerciseSelector = (state: any) => selfSelector(state).currentExercise;

const gymTabSelectors = {
  pending: pendingSelector,
  gymExercise: gymExerciseSelector,
  currentExercise: currentExerciseSelector,
};

export default gymTabSelectors;
