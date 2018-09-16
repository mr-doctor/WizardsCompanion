import {Button, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import * as React from "react";
import {Actions} from "react-native-router-flux";
import {SpellbookModel, SpellbookScreen} from "./SpellbookScreen";

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
	
	static navigationOptions = {
		title: 'Welcome',
	};
	
	goToSpellbook(spellbook: SpellbookModel) {
		console.log("pressed");
		Actions.push("spellbook", {spellbook: spellbook});
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
		this.setState({spellbooks: this.state.spellbooks.concat({spells: [], name: "Spellbook " + index, id: id})});
	}
	
	render() {
		return (<View>
				{this.state.spellbooks.map(spellbook =>
					<TouchableOpacity
						onPress={() => this.goToSpellbook(spellbook)}
						style={styles.listItem}
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
	
	listItem: {
		borderRadius: 0,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
		
		backgroundColor: "#878787",
		width: "90%",
		height: 40,
		alignItems: "center",
		justifyContent: 'center',
		alignSelf: "center",
	},
});



export {HomeScreen};