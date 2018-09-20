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
        /*	const spellbooks = this.state.spellbooks;
            // spellbooks[book].spells.concat(spell);
            const spellbook: SpellbookModel = spellbooks[book];
            spellbook.spells.concat(spell);*/
        dotProp.set(this.state.spellbooks[book], "spells.$end", spell);
        // this.setState({spellbooks: this.state.spellbooks[book].spells.concat([spell])});
        console.log(this.state.spellbooks[0].spells);
    };
    HomeScreen.prototype.goToSpellbook = function (spellbook, index) {
        console.log("pressed");
        Actions.push("spellbook", { spellbook: spellbook, spellModifier: this.newSpell.bind(this), index: index, title: spellbook.name });
    };
    HomeScreen.prototype.newSpellbook = function () {
        var index = 1;
        for (var i = 0; i < this.state.spellbooks.length; i++) {
            if (this.state.spellbooks[i].name.localeCompare("Spellbook " + index) == 0) {
                index++;
            }
        }
        // Unique ID generation from https://gist.github.com/6174/6062387
        var id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.addSpellbook();
    };
    HomeScreen.prototype.render = function () {
        var _this = this;
        console.log(this.state.spellbooks);
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
