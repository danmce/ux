System.register(['aurelia-dependency-injection', '../designs/ios-design'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var aurelia_dependency_injection_1, ios_design_1;
    var IOS;
    return {
        setters:[
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (ios_design_1_1) {
                ios_design_1 = ios_design_1_1;
            }],
        execute: function() {
            IOS = (function () {
                function IOS(design) {
                    this.design = design;
                    this.type = 'ios';
                }
                IOS = __decorate([
                    aurelia_dependency_injection_1.inject(ios_design_1.IOSDesign)
                ], IOS);
                return IOS;
            }());
            exports_1("IOS", IOS);
        }
    }
});
