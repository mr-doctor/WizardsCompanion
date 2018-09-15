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
    function SpellbookScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spellbook: _this.props.model,
        };
        return _this;
    }
    SpellbookScreen.prototype.jumpToSpell = function (spell) {
        Actions.push("spell", { spell: spell });
    };
    SpellbookScreen.prototype.render = function () {
        var _this = this;
        return (<View>
                {this.state.spellbook.spells.map(function (spell) { return <Button title={spell.name} onPress={function () { return _this.jumpToSpell(spell); }}/>; })}
            </View>);
    };
    return SpellbookScreen;
}(React.Component));
export { SpellbookScreen };
