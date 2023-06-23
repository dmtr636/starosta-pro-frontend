export const isTablet = (width: number) => {
    return width >= 768 && width < 1280
}

export const isMobile = (width: number) => {
    return width < 768
}
