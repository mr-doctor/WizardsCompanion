import {SpellbookModel} from "../screens/SpellbookScreen";
import * as React from "react";

type StateType = {
	spellbooks: SpellbookModel[];
}

export class PageProvider extends React.Component<{}, StateType> {

	constructor(props: any) {
		super(props);

		this.state = {
			spellbooks: [],
		};
		console.log("created");
	}

	newSpellbook() {

	}
}