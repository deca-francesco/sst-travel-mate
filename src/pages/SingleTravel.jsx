import { Link, useParams } from 'react-router-dom';
import db from '../db/data';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

export default function SingleTravel() {

    const { id } = useParams()

    const selectedTravel = db.find(travel => travel.id === Number(id))

    const allParticipants = selectedTravel.participants

    const [searchedParticipants, setSearchedParticipants] = useState([])

    return (
        <>
            <div className="container">
                <h1 className="my-4">Viaggio a {selectedTravel.destination}</h1>
                <p><strong>Inizio: </strong>{selectedTravel.startDate}</p>
                <p><strong>Fine: </strong>{selectedTravel.endDate}</p>
                <Link to={"/"}><button className='btn btn-secondary mt-2 mb-4'>Torna indietro</button></Link>
                <br />
                <SearchBar allParticipants={allParticipants} setSearchedParticipants={setSearchedParticipants} />
                {searchedParticipants.map(p => (
                    <div className="card mb-3 p-3" key={p.id}>
                        <h3>{p.firstName} {p.lastName}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}
