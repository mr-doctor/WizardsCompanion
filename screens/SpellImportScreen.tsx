import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {FabConfig, SpellModel} from "./SpellScreen";
import {Button, Icon} from "react-native-elements"
import {Actions} from "react-native-router-flux";
import {styles} from "./HomeScreen";
import {FloatingAction} from "react-native-floating-action";
import {SpellbookModel} from "./SpellbookScreen";
import App from "../App";
var dotProp = require('dot-prop-immutable');

type PropType = {
	spellbook: SpellbookModel;
	index: number,
	update: (spell: SpellModel, index: number) => {},
}

type StateType = {
	spellbook: SpellbookModel;
	firebaseDone: boolean;
}

export class SpellImportScreen extends React.Component<PropType, StateType> {

	constructor(props: any) {
		super(props);

		this.state = {
			spellbook: props.spellbook,
			firebaseDone: false,
		};

		let firebasePromiseLocal = App.downloadAllSpells();

		firebasePromiseLocal.then(querySnapshot => {
			this.setState({firebaseDone: true})
			console.log("Found collection");
			const spells = App.displaySpells(querySnapshot);
			for (let i = 0; i < spells.length; i++) {
				this.setState({
					spellbook: {
						spells: this.state.spellbook.spells.concat(spells[i]),
						name: this.state.spellbook.name,
						id: this.state.spellbook.id,
					}
				}, () => {
					this.props.update(spells[i], this.props.index)
				})
			}
		}).catch( () => {
			console.log("No spells found")
		});


	}

	jumpToSpell(spell: SpellModel, index: number) {
		Actions.push("spell", {spell: spell, title: spell.name, edit: false, index})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{flex: 1}}>
					<ScrollView style={{flex: 1}}>
						{this.renderLoading()}
						{this.state.spellbook.spells.map((spell, i) =>
							<TouchableOpacity
								onPress={() => this.jumpToSpell(spell, i)}
								style={styles.listItem}
								key={i}
							>
								<Text style={styles.listText}>{spell.name}</Text>
								<TouchableOpacity
									style={styles.importButton}
									key={i}
									onPress={() => this.import(i)}
								>
									<Text style={styles.importButtonText}>{"IMPORT"}</Text>
								</TouchableOpacity>
							</TouchableOpacity>)
						}
					</ScrollView>
				</View>
			</View>);
	}

	renderLoading() {
		if (!this.state.firebaseDone) {
			return (<View style={styles.loadingMessage}><Text>Loading...</Text></View>)
		}
	}

	private import(index: number) {
		this.props.update(this.state.spellbook.spells[index], this.props.index);
	}
}