"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextBox = void 0;
function TextBox(props) {
    return (<div>
            <label>{props.label}</label>
            <input type="text" onChange={event => props.change(event.target.value)}/>;
        </div>);
}
exports.TextBox = TextBox;
