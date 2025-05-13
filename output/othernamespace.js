"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const namespace_1 = require("./namespace");
const datauser = new namespace_1.UserAuth.UserLogin("Bikram dhami", "1234");
const adminData = new namespace_1.AdminAuth.AdminLogin("Bikram dhami", "1234");
datauser.login();
adminData.login();
