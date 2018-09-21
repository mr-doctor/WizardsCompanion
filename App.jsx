"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SpellbookScreen_1 = require("./screens/SpellbookScreen");
var react_native_router_flux_1 = require("react-native-router-flux");
var HomeScreen_1 = require("./screens/HomeScreen");
var SpellScreen_1 = require("./screens/SpellScreen");
var SpellEditScreen_1 = require("./screens/SpellEditScreen");
var react_native_firebase_1 = require("react-native-firebase");
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
        react_native_firebase_1.default.firestore().collection("Spells").doc(spell.name + spell.spellbookID + " " + spell.spellID).set(spellJSON)
            .then(function () {
            console.log("Successfully uploaded to global database");
        }).catch(function () {
            console.log("Failed to upload");
        });
        react_native_firebase_1.default.firestore().collection(spell.spellbookName + spell.spellbookID).doc(spell.name + spell.spellID).set(spellJSON)
            .then(function () {
            console.log("Successfully uploaded to personal spellbook");
        }).catch(function () {
            console.log("Failed to upload");
        });
    };
    App.downloadAllSpells = function () {
        var collectionReference = react_native_firebase_1.default.firestore().collection("Spells");
        return collectionReference.get();
    };
    App.downloadSpellsFrom = function (spellbook) {
        var collectionReference = react_native_firebase_1.default.firestore().collection(spellbook);
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
        return (<react_native_router_flux_1.Router>
				<react_native_router_flux_1.Stack key="root">
					<react_native_router_flux_1.Scene key="home" component={HomeScreen_1.HomeScreen} title="Home Screen"/>
					<react_native_router_flux_1.Scene key="spellbook" component={SpellbookScreen_1.SpellbookScreen} title="Spellbook"/>
					<react_native_router_flux_1.Scene key="spell" component={SpellScreen_1.SpellScreen} title="Spell"/>
					<react_native_router_flux_1.Scene key="spell-edit" component={SpellEditScreen_1.SpellEditScreen} title={"Spell Edit"}/>
				</react_native_router_flux_1.Stack>
			</react_native_router_flux_1.Router>);
    };
    return App;
}(React.Component));
exports.default = App;
