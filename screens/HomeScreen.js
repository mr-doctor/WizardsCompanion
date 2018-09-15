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
import { Button, View } from "react-native";
import * as React from "react";
import { Actions } from "react-native-router-flux";
var HomeScreen = /** @class */ (function (_super) {
    __extends(HomeScreen, _super);
    function HomeScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spellbooks: [],
        };
        return _this;
    }
    HomeScreen.prototype.goToSpellbook = function (spellbook) {
        console.log("pressed");
        Actions.push("spellbook", { spellbook: spellbook });
    };
    HomeScreen.prototype.newSpellbook = function () {
        var index = 1;
        for (var i = 0; i < this.state.spellbooks.length; i++) {
            if (this.state.spellbooks[i].name.localeCompare("Spellbook " + index) == 0) {
                index++;
            }
        }
        this.setState({ spellbooks: this.state.spellbooks.concat({ spells: [], name: "Spellbook " + index }) });
    };
    HomeScreen.prototype.render = function () {
        var _this = this;
        return (<View>
				{this.state.spellbooks.map(function (spellbook) {
            return <Button onPress={function () { return _this.goToSpellbook(spellbook); }} title={spellbook.name} color="#841584"/>;
        })}
				<Button title={"+"} onPress={function () { return _this.newSpellbook(); }}/>
			</View>);
    };
    HomeScreen.navigationOptions = {
        title: 'Welcome',
    };
    return HomeScreen;
}(React.Component));
export { HomeScreen };
