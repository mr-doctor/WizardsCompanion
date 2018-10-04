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
import * as React from 'react';
import { SpellbookScreen } from "./screens/SpellbookScreen";
import { Router, Scene, Stack } from "react-native-router-flux";
import { HomeScreen } from "./screens/HomeScreen";
import { SpellScreen } from "./screens/SpellScreen";
import { SpellEditScreen } from "./screens/SpellEditScreen";
import { SpellbookEditScreen } from "./screens/SpellbookEditScreen";
import { SpellImportScreen } from "./screens/SpellImportScreen";
var firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spellbooks: [],
        };
        var config = {
            apiKey: "AIzaSyAFpnooV_7daHyqcCqBgDZ39i6mtWNTwCQ",
            authDomain: "wizard-s-companion-rn.firebaseapp.com",
            databaseURL: "https://wizard-s-companion-rn.firebaseio.com",
            projectId: "wizard-s-companion-rn",
            storageBucket: "wizard-s-companion-rn.appspot.com",
            messagingSenderId: "426156848049"
        };
        firebase.initializeApp(config);
        App.firestore = firebase.firestore();
        var settings = { timestampsInSnapshots: true };
        App.firestore.settings(settings);
        return _this;
    }
    App.uploadSpell = function (spell) {
        var spellJSON = JSON.parse(JSON.stringify(spell));
        App.firestore.collection("Spells").doc(spell.spellbookID + " " + spell.spellID).set(spellJSON)
            .then(function () {
            console.log("Successfully uploaded to global database");
        }).catch(function () {
            console.log("Failed to upload");
        });
        App.firestore.collection(spell.spellbookID).doc(spell.spellID).set(spellJSON)
            .then(function () {
            console.log("Successfully uploaded to personal spellbook");
        }).catch(function () {
            console.log("Failed to upload");
        });
    };
    App.downloadAllSpells = function () {
        var collectionReference = App.firestore.collection("Spells");
        return collectionReference.get();
    };
    App.downloadSpellsFrom = function (spellbookID) {
        var collectionReference = App.firestore.collection(spellbookID);
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
    App.prototype.render = function () {
        return (<Router>
				<Stack key="root">
					<Scene key="home" component={HomeScreen} title="Home Screen"/>
					<Scene key="spellbook" component={SpellbookScreen} title="Spellbook"/>
					<Scene key="spell" component={SpellScreen} title="Spell"/>
					<Scene key="spell-edit" component={SpellEditScreen} title={"Spell Edit"}/>
					<Scene key="spellbook-edit" component={SpellbookEditScreen} title="Spellbook Edit"/>
					<Scene key="spell-import" component={SpellImportScreen} title="Spellbook Import"/>
				</Stack>
			</Router>);
    };
    return App;
}(React.Component));
export default App;
