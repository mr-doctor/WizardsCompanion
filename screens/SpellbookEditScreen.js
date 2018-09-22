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
import * as React from "react";
import { View } from "react-native";
import { FormInput, FormLabel } from "react-native-elements";
import { FabConfig } from "./SpellScreen";
import { Actions } from "react-native-router-flux";
import { FloatingAction } from "react-native-floating-action";
var SpellbookEditScreen = /** @class */ (function (_super) {
    __extends(SpellbookEditScreen, _super);
    function SpellbookEditScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spellbook: props.spellbook,
            newName: props.spellbook.name,
        };
        return _this;
    }
    SpellbookEditScreen.prototype.save = function () {
        var newBook = {
            name: this.state.newName,
            id: this.state.spellbook.id,
            spells: this.state.spellbook.spells,
        };
        this.setState({ spellbook: newBook });
        this.props.update(newBook);
        Actions.pop();
    };
    SpellbookEditScreen.prototype.render = function () {
        var _this = this;
        return (<View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
				<FormLabel>Name</FormLabel>
				<FormInput defaultValue={this.state.spellbook.name} onChangeText={function (text) { return _this.setState({ newName: text }); }}/>
				<FloatingAction actions={[FabConfig.save]} overrideWithAction={true} onPressItem={function (name) { console.log(name); _this.save(); }}/>
			</View>);
    };
    return SpellbookEditScreen;
}(React.Component));
export { SpellbookEditScreen };
