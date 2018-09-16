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
import { Button, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { Actions } from "react-native-router-flux";
import { styles } from "./HomeScreen";
var SpellbookScreen = /** @class */ (function (_super) {
    __extends(SpellbookScreen, _super);
    function SpellbookScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spellbook: _this.props.spellbook,
        };
        return _this;
    }
    SpellbookScreen.prototype.jumpToSpell = function (spell) {
        Actions.push("spell", { spell: spell });
    };
    SpellbookScreen.prototype.newSpell = function () {
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
        });
    };
    SpellbookScreen.prototype.render = function () {
        var _this = this;
        return (<View>
				{this.state.spellbook.spells.map(function (spell) { return <TouchableOpacity onPress={function () { return _this.jumpToSpell(spell); }} style={styles.listItem}>
						<Text>
							{spell.name}
						</Text>
						<View style={styles.line}></View>
					</TouchableOpacity>; })}
				<Button title={"+"} onPress={function () { return _this.newSpell(); }}/>
			</View>);
    };
    return SpellbookScreen;
}(React.Component));
export { SpellbookScreen };
