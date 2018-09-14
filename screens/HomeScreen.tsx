import {Button, View, Text} from "react-native";
import * as React from "react";
import {Actions} from "react-native-router-flux";
import {SpellbookScreen} from "./SpellbookScreen";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    spellbooks: SpellbookModel[] = [];

    goToSpellbook() {
        console.log("pressed");
        Actions.push("spellbook");
    }

    render() {
        return (<View>
                {this.spellbooks.map(spellbook =>
                    <Button
                        onPress={() => this.goToSpellbook(spellbook)}
                        title="Spellbook"
                        color="#841584"
                    />)
                }
            </View>
        );
    }
}

export {HomeScreen};