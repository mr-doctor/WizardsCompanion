import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import * as React from "react";
import {Actions} from "react-native-router-flux";
import {Button, Icon} from "react-native-elements";
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
	
	static navigationOptions = {
		title: "Wizard's Companion",
	};
	
	goToSpellbook(spellbook: SpellbookModel, index: number) {
		Actions.push("spellbook", {spellbook: spellbook, title: spellbook.name, index: index, update: this.updateSpellbook.bind(this)});
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
	
	updateSpellbook(index: number, spellbook: SpellbookModel) {
		this.setState(dotProp.set(this.state, `spellbooks.${index}`, spellbook));
	}
	
	render() {
		return (
			<View style={styles.container}>
				<View style={{flex: 1}}>
					<ScrollView style={{flex: 1}}>
						{this.state.spellbooks.map((spellbook, i) =>
							<TouchableOpacity
								onPress={() => this.goToSpellbook(spellbook, i)}
								style={styles.listItem}
								key={i}
							>
								<Text>{spellbook.name}</Text>
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
				<TouchableOpacity
					style={styles.addButton}
					key={0}
					onPress={() => this.newSpellbook()}
				>
					<Icon color={"white"} name={"add"}/>
				</TouchableOpacity>
			</View>
		);
	}
	
	private delete(index: number) {
		let newBook = this.state.spellbooks;
		newBook.splice(index, 1);
		this.setState({spellbooks: newBook});
	}
}

export const styles = StyleSheet.create({
	deleteButtonText: {
		color: '#ffffff',
		fontSize: 10,
	},
	
	deleteButton: {
		height: 30,
		width: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: 'red',
	},
	
	addSpellContainer: {
		justifyContent: 'space-between',
		alignItems: "center",
		flexDirection: "row",
	},
	
	addSpellButton: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width:"49%",
		height: 40,
		backgroundColor: '#da6e00',
	},
	
	addButton: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width:"100%",
		height: 40,
		backgroundColor: '#da6e00',
	},
	
	container: {
		flex: 1,
	},
	
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},
	
	spellInformation: {
		margin: 15,
		fontSize: 20
	},
	
	spellDescription: {
		margin: 15,
		fontSize: 18,
		textAlign: "justify",
	},
	
	dropdown: {
		width: "90%",
		alignSelf: "center"
	},
	
	listItem: {
		justifyContent: 'space-between',
		alignItems: "center",
		flexDirection: "row",
		
		borderRadius: 0,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
		padding: 10,
		backgroundColor: "#d6d6d6",
		width: "90%",
		height: 40,
		alignSelf: "center",
	},
});


export {HomeScreen};