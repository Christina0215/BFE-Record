const originalSetTimeout = window.setTimeout;
let timeoutIds = [];

window.setTimeout = (callback, delay) => {
    const timerId = originalSetTimeout(callback, delay)
    timeoutIds.push(timerId);
    return timerId
}

const clearAllTimeout = () => {
    timeoutIds.forEach(id => window.clearTimeout(id))}