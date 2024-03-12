import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// const axios = require("axios");
const baseUrl = "http://localhost:4000/api";

export default function Users({ type }) {
    const [userData, setUserData] = useState();


    const getUsers = async () => {
        try {
            const configurationObject = {
                method: "get",
                url: `${baseUrl}/${type}`,
            };
            console.log(configurationObject.url);

            const response = await axios(configurationObject);
            console.log(response.data);
            setUserData(response.data)
        } catch (error) {
            console.log("error " + error);
        }
    };

    useEffect(() => {
        setUserData();
        getUsers();
    }, [type]);

    return <div>
        {userData && userData.map(user => 
            <p key={user._id}>{user.name}</p>
        )}
        {/* <p>testlast</p> */}
    </div>;
}
