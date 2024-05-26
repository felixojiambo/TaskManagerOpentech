"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notice = void 0;
const typeorm_1 = require("typeorm");
const user_js_1 = require("./user.js"); // Adjust the path as necessary
const task_1 = require("./task"); // Adjust the path as necessary
// Define the notification type enum outside the class
const NotiType = Object.freeze({
    ALERT: 'alert',
    MESSAGE: 'message'
});
let Notice = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _team_decorators;
    let _team_initializers = [];
    let _team_extraInitializers = [];
    let _text_decorators;
    let _text_initializers = [];
    let _text_extraInitializers = [];
    let _task_decorators;
    let _task_initializers = [];
    let _task_extraInitializers = [];
    let _notiType_decorators;
    let _notiType_initializers = [];
    let _notiType_extraInitializers = [];
    let _isRead_decorators;
    let _isRead_initializers = [];
    let _isRead_extraInitializers = [];
    let _createdAt_decorators;
    let _createdAt_initializers = [];
    let _createdAt_extraInitializers = [];
    var Notice = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.team = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _team_initializers, void 0));
            this.text = (__runInitializers(this, _team_extraInitializers), __runInitializers(this, _text_initializers, void 0));
            this.task = (__runInitializers(this, _text_extraInitializers), __runInitializers(this, _task_initializers, void 0));
            this.notiType = (__runInitializers(this, _task_extraInitializers), __runInitializers(this, _notiType_initializers, void 0));
            this.isRead = (__runInitializers(this, _notiType_extraInitializers), __runInitializers(this, _isRead_initializers, void 0));
            this.createdAt = (__runInitializers(this, _isRead_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            __runInitializers(this, _createdAt_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Notice");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _team_decorators = [(0, typeorm_1.ManyToMany)(() => user_js_1.User), (0, typeorm_1.JoinTable)()];
        _text_decorators = [(0, typeorm_1.Column)()];
        _task_decorators = [ManyToOne(() => task_1.Task)];
        _notiType_decorators = [(0, typeorm_1.Column)({ default: NotiType.ALERT, enum: NotiType })];
        _isRead_decorators = [(0, typeorm_1.ManyToMany)(() => user_js_1.User), (0, typeorm_1.JoinTable)()];
        _createdAt_decorators = [(0, typeorm_1.CreateDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _team_decorators, { kind: "field", name: "team", static: false, private: false, access: { has: obj => "team" in obj, get: obj => obj.team, set: (obj, value) => { obj.team = value; } }, metadata: _metadata }, _team_initializers, _team_extraInitializers);
        __esDecorate(null, null, _text_decorators, { kind: "field", name: "text", static: false, private: false, access: { has: obj => "text" in obj, get: obj => obj.text, set: (obj, value) => { obj.text = value; } }, metadata: _metadata }, _text_initializers, _text_extraInitializers);
        __esDecorate(null, null, _task_decorators, { kind: "field", name: "task", static: false, private: false, access: { has: obj => "task" in obj, get: obj => obj.task, set: (obj, value) => { obj.task = value; } }, metadata: _metadata }, _task_initializers, _task_extraInitializers);
        __esDecorate(null, null, _notiType_decorators, { kind: "field", name: "notiType", static: false, private: false, access: { has: obj => "notiType" in obj, get: obj => obj.notiType, set: (obj, value) => { obj.notiType = value; } }, metadata: _metadata }, _notiType_initializers, _notiType_extraInitializers);
        __esDecorate(null, null, _isRead_decorators, { kind: "field", name: "isRead", static: false, private: false, access: { has: obj => "isRead" in obj, get: obj => obj.isRead, set: (obj, value) => { obj.isRead = value; } }, metadata: _metadata }, _isRead_initializers, _isRead_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: obj => "createdAt" in obj, get: obj => obj.createdAt, set: (obj, value) => { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Notice = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Notice = _classThis;
})();
exports.Notice = Notice;
function ManyToOne(arg0) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=notification.js.map