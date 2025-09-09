"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const base_entity_1 = require("./base.entity");
class User extends base_entity_1.BaseEntity {
    constructor(props, id) {
        var _a, _b, _c, _d, _e;
        super(id);
        this.props = {
            ...props,
            isDeleted: (_a = props.isDeleted) !== null && _a !== void 0 ? _a : false,
            isPrivate: (_b = props.isPrivate) !== null && _b !== void 0 ? _b : false,
            isAdmin: (_c = props.isAdmin) !== null && _c !== void 0 ? _c : false,
            isSuspended: (_d = props.isSuspended) !== null && _d !== void 0 ? _d : false,
            isSubscribed: (_e = props.isSubscribed) !== null && _e !== void 0 ? _e : false,
        };
    }
    get fullName() { return this.props.fullName; }
    get phoneNumber() { return this.props.phoneNumber; }
    get email() { return this.props.email; }
    get username() { return this.props.username; }
    get password() { return this.props.password; }
    get profilePicture() { return this.props.profilePicture; }
    get dateOfBirth() { return this.props.dateOfBirth; }
    get gender() { return this.props.gender; }
    get bio() { return this.props.bio; }
    get location() { return this.props.location; }
    get deviceToken() { return this.props.deviceToken; }
    get isDeleted() { return this.props.isDeleted; }
    get isPrivate() { return this.props.isPrivate; }
    get isAdmin() { return this.props.isAdmin; }
    get isSuspended() { return this.props.isSuspended; }
    get isSubscribed() { return this.props.isSubscribed; }
    static fromPersistence(rec) {
        return new User({
            fullName: rec.fullName,
            phoneNumber: rec.phoneNumber,
            email: rec.email,
            username: rec.username,
            password: rec.password,
            profilePicture: rec.profilePicture,
            dateOfBirth: rec.dateOfBirth,
            gender: rec.gender,
            bio: rec.bio,
            location: rec.location,
            deviceToken: rec.deviceToken,
            isDeleted: rec.isDeleted,
            isPrivate: rec.isPrivate,
            isAdmin: rec.isAdmin,
            isSuspended: rec.isSuspended,
            isSubscribed: rec.isSubscribed,
        }, rec.id);
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map