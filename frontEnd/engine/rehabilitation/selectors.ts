// Modules
const selfSelector = (state) => state.rehabillitationReducer;

const pendingSelector = (state: any) => selfSelector(state).pending;
const rehabillitationSelector = (state: any) => selfSelector(state).rehabillitations;

const rehabillitationTabSelectors = {
  pending: pendingSelector,
  rehabillitations: rehabillitationSelector,
};

export default rehabillitationTabSelectors;
