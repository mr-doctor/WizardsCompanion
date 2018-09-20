import {Button, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {SpellModel} from "./SpellScreen";
import {Actions} from "react-native-router-flux";
import {styles} from "./HomeScreen";
// import {Icon} from "../node_modules/@types/react-native-vector-icons/Icon";
var dotProp = require('dot-prop-immutable');


type ScreenProps = {
	spellbook: SpellbookModel;
	spellAdder: (book: number) => {}
	spellEditor: (spell: SpellModel, index: number, book: number) => {};
	index: number;
	book: number;
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
	
	jumpToSpell(spell: SpellModel, index: number) {
		Actions.push("spell", {spell: spell, title: spell.name, index: index, book: this.props.book, spellEditor: this.props.spellEditor})
	}

	render() {
		return (<View>
				{
					this.props.spellbook.spells.map((spell, i) => <TouchableOpacity
						onPress={() => this.jumpToSpell(spell, i)}
						style={styles.listItem}
						key={i}
					>
						<Text>
							{spell.name}
						</Text>
					</TouchableOpacity>)
				}
				{/*<TouchableOpacity onPress={() => this.newSpell()}><View>
					<Text>+</Text>
				</View></TouchableOpacity>*/}
				<Button title={"+"} onPress={() => this.props.spellAdder(this.props.index)}/>
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