import {Button, View} from "react-native";
import * as React from "react";
import {SpellModel} from "./SpellScreen";
import {Actions} from "react-native-router-flux";

type ScreenProps = {
	spellbook: SpellbookModel;
}

type StateType = {
	spellbook: SpellbookModel;
}

class SpellbookScreen extends React.Component<ScreenProps, StateType> {
	
	constructor(props: any) {
		super(props);
		
		this.state = {
			spellbook: this.props.spellbook,
		}
	}
	
	jumpToSpell(spell: SpellModel) {
		Actions.push("spell", {spell})
	}
	
	newSpell() {
		var index = 1;
		for (let i = 0; i < this.state.spellbook.spells.length; i++) {
			if (this.state.spellbook.spells[i].name.localeCompare("Spell " + index) == 0) {
				index++;
			}
		}
		const spell: SpellModel = {
			name: "Spell " + index,
			spellbookName: "",
			spellbookID: "",
			spellID: "",
			diceType: "",
			castTime: "",
			range: "",
			dice: 0,
			effectType: "",
			desc: "",
			extraEffect: 0,
			duration: 0,
			durationType: "",
		};
		
		this.setState({
			spellbook: {
				spells: this.state.spellbook.spells.concat(spell),
				name: this.state.spellbook.name,
			}
		})
	}
	
	render() {
		return (<View>
				{
					this.state.spellbook.spells.map(spell => <Button
						title={spell.name}
						onPress={() => this.jumpToSpell(spell)}
					/>)
				}
				<Button title={"+"} onPress={() => this.newSpell()}/>
			</View>
		);
	}
}

export type SpellbookModel = {
	spells: SpellModel[],
	name: string
}

export {SpellbookScreen};