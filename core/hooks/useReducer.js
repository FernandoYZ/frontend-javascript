function useReducer(reducer, initialState) {
    const component = currentComponent;
    const [state, setState] = component.stateHook(initialState);

    const dispatch = (action) => {
        const newState = reducer(state, action);
        setState(newState);
    };

    return [state, dispatch];
}

export { useReducer };