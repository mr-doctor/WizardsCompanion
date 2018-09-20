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
var PageProvider = /** @class */ (function (_super) {
    __extends(PageProvider, _super);
    function PageProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spellbooks: [],
        };
        console.log("created");
        return _this;
    }
    PageProvider.prototype.newSpellbook = function () {
    };
    return PageProvider;
}(React.Component));
export { PageProvider };
