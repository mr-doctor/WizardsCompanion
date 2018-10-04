import {SpellbookModel} from "./SpellbookScreen";
import * as React from "react";
import {ScrollView, View} from "react-native";
import {FormInput, FormLabel} from "react-native-elements";
import {SpellModel} from "./SpellScreen";
import {Actions} from "react-native-router-flux";
import {FloatingAction} from "react-native-floating-action";
import {colours, FabConfig} from "./HomeScreen";

type PropType = {
	spellbook: SpellbookModel
	update: (model: SpellbookModel) => {}
}

type StateType = {
	spellbook: SpellbookModel;
	newName: string;
}

export class SpellbookEditScreen extends React.Component<PropType, StateType> {
	constructor(props: any) {
		super(props);

		this.state = {
			spellbook: props.spellbook,
			newName: props.spellbook.name,
		};
	}

	private save() {
		const newBook: SpellbookModel = {
			name: this.state.newName,
			id: this.state.spellbook.id,
			spells: this.state.spellbook.spells,
		};
		this.setState({spellbook: newBook});
		this.props.update(newBook);
		Actions.pop();
	}

	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
				<FormLabel>Name</FormLabel>
				<FormInput defaultValue={this.state.spellbook.name} onChangeText={(text: string) => this.setState({newName: text})}/>
				<FloatingAction actions={[FabConfig.save]} color={colours.accentColour} overrideWithAction={true} onPressItem={(name) => {console.log(name); this.save();}}/>
			</View>);
	}
}