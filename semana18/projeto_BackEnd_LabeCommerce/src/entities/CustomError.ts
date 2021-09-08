export default class CustomError extends Error {
    constructor(
        public message: string,
        public code: number,
        public tips?: string | undefined
    ) {
        super(message)
    }
}