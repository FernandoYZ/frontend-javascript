import { currentComponent } from '../components/component';

function useContext(context) {
    const component = currentComponent;
    const [value, setValue] = useState(context.getValue());

    useEffect(() => {
        const unsubscribe = context.subscribe(setValue);
        return () => unsubscribe();
    }, [context]);

    return value;
}

export { useContext };