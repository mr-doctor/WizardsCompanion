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
import { Actions } from "react-native-router-flux";
import { styles } from "./HomeScreen";
import App from "../App";
var dotProp = require('dot-prop-immutable');
var SpellImportScreen = /** @class */ (function (_super) {
    __extends(SpellImportScreen, _super);
    function SpellImportScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spellbook: props.spellbook,
            firebaseDone: false,
        };
        var firebasePromiseLocal = App.downloadAllSpells();
        firebasePromiseLocal.then(function (querySnapshot) {
            _this.setState({ firebaseDone: true });
            console.log("Found collection");
            var spells = App.displaySpells(querySnapshot);
            var _loop_1 = function (i) {
                _this.setState({
                    spellbook: {
                        spells: _this.state.spellbook.spells.concat(spells[i]),
                        name: _this.state.spellbook.name,
                        id: _this.state.spellbook.id,
                    }
                }, function () {
                    _this.props.update(spells[i], _this.props.index);
                });
            };
            for (var i = 0; i < spells.length; i++) {
                _loop_1(i);
            }
        }).catch(function () {
            console.log("No spells found");
        });
        return _this;
    }
    SpellImportScreen.prototype.jumpToSpell = function (spell, index) {
        Actions.push("spell", { spell: spell, title: spell.name, edit: false, index: index });
    };
    SpellImportScreen.prototype.render = function () {
        var _this = this;
        return (<View style={styles.container}>
				<View style={{ flex: 1 }}>
					<ScrollView style={{ flex: 1 }}>
						{this.renderLoading()}
						{this.state.spellbook.spells.map(function (spell, i) {
            return <TouchableOpacity onPress={function () { return _this.jumpToSpell(spell, i); }} style={styles.listItem} key={i}>
								<Text style={styles.listText}>{spell.name}</Text>
								<TouchableOpacity style={styles.importButton} key={i} onPress={function () { return _this.import(i); }}>
									<Text style={styles.importButtonText}>{"IMPORT"}</Text>
								</TouchableOpacity>
							</TouchableOpacity>;
        })}
					</ScrollView>
				</View>
			</View>);
    };
    SpellImportScreen.prototype.renderLoading = function () {
        if (!this.state.firebaseDone) {
            return (<View style={styles.loadingMessage}><Text>Loading...</Text></View>);
        }
    };
    SpellImportScreen.prototype.import = function (index) {
        this.props.update(this.state.spellbook.spells[index], this.props.index);
    };
    return SpellImportScreen;
}(React.Component));
export { SpellImportScreen };
