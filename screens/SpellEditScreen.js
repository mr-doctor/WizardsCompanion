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
import { View } from "react-native";
import { FormLabel, FormInput } from 'react-native-elements';
var SpellEditScreen = /** @class */ (function (_super) {
    __extends(SpellEditScreen, _super);
    function SpellEditScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spell: props.spell,
            newName: props.spell.name,
            newDiceType: props.spell.diceType,
            newCastTime: props.spell.castTime,
            newRange: props.spell.range,
            newDice: props.spell.dice,
            newEffectType: props.spell.effectType,
            newDesc: props.spell.desc,
            newExtraEffect: props.spell.extraEffect,
            newDuration: props.spell.duration,
            newDurationType: props.spell.durationType,
        };
        return _this;
    }
    SpellEditScreen.prototype.render = function () {
        var _this = this;
        return (<View>
			<FormLabel>Name</FormLabel>
			<FormInput onChangeText={function (text) { return _this.setName(text); }}/>
		</View>);
    };
    SpellEditScreen.prototype.setName = function (newName) {
        this.setState({
            newName: newName,
        });
    };
    return SpellEditScreen;
}(React.Component));
export { SpellEditScreen };
