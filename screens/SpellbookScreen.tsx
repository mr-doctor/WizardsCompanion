import {Button, View, Text} from "react-native";
import * as React from "react";
import {SpellModel, SpellScreen} from "./SpellScreen";
import {Actions} from "react-native-router-flux";

type ScreenProps = {
	model: SpellbookModel;
}

type StateType = {
    spellbook: SpellbookModel;
}

class SpellbookScreen extends React.Component<ScreenProps, StateType> {

    constructor(props: any) {
        super(props);

        this.state = {
            spellbook: this.props.model,
        }
    }

    jumpToSpell(spell: SpellModel) {
        Actions.push("spell", {spell})
    }

    render() {
        return (<View>
                {
                    this.state.spellbook.spells.map(spell => <Button title={spell.name}
                                                                 onPress={() => this.jumpToSpell(spell)}/>)
                }
            </View>
        );
    }
}
export type SpellbookModel = {
    spells: SpellModel[],
    name: string
}

export {SpellbookScreen};