"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var React = require("react");
var react_native_router_flux_1 = require("react-native-router-flux");
var HomeScreen_1 = require("./HomeScreen");
var react_native_floating_action_1 = require("react-native-floating-action");
var App_1 = require("../App");
exports.FabConfig = {
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
        };
        return _this;
    }
    SpellScreen.prototype.render = function () {
        return (<react_native_1.View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
			<react_native_1.Text style={HomeScreen_1.styles.spellInformation}>
				{this.state.spell.castTime}
			</react_native_1.Text>
			<react_native_1.Text style={HomeScreen_1.styles.spellInformation}>
				{this.state.spell.range + (("Melee".localeCompare(this.state.spell.range) == 0 ||
            "0".localeCompare(this.state.spell.range) == 0 ||
            "".localeCompare(this.state.spell.range) == 0) ? "" : " metres")}
			</react_native_1.Text>
			<react_native_1.Text style={HomeScreen_1.styles.spellInformation}>
				{((this.state.spell.duration > 0 &&
            this.state.spell.durationType.localeCompare("Instantaneous") != 0) ?
            this.state.spell.duration + " " : "") + this.state.spell.durationType}
			</react_native_1.Text>
			<react_native_1.Text style={HomeScreen_1.styles.spellInformation}>
				{((this.state.spell.dice > 0) ? this.state.spell.dice : "") +
            this.state.spell.diceType +
            ((this.state.spell.extraEffect > 0) ? ((this.state.spell.dice > 0) ? " + " : "") + this.state.spell.extraEffect : " ") + " " +
            this.state.spell.effectType + " " +
            (("Healing".localeCompare(this.state.spell.effectType) == 0 || "".localeCompare(this.state.spell.effectType) == 0) ? "" : "Damage")}
			</react_native_1.Text>
			<react_native_1.Text style={HomeScreen_1.styles.spellDescription}>
				{this.state.spell.desc}
			</react_native_1.Text>

			{this.fabButton()}
		</react_native_1.View>);
    };
    SpellScreen.prototype.fabButton = function () {
        var _this = this;
        var actions = [{
                text: exports.FabConfig.edit.text,
                position: exports.FabConfig.edit.position,
                name: exports.FabConfig.edit.name,
            }, {
                text: exports.FabConfig.upload.text,
                position: exports.FabConfig.upload.position,
                name: exports.FabConfig.upload.name,
            }];
        return (<react_native_floating_action_1.FloatingAction actions={actions} onPressItem={function (name) {
            if (exports.FabConfig.edit.name.localeCompare(name + "") == 0) {
                _this.edit();
            }
            else {
                _this.upload();
            }
        }}/>);
    };
    SpellScreen.prototype.edit = function () {
        react_native_router_flux_1.Actions.push("spell-edit", { spell: this.state.spell, update: this.update.bind(this) });
    };
    SpellScreen.prototype.upload = function () {
        App_1.default.uploadSpell(this.state.spell);
    };
    SpellScreen.prototype.update = function (spell) {
        this.setState({ spell: spell });
        this.props.update(spell, this.props.index);
    };
    return SpellScreen;
}(React.Component));
exports.SpellScreen = SpellScreen;
