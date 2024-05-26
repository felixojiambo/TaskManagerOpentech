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
exports.SubTask = exports.Activity = exports.Task = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
let Task = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _date_decorators;
    let _date_initializers = [];
    let _date_extraInitializers = [];
    let _priority_decorators;
    let _priority_initializers = [];
    let _priority_extraInitializers = [];
    let _stage_decorators;
    let _stage_initializers = [];
    let _stage_extraInitializers = [];
    let _activities_decorators;
    let _activities_initializers = [];
    let _activities_extraInitializers = [];
    let _subTasks_decorators;
    let _subTasks_initializers = [];
    let _subTasks_extraInitializers = [];
    let _team_decorators;
    let _team_initializers = [];
    let _team_extraInitializers = [];
    let _isTrashed_decorators;
    let _isTrashed_initializers = [];
    let _isTrashed_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _phone_decorators;
    let _phone_initializers = [];
    let _phone_extraInitializers = [];
    let _trackingNumber_decorators;
    let _trackingNumber_initializers = [];
    let _trackingNumber_extraInitializers = [];
    var Task = _classThis = class {
        static generateTrackingNumber(title, category, phone) {
            throw new Error('Method not implemented.');
        }
        save() {
            throw new Error('Method not implemented.');
        }
        static findById(id) {
            throw new Error('Method not implemented.');
        }
        static findByIdAndDelete(id) {
            throw new Error('Method not implemented.');
        }
        static deleteMany(arg0) {
            throw new Error('Method not implemented.');
        }
        static updateMany(arg0, arg1) {
            throw new Error('Method not implemented.');
        }
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.title = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.date = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _date_initializers, void 0));
            this.priority = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _priority_initializers, void 0));
            this.stage = (__runInitializers(this, _priority_extraInitializers), __runInitializers(this, _stage_initializers, void 0));
            this.activities = (__runInitializers(this, _stage_extraInitializers), __runInitializers(this, _activities_initializers, void 0));
            this.subTasks = (__runInitializers(this, _activities_extraInitializers), __runInitializers(this, _subTasks_initializers, void 0));
            this.team = (__runInitializers(this, _subTasks_extraInitializers), __runInitializers(this, _team_initializers, void 0));
            this.isTrashed = (__runInitializers(this, _team_extraInitializers), __runInitializers(this, _isTrashed_initializers, void 0));
            this.description = (__runInitializers(this, _isTrashed_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.email = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.phone = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
            this.trackingNumber = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _trackingNumber_initializers, void 0));
            this.assets = __runInitializers(this, _trackingNumber_extraInitializers);
            this.id = null;
            this.title = '';
            this.date = new Date();
            this.priority = 'normal';
            this.stage = 'todo';
            this.activities = [];
            this.subTasks = [];
            this.team = [];
            this.isTrashed = false;
            this.description = '';
            this.email = '';
            this.phone = '';
            this.trackingNumber = ''; //this.generateTrackingNumber();
        }
        static findAndCountAll(params) {
            throw new Error("Method 'findAndCountAll' must be implemented.");
        }
        generateTrackingNumber() {
            const titleLetters = this.title.slice(0, 2).toUpperCase();
            const phoneNumberLastTwoDigits = this.phone.slice(-2);
            const trackingNumber = `OP${titleLetters}${phoneNumberLastTwoDigits}`;
            return trackingNumber;
        }
    };
    __setFunctionName(_classThis, "Task");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _title_decorators = [(0, typeorm_1.Column)()];
        _date_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _priority_decorators = [(0, typeorm_1.Column)({ default: 'normal' })];
        _stage_decorators = [(0, typeorm_1.Column)({ default: 'todo' })];
        _activities_decorators = [(0, typeorm_1.OneToMany)(() => Activity, activity => activity.task)];
        _subTasks_decorators = [(0, typeorm_1.OneToMany)(() => SubTask, subTask => subTask.task)];
        _team_decorators = [(0, typeorm_1.ManyToMany)(() => user_1.User, user => user.tasks)];
        _isTrashed_decorators = [(0, typeorm_1.Column)({ default: false })];
        _description_decorators = [(0, typeorm_1.Column)()];
        _email_decorators = [(0, typeorm_1.Column)()];
        _phone_decorators = [(0, typeorm_1.Column)()];
        _trackingNumber_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: obj => "date" in obj, get: obj => obj.date, set: (obj, value) => { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
        __esDecorate(null, null, _priority_decorators, { kind: "field", name: "priority", static: false, private: false, access: { has: obj => "priority" in obj, get: obj => obj.priority, set: (obj, value) => { obj.priority = value; } }, metadata: _metadata }, _priority_initializers, _priority_extraInitializers);
        __esDecorate(null, null, _stage_decorators, { kind: "field", name: "stage", static: false, private: false, access: { has: obj => "stage" in obj, get: obj => obj.stage, set: (obj, value) => { obj.stage = value; } }, metadata: _metadata }, _stage_initializers, _stage_extraInitializers);
        __esDecorate(null, null, _activities_decorators, { kind: "field", name: "activities", static: false, private: false, access: { has: obj => "activities" in obj, get: obj => obj.activities, set: (obj, value) => { obj.activities = value; } }, metadata: _metadata }, _activities_initializers, _activities_extraInitializers);
        __esDecorate(null, null, _subTasks_decorators, { kind: "field", name: "subTasks", static: false, private: false, access: { has: obj => "subTasks" in obj, get: obj => obj.subTasks, set: (obj, value) => { obj.subTasks = value; } }, metadata: _metadata }, _subTasks_initializers, _subTasks_extraInitializers);
        __esDecorate(null, null, _team_decorators, { kind: "field", name: "team", static: false, private: false, access: { has: obj => "team" in obj, get: obj => obj.team, set: (obj, value) => { obj.team = value; } }, metadata: _metadata }, _team_initializers, _team_extraInitializers);
        __esDecorate(null, null, _isTrashed_decorators, { kind: "field", name: "isTrashed", static: false, private: false, access: { has: obj => "isTrashed" in obj, get: obj => obj.isTrashed, set: (obj, value) => { obj.isTrashed = value; } }, metadata: _metadata }, _isTrashed_initializers, _isTrashed_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: obj => "phone" in obj, get: obj => obj.phone, set: (obj, value) => { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
        __esDecorate(null, null, _trackingNumber_decorators, { kind: "field", name: "trackingNumber", static: false, private: false, access: { has: obj => "trackingNumber" in obj, get: obj => obj.trackingNumber, set: (obj, value) => { obj.trackingNumber = value; } }, metadata: _metadata }, _trackingNumber_initializers, _trackingNumber_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Task = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Task = _classThis;
})();
exports.Task = Task;
let Activity = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _activity_decorators;
    let _activity_initializers = [];
    let _activity_extraInitializers = [];
    let _date_decorators;
    let _date_initializers = [];
    let _date_extraInitializers = [];
    let _task_decorators;
    let _task_initializers = [];
    let _task_extraInitializers = [];
    let _by_decorators;
    let _by_initializers = [];
    let _by_extraInitializers = [];
    var Activity = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.type = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _type_initializers, void 0));
            this.activity = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _activity_initializers, void 0));
            this.date = (__runInitializers(this, _activity_extraInitializers), __runInitializers(this, _date_initializers, void 0));
            this.task = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _task_initializers, void 0));
            this.by = (__runInitializers(this, _task_extraInitializers), __runInitializers(this, _by_initializers, void 0));
            __runInitializers(this, _by_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Activity");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _type_decorators = [(0, typeorm_1.Column)({ default: 'assigned' })];
        _activity_decorators = [(0, typeorm_1.Column)()];
        _date_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _task_decorators = [(0, typeorm_1.ManyToOne)(() => Task, task => task.activities)];
        _by_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _activity_decorators, { kind: "field", name: "activity", static: false, private: false, access: { has: obj => "activity" in obj, get: obj => obj.activity, set: (obj, value) => { obj.activity = value; } }, metadata: _metadata }, _activity_initializers, _activity_extraInitializers);
        __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: obj => "date" in obj, get: obj => obj.date, set: (obj, value) => { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
        __esDecorate(null, null, _task_decorators, { kind: "field", name: "task", static: false, private: false, access: { has: obj => "task" in obj, get: obj => obj.task, set: (obj, value) => { obj.task = value; } }, metadata: _metadata }, _task_initializers, _task_extraInitializers);
        __esDecorate(null, null, _by_decorators, { kind: "field", name: "by", static: false, private: false, access: { has: obj => "by" in obj, get: obj => obj.by, set: (obj, value) => { obj.by = value; } }, metadata: _metadata }, _by_initializers, _by_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Activity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Activity = _classThis;
})();
exports.Activity = Activity;
let SubTask = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _date_decorators;
    let _date_initializers = [];
    let _date_extraInitializers = [];
    let _tag_decorators;
    let _tag_initializers = [];
    let _tag_extraInitializers = [];
    let _task_decorators;
    let _task_initializers = [];
    let _task_extraInitializers = [];
    var SubTask = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.title = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.date = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _date_initializers, void 0));
            this.tag = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _tag_initializers, void 0));
            this.task = (__runInitializers(this, _tag_extraInitializers), __runInitializers(this, _task_initializers, void 0));
            __runInitializers(this, _task_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "SubTask");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _title_decorators = [(0, typeorm_1.Column)()];
        _date_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _tag_decorators = [(0, typeorm_1.Column)()];
        _task_decorators = [(0, typeorm_1.ManyToOne)(() => Task, task => task.subTasks)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: obj => "date" in obj, get: obj => obj.date, set: (obj, value) => { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
        __esDecorate(null, null, _tag_decorators, { kind: "field", name: "tag", static: false, private: false, access: { has: obj => "tag" in obj, get: obj => obj.tag, set: (obj, value) => { obj.tag = value; } }, metadata: _metadata }, _tag_initializers, _tag_extraInitializers);
        __esDecorate(null, null, _task_decorators, { kind: "field", name: "task", static: false, private: false, access: { has: obj => "task" in obj, get: obj => obj.task, set: (obj, value) => { obj.task = value; } }, metadata: _metadata }, _task_initializers, _task_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SubTask = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SubTask = _classThis;
})();
exports.SubTask = SubTask;
//# sourceMappingURL=task.js.map