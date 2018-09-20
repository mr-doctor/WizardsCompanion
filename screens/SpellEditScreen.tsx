import * as React from "react";
import {SpellModel} from "./SpellScreen";
import {View, Text, ScrollView} from "react-native";
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import {Dropdown} from 'react-native-material-dropdown';
import {styles} from "./HomeScreen";
import {FloatingAction} from "react-native-floating-action";
import {Actions} from "react-native-router-flux";

type ScreenProps = {
	spell: SpellModel
	index: number;
	changeSpell: (newSpell: SpellModel, index: number, book: number) => {},
	book: number,
}

type StateType = {
	spell: SpellModel;
	newName: string;
	newDiceType: string;
	newCastTime: string;
	newRange: string;
	newDice: number;
	newEffectType: string;
	newDesc: string;
	newExtraEffect: number;
	newDuration: number;
	newDurationType: string;
}

class SpellEditScreen extends React.Component<ScreenProps, StateType> {

	constructor(props: any) {
		super(props);

		this.state = {
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
	}
	
	private save() {
		const newSpell: SpellModel = {
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
		this.setState({spell: newSpell});
		
		this.props.changeSpell(newSpell, this.props.index, this.props.book);
		
		Actions.pop();
	}

	render() {
		return (<View>
			<ScrollView>
				<FormLabel>Name</FormLabel>
				<FormInput defaultValue={this.state.spell.name} onChangeText={(text: string) => this.setName(text)}/>
				<Dropdown
					containerStyle={styles.dropdown}
					label="Cast Time"
					data={DropdownConfig.castTimes}
					defaultValue={this.state.spell.castTime}
					onChangeText={(value: string) => {
						this.setCastTime(value)
					}}
				/>
				<Dropdown
					containerStyle={styles.dropdown}
					label="Duration Type"
					data={DropdownConfig.durations}
					defaultValue={this.state.spell.durationType}
					onChangeText={(value: string) => {
						this.setDurationType(value)
					}}
				/>
				{this.renderDuration()}
				{this.renderRange()}
				{this.renderDice()}
				{this.renderExtraEffect()}
				{this.renderEffectType()}
				<FormLabel>Description</FormLabel>
				<FormInput defaultValue={this.state.spell.desc} onChangeText={(text: string) => this.setDesc(text)}/>
			</ScrollView>
			<FloatingAction onPressMain={() => this.save()}/>
		</View>);
	}

	private renderDuration() {
		if (this.state.newDurationType.localeCompare("Instantaneous") != 0) {
			return (<View><FormLabel>Duration</FormLabel>
				<FormInput defaultValue={this.state.spell.duration + ""} keyboardType={'numeric'}
						   onChangeText={(text: string) => this.setDuration(text)}/></View>);
		}
		return (<View/>);
	}

	private renderRange() {
		return (<View><FormLabel>Range</FormLabel>
			<FormInput defaultValue={this.state.spell.range + ""} keyboardType={'numeric'}
					   onChangeText={(text: string) => this.setRange(text)}/></View>);
	}

	private renderDice() {
		return (
			<View>
				<FormLabel>Dice Number</FormLabel>
				<FormInput defaultValue={this.state.spell.dice + ""} keyboardType={'numeric'}
						   onChangeText={(text: string) => this.setDiceNumber(text)}/>
				<Dropdown
					containerStyle={styles.dropdown}
					label="Dice"
					data={DropdownConfig.dice}
					defaultValue={this.state.spell.diceType}
					onChangeText={(value: string) => {
						this.setDiceType(value)
					}}
				/>
			</View>);
	}

	private renderEffectType() {
		return (
			<Dropdown
				containerStyle={styles.dropdown}
				label="Effect Type"
				data={DropdownConfig.effects}
				defaultValue={this.state.spell.effectType}
				onChangeText={(value: string) => {
					this.setEffectType(value)
				}}
			/>);
	}

	private renderExtraEffect() {
		return (<View><FormLabel>Extra Effect</FormLabel>
			<FormInput defaultValue={this.state.spell.extraEffect + ""} keyboardType={'numeric'}
					   onChangeText={(text: string) => this.setExtraEffect(text)}/></View>);
	}

	private setName(newName: string) {
		this.setState({
			newName: newName,
		});
	}

	private setCastTime(castTime: string) {
		this.setState({
			newCastTime: castTime,
		});
	}

	private setDurationType(durationType: string) {
		this.setState({
			newDurationType: durationType,
		});
	}


	private setDuration(input: string) {
		let parsed: number = parseInt(input);
		if (isNaN(parsed) || parsed < 0) {
			parsed = 0;
		}
		this.setState({
			newDuration: parsed,
		});
	}

	private setExtraEffect(input: string) {
		let parsed: number = parseInt(input);
		if (isNaN(parsed) || parsed < 0) {
			parsed = 0;
		}
		this.setState({
			newExtraEffect: parsed,
		});
	}

	private setRange(input: string) {
		let parsed: number = parseInt(input);
		if (isNaN(parsed) || parsed < 0) {
			parsed = 0;
		}
		this.setState({
			newRange: parsed + "",
		});
	}

	private setDiceNumber(input: string) {
		let parsed: number = parseInt(input);
		if (isNaN(parsed) || parsed < 0) {
			parsed = 0;
		}
		this.setState({
			newDice: parsed,
		});
	}

	private setDiceType(durationType: string) {
		this.setState({
			newDiceType: durationType,
		});
	}


	private setEffectType(value: string) {
		this.setState({
			newEffectType: value,
		});
	}

	private setDesc(text: string) {
		this.setState({
			newDesc: text,
		});
	}

}

const DropdownConfig = {
	castTimes: [
		{value: "Action"},
		{value: "Reaction"},
		{value: "Bonus Action"}
	],
	
	durations: [
		{value: "Instantaneous",},
		{value: "Rounds",},
		{value: "Minutes",},
		{value: "Hours",},
		{value: "Days",},
	],
	
	dice: [
		{value: "d4"},
		{value: "d6"},
		{value: "d8"},
		{value: "d10"},
		{value: "d12"},
		{value: "d20"},
	],
	
	effects: [
		{value: "Acid"},
		{value: "Bludgeoning"},
		{value: "Cold"},
		{value: "Fire"},
		{value: "Force"},
		{value: "Lightning"},
		{value: "Necrotic"},
		{value: "Piercing"},
		{value: "Poison"},
		{value: "Psychic"},
		{value: "Radiant"},
		{value: "Slashing"},
		{value: "Thunder"},
		{value: "Healing"},
	],
};

export {SpellEditScreen};