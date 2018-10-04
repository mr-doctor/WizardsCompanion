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
import { Actions } from "react-native-router-flux";
import { styles } from "./HomeScreen";
import { FloatingAction } from 'react-native-floating-action';
import App from "../App";
export var FabConfig = {
    edit: {
        text: "Edit",
        name: "edit",
        position: 2,
    },
    upload: {
        text: "Upload",
        name: "upload",
        position: 1,
    },
    save: {
        text: "Save",
        name: "save",
        position: 1,
    }
};
var SpellScreen = /** @class */ (function (_super) {
    __extends(SpellScreen, _super);
    function SpellScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spell: props.spell,
            edit: props.edit,
        };
        return _this;
    }
    SpellScreen.prototype.render = function () {
        return (<View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
			<Text style={styles.spellInformation}>
				{this.state.spell.castTime}
			</Text>
			<Text style={styles.spellInformation}>
				{this.state.spell.range + (("Melee".localeCompare(this.state.spell.range) == 0 ||
            "0".localeCompare(this.state.spell.range) == 0 ||
            "".localeCompare(this.state.spell.range) == 0) ? "" : " metres")}
			</Text>
			<Text style={styles.spellInformation}>
				{((this.state.spell.duration > 0 &&
            this.state.spell.durationType.localeCompare("Instantaneous") != 0) ?
            this.state.spell.duration + " " : "") + this.state.spell.durationType}
			</Text>
			<Text style={styles.spellInformation}>
				{((this.state.spell.dice > 0) ? this.state.spell.dice : "") +
            this.state.spell.diceType +
            ((this.state.spell.extraEffect > 0) ? ((this.state.spell.dice > 0) ? " + " : "") + this.state.spell.extraEffect : " ") + " " +
            this.state.spell.effectType + " " +
            (("Healing".localeCompare(this.state.spell.effectType) == 0 || "".localeCompare(this.state.spell.effectType) == 0) ? "" : "Damage")}
			</Text>
			<Text style={styles.spellDescription}>
				{this.state.spell.desc}
			</Text>

			{this.fabButton()}
		</View>);
    };
    SpellScreen.prototype.fabButton = function () {
        var _this = this;
        var actions = [{
                text: FabConfig.edit.text,
                position: FabConfig.edit.position,
                name: FabConfig.edit.name,
            }, {
                text: FabConfig.upload.text,
                position: FabConfig.upload.position,
                name: FabConfig.upload.name,
            }];
        return (<FloatingAction actions={actions} onPressItem={function (name) {
            if (FabConfig.edit.name.localeCompare(name + "") == 0) {
                _this.edit();
            }
            else {
                _this.upload();
            }
        }}/>);
    };
    SpellScreen.prototype.edit = function () {
        Actions.push("spell-edit", { spell: this.state.spell, update: this.update.bind(this) });
    };
    SpellScreen.prototype.upload = function () {
        App.uploadSpell(this.state.spell);
    };
    SpellScreen.prototype.update = function (spell) {
        this.setState({ spell: spell });
        this.props.update(spell, this.props.index);
    };
    return SpellScreen;
}(React.Component));
export { SpellScreen };
