import ForceUpdatable from "./ForceUpdatable";

const queue: ForceUpdatable[] = [];

let running: boolean = false;

function enqueue(updatable: ForceUpdatable) {
    queue.push(updatable);
}

function next(): void {
    if(queue.length > 0) {
        queue.shift()!.forceUpdate(next);
    } else {
        running = false;
    }
}

function update(set: Set<ForceUpdatable>): void {
    set.forEach(enqueue);
    if(!running) {
        running = true;
        next();
    }
}

export default update;