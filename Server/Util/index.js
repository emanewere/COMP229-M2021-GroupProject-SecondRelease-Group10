"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = exports.UserName = exports.UserDisplayName = void 0;
function UserDisplayName(req) {
    if (req.user) {
        let user = req.user;
        return user.displayName.toString();
    }
    return '';
}
exports.UserDisplayName = UserDisplayName;
function UserName(req) {
    if (req.user) {
        let user = req.user;
        return user.username.toString();
    }
    return '';
}
exports.UserName = UserName;
function AuthGuard(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=index.js.map