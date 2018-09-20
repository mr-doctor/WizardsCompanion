import React from 'react';
import {Component} from 'react';
import {AppRegistry, Button, Platform, StyleSheet, Text, View} from 'react-native';
import {SpellbookModel, SpellbookScreen} from "./screens/SpellbookScreen";
import {Router, Scene, Stack} from "react-native-router-flux";
import {HomeScreen} from "./screens/HomeScreen";
import {Store} from "react-native-navigation/lib/dist/components/Store";
import {SpellModel, SpellScreen} from "./screens/SpellScreen";
import {SpellEditScreen} from "./screens/SpellEditScreen";

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

// 	spellbookModifier={this.addSpellbook.bind(this)}
// spellbooks={this.state.spellbooks}
// spellAdder={this.newSpell.bind(this)}

	render() {
		return (
			<Router>
				<Stack key="root">
					<Scene key="home" component={HomeScreen}
						   title="Home Screen"
					/>
					<Scene key="spellbook" component={SpellbookScreen} title="Spellbook"/>
					<Scene key="spell" component={SpellScreen} title="Spell"/>
					<Scene key="spell-edit" component={SpellEditScreen} title={"Spell Edit"}/>
				</Stack>
			</Router>
		);
	}
}

export default App;