export interface RLink {
    route: string,
    displayText: string,
    id: number
}

export interface SecLink {
    refSection: HTMLElement | null,
    displayText: string,
    id: number
}

export interface ContactInfo {
    icon: string,
    displayText: string,
    clickLink: string,
    id: number
}