let triggerDidMount = true;

export function useComponentDidMount() {
  if (triggerDidMount) {
    triggerDidMount.current = false;
  }
}
