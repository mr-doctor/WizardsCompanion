import {Button, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {SpellModel} from "./SpellScreen";
import {Actions} from "react-native-router-flux";
import {styles} from "./HomeScreen";
// import {Icon} from "../node_modules/@types/react-native-vector-icons/Icon";


type ScreenProps = {
	spellbook: SpellbookModel;
	spellModifier: (book: number) => {}
	index: number;
}

class SpellbookScreen extends React.Component<ScreenProps, {}> {

	constructor(props: any) {
		super(props);

		this.state = {
			spellbook: this.props.spellbook,
		}
	}

	jumpToSpell(spell: SpellModel) {
		Actions.push("spell", {spell: spell, title: spell.name})
	}

	render() {
		return (<View>
				{
					this.props.spellbook.spells.map((spell, i) => <TouchableOpacity
						onPress={() => this.jumpToSpell(spell)}
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
				<Button title={"+"} onPress={() => this.props.spellModifier(this.props.index)}/>
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