export declare namespace UserAuth {
    class UserLogin {
        name: string;
        password: string;
        constructor(name: string, password: string);
        login(): void;
        logout(): void;
    }
    function showData(): void;
}
export declare namespace AdminAuth {
    class AdminLogin {
        name: string;
        password: string;
        constructor(name: string, password: string);
        login(): void;
        logout(): void;
    }
    function showData(): void;
}
