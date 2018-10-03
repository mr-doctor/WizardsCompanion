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
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import * as React from "react";
import { Actions } from "react-native-router-flux";
import { Icon } from "react-native-elements";
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
        Actions.push("spellbook", { spellbook: spellbook, title: spellbook.name, index: index, update: this.updateSpellbook.bind(this) });
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
        return (<View style={styles.container}>
				<View style={{ flex: 1 }}>
					<ScrollView style={{ flex: 1 }}>
						{this.state.spellbooks.map(function (spellbook, i) {
            return <TouchableOpacity onPress={function () { return _this.goToSpellbook(spellbook, i); }} style={styles.listItem} key={i}>
								<Text style={styles.listText}>{spellbook.name}</Text>
								<TouchableOpacity style={styles.deleteButton} key={i} onPress={function () { return _this.delete(i); }}>
									<Text style={styles.deleteButtonText}>{"DELETE"}</Text>
								</TouchableOpacity>
							</TouchableOpacity>;
        })}
					</ScrollView>
				</View>
				<TouchableOpacity style={styles.addButton} key={0} onPress={function () { return _this.newSpellbook(); }}>
					<Icon color={"white"} name={"add"}/>
				</TouchableOpacity>
			</View>);
    };
    HomeScreen.prototype.delete = function (index) {
        var newBook = this.state.spellbooks;
        newBook.splice(index, 1);
        this.setState({ spellbooks: newBook });
    };
    HomeScreen.navigationOptions = {
        title: "Wizard's Companion",
    };
    return HomeScreen;
}(React.Component));
export var styles = StyleSheet.create({
    deleteButtonText: {
        color: '#ffffff',
        fontSize: 10,
    },
    deleteButton: {
        height: "100%",
        width: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'red',
    },
    listText: {
        marginLeft: 5,
    },
    addSpellContainer: {
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row",
    },
    addSpellButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "49%",
        height: 40,
        backgroundColor: '#da6e00',
    },
    addButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 40,
        backgroundColor: '#da6e00',
    },
    container: {
        flex: 1,
    },
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
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginBottom: 5,
        backgroundColor: "#d6d6d6",
        width: "90%",
        height: 40,
        alignSelf: "center",
    },
});
export { HomeScreen };
