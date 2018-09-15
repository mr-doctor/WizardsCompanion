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
import { Text } from "react-native";
import * as React from "react";
var SpellScreen = /** @class */ (function (_super) {
    __extends(SpellScreen, _super);
    function SpellScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spell: props.model,
        };
        return _this;
    }
    SpellScreen.prototype.render = function () {
        return (<Text>{this.state.spell.name}</Text>);
    };
    return SpellScreen;
}(React.Component));
export { SpellScreen };
