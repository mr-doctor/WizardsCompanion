import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {FabConfig, SpellModel} from "./SpellScreen";
import {Button, Icon} from "react-native-elements"
import {Actions} from "react-native-router-flux";
import {styles} from "./HomeScreen";
import {FloatingAction} from "react-native-floating-action";
var dotProp = require('dot-prop-immutable');


type ScreenProps = {
	spellbook: SpellbookModel;
	index: number,
	update: (index: number, spellbook: SpellbookModel) => {},
}

type StateType = {
	spellbook: SpellbookModel;
}

class SpellbookScreen extends React.Component<ScreenProps, StateType> {

	constructor(props: any) {
		super(props);

		this.state = {
			spellbook: this.props.spellbook,
		}
	}

	update(spell: SpellModel, index: number) {
		console.log(index);
		this.setState(dotProp.set(this.state, `spellbook.spells.${index}`, spell), () => {
			this.props.update(this.props.index, this.state.spellbook);
		})
	}

	updateName(spellbook: SpellbookModel) {
		this.setState(dotProp.set(this.state, `spellbook`, spellbook), () => {
			this.props.update(this.props.index, this.state.spellbook);
		});
		console.log(this.state.spellbook);
	}

	jumpToSpell(spell: SpellModel, index: number) {
		Actions.push("spell", {spell: spell, title: spell.name, update: this.update.bind(this), index})
	}

	newSpell() {
		let index = 1;
		for (let i = 0; i < this.state.spellbook.spells.length; i++) {
			if (this.state.spellbook.spells[i].name.localeCompare("Spell " + index) == 0) {
				index++;
			}
		}
		const spell: SpellModel = {
			name: "Spell " + index,
			spellbookName: this.state.spellbook.name,
			spellbookID: this.state.spellbook.id,
			// Unique ID generation from https://gist.github.com/6174/6062387
			spellID: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
			diceType: "",
			castTime: "",
			range: "",
			dice: 0,
			effectType: "",
			desc: "",
			extraEffect: 0,
			duration: 0,
			durationType: "",
		};

		this.setState({
			spellbook: {
				spells: this.state.spellbook.spells.concat(spell),
				name: this.state.spellbook.name,
				id: this.state.spellbook.id,
			}
		}, () => {
			this.props.update(this.props.index, this.state.spellbook)
		})
	}
	
	delete(index: number) {
		let newSpells = this.state.spellbook.spells;
		newSpells.splice(index, 1);
		
		this.setState({
			spellbook: {
				spells: newSpells,
				name: this.state.spellbook.name,
				id: this.state.spellbook.id,
			}
		}, () => {
			this.props.update(this.props.index, this.state.spellbook)
		})
	}
	
	render() {
		return (
			<View style={styles.container}>
				<View style={{flex: 1}}>
					<ScrollView style={{flex: 1}}>
						{this.state.spellbook.spells.map((spell, i) =>
							<TouchableOpacity
								onPress={() => this.jumpToSpell(spell, i)}
								style={styles.listItem}
								key={i}
							>
								<Text>{spell.name}</Text>
								<TouchableOpacity
									style={styles.deleteButton}
									key={i}
									onPress={() => this.delete(i)}
								>
									<Text style={styles.deleteButtonText}>{"DELETE"}</Text>
								</TouchableOpacity>
							</TouchableOpacity>)
						}
					</ScrollView>
				</View>
				<View style={styles.addSpellContainer}>
					<TouchableOpacity
						style={styles.addButton}
						key={0}
						onPress={() => this.newSpell()}
					>
						<Icon name={"add"}/>
					</TouchableOpacity>
					
					<TouchableOpacity
						style={styles.addButton}
						key={0}
						onPress={() => this.newSpell()}
					>
						<Icon name={"clouddownload"}/>
					</TouchableOpacity>
				</View>
			</View>
		);
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
			<FloatingAction actions={[FabConfig.save]} overrideWithAction={true} onPressItem={(name) => {console.log(name); this.edit();}}/>
		)
	}

	edit() {
		Actions.push("spellbook-edit", {spellbook: this.state.spellbook, update: this.updateName.bind(this)});
	}
}

export type SpellbookModel = {
	spells: SpellModel[],
	name: string
	id: string;
}

export {SpellbookScreen};