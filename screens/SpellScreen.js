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
import { View } from "react-native";
import * as React from "react";
import { Actions } from "react-native-router-flux";
import ActionButton from 'react-native-action-button';
var SpellScreen = /** @class */ (function (_super) {
    __extends(SpellScreen, _super);
    function SpellScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spell: props.spell,
        };
        return _this;
    }
    SpellScreen.prototype.log = function (name) {
        console.log("selected button: " + name);
    };
    SpellScreen.prototype.render = function () {
        return ( /*<View style={{flex:1, backgroundColor: "#ffffff"}}>
            <Text style={styles.spellInformation}>
                {this.state.spell.castTime}
            </Text>
            <Text style={styles.spellInformation}>
                {this.state.spell.range + (("Melee".localeCompare(this.state.spell.range) == 0 ||
                    "0".localeCompare(this.state.spell.range) == 0 ||
                    "".localeCompare(this.state.spell.range) == 0) ? "" : " metres")}
            </Text>
            <Text style={styles.spellInformation}>
                {((this.state.spell.duration > 0) ? this.state.spell.duration + " " : "") + this.state.spell.durationType}
            </Text>
            <Text style={styles.spellInformation}>
                {((this.state.spell.dice > 0) ? this.state.spell.dice : "") +
                this.state.spell.diceType +
                ((this.state.spell.extraEffect > 0) ? ((this.state.spell.dice > 0) ? " + " : "") + this.state.spell.extraEffect : " ") + " " +
                this.state.spell.effectType + " " +
                (("Healing".localeCompare(this.state.spell.effectType) == 0 || "".localeCompare(this.state.spell.effectType) == 0) ? "" : "Damage")}
            </Text>
            <Text style={styles.spellInformation}>
                {this.state.spell.desc}
            </Text>
            <ActionButton>
                <ActionButton.Item title={"Edit"} onPress={() => this.edit()}/>
            </ActionButton>
        </View>*/<View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
				
				<ActionButton buttonColor="rgba(231,76,60,1)">
					<ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={function () { return console.log("notes tapped!"); }}>
					</ActionButton.Item>
					<ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={function () { }}>
					</ActionButton.Item>
					<ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={function () { }}>
					</ActionButton.Item>
				</ActionButton>
			</View>);
    };
    /*
    fabButton() {
        return (
        
        )
    }*/
    SpellScreen.prototype.edit = function () {
        Actions.push("spell-edit", { spell: this.state.spell });
    };
    return SpellScreen;
}(React.Component));
export { SpellScreen };
