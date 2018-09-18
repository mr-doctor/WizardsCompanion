import {Button, View, Text} from "react-native";
import * as React from "react";
import {SpellbookModel} from "./SpellbookScreen";
import {Actions} from "react-native-router-flux";
import {styles} from "./HomeScreen";
import ActionButton from 'react-native-action-button';

type ScreenProps = {
	spell: SpellModel;
}

type StateType = {
	spell: SpellModel;
}

class SpellScreen extends React.Component<ScreenProps, StateType> {
	
	constructor(props: any) {
		super(props);
		
		this.state = {
			spell: props.spell,
		};
		
	}
	
	log(name: string) {
		console.log(`selected button: ${name}`);
	}
	
	render() {
		
		return (/*<View style={{flex:1, backgroundColor: "#ffffff"}}>
			<Text style={styles.spellInformation}>
				{this.state.spell.castTime}
			</Text>
			<Text style={styles.spellInformation}>
				{this.state.spell.range + (("Melee".localeCompare(this.state.spell.range) == 0 ||
					"0".localeCompare(this.state.spell.range) == 0 ||
					"".localeCompare(this.state.spell.range) == 0) ? "" : " metres")}
			</Text>
			<Text style={styles.spellInformation}>
				{((this.state.spell.duration > 0) ? this.state.spell.duration + " " : "") + this.state.spell.durationType}
			</Text>
			<Text style={styles.spellInformation}>
				{((this.state.spell.dice > 0) ? this.state.spell.dice : "") +
				this.state.spell.diceType +
				((this.state.spell.extraEffect > 0) ? ((this.state.spell.dice > 0) ? " + " : "") + this.state.spell.extraEffect : " ") + " " +
				this.state.spell.effectType + " " +
				(("Healing".localeCompare(this.state.spell.effectType) == 0 || "".localeCompare(this.state.spell.effectType) == 0) ? "" : "Damage")}
			</Text>
			<Text style={styles.spellInformation}>
				{this.state.spell.desc}
			</Text>
			<ActionButton>
				<ActionButton.Item title={"Edit"} onPress={() => this.edit()}/>
			</ActionButton>
		</View>*/
			<View style={{flex:1, backgroundColor: '#f3f3f3'}}>
				{/* Rest of the app comes ABOVE the action button component !*/}
				<ActionButton buttonColor="rgba(231,76,60,1)">
					<ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
					</ActionButton.Item>
					<ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
					</ActionButton.Item>
					<ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
					</ActionButton.Item>
				</ActionButton>
			</View>);
	}
	/*
	fabButton() {
		return (
		
		)
	}*/
	
	edit() {
		Actions.push("spell-edit", {spell: this.state.spell});
	}
}
type SpellModel = {
	name: string;
	spellbookName: string;
	spellbookID: string;
	spellID: string;
	diceType: string,
	castTime: string,
	range: string,
	dice: number,
	effectType: string,
	desc: string,
	extraEffect: number,
	duration: number,
	durationType: string,
}

export {SpellScreen, SpellModel};