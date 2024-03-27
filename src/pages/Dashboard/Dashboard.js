import React from "react";
import { useEffect, useState } from "react";
import Card from "../../components/DashboardCard/Card";
import "./Dashboard.css";
import axios from "axios";

import { baseUrl } from "../../constants/constants";
import api from "../../services/AuthService";
import back from "../../assets/DashboardBack.jpg";

export default function Dashboard() {
  const [doc, setDoc] = useState();
  const [patient, setPatient] = useState();

  const getUsers = async (userType) => {
    api
      .get(`${baseUrl}/${userType}`, {})
      .then((res) => {
        if (res) {
          const userData = res.data;
          console.log(userData);
          if (userType == "doctors") {
            setDoc(userData);
          } else if (userType == "patients") {
            setPatient(userData);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        return error.response;
      });
  };

  useEffect(() => {
    getUsers("doctors");
    getUsers("patients");
  }, []);

  useEffect(() => {
    doc && console.log(doc.length);
    patient && console.log(patient.length);
  }, [doc, patient]);

  return (
    <div>
      <div className="CardContainer">
        <Card
          className="card"
          type={"Doctors"}
          count={doc != null ? doc.length : "0"}
        />
        <Card
          className="card"
          type={"Patients"}
          count={patient != null ? patient.length : "0"}
        />
        <div className="right">
          <img src={back} className='backImg'/>
        </div>
      </div>
    </div>
  );
}
