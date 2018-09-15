var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
var SpellScreen = /** @class */ (function (_super) {
    __extends(SpellScreen, _super);
    function SpellScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpellScreen.prototype.render = function () {
        return {};
    };
    return SpellScreen;
}(React.Component));
var SpellModel = /** @class */ (function (_super) {
    __extends(SpellModel, _super);
    function SpellModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.diceType = "";
        _this.castTime = "";
        _this.range = "";
        _this.dice = 0;
        _this.effectType = "";
        _this.desc = "";
        _this.extraEffect = 0;
        _this.duration = 0;
        _this.durationType = "";
        return _this;
    }
    return SpellModel;
}(React.Component));
export { SpellScreen, SpellModel };
