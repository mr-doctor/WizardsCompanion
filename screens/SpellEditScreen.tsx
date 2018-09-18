import * as React from "react";
import {SpellModel} from "./SpellScreen";

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
		return {};
	}
}

export {SpellEditScreen};