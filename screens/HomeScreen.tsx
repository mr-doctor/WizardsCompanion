import {Button, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import * as React from "react";
import {Actions} from "react-native-router-flux";
import {SpellbookModel, SpellbookScreen} from "./SpellbookScreen";
import {SpellModel} from "./SpellScreen";
var dotProp = require('dot-prop-immutable');

type StateType = {
	spellbooks: SpellbookModel[]
}
type PropType = {}

class HomeScreen extends React.Component<PropType, StateType> {

	constructor(props: any) {
		super(props);

		this.state = {
			spellbooks: [],
		}
	}

	addSpellbook() {
		let index = 1;
		for (let i = 0; i < this.state.spellbooks.length; i++) {
			if (this.state.spellbooks[i].name.localeCompare("Spellbook " + index) == 0) {
				index++;
			}
		}
		// Unique ID generation from https://gist.github.com/6174/6062387
		let id: string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		this.setState({
			spellbooks: this.state.spellbooks.concat({spells: [], name: "Spellbook " + index, id: id})
		});
		console.log(this.state.spellbooks)
	}

	newSpell(book: number) {

		let index = 1;
		for (let i = 0; i < this.state.spellbooks[book].spells.length; i++) {
			if (this.state.spellbooks[book].spells[i].name.localeCompare("Spell " + index) == 0) {
				index++;
			}
		}
		const spell: SpellModel = {
			name: "Spell " + index,
			spellbookName: this.state.spellbooks[book].name,
			spellbookID: this.state.spellbooks[book].id,
			// Unique ID generation from https://gist.github.com/6174/6062387
			spellID: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
			diceType: "d8",
			castTime: "Action",
			range: "1",
			dice: 1,
			effectType: "Force",
			desc: "Hits da ting mon",
			extraEffect: 4,
			duration: 6,
			durationType: "Instantaneous",
		};

		this.setState({spellbooks: dotProp.set(this.state, `spellbooks.${book}.spells.$end`, spell)});

		console.log(this.state.spellbooks[0].spells);
		console.log(spell);

	}

	static navigationOptions = {
		title: "Wizard's Companion",
	};

	goToSpellbook(spellbook: SpellbookModel, index: number) {
		console.log("pressed");
		Actions.push("spellbook", {spellbook: spellbook, spellModifier: this.newSpell.bind(this), index: index, title: spellbook.name});
	}

	newSpellbook() {
		let index = 1;
		for (let i = 0; i < this.state.spellbooks.length; i++) {
			if (this.state.spellbooks[i].name.localeCompare("Spellbook " + index) == 0) {
				index++;
			}
		}
		// Unique ID generation from https://gist.github.com/6174/6062387
		let id: string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		this.addSpellbook();
	}

	render() {
		console.log(this.state.spellbooks);
		return (<View>
				{this.state.spellbooks.map((spellbook, i) =>
					<TouchableOpacity
						onPress={() => this.goToSpellbook(spellbook, i)}
						style={styles.listItem}
						key={i}
					>
						<Text>{spellbook.name}</Text>
					</TouchableOpacity>)
				}
				<Button title={"+"} onPress={() => this.newSpellbook()}/>
			</View>
		);
	}
}

export const styles = StyleSheet.create({
	
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},
	
	spellInformation: {
		margin: 15,
		fontSize: 20
	},

	dropdown: {
		width: "90%",
		alignSelf: "center"
	},

	listItem: {
		borderRadius: 0,
		borderWidth: 0.5,
		borderColor: '#d6d7da',

		backgroundColor: "#d6d6d6",
		width: "90%",
		height: 40,
		alignItems: "center",
		justifyContent: 'center',
		alignSelf: "center",
	},
});


export {HomeScreen};