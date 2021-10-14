import { MAX_SCREEN, MIN_SCREEN } from "../constants/screenBreakpoint"


const fluidFontSize = (minSize: number, maxSize: number) => {
    return `calc(${minSize}px + (${maxSize - minSize}) * ((100vw - ${MIN_SCREEN}px) / (${MAX_SCREEN - MIN_SCREEN})))`
}

export default fluidFontSize