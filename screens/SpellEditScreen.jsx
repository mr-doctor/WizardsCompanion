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
var React = require("react");
var SpellScreen_1 = require("./SpellScreen");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var react_native_material_dropdown_1 = require("react-native-material-dropdown");
var HomeScreen_1 = require("./HomeScreen");
var react_native_floating_action_1 = require("react-native-floating-action");
var react_native_router_flux_1 = require("react-native-router-flux");
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
    SpellEditScreen.prototype.save = function () {
        var newSpell = {
            name: this.state.newName,
            spellbookName: this.state.spell.spellbookName,
            spellbookID: this.state.spell.spellbookID,
            spellID: this.state.spell.spellID,
            diceType: this.state.newDiceType,
            castTime: this.state.newCastTime,
            range: this.state.newRange,
            dice: this.state.newDice,
            effectType: this.state.newEffectType,
            desc: this.state.newDesc,
            extraEffect: this.state.newExtraEffect,
            duration: this.state.newDuration,
            durationType: this.state.newDurationType,
        };
        this.setState({ spell: newSpell });
        this.props.update(newSpell);
        react_native_router_flux_1.Actions.pop();
    };
    SpellEditScreen.prototype.render = function () {
        var _this = this;
        return (<react_native_1.View>
			<react_native_1.ScrollView>
				<react_native_elements_1.FormLabel>Name</react_native_elements_1.FormLabel>
				<react_native_elements_1.FormInput defaultValue={this.state.spell.name} onChangeText={function (text) { return _this.setName(text); }}/>
				<react_native_material_dropdown_1.Dropdown containerStyle={HomeScreen_1.styles.dropdown} label="Cast Time" data={DropdownConfig.castTimes} defaultValue={this.state.spell.castTime} onChangeText={function (value) {
            _this.setCastTime(value);
        }}/>
				<react_native_material_dropdown_1.Dropdown containerStyle={HomeScreen_1.styles.dropdown} label="Duration Type" data={DropdownConfig.durations} defaultValue={this.state.spell.durationType} onChangeText={function (value) {
            _this.setDurationType(value);
        }}/>
				{this.renderDuration()}
				{this.renderRange()}
				{this.renderDice()}
				{this.renderExtraEffect()}
				{this.renderEffectType()}
				<react_native_elements_1.FormLabel>Description</react_native_elements_1.FormLabel>
				<react_native_elements_1.FormInput defaultValue={this.state.spell.desc} onChangeText={function (text) { return _this.setDesc(text); }}/>
			</react_native_1.ScrollView>
			<react_native_floating_action_1.FloatingAction actions={[SpellScreen_1.FabConfig.save]} overrideWithAction={true} onPressItem={function (name) { console.log(name); _this.save(); }}/>
		</react_native_1.View>);
    };
    SpellEditScreen.prototype.renderDuration = function () {
        var _this = this;
        if (this.state.newDurationType.localeCompare("Instantaneous") != 0) {
            return (<react_native_1.View><react_native_elements_1.FormLabel>Duration</react_native_elements_1.FormLabel>
				<react_native_elements_1.FormInput defaultValue={this.state.spell.duration + ""} keyboardType={'numeric'} onChangeText={function (text) { return _this.setDuration(text); }}/></react_native_1.View>);
        }
        return (<react_native_1.View />);
    };
    SpellEditScreen.prototype.renderRange = function () {
        var _this = this;
        return (<react_native_1.View><react_native_elements_1.FormLabel>Range</react_native_elements_1.FormLabel>
			<react_native_elements_1.FormInput defaultValue={this.state.spell.range + ""} keyboardType={'numeric'} onChangeText={function (text) { return _this.setRange(text); }}/></react_native_1.View>);
    };
    SpellEditScreen.prototype.renderDice = function () {
        var _this = this;
        return (<react_native_1.View>
				<react_native_elements_1.FormLabel>Dice Number</react_native_elements_1.FormLabel>
				<react_native_elements_1.FormInput defaultValue={this.state.spell.dice + ""} keyboardType={'numeric'} onChangeText={function (text) { return _this.setDiceNumber(text); }}/>
				<react_native_material_dropdown_1.Dropdown containerStyle={HomeScreen_1.styles.dropdown} label="Dice" data={DropdownConfig.dice} defaultValue={this.state.spell.diceType} onChangeText={function (value) {
            _this.setDiceType(value);
        }}/>
			</react_native_1.View>);
    };
    SpellEditScreen.prototype.renderEffectType = function () {
        var _this = this;
        return (<react_native_material_dropdown_1.Dropdown containerStyle={HomeScreen_1.styles.dropdown} label="Effect Type" data={DropdownConfig.effects} defaultValue={this.state.spell.effectType} onChangeText={function (value) {
            _this.setEffectType(value);
        }}/>);
    };
    SpellEditScreen.prototype.renderExtraEffect = function () {
        var _this = this;
        return (<react_native_1.View><react_native_elements_1.FormLabel>Extra Effect</react_native_elements_1.FormLabel>
			<react_native_elements_1.FormInput defaultValue={this.state.spell.extraEffect + ""} keyboardType={'numeric'} onChangeText={function (text) { return _this.setExtraEffect(text); }}/></react_native_1.View>);
    };
    SpellEditScreen.prototype.setName = function (newName) {
        this.setState({
            newName: newName,
        });
    };
    SpellEditScreen.prototype.setCastTime = function (castTime) {
        this.setState({
            newCastTime: castTime,
        });
    };
    SpellEditScreen.prototype.setDurationType = function (durationType) {
        this.setState({
            newDurationType: durationType,
        });
    };
    SpellEditScreen.prototype.setDuration = function (input) {
        var parsed = parseInt(input);
        if (isNaN(parsed) || parsed < 0) {
            parsed = 0;
        }
        this.setState({
            newDuration: parsed,
        });
    };
    SpellEditScreen.prototype.setExtraEffect = function (input) {
        var parsed = parseInt(input);
        if (isNaN(parsed) || parsed < 0) {
            parsed = 0;
        }
        this.setState({
            newExtraEffect: parsed,
        });
    };
    SpellEditScreen.prototype.setRange = function (input) {
        var parsed = parseInt(input);
        if (isNaN(parsed) || parsed < 0) {
            parsed = 0;
        }
        this.setState({
            newRange: parsed + "",
        });
    };
    SpellEditScreen.prototype.setDiceNumber = function (input) {
        var parsed = parseInt(input);
        if (isNaN(parsed) || parsed < 0) {
            parsed = 0;
        }
        this.setState({
            newDice: parsed,
        });
    };
    SpellEditScreen.prototype.setDiceType = function (durationType) {
        this.setState({
            newDiceType: durationType,
        });
    };
    SpellEditScreen.prototype.setEffectType = function (value) {
        this.setState({
            newEffectType: value,
        });
    };
    SpellEditScreen.prototype.setDesc = function (text) {
        this.setState({
            newDesc: text,
        });
    };
    return SpellEditScreen;
}(React.Component));
exports.SpellEditScreen = SpellEditScreen;
var DropdownConfig = {
    castTimes: [
        { value: "Action" },
        { value: "Reaction" },
        { value: "Bonus Action" }
    ],
    durations: [
        { value: "Instantaneous", },
        { value: "Rounds", },
        { value: "Minutes", },
        { value: "Hours", },
        { value: "Days", },
    ],
    dice: [
        { value: "d4" },
        { value: "d6" },
        { value: "d8" },
        { value: "d10" },
        { value: "d12" },
        { value: "d20" },
    ],
    effects: [
        { value: "Acid" },
        { value: "Bludgeoning" },
        { value: "Cold" },
        { value: "Fire" },
        { value: "Force" },
        { value: "Lightning" },
        { value: "Necrotic" },
        { value: "Piercing" },
        { value: "Poison" },
        { value: "Psychic" },
        { value: "Radiant" },
        { value: "Slashing" },
        { value: "Thunder" },
        { value: "Healing" },
    ],
};
