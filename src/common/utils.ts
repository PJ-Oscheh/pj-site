const SCROLL_OFFSET = 60;

export function scrollToRef(destRef: HTMLElement | null): void {
    if (destRef !== null) {
        const refPos = destRef.getBoundingClientRect().top - SCROLL_OFFSET + window.scrollY;
        window.scrollTo({top: refPos, behavior: "smooth"});
    }
    else {
        console.warn(`Can't scroll - '${destRef}' is null.`)
    }
}