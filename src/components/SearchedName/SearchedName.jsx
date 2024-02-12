import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getStoredSearchName } from "../../utility/localstorage";

const SearchedNames = () => {
    const cards = useLoaderData();

    const [searchedNames, setSearchedNames] = useState([]);

    useEffect(() => {
        const storedCardIds = getStoredSearchName();
        if(cards.length > 0){
            const nameSearched = [];
            for(const id of storedCardIds){
                const card = cards.find(card => card.id === id); 
                if(card ){
                    nameSearched.push(card)
                }
            }
            setSearchedNames(nameSearched);
        }
    }, [cards])
    return (
        <div>
            <h2 className="text-2xl font-bold ">Searched by name: {searchedNames.length}</h2>
        </div>
    );
};

export default SearchedNames;