import {Button, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {SpellModel} from "./SpellScreen";
import {Actions} from "react-native-router-flux";
import {styles} from "./HomeScreen";
// import {Icon} from "../node_modules/@types/react-native-vector-icons/Icon";


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
		Actions.push("spell", {spell: spell, title: spell.name})
	}

	newSpell() {
		let index = 1;
		for (let i = 0; i < this.state.spellbook.spells.length; i++) {
			if (this.state.spellbook.spells[i].name.localeCompare("Spell " + index) == 0) {
				index++;
			}
		}
		/*const spell: SpellModel = {
			name: "Spell " + index,
			spellbookName: this.state.spellbook.name,
			spellbookID: this.state.spellbook.id,
			// Unique ID generation from https://gist.github.com/6174/6062387
			spellID: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
			diceType: "",
			castTime: "",
			range: "",
			dice: 0,
			effectType: "",
			desc: "",
			extraEffect: 0,
			duration: 0,
			durationType: "",
		};*/
		const spell: SpellModel = {
			name: "Spell " + index,
			spellbookName: this.state.spellbook.name,
			spellbookID: this.state.spellbook.id,
			// Unique ID generation from https://gist.github.com/6174/6062387
			spellID: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
			diceType: "d8",
			castTime: "Instantaneous",
			range: "1",
			dice: 0,
			effectType: "Force",
			desc: "Hits da ting mon",
			extraEffect: 4,
			duration: 6,
			durationType: "Hours",
		};

		this.setState({
			spellbook: {
				spells: this.state.spellbook.spells.concat(spell),
				name: this.state.spellbook.name,
				id: this.state.spellbook.id,
			}
		})
	}

	render() {
		return (<View>
				{
					this.state.spellbook.spells.map((spell, i) => <TouchableOpacity
						onPress={() => this.jumpToSpell(spell)}
						style={styles.listItem}
						key={i}
					>
						<Text>
							{spell.name}
						</Text>
						{/*<View style={styles.line}></View>*/}
					</TouchableOpacity>)
				}
				{/*<TouchableOpacity onPress={() => this.newSpell()}><View>
					<Text>+</Text>
				</View></TouchableOpacity>*/}
				<Button title={"+"} onPress={() => this.newSpell()}/>
			</View>
		)
	}
}

export type SpellbookModel = {
	spells: SpellModel[],
	name: string
	id: string;
}

export {SpellbookScreen};