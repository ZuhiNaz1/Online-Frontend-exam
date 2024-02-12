const getStoredSearchName = () =>{
    const StoredSearchName = localStorage.getItem('search-name');
    if(StoredSearchName){
        return JSON.parse(StoredSearchName);
    }
    return [];
}

const saveSearchName = id =>{
   const StoredSearchNames = getStoredSearchName();
   const exists = StoredSearchNames.find(cardId => cardId === id);
   if(!exists){
    StoredSearchNames.push(id);
    localStorage.setItem('search-name', JSON.stringify(StoredSearchNames))
   }
}

export { getStoredSearchName, saveSearchName }  