interface ForceUpdatable {
    forceUpdate: (callback: () => void) => void;
}

export default ForceUpdatable;