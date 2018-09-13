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
var HomeScreen = /** @class */ (function (_super) {
    __extends(HomeScreen, _super);
    function HomeScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeScreen.prototype.render = function () {
        return (<div>
			
			</div>);
    };
    HomeScreen.navigationOptions = {
        title: 'Welcome',
    };
    return HomeScreen;
}(React.Component));
export { HomeScreen };
