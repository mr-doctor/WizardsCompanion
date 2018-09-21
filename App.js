var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import { SpellbookScreen } from "./screens/SpellbookScreen";
import { Router, Scene, Stack } from "react-native-router-flux";
import { HomeScreen } from "./screens/HomeScreen";
import { SpellScreen } from "./screens/SpellScreen";
import { SpellEditScreen } from "./screens/SpellEditScreen";
import firebase from 'react-native-firebase';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spellbooks: []
        };
        return _this;
    }
    App.uploadSpell = function (spell) {
        var spellJSON = JSON.parse(JSON.stringify(spell));
        firebase.firestore().collection("Spells").doc(spell.name + spell.spellbookID + " " + spell.spellID).set(spellJSON)
            .then(function () {
            console.log("Successfully uploaded to global database");
        }).catch(function () {
            console.log("Failed to upload");
        });
        firebase.firestore().collection(spell.spellbookName + spell.spellbookID).doc(spell.name + spell.spellID).set(spellJSON)
            .then(function () {
            console.log("Successfully uploaded to personal spellbook");
        }).catch(function () {
            console.log("Failed to upload");
        });
    };
    App.downloadAllSpells = function () {
        var collectionReference = firebase.firestore().collection("Spells");
        return collectionReference.get();
    };
    App.downloadSpellsFrom = function (spellbook) {
        var collectionReference = firebase.firestore().collection(spellbook);
        return collectionReference.get();
    };
    App.displaySpells = function (querySnapshot) {
        if (querySnapshot.empty) {
            console.log("No docs found");
            return [];
        }
        var spells = [];
        querySnapshot.forEach(function (documentSnapshot) {
            var data = documentSnapshot.data();
            var spell = JSON.parse(JSON.stringify(data));
            spells.push(spell);
        });
        return spells;
    };
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
    App.prototype.render = function () {
        return (<Router>
				<Stack key="root">
					<Scene key="home" component={HomeScreen} title="Home Screen"/>
					<Scene key="spellbook" component={SpellbookScreen} title="Spellbook"/>
					<Scene key="spell" component={SpellScreen} title="Spell"/>
					<Scene key="spell-edit" component={SpellEditScreen} title={"Spell Edit"}/>
				</Stack>
			</Router>);
    };
    return App;
}(React.Component));
export default App;
