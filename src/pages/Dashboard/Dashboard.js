import React from 'react'
import { useEffect, useState } from 'react';
import Card from '../../components/DashboardCard/Card'
import './Dashboard.css'

import axios from "axios";



const baseUrl = "http://localhost:4000/api";




export default function Dashboard() {

  const [doc, setDoc] = useState()
  const [patient, setPatient] = useState()

  const[docCount, setDocCount] = useState()

  const getUsers = async (userType) => {
    try {
      const configurationObject = {
        method: "get",
        url: `${baseUrl}/${userType}`,
      };
      console.log(configurationObject.url);
  
      const response = await axios(configurationObject);
       
      const userData = response.data
      console.log(userData);

      if(userType == 'doctors'){
        setDoc(userData)
      }
      else if(userType == 'patients'){
        setPatient(userData)
      }


    } catch (error) {
      console.log("error " + error);
    }
  };

  

  useEffect( () => {
    getUsers('doctors')
    getUsers('patients')
  }, [])

  useEffect( () => {
    doc && console.log(doc.length)
    patient && console.log(patient.length)
  }, [doc,patient])


  return (
    <div>
        <div className="CardContainer">
            <Card className="card" type={"Doctors"} count={doc != null ? doc.length : "0"}/>
            <Card className="card" type={"Patients"} count={patient != null ? patient.length : "0"}/>
        </div>
        
    </div>
  )
}
