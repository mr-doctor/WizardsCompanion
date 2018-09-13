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
import { View, Text } from "react-native";
import * as React from "react";
var SpellbookScreen = /** @class */ (function (_super) {
    __extends(SpellbookScreen, _super);
    function SpellbookScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpellbookScreen.prototype.render = function () {
        return (<View>
				<Text>Just fucking kill me already.</Text>
			</View>);
    };
    return SpellbookScreen;
}(React.Component));
export { SpellbookScreen };
