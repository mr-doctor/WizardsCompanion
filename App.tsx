import React from 'react';
import {Component} from 'react';
import {AppRegistry, Button, Platform, StyleSheet, Text, View} from 'react-native';
import {SpellbookModel, SpellbookScreen} from "./screens/SpellbookScreen";
import {Router, Scene, Stack} from "react-native-router-flux";
import {HomeScreen} from "./screens/HomeScreen";
import {Store} from "react-native-navigation/lib/dist/components/Store";
import {SpellScreen} from "./screens/SpellScreen";
import {SpellEditScreen} from "./screens/SpellEditScreen";
import {PageProvider} from "./providers/Page";

type StateType = {
	spellbooks: SpellbookModel[];
}

class App extends React.Component<{}, StateType> {

	constructor(props: any) {
		super(props);

		this.state = {
			spellbooks: []
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

	render() {
		return (
			<Router>
				<Stack key="root">
					<Scene key="home" component={HomeScreen} modifier={this.addSpellbook.bind(this)} spellbooks={this.state.spellbooks} title="Home Screen"/>
					<Scene key="spellbook" component={SpellbookScreen} title="Spellbook"/>
					<Scene key="spell" component={SpellScreen} title="Spell"/>
					<Scene key="spell-edit" component={SpellEditScreen} title={"Spell Edit"}/>
				</Stack>
			</Router>
		);
	}
}

export default App;