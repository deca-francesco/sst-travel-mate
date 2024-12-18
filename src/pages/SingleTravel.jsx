import { Link, useParams } from 'react-router-dom';
import db from '../db/data';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

export default function SingleTravel() {

    const { id } = useParams()

    const selectedTravel = db.find(travel => travel.id === Number(id))

    // original db array (const)
    const allParticipants = selectedTravel.participants
    // support array for SearchBar component (reactive)
    const [searchedParticipants, setSearchedParticipants] = useState([])

    return (
        <>
            <div className="container">
                <h1 className="my-4">Viaggio a {selectedTravel.destination}</h1>
                <p><strong>Inizio: </strong>{selectedTravel.startDate}</p>
                <p><strong>Fine: </strong>{selectedTravel.endDate}</p>
                <Link to={"/"}><button className='btn btn-secondary mt-2 mb-4'>Torna ai viaggi</button></Link>
                <br />
                <SearchBar allParticipants={allParticipants} setSearchedParticipants={setSearchedParticipants} />
                <div className='accordion mt-4 shadow' id='accordionExample'>
                    {searchedParticipants.map(p => (
                        <div className='accordion-item' key={p.id}>
                            <div className='accordion-header' id={`heading${p.id}`}>
                                <button
                                    className='accordion-button collapsed'
                                    type='button'
                                    data-bs-toggle='collapse'
                                    data-bs-target={`#collapse${p.id}`}
                                    aria-expanded='true'
                                    aria-controls={`collapse${p.id}`}>
                                    <h4>{p.firstName} {p.lastName}</h4>
                                </button>
                            </div>
                            <div
                                id={`collapse${p.id}`}
                                className='accordion-collapse collapse'
                                aria-labelledby={`heading${p.id}`}
                                data-bs-parent='#accordionExample'>
                                <div className='accordion-body'>
                                    <p><strong>Email: </strong>{p.email}</p>
                                    <p><strong>Telefono: </strong>{p.phone}</p>
                                    <p><strong>Tax Code: </strong>{p.taxCode}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
