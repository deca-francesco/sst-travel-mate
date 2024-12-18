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
                <h1 className="my-4">Travel Mate Viaggi</h1>
                <section id="current_travels">
                    <h2 className="mb-4">Viaggi in corso:</h2>
                    {currentTravels.map(travel => (
                        <Link to={`/${travel.id}`} key={travel.id} className="text-decoration-none">
                            <div className="travel_card card shadow mb-3 p-3" >
                                <h3>{travel.destination}</h3>
                                <p className="my-0"><strong>Inizio: </strong>{travel.startDate}</p>
                                <p><strong>Fine: </strong>{travel.endDate}</p>
                            </div>
                        </Link>
                    ))}
                </section>
            </div >
        </>
    )
}