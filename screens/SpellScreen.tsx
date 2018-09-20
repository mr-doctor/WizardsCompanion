import {Button, View, Text} from "react-native";
import * as React from "react";
import {SpellbookModel} from "./SpellbookScreen";
import {Actions} from "react-native-router-flux";
import {styles} from "./HomeScreen";
import {FloatingAction} from 'react-native-floating-action';

type ScreenProps = {
	spell: SpellModel;
	index: number;
	update: (spell: SpellModel, index: number) => {}
}

type StateType = {
	spell: SpellModel;
}

const FabConfig = {
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
};

class SpellScreen extends React.Component<ScreenProps, StateType> {

	constructor(props: any) {
		super(props);

		this.state = {
			spell: props.spell,
		};

	}

	render() {

		return (<View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
			<Text style={styles.spellInformation}>
				{this.state.spell.castTime}
			</Text>
			<Text style={styles.spellInformation}>
				{this.state.spell.range + ((
					"Melee".localeCompare(this.state.spell.range) == 0 ||
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
	}

	fabButton() {
		const actions = [{
			text: FabConfig.edit.text,
			position: FabConfig.edit.position,
			name: FabConfig.edit.name,
		}, {
			text: FabConfig.upload.text,
			position: FabConfig.upload.position,
			name: FabConfig.upload.name,
		}];
		return (
			<FloatingAction actions={actions} onPressItem={
				(name) => {
					if (FabConfig.edit.name.localeCompare(name + "") == 0) {
						this.edit();
					} else {
						this.upload();
					}
				}
			}/>
		)
	}
	
	edit() {
		Actions.push("spell-edit", {spell: this.state.spell, update: this.update.bind(this)});
	}
	
	upload() {
		
	}
	
	update(spell: SpellModel) {
		this.setState({spell});
		this.props.update(spell, this.props.index);
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