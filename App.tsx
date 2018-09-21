import React from 'react';
import {Component} from 'react';
import {AppRegistry, Button, Platform, StyleSheet, Text, View} from 'react-native';
import {SpellbookModel, SpellbookScreen} from "./screens/SpellbookScreen";
import {Router, Scene, Stack} from "react-native-router-flux";
import {HomeScreen} from "./screens/HomeScreen";
import {Store} from "react-native-navigation/lib/dist/components/Store";
import {SpellModel, SpellScreen} from "./screens/SpellScreen";
import {SpellEditScreen} from "./screens/SpellEditScreen";
import firebase from 'react-native-firebase/firestore';

type StateType = {
	spellbooks: SpellbookModel[];
}

class App extends React.Component<{}, StateType> {
	
	constructor(props: any) {
		super(props);
		
		this.state = {
			spellbooks: []
		};
		
	}
	
	static uploadSpell(spell: SpellModel) {
		let spellJSON = JSON.parse(JSON.stringify(spell));
		
		firebase.firestore().collection("Spells").add(spell.name + spell.spellbookID + " " + spell.spellID).set(spellJSON)
			.then(function () {
				console.log("Successfully uploaded to global database");
			}).catch(function () {
				console.log("Failed to upload");
			}
		);
		
		firebase.firestore().collection(spell.spellbookName + spell.spellbookID).doc(spell.name + spell.spellID).set(spellJSON)
			.then(function () {
				console.log("Successfully uploaded to personal spellbook");
			}).catch(function () {
				console.log("Failed to upload");
			}
		);
	}
	
	static downloadAllSpells(): Promise<firebase.DocumentSnapshot> {
		const collectionReference = firebase.firestore().collection("Spells");
		
		return collectionReference.get();
	}
	
	static downloadSpellsFrom(spellbook: string): Promise<firebase.DocumentSnapshot> {
		const collectionReference = firebase.firestore().collection(spellbook);
		
		return collectionReference.get();
	}
	
	static displaySpells(querySnapshot: firebase.CollectionReference): SpellModel[] {
		if (querySnapshot.empty) {
			console.log("No docs found");
			return [];
		}
		const spells: SpellModel[] = [];
		querySnapshot.forEach(function (documentSnapshot: firebase.DocumentSnapshot) {
			let data = documentSnapshot.data();
			let spell = JSON.parse(JSON.stringify(data));
			spells.push(spell);
		});
		
		return spells;
	}
	/*const spell: SpellModel = {
			name: "",
			spellbookName: "",
			spellbookID: "",
			spellID: "",
			castTime: "",
			duration: 0,
			dice: 0,
			range: "",
			durationType: "",
			extraEffect: 0,
			diceType: "",
			desc: "",
			effectType: "",
		};*/
	
	render() {
		return (
			<Router>
				<Stack key="root">
					<Scene key="home" component={HomeScreen} title="Home Screen"/>
					<Scene key="spellbook" component={SpellbookScreen} title="Spellbook"/>
					<Scene key="spell" component={SpellScreen} title="Spell"/>
					<Scene key="spell-edit" component={SpellEditScreen} title={"Spell Edit"}/>
				</Stack>
			</Router>
		);
	}
}

export default App;