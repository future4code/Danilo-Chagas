import { requestResult, REQUEST_RESULT_KEYS } from '../Pokemon'

export default class CustomError extends Error {
    constructor(
        public code: number,
        public message: string,
        public data?: any
    ) {
        super(message)
    }


    public mountErrorWithData() {
        const errorBody: requestResult = {
            [REQUEST_RESULT_KEYS.MESSAGE]: this.message,
            [REQUEST_RESULT_KEYS.DATA]: this.data ?? null
        }
        return {
            code: this.code,
            message: errorBody
        }
    }
}

export enum ERROR_MESSAGES {
    EMPTY_REQUEST = 'Failed to process. Empty request',
    INVALID_KEYS = 'Failed to process. Invalid keys'
}