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
import { View, Text } from "react-native";
var SpellEditScreen = /** @class */ (function (_super) {
    __extends(SpellEditScreen, _super);
    function SpellEditScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spell: props.spell,
        };
        return _this;
    }
    SpellEditScreen.prototype.render = function () {
        return (<View><Text>help</Text></View>);
    };
    return SpellEditScreen;
}(React.Component));
export { SpellEditScreen };
