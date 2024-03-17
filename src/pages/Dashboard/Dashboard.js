import React from 'react'
import Card from '../../components/DashboardCard/Card'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div>
        <div className="CardContainer">
            <Card className="card" type={"Doctors"}/>
            <Card className="card" type={"Patients"}/>
            {/* <img className="piechart" src={require("../../assets/piechart.png")} ></img> */}
        </div>
        
    </div>
  )
}
