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
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import { colours, FabConfig, styles } from "./HomeScreen";
import { FloatingAction } from "react-native-floating-action";
var dotProp = require('dot-prop-immutable');
var SpellbookScreen = /** @class */ (function (_super) {
    __extends(SpellbookScreen, _super);
    function SpellbookScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spellbook: _this.props.spellbook,
        };
        return _this;
    }
    SpellbookScreen.prototype.update = function (spell, index) {
        var _this = this;
        spell.spellbookID = this.state.spellbook.id;
        spell.spellbookName = this.state.spellbook.name;
        console.log(index);
        this.setState(dotProp.set(this.state, "spellbook.spells." + index, spell), function () {
            _this.props.update(_this.props.index, _this.state.spellbook);
        });
    };
    SpellbookScreen.prototype.updateName = function (spellbook) {
        var _this = this;
        this.setState(dotProp.set(this.state, "spellbook", spellbook), function () {
            _this.props.update(_this.props.index, _this.state.spellbook);
        });
        console.log(this.state.spellbook);
    };
    SpellbookScreen.prototype.jumpToSpell = function (spell, index) {
        Actions.push("spell", { spell: spell, title: spell.name, update: this.update.bind(this), index: index });
    };
    SpellbookScreen.prototype.newSpell = function () {
        var _this = this;
        var index = 1;
        for (var i = 0; i < this.state.spellbook.spells.length; i++) {
            if (this.state.spellbook.spells[i].name.localeCompare("Spell " + index) == 0) {
                index++;
            }
        }
        var spell = {
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
        };
        this.setState({
            spellbook: {
                spells: this.state.spellbook.spells.concat(spell),
                name: this.state.spellbook.name,
                id: this.state.spellbook.id,
            }
        }, function () {
            _this.props.update(_this.props.index, _this.state.spellbook);
        });
    };
    SpellbookScreen.prototype.delete = function (index) {
        var _this = this;
        var newSpells = this.state.spellbook.spells;
        newSpells.splice(index, 1);
        this.setState({
            spellbook: {
                spells: newSpells,
                name: this.state.spellbook.name,
                id: this.state.spellbook.id,
            }
        }, function () {
            _this.props.update(_this.props.index, _this.state.spellbook);
        });
    };
    SpellbookScreen.prototype.render = function () {
        var _this = this;
        return (<View style={styles.container}>
				<View style={{ flex: 1 }}>
					<ScrollView style={{ flex: 1 }}>
						{this.state.spellbook.spells.map(function (spell, i) {
            return <TouchableOpacity onPress={function () { return _this.jumpToSpell(spell, i); }} style={styles.listItem} key={i}>
								<Text style={styles.listText}>{spell.name}</Text> 
								<TouchableOpacity style={styles.deleteButton} key={i} onPress={function () { return _this.delete(i); }}>
									<Text style={styles.deleteButtonText}>{"DELETE"}</Text>
								</TouchableOpacity>
							</TouchableOpacity>;
        })}
					</ScrollView>
					{this.fabButton()}
				</View>
				<View style={styles.addSpellContainer}>
					<TouchableOpacity style={styles.addSpellButton} key={0} onPress={function () { return _this.newSpell(); }}>
						<Icon color={"white"} name={"add"}/>
					</TouchableOpacity>
					
					<TouchableOpacity style={styles.addSpellButton} key={99} onPress={function () { return _this.jumpToImport(); }}>
						<Icon color={"white"} name={"cloud-download"}/>
					</TouchableOpacity>
				</View>
			</View>);
    };
    SpellbookScreen.prototype.fabButton = function () {
        var _this = this;
        return (<FloatingAction color={colours.accentColour} actions={[FabConfig.edit]} overrideWithAction={true} onPressItem={function (name) { console.log(name); _this.edit(); }}/>);
    };
    SpellbookScreen.prototype.edit = function () {
        Actions.push("spellbook-edit", { spellbook: this.state.spellbook, update: this.updateName.bind(this) });
    };
    SpellbookScreen.prototype.jumpToImport = function () {
        var imports = {
            spells: [],
            name: "Import Spell",
            id: "",
        };
        Actions.push("spell-import", { spellbook: imports, title: imports.name, index: this.props.index, update: this.update.bind(this) });
    };
    return SpellbookScreen;
}(React.Component));
export { SpellbookScreen };
