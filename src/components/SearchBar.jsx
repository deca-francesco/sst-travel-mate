import { useEffect, useState } from "react";


export default function SearchBar({ participants, setParticipants }) {

    const [searchText, setSearchText] = useState("");


    function HandleSearch(searchText) {

        console.log(searchText);


        const filteredParticipants = participants.filter(p => `${p.firstName} ${p.lastName}`.toLowerCase().includes(searchText))
        setParticipants(filteredParticipants)


    }

    useEffect(HandleSearch, [searchText])

    return (
        <>
            <input type="search"
                name="searchBar"
                className="form-control mb-3"
                id="searchBar"
                placeholder="cerca partecipante"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </>
    )
}