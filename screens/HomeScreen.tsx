import {Button, View, Text} from "react-native";
import * as React from "react";
import {Actions} from "react-native-router-flux";
import {SpellbookModel, SpellbookScreen} from "./SpellbookScreen";

type StateType = {
    spellbooks: SpellbookModel[]
}
type PropType = {

}
class HomeScreen extends React.Component<PropType, StateType> {

    constructor(props: any) {
        super(props);

        this.state = {
            spellbooks: []
        }
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    goToSpellbook(spellbook: SpellbookModel) {
        console.log("pressed");
        Actions.push("spellbook", {spellbook});
    }

    newSpellbook() {
        this.setState({spellbooks: this.state.spellbooks.concat({spells: [], name: "Spellbook 1"})});
    }

    render() {
        return (<View>
                {this.state.spellbooks.map(spellbook =>
                    <Button
                        onPress={() => this.goToSpellbook(spellbook)}
                        title= {spellbook.name}
                        color="#841584"
                    />)
                }
                <Button title={"+"} onPress={() => this.newSpellbook()}/>
            </View>
        );
    }
}

export {HomeScreen};