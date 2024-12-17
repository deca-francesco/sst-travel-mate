import { Link } from "react-router-dom"
import db from "../db/data"

export default function TravelsPage() {


    return (
        <>
            <div className="container">
                <h1 className="my-5">VIAGGI FANTOZZIANI</h1>
                {db.map(travel => (
                    <Link to={`/${travel.id}`} key={travel.id} className="text-decoration-none">
                        <div className="travel_card card mb-3 p-3" >
                            <h2>{travel.destination}</h2>
                            <p>Inizio: {travel.startDate} | Fine: {travel.endDate}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}