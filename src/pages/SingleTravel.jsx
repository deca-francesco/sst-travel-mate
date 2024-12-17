import { Link, useParams } from 'react-router-dom';
import db from '../db/data';

export default function SingleTravel() {

    const { id } = useParams()

    const selectedTravel = db.find(travel => travel.id === Number(id))


    return (
        <>
            <div className="container">
                <h1 className="my-4">Viaggio a {selectedTravel.destination}</h1>
                <p><strong>Inizio: </strong>{selectedTravel.startDate}</p>
                <p><strong>Fine: </strong>{selectedTravel.endDate}</p>
                <Link to={"/"}><button className='btn btn-secondary mt-2 mb-4'>Torna indietro</button></Link>
                {selectedTravel.participants.map(participant => (
                    <div className="card mb-3 p-3" key={participant.id}>
                        <h3>{participant.firstName} {participant.lastName}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}
