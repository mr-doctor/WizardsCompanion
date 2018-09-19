import * as React from "react";
import {SpellModel} from "./SpellScreen";
import {View, Text} from "react-native";

type ScreenProps = {
	spell: SpellModel;
}

type StateType = {
	spell: SpellModel;
}

class SpellEditScreen extends React.Component<ScreenProps, StateType> {
	
	constructor(props: any) {
		super(props);
		
		this.state = {
			spell: props.spell,
		};
		
	}
	
	render() {
		return (<View><Text>help</Text></View>);
	}
}

export {SpellEditScreen};