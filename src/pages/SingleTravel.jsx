import { Link, useParams } from 'react-router-dom';
import db from '../db/data';

export default function SingleTravel() {

    const { id } = useParams()

    const selectedTravel = db.find(travel => travel.id === Number(id))


    return (
        <>
            <div className="container">
                <h1 className="my-4">VIAGGIO A {selectedTravel.destination}</h1>
                <Link to={"/"}><button className='btn btn-secondary mb-4'>Torna indietro</button></Link>
                {selectedTravel.participants.map(participant => (
                    <div className="card mb-3 p-3" key={participant.id}>
                        <h3>{participant.firstName} {participant.lastName}</h3>
                    </div>
                ))}
            </div>
        </>
    )

}
