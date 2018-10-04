import * as React from 'react';
import {Component} from 'react';
import {AppRegistry, Button, Platform, StyleSheet, Text, View} from 'react-native';
import {SpellbookModel, SpellbookScreen} from "./screens/SpellbookScreen";
import {Router, Scene, Stack} from "react-native-router-flux";
import {HomeScreen} from "./screens/HomeScreen";
import {Store} from "react-native-navigation/lib/dist/components/Store";
import {SpellModel, SpellScreen} from "./screens/SpellScreen";
import {SpellEditScreen} from "./screens/SpellEditScreen";
import {CollectionReference, DocumentSnapshot, QuerySnapshot} from "react-native-firebase/firestore";
import {SpellbookEditScreen} from "./screens/SpellbookEditScreen";
import {SpellImportScreen} from "./screens/SpellImportScreen";
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

type StateType = {
	spellbooks: SpellbookModel[];
}

class App extends React.Component<{}, StateType> {
	
	static firestore: firebase.firestore.Firestore;
	
	constructor(props: any) {
		super(props);
		
		this.state = {
			spellbooks: [],
		};
		
		const config = {
			apiKey: "AIzaSyAFpnooV_7daHyqcCqBgDZ39i6mtWNTwCQ",
			authDomain: "wizard-s-companion-rn.firebaseapp.com",
			databaseURL: "https://wizard-s-companion-rn.firebaseio.com",
			projectId: "wizard-s-companion-rn",
			storageBucket: "wizard-s-companion-rn.appspot.com",
			messagingSenderId: "426156848049"
		};
		
		firebase.initializeApp(config);
		
		App.firestore = firebase.firestore();
		const settings = {timestampsInSnapshots: true};
		App.firestore.settings(settings);
		
	}
	
	static uploadSpell(spell: SpellModel) {
		let spellJSON = JSON.parse(JSON.stringify(spell));
		
		App.firestore.collection("Spells").doc(spell.spellbookID + " " + spell.spellID).set(spellJSON)
			.then(function () {
				console.log("Successfully uploaded to global database");
			}).catch(function () {
				console.log("Failed to upload");
			}
		);
		
		App.firestore.collection(spell.spellbookID).doc(spell.spellID).set(spellJSON)
			.then(function () {
				console.log("Successfully uploaded to personal spellbook");
			}).catch(function () {
				console.log("Failed to upload");
			}
		);
	}
	
	static downloadAllSpells(): Promise<QuerySnapshot> {
		const collectionReference = App.firestore.collection("Spells");
		return collectionReference.get();
	}
	
	static displaySpells(querySnapshot: QuerySnapshot): SpellModel[] {
		if (querySnapshot.empty) {
			console.log("No docs found");
			return [];
		}
		const spells: SpellModel[] = [];
		querySnapshot.forEach(function (documentSnapshot: DocumentSnapshot) {
			let data = documentSnapshot.data();
			let spell = JSON.parse(JSON.stringify(data));
			spells.push(spell);
		});

		return spells;

	}
	
	render() {
		return (
			<Router>
				<Stack key="root">
					<Scene key="home" component={HomeScreen} title="Home Screen"/>
					<Scene key="spellbook" component={SpellbookScreen} title="Spellbook"/>
					<Scene key="spell" component={SpellScreen} title="Spell"/>
					<Scene key="spell-edit" component={SpellEditScreen} title={"Spell Edit"}/>
					<Scene key="spellbook-edit" component={SpellbookEditScreen} title="Spellbook Edit"/>
					<Scene key="spell-import" component={SpellImportScreen} title="Spellbook Import"/>
				</Stack>
			</Router>
		);
	}
}

export default App;