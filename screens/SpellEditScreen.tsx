import * as React from "react";
import {SpellModel} from "./SpellScreen";
import {View, Text} from "react-native";
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

type ScreenProps = {
	spell: SpellModel;
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

	render() {
		return (<View>
			<FormLabel>Name</FormLabel>
			<FormInput onChangeText={(text: string) => this.setName(text)}/>
		</View>);
	}

	private setName(newName: string) {
		this.setState({
			newName: newName,
		});
	}
}

export {SpellEditScreen};