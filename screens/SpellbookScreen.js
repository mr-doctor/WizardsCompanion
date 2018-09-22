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
import { FabConfig } from "./SpellScreen";
import { Actions } from "react-native-router-flux";
import { styles } from "./HomeScreen";
import { FloatingAction } from "react-native-floating-action";
// import {Icon} from "../node_modules/@types/react-native-vector-icons/Icon";
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
    SpellbookScreen.prototype.render = function () {
        var _this = this;
        return (<View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
			{this.state.spellbook.spells.map(function (spell, i) { return <TouchableOpacity onPress={function () { return _this.jumpToSpell(spell, i); }} style={styles.listItem} key={i}>
					<Text>
						{spell.name}
					</Text>
				</TouchableOpacity>; })}
			
			<Button title={"+"} onPress={function () { return _this.newSpell(); }}/>
			{this.fabButton()}
		</View>);
    };
    SpellbookScreen.prototype.fabButton = function () {
        var _this = this;
        var actions = [{
                text: FabConfig.edit.text,
                position: FabConfig.edit.position,
                name: FabConfig.edit.name,
            }, {
                text: FabConfig.upload.text,
                position: FabConfig.upload.position,
                name: FabConfig.upload.name,
            }];
        return (<FloatingAction actions={[FabConfig.save]} overrideWithAction={true} onPressItem={function (name) { console.log(name); _this.edit(); }}/>);
    };
    SpellbookScreen.prototype.edit = function () {
        Actions.push("spellbook-edit", { spellbook: this.state.spellbook, update: this.updateName.bind(this) });
    };
    return SpellbookScreen;
}(React.Component));
export { SpellbookScreen };
