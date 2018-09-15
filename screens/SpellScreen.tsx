import {Button, View, Text} from "react-native";
import * as React from "react";
import {SpellbookModel} from "./SpellbookScreen";

type ScreenProps = {
	model: SpellModel;
}

type ModelProps = {
	name: string;
	spellbookName: string;
	spellbookID: string;
	spellID: string;
}

class SpellScreen extends React.Component<ScreenProps> {
	render() {
		return {};
	}
	
}

class SpellModel extends React.Component<ModelProps> {
	diceType: string = "";
	castTime: string = "";
	range: string = "";
	dice: number = 0;
	effectType: string = "";
	desc: string = "";
	extraEffect: number = 0;
	duration: number = 0;
	durationType: string = "";
}

export {SpellScreen, SpellModel};