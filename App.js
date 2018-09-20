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
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spellbooks: []
        };
        return _this;
    }
    App.prototype.addSpellbook = function () {
        var index = 1;
        for (var i = 0; i < this.state.spellbooks.length; i++) {
            if (this.state.spellbooks[i].name.localeCompare("Spellbook " + index) == 0) {
                index++;
            }
        }
        // Unique ID generation from https://gist.github.com/6174/6062387
        var id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.setState({
            spellbooks: this.state.spellbooks.concat({ spells: [], name: "Spellbook " + index, id: id })
        });
        console.log(this.state.spellbooks);
    };
    App.prototype.newSpell = function (book) {
        var spellbook = this.state.spellbooks[book];
        var index = 1;
        for (var i = 0; i < spellbook.spells.length; i++) {
            if (spellbook.spells[i].name.localeCompare("Spell " + index) == 0) {
                index++;
            }
        }
        /*const spell: SpellModel = {
            name: "Spell " + index,
            spellbookName: this.state.spellbook.name,
            spellbookID: this.state.spellbook.id,
            // Unique ID generation from https://gist.github.com/6174/6062387
            spellID: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            diceType: "",
            castTime: "",
            range: "",
            dice: 0,
            effectType: "",
            desc: "",
            extraEffect: 0,
            duration: 0,
            durationType: "",
        };*/
        var spell = {
            name: "Spell " + index,
            spellbookName: spellbook.name,
            spellbookID: spellbook.id,
            // Unique ID generation from https://gist.github.com/6174/6062387
            spellID: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            diceType: "d8",
            castTime: "Action",
            range: "1",
            dice: 1,
            effectType: "Force",
            desc: "Hits da ting mon",
            extraEffect: 4,
            duration: 6,
            durationType: "Instantaneous",
        };
        spellbook.spells.concat(spell);
        var spellbooks = this.state.spellbooks;
        spellbooks[book] = spellbook;
        this.setState({ spellbooks: this.state.spellbooks });
    };
    App.prototype.render = function () {
        return (<Router>
				<Stack key="root">
					<Scene key="home" component={HomeScreen} spellbookModifier={this.addSpellbook.bind(this)} spellbooks={this.state.spellbooks} title="Home Screen" spellModifier={this.newSpell.bind(this)}/>
					<Scene key="spellbook" component={SpellbookScreen} title="Spellbook"/>
					<Scene key="spell" component={SpellScreen} title="Spell"/>
					<Scene key="spell-edit" component={SpellEditScreen} title={"Spell Edit"}/>
				</Stack>
			</Router>);
    };
    return App;
}(React.Component));
export default App;
