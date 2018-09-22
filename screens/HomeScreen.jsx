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
var react_native_1 = require("react-native");
var React = require("react");
var react_native_router_flux_1 = require("react-native-router-flux");
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
    HomeScreen.prototype.goToSpellbook = function (spellbook, index) {
        react_native_router_flux_1.Actions.push("spellbook", { spellbook: spellbook, title: spellbook.name, index: index, update: this.updateSpellbook.bind(this) });
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
        this.setState({ spellbooks: this.state.spellbooks.concat({ spells: [], name: "Spellbook " + index, id: id }) });
    };
    HomeScreen.prototype.updateSpellbook = function (index, spellbook) {
        this.setState(dotProp.set(this.state, "spellbooks." + index, spellbook));
    };
    HomeScreen.prototype.render = function () {
        var _this = this;
        return (<react_native_1.View>
				{this.state.spellbooks.map(function (spellbook, i) {
            return <react_native_1.TouchableOpacity onPress={function () { return _this.goToSpellbook(spellbook, i); }} style={exports.styles.listItem} key={i}>
						<react_native_1.Text>{spellbook.name}</react_native_1.Text>
					</react_native_1.TouchableOpacity>;
        })}
				<react_native_1.Button title={"+"} onPress={function () { return _this.newSpellbook(); }}/>
			</react_native_1.View>);
    };
    HomeScreen.navigationOptions = {
        title: "Wizard's Companion",
    };
    return HomeScreen;
}(React.Component));
exports.HomeScreen = HomeScreen;
exports.styles = react_native_1.StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    spellInformation: {
        margin: 15,
        fontSize: 20
    },
    spellDescription: {
        margin: 15,
        fontSize: 18,
        textAlign: "justify",
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
