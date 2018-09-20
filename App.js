var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import { SpellbookScreen } from "./screens/SpellbookScreen";
import { Router, Scene, Stack } from "react-native-router-flux";
import { HomeScreen } from "./screens/HomeScreen";
import { SpellScreen } from "./screens/SpellScreen";
import { SpellEditScreen } from "./screens/SpellEditScreen";
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spellbooks: []
        };
        return _this;
    }
    // 	spellbookModifier={this.addSpellbook.bind(this)}
    // spellbooks={this.state.spellbooks}
    // spellModifier={this.newSpell.bind(this)}
    App.prototype.render = function () {
        return (<Router>
				<Stack key="root">
					<Scene key="home" component={HomeScreen} title="Home Screen"/>
					<Scene key="spellbook" component={SpellbookScreen} title="Spellbook"/>
					<Scene key="spell" component={SpellScreen} title="Spell"/>
					<Scene key="spell-edit" component={SpellEditScreen} title={"Spell Edit"}/>
				</Stack>
			</Router>);
    };
    return App;
}(React.Component));
export default App;
