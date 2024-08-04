function useEffect(effect, deps) {
    const component = currentComponent;
    component.effectHook(async () => {
        await effect();
    }, deps);
}

export { useEffect };