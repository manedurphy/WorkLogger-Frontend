export declare function setLoginTokens(token: string, refresh: string): void;
export declare function clearTokens(): void;
export declare function getTokens(): {
    token: string | null;
    refreshToken: string | null;
};
