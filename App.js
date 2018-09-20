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
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spellbooks = [];
        return _this;
    }
    App.prototype.addSpellbook = function () {
        var index = 1;
        for (var i = 0; i < this.spellbooks.length; i++) {
            if (this.spellbooks[i].name.localeCompare("Spellbook " + index) == 0) {
                index++;
            }
        }
        // Unique ID generation from https://gist.github.com/6174/6062387
        var id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.spellbooks.concat({ spells: [], name: "Spellbook " + index, id: id });
        console.log(this.spellbooks);
    };
    App.prototype.render = function () {
        return (<Router>
				<Stack key="root">
					<Scene key="home" component={HomeScreen} modifier={this.addSpellbook()} title="Home Screen"/>
					<Scene key="spellbook" component={SpellbookScreen} title="Spellbook"/>
					<Scene key="spell" component={SpellScreen} title="Spell"/>
					<Scene key="spell-edit" component={SpellEditScreen} title={"Spell Edit"}/>
				</Stack>
			</Router>);
    };
    return App;
}(React.Component));
export default App;
