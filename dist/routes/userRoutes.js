"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var passport_1 = __importDefault(require("passport"));
var usersController_1 = require("../controllers/usersController");
var rootController_1 = require("../controllers/rootController");
exports.redirectRoutes = {
    google: {
        successRedirect: "/api/auth/google/success",
        failureRedirect: "/api/auth/google/failure"
    },
    local: {
        successRedirect: '/api/auth/local/success',
        failureRedirect: '/api/auth/local/failure'
    }
};
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.router = express_1.default.Router();
        this.init();
    }
    UserRoutes.prototype.getRedirectUrl = function (req) {
        var _originUrl = req.get('origin');
        var _host = req.get('host');
        if (_originUrl) {
            return _originUrl;
        }
        else if (_host && _host.includes('localhost')) {
            return 'http://localhost:3000';
        }
        else {
            return req.protocol + '://' + _host;
        }
    };
    //User validation method
    UserRoutes.prototype.validateAuth = function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.status(404).json({
            success: false,
            msg: 'Unauthorized access. please Login'
        });
        //return next();
    };
    UserRoutes.prototype.init = function () {
        var _this = this;
        // Google OAuth route
        this.router.get("/auth/google", passport_1.default.authenticate("google", { scope: ["profile", "email"] }));
        // Google OAuth redirect URL - Google calls this route after sign-in
        this.router.get("/auth/google/callback", passport_1.default.authenticate("google", exports.redirectRoutes.google));
        // Google OAuth success route - called when sign-in is OK
        this.router.get("/auth/google/success", function (req, res) {
            res.redirect(_this.getRedirectUrl(req) + "/#/landing");
        });
        // Google OAuth failure route - called when sign-in is NOT-OK
        this.router.get("/auth/google/failure", function (req, res) {
            res.redirect(_this.getRedirectUrl(req) + "/#/unauthorized");
        });
        // Register
        this.router.post("/register", function (req, res) {
            usersController_1.UserController.RegisterUser(req, res);
        });
        this.router.delete("/users/:email", function (req, res) {
            usersController_1.UserController.DeleteUserByEmail(req, res);
        });
        //Logout
        this.router.get("/logout", function (req, res) {
            req.logOut();
            req.session.destroy(function (err) {
                if (err) {
                    return res.status(500).json({
                        success: true,
                        error: err
                    });
                }
                else {
                    return res.status(200).json({
                        success: true,
                        msg: "User loggout successfully"
                    });
                }
            });
            delete req.session;
        });
        // Login
        this.router.post("/login", passport_1.default.authenticate('local', exports.redirectRoutes.local));
        this.router.get("/auth/local/success", function (req, res) {
            res.status(200).json({
                success: true,
                data: req.user
            });
        });
        this.router.get("/auth/local/failure", function (req, res) {
            res.status(404).json({
                success: false,
                msg: 'Unauthorized. login again'
            });
        });
        this.router.get('/user/currentUser', this.validateAuth, function (req, res) {
            console.log("INSIDE CURRENT USER");
            console.log(req.session);
            res.status(200).json({
                success: true,
                data: req.user
            });
        });
        /**
         * THIS ROUTE IS ONLY FOR MOCHA TESTING.
         */
        this.router.get("/test/users", function (req, res) {
            usersController_1.UserController.GetAllUsers(req, res);
        });
        /* User Routes */
        this.router.get("/users", this.validateAuth, function (req, res) {
            usersController_1.UserController.GetAllUsers(req, res);
        });
        this.router.get("/users/:userId", this.validateAuth, function (req, res) {
            usersController_1.UserController.GetUserById(req, res);
        });
        this.router.put("/users", this.validateAuth, function (req, res) {
            usersController_1.UserController.UpdateUserById(req, res);
        });
        this.router.get("/caregivers", this.validateAuth, function (req, res) {
            usersController_1.UserController.GetAllCaregivers(req, res);
        });
        /* Review Routes */
        this.router.post("/review", this.validateAuth, function (req, res) {
            usersController_1.UserController.AddReview(req, res);
        });
        this.router.get("/reviewsByUser/:userId", this.validateAuth, function (req, res) {
            usersController_1.UserController.GetAllReviewsByUser(req, res);
        });
        this.router.get("/reviewsForUser/:userId", this.validateAuth, function (req, res) {
            usersController_1.UserController.GetAllReviewsForUser(req, res);
        });
        this.router.delete("/review/:userId/:reviewId", this.validateAuth, function (req, res) {
            usersController_1.UserController.DeleteReviewForUserByReviewId(req, res);
        });
        this.router.get("/", function (req, res) {
            rootController_1.RootController.ApiRootDocumentation(res);
        });
    };
    return UserRoutes;
}());
exports.default = new UserRoutes().router;
