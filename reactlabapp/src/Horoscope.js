"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react")); // for hooks
const TextBox_1 = require("./TextBox"); // for text box
// @ts-ignore
const axios_1 = __importDefault(require("axios"));
// @ts-ignore
const react_awesome_button_1 = require("react-awesome-button"); // for external button
require("react-awesome-button/dist/styles.css"); // for external button styling
function Horoscope() {
    const [sun, setSun] = (0, react_1.useState)("");
    const [moon, setMoon] = (0, react_1.useState)("");
    const [rising, setRising] = (0, react_1.useState)("");
    const [horoscope, setHoroscope] = (0, react_1.useState)([]);
    const requestHoroscope = () => {
        const request = 'http://localhost:4567/horoscope'; // 1) location for request
        const toSend = {
            "sun": sun,
            "moon": moon,
            "rising": rising
        };
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        };
        // 1) location for request 2) your data 3) configuration
        axios_1.default.post(request, toSend, config)
            .then((response) => {
            console.log(response.data);
            // set field name to the immutable map from "Main.java"
            setHoroscope(response.data["horoscope"]);
        })
            .catch((error) => {
            console.log(error);
        });
    };
    return (<div>
            <TextBox_1.TextBox label={"Sun Sign"} change={setSun}/>
            <TextBox_1.TextBox label={"Moon Sign"} change={setMoon}/>
            <TextBox_1.TextBox label={"Rising Sign"} change={setRising}/>

            <react_awesome_button_1.AwesomeButton type="primary" onPress={requestHoroscope}> Submit! </react_awesome_button_1.AwesomeButton>

            <ul>
                {horoscope.map(item => <li>{item}</li>)}
            </ul>

        </div>);
}
exports.default = Horoscope;
