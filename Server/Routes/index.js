"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
router.get('/', (req, res, next) => {
    res.render('content/index', {
        title: 'Home',
        page: 'home',
        tournaments: ''
    });
});
router.get('/login', (req, res, next) => {
    if (!req.user) {
        return res.render('content/index', { title: 'Login', page: 'login', messages: req.flash('loginMessage') });
    }
});
router.post('/login', (req, res, next) => {
});
router.get('/register', (req, res, next) => {
});
router.post('/register', (req, res, next) => {
});
router.get('/logout', (req, res, next) => {
});
//# sourceMappingURL=index.js.map