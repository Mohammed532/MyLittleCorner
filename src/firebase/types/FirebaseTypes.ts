type EnvVar = string | undefined

interface FBConfig {
    apiKey: EnvVar,
    authDomain: EnvVar,
    projectId: EnvVar,
    storageBucket: EnvVar,
    messagingSenderId: EnvVar,
    appId: EnvVar
}

interface User {
    primary_email: string | null,
    fname: string,
    lname: string,
    corners: {
        [name: string]: string
    } | null
}

type SignInMethod = 'email-password' | 'google';

interface CreateUserCredentials {
    type: SignInMethod,
    email: string,
    password: string,
    fname: string,
    lname: string
}

interface UserCredentials {
    type: SignInMethod,
    email: string,
    password: string,
}

export type { EnvVar, FBConfig, User, CreateUserCredentials, UserCredentials }