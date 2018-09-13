import {Button, View, Text} from "react-native";
import * as React from "react";
import {Actions} from "react-native-router-flux";
import {SpellbookScreen} from "./SpellbookScreen";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    goToSpellbook() {
        console.log("pressed");
        Actions.push("spellbook");
    }

    render() {
        return (<View>
                <Button
                    onPress={() => this.goToSpellbook()}
                    title="Spellbook"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

export {HomeScreen};