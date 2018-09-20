import {Button, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import * as React from "react";
import {Actions} from "react-native-router-flux";
import {SpellbookModel, SpellbookScreen} from "./SpellbookScreen";
import {PageProvider} from "../providers/Page";

type StateType = {
	spellbooks: SpellbookModel[]
}
type PropType = {
	modifier: () => {},
	spellbooks: SpellbookModel[],
}

class HomeScreen extends React.Component<PropType, StateType> {

	constructor(props: any) {
		super(props);

		this.state = {
			spellbooks: this.props.spellbooks,
		}
	}

	static navigationOptions = {
		title: "Wizard's Companion",
	};

	goToSpellbook(spellbook: SpellbookModel) {
		console.log("pressed");
		Actions.push("spellbook", {spellbook: spellbook, title: spellbook.name});
	}

	newSpellbook() {
		// this.props.pageProvider.newSpellbook();
		// console.log(this.props.pageProvider.state.spellbooks);
		// this.setState({spellbooks: this.props.pageProvider.state.spellbooks})
		let index = 1;
		for (let i = 0; i < this.props.spellbooks.length; i++) {
			if (this.props.spellbooks[i].name.localeCompare("Spellbook " + index) == 0) {
				index++;
			}
		}
		// Unique ID generation from https://gist.github.com/6174/6062387
		let id: string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		// this.setState({
			/*spellbooks: */this.props.modifier();
		// });
		// this.props.spellbooks.concat({spells: [], name: "Spellbook " + index, id: id});
		// console.log(this.props.spellbooks);
	}

	render() {
		console.log(this.state.spellbooks);
		return (<View>
				{this.props.spellbooks.map((spellbook, i) =>
					<TouchableOpacity
						onPress={() => this.goToSpellbook(spellbook)}
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