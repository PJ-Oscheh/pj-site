export function scrollToRef(destRef: HTMLElement | null): void {
    if (destRef !== null) {
        destRef.scrollIntoView({behavior: 'smooth'});
    }
    else {
        console.log(`Can't scroll - '${destRef}' is null.`)
    }
}