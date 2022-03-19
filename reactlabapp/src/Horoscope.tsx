import React, {useState} from 'react';  // for hooks
import {TextBox} from './TextBox';  // for text box

// @ts-ignore
import axios from 'axios';

// @ts-ignore
import {AwesomeButton} from "react-awesome-button";  // for external button
import "react-awesome-button/dist/styles.css";  // for external button styling

function Horoscope() {
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");

    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const request = 'http://localhost:4567/horoscope';  // 1) location for request

        const toSend = {  // 2) your data
            "sun": sun,
            "moon": moon,
            "rising": rising
        }

        let config = {  // 3) configuration
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        // 1) location for request 2) your data 3) configuration
        axios.post(request, toSend, config)

            .then((response: any) => {
                console.log(response.data);

                // set field name to the immutable map from "Main.java"
                setHoroscope(response.data["horoscope"]);
            })

            .catch((error: any) => {
                console.log(error);
            });
    }

    return (
        <div>
            <TextBox label={"Sun Sign"} change={setSun}/>
            <TextBox label={"Moon Sign"} change={setMoon}/>
            <TextBox label={"Rising Sign"} change={setRising}/>

            <AwesomeButton type="primary" onPress={requestHoroscope}> Submit! </AwesomeButton>

            <ul>
                {horoscope.map(item => <li>{item}</li>)}
            </ul>

        </div>
    )
}

export default Horoscope