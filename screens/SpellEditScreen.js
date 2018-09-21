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
import { FabConfig } from "./SpellScreen";
import { View, ScrollView } from "react-native";
import { FormLabel, FormInput } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { styles } from "./HomeScreen";
import { FloatingAction } from "react-native-floating-action";
import { Actions } from "react-native-router-flux";
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
        Actions.pop();
    };
    SpellEditScreen.prototype.render = function () {
        var _this = this;
        return (<View>
			<ScrollView>
				<FormLabel>Name</FormLabel>
				<FormInput defaultValue={this.state.spell.name} onChangeText={function (text) { return _this.setName(text); }}/>
				<Dropdown containerStyle={styles.dropdown} label="Cast Time" data={DropdownConfig.castTimes} defaultValue={this.state.spell.castTime} onChangeText={function (value) {
            _this.setCastTime(value);
        }}/>
				<Dropdown containerStyle={styles.dropdown} label="Duration Type" data={DropdownConfig.durations} defaultValue={this.state.spell.durationType} onChangeText={function (value) {
            _this.setDurationType(value);
        }}/>
				{this.renderDuration()}
				{this.renderRange()}
				{this.renderDice()}
				{this.renderExtraEffect()}
				{this.renderEffectType()}
				<FormLabel>Description</FormLabel>
				<FormInput defaultValue={this.state.spell.desc} onChangeText={function (text) { return _this.setDesc(text); }}/>
			</ScrollView>
			<FloatingAction actions={[FabConfig.save]} overrideWithAction={true} onPressItem={function (name) { console.log(name); _this.save(); }}/>
		</View>);
    };
    SpellEditScreen.prototype.renderDuration = function () {
        var _this = this;
        if (this.state.newDurationType.localeCompare("Instantaneous") != 0) {
            return (<View><FormLabel>Duration</FormLabel>
				<FormInput defaultValue={this.state.spell.duration + ""} keyboardType={'numeric'} onChangeText={function (text) { return _this.setDuration(text); }}/></View>);
        }
        return (<View />);
    };
    SpellEditScreen.prototype.renderRange = function () {
        var _this = this;
        return (<View><FormLabel>Range</FormLabel>
			<FormInput defaultValue={this.state.spell.range + ""} keyboardType={'numeric'} onChangeText={function (text) { return _this.setRange(text); }}/></View>);
    };
    SpellEditScreen.prototype.renderDice = function () {
        var _this = this;
        return (<View>
				<FormLabel>Dice Number</FormLabel>
				<FormInput defaultValue={this.state.spell.dice + ""} keyboardType={'numeric'} onChangeText={function (text) { return _this.setDiceNumber(text); }}/>
				<Dropdown containerStyle={styles.dropdown} label="Dice" data={DropdownConfig.dice} defaultValue={this.state.spell.diceType} onChangeText={function (value) {
            _this.setDiceType(value);
        }}/>
			</View>);
    };
    SpellEditScreen.prototype.renderEffectType = function () {
        var _this = this;
        return (<Dropdown containerStyle={styles.dropdown} label="Effect Type" data={DropdownConfig.effects} defaultValue={this.state.spell.effectType} onChangeText={function (value) {
            _this.setEffectType(value);
        }}/>);
    };
    SpellEditScreen.prototype.renderExtraEffect = function () {
        var _this = this;
        return (<View><FormLabel>Extra Effect</FormLabel>
			<FormInput defaultValue={this.state.spell.extraEffect + ""} keyboardType={'numeric'} onChangeText={function (text) { return _this.setExtraEffect(text); }}/></View>);
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
export { SpellEditScreen };
