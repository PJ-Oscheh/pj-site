import { SCROLL_OFFSET } from './constants.ts';

export function scrollToRef(destRef: HTMLElement | null): void {
    if (destRef !== null) {
        const refPos = destRef.getBoundingClientRect().top - SCROLL_OFFSET + window.scrollY;
        window.scrollTo({top: refPos, behavior: "smooth"});
        console.log(`Scrolling to ${refPos}`);
    }
    else {
        console.log(`Can't scroll - '${destRef}' is null.`)
    }
}