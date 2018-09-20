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
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as React from "react";
import { Actions } from "react-native-router-flux";
var dotProp = require('dot-prop-immutable');
var HomeScreen = /** @class */ (function (_super) {
    __extends(HomeScreen, _super);
    function HomeScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spellbooks: [],
        };
        return _this;
    }
    HomeScreen.prototype.addSpellbook = function () {
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
    HomeScreen.prototype.newSpell = function (book) {
        var _this = this;
        var index = 1;
        for (var i = 0; i < this.state.spellbooks[book].spells.length; i++) {
            if (this.state.spellbooks[book].spells[i].name.localeCompare("Spell " + index) == 0) {
                index++;
            }
        }
        var spell = {
            name: "Spell " + index,
            spellbookName: this.state.spellbooks[book].name,
            spellbookID: this.state.spellbooks[book].id,
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
        var spells = dotProp.get(this.state, "spellbooks." + book + ".spells");
        this.setState(dotProp.set(this.state, "spellbooks." + book + ".spells", spells.concat(spell)), function () {
            Actions.refresh({ spellbook: _this.state.spellbooks[book], spellAdder: _this.newSpell.bind(_this), index: book, title: _this.state.spellbooks[book].name });
        });
    };
    HomeScreen.prototype.spellEditor = function (spell, index, book) {
        var _this = this;
        console.log("spell index " + index + ", spellbook index " + book);
        this.setState(dotProp.set(this.state, "spellbooks." + book + ".spells." + index, spell), function () {
            Actions.refresh({ spell: _this.state.spellbooks[book].spells[index], book: book, index: index, spellEditor: _this.spellEditor.bind(_this) });
        });
        /*let spellbooks = this.state.spellbooks;
    spellbooks[book].spells[index] = spell;
    
    this.setState({spellbooks: spellbooks});
    Actions.refresh({spell: this.state.spellbooks[book].spells[index], book: book, index: index, spellEditor: this.spellEditor.bind(this)});*/
        console.log(spell);
    };
    HomeScreen.prototype.goToSpellbook = function (spellbook, index) {
        console.log("pressed");
        Actions.push("spellbook", { spellbook: spellbook, spellAdder: this.newSpell.bind(this), book: index, spellEditor: this.spellEditor.bind(this), index: index, title: spellbook.name });
    };
    /*editSpell(spell: SpellModel, index: number) {
    
    }*/
    HomeScreen.prototype.newSpellbook = function () {
        this.addSpellbook();
    };
    HomeScreen.prototype.render = function () {
        var _this = this;
        return (<View>
				{this.state.spellbooks.map(function (spellbook, i) {
            return <TouchableOpacity onPress={function () { return _this.goToSpellbook(spellbook, i); }} style={styles.listItem} key={i}>
						<Text>{spellbook.name}</Text>
					</TouchableOpacity>;
        })}
				<Button title={"+"} onPress={function () { return _this.newSpellbook(); }}/>
			</View>);
    };
    HomeScreen.navigationOptions = {
        title: "Wizard's Companion",
    };
    return HomeScreen;
}(React.Component));
export var styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    spellInformation: {
        margin: 15,
        fontSize: 20
    },
    dropdown: {
        width: "90%",
        alignSelf: "center"
    },
    listItem: {
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: "#d6d6d6",
        width: "90%",
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: "center",
    },
});
export { HomeScreen };
