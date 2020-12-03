export interface Auth {
    isConnect: boolean,
    token?: string | null,
    user?: any | null,
    emailError?: string | null,
    errorCode?: string | null,
    errorMessage?: string | null,
    credential?: string | null
}