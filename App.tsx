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

class App extends React.Component {

	spellbooks: SpellbookModel[] = [];

	addSpellbook() {
		let index = 1;
		for (let i = 0; i < this.spellbooks.length; i++) {
			if (this.spellbooks[i].name.localeCompare("Spellbook " + index) == 0) {
				index++;
			}
		}
		// Unique ID generation from https://gist.github.com/6174/6062387
		let id: string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		this.spellbooks.concat({spells: [], name: "Spellbook " + index, id: id})

		console.log(this.spellbooks)
	}

	render() {
		return (
			<Router>
				<Stack key="root">
					<Scene key="home" component={HomeScreen} modifier={this.addSpellbook()} title="Home Screen"/>
					<Scene key="spellbook" component={SpellbookScreen} title="Spellbook"/>
					<Scene key="spell" component={SpellScreen} title="Spell"/>
					<Scene key="spell-edit" component={SpellEditScreen} title={"Spell Edit"}/>
				</Stack>
			</Router>
		);
	}
}

export default App;