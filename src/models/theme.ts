export interface Theme {
    name: string,
    colors: {
        backgroundPrimary: string,
        backgaroundSecondary: string,
    }
}

export interface Themes {
    [key: string]: Theme
}