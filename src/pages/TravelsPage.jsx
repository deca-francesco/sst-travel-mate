import { Link } from "react-router-dom"
import db from "../db/data"

export default function TravelsPage() {

    const now = new Date()

    const currentTravels = db.filter(element => {
        const startDate = new Date(element.startDate)
        const endDate = new Date(element.endDate)
        return startDate <= now && now <= endDate
    })





    return (
        <>
            <div className="container">
                <h1 className="my-4">Viaggi Fantozziani</h1>
                {currentTravels.map(travel => (
                    (<Link to={`/${travel.id}`} key={travel.id} className="text-decoration-none">
                        <div className="travel_card card mb-3 p-3" >
                            <h2>{travel.destination}</h2>
                            <p>Inizio: {travel.startDate} | Fine: {travel.endDate}</p>
                        </div>
                    </Link>
                    )
                ))}
            </div >
        </>
    )
}