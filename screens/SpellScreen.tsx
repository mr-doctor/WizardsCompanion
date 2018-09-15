import {Button, View, Text} from "react-native";
import * as React from "react";
import {SpellbookModel} from "./SpellbookScreen";

type ScreenProps = {
    model: SpellModel;
}

type StateType = {
    spell: SpellModel;
}

class SpellScreen extends React.Component<ScreenProps, StateType> {

    constructor(props: any) {
        super(props);

        this.state = {
            spell: props.model,
        }
    }

    render() {
        return (<Text>{this.state.spell.name}</Text>);
    }

}

type SpellModel = {
    name: string;
    spellbookName: string;
    spellbookID: string;
    spellID: string;
    diceType: string,
    castTime: string,
    range: string,
    dice: number,
    effectType: string,
    desc: string,
    extraEffect: number,
    duration: number,
    durationType: string,
}

export {SpellScreen, SpellModel};