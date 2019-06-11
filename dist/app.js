"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var jobRoutes_1 = __importDefault(require("./routes/jobRoutes"));
var passport_1 = __importDefault(require("passport"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_session_1 = __importDefault(require("express-session"));
var globals_1 = __importDefault(require("./config/globals"));
var passport_google_strategy_1 = require("./auth/passport-google-strategy");
var passport_local_strategy_1 = require("./auth/passport-local-strategy");
var MongoStore = require('connect-mongo')(express_session_1.default);
/**
 * Class to manage Express app.
 * Middleware such as body-parser, cors are managed.
 * Server routes and static folder config is managed.
 */
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    App.prototype.config = function () {
        // body-parser middleware
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        // enable corss-origin request
        this.app.use(cors_1.default());
        //set static folder
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../angular-dist')));
        this.app.set('json replacer', function (key, value) {
            // undefined values are set to `null`
            if (typeof value === "undefined") {
                return "";
            }
            return value;
        });
        this.app.use(cookie_parser_1.default());
        // Express Session
        this.app.use(express_session_1.default({
            secret: 'iamadevinsymbiiproject',
            saveUninitialized: true,
            resave: true,
            store: new MongoStore({
                url: globals_1.default.database
            })
        }));
        // passportjs config
        this.app.use(passport_1.default.initialize());
        this.app.use(passport_1.default.session());
        passport_1.default.serializeUser(function (user, done) {
            done(null, user);
        });
        passport_1.default.deserializeUser(function (user, done) {
            done(null, user);
        });
        // initialize google passport strategy
        new passport_local_strategy_1.PassportLocalStrategy();
        // initialize google passport strategy
        new passport_google_strategy_1.PassportGoogleStrategy();
    };
    App.prototype.routes = function () {
        // map routes
        this.app.use('/api', userRoutes_1.default, jobRoutes_1.default);
    };
    return App;
}());
exports.App = App;
