import {Button, View, Text} from "react-native";
import * as React from "react";
import {SpellModel, SpellScreen} from "./SpellScreen";
import {Actions} from "react-native-router-flux";

type ScreenProps = {
	model: SpellbookModel;
}

type ModelProps = {

}

class SpellbookScreen extends React.Component<ScreenProps> {
	
	jumpToSpell(spell: SpellModel) {
		Actions.push("spell", {spell})
	}
	
	render() {
		return (<View>
				{
					this.props.model.spells.map(spell => <Button title={spell.props.name} onPress={() => this.jumpToSpell(spell)}/>)
				}
			</View>
		);
	}
}

class SpellbookModel extends React.Component<ModelProps> {
	spells: SpellModel[] = [];
}

export {SpellbookScreen, SpellbookModel};