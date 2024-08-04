export function useEffect(effect, deps) {
    const component = currentComponent;
    component.effectHook(effect, deps);
}