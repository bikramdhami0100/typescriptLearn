"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAuth = exports.UserAuth = void 0;
var UserAuth;
(function (UserAuth) {
    class UserLogin {
        name;
        password;
        constructor(name, password) {
            this.name = name;
            this.password = password;
            if (name && password) {
                this.login();
            }
            else {
                this.logout();
            }
        }
        login() {
            console.log("User is logged in");
        }
        logout() {
            console.log("User is logged out");
        }
    }
    UserAuth.UserLogin = UserLogin;
    function showData() {
        console.log("This is show data");
    }
    UserAuth.showData = showData;
})(UserAuth || (exports.UserAuth = UserAuth = {}));
var AdminAuth;
(function (AdminAuth) {
    class AdminLogin {
        name;
        password;
        constructor(name, password) {
            this.name = name;
            this.password = password;
            if (name && password) {
                this.login();
            }
            else {
                this.logout();
            }
        }
        login() {
            console.log("User is logged in");
        }
        logout() {
            console.log("User is logged out");
        }
    }
    AdminAuth.AdminLogin = AdminLogin;
    function showData() {
        console.log("This is show data");
    }
    AdminAuth.showData = showData;
})(AdminAuth || (exports.AdminAuth = AdminAuth = {}));
