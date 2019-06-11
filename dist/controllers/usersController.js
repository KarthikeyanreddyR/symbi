"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../models/user");
var review_1 = require("../models/review");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    // Handled using passport Local strategy.
    // public static AuthenticateUser(req: Request, res: Response) {
    //     UserModel.findOne({ email: req.body.email }, (err: any, user: IUser) => {
    //         if (err) {
    //             res.status(500).json({
    //                 success: false,
    //                 error: err
    //             });
    //         } else if (user) {
    //             if (user.password === req.body.password) {
    //                 res.status(200).json({
    //                     success: true,
    //                     data: user,
    //                 });
    //             } else {
    //                 res.status(200).json({
    //                     success: false,
    //                     msg: "Invalid password"
    //                 });
    //             }
    //         } else {
    //             res.status(200).json({
    //                 success: false,
    //                 msg: "Invalid email"
    //             });
    //         }
    //     });
    // }
    UserController.RegisterUser = function (req, res) {
        var _user = user_1.UserModel.schema.statics.defaultObject();
        _user.firstName = req.body.name;
        _user.email = req.body.email;
        _user.password = user_1.UserModel.schema.statics.hashPassword(req.body.password);
        try {
            new user_1.UserModel(_user).registerUser(function (err, user) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        error: err
                    });
                }
                else {
                    res.status(200).json({
                        success: true,
                        data: user,
                    });
                }
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: error
            });
        }
    };
    UserController.DeleteUserByEmail = function (req, res) {
        user_1.UserModel.remove({ email: req.params.email }).exec(function (err, doc) {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    data: doc
                });
            }
        });
    };
    UserController.GetAllUsers = function (req, res) {
        user_1.UserModel.find({}).exec(function (err, docs) {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
            }
        });
    };
    UserController.GetUserById = function (req, res) {
        user_1.UserModel.findById(req.params.userId).exec(function (err, doc) {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    data: doc
                });
            }
        });
    };
    UserController.UpdateUserById = function (req, res) {
        user_1.UserModel.findByIdAndUpdate(req.body._id, req.body, { new: true }).exec(function (err, doc) {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    data: doc
                });
            }
        });
    };
    UserController.GetAllCaregivers = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _users, _reviews, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, user_1.UserModel.find()];
                    case 1:
                        _users = _a.sent();
                        return [4 /*yield*/, review_1.ReviewModel.find()];
                    case 2:
                        _reviews = _a.sent();
                        res.status(200).json({
                            success: true,
                            data: {
                                users: _users,
                                reviews: _reviews
                            }
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        res.status(500).json({
                            success: true,
                            error: error_1
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * User Reviews
     */
    UserController.AddReview = function (req, res) {
        var review = {
            reviewerID: req.body.reviewerID,
            revieweeID: req.body.revieweeID,
            reviewDate: req.body.reviewDate,
            reviewTitle: req.body.reviewTitle,
            starRating: req.body.starRating,
            reviewNotes: req.body.reviewNotes
        };
        new review_1.ReviewModel(review).addReview(function (err, doc) {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    data: doc
                });
            }
        });
    };
    UserController.GetAllReviewsByUser = function (req, res) {
        review_1.ReviewModel.find().where('reviewerID').equals(req.params.userId).exec(function (err, docs) {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
            }
        });
    };
    UserController.GetAllReviewsForUser = function (req, res) {
        review_1.ReviewModel.find().where('revieweeID').equals(req.params.userId).exec(function (err, docs) {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
            }
        });
    };
    UserController.DeleteReviewForUserByReviewId = function (req, res) {
        var _userId = req.params.userId;
        var _reviewId = req.params.reviewId;
        // validate userId
        user_1.UserModel.findById(_userId).count().exec(function (err, count) {
            if (count > 0) {
                // find by _id and delete it.
                review_1.ReviewModel.findByIdAndDelete(_reviewId).where('reviewerID').equals(_userId).exec(function (err, doc) {
                    if (err) {
                        res.status(500).json({
                            success: false,
                            error: err
                        });
                    }
                    else {
                        if (doc) {
                            res.status(200).json({
                                success: true,
                                data: doc,
                                msg: "deleted review"
                            });
                        }
                        else {
                            res.status(200).json({
                                success: false,
                                msg: "No review with given review id"
                            });
                        }
                    }
                });
            }
            else {
                // no user with id
                res.status(200).json({
                    success: false,
                    msg: "No user with given user id"
                });
            }
        });
    };
    return UserController;
}());
exports.UserController = UserController;
