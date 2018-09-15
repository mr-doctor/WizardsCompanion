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
import { Button, View } from "react-native";
import * as React from "react";
import { Actions } from "react-native-router-flux";
var SpellbookScreen = /** @class */ (function (_super) {
    __extends(SpellbookScreen, _super);
    function SpellbookScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpellbookScreen.prototype.jumpToSpell = function (spell) {
        Actions.push("spell", { spell: spell });
    };
    SpellbookScreen.prototype.render = function () {
        var _this = this;
        return (<View>
				{this.props.model.spells.map(function (spell) { return <Button title={spell.props.name} onPress={function () { return _this.jumpToSpell(spell); }}/>; })}
			</View>);
    };
    return SpellbookScreen;
}(React.Component));
var SpellbookModel = /** @class */ (function (_super) {
    __extends(SpellbookModel, _super);
    function SpellbookModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spells = [];
        return _this;
    }
    return SpellbookModel;
}(React.Component));
export { SpellbookScreen, SpellbookModel };
