const getStoredLawyer = () => {
    
    const storedLawyerSTR = localStorage.getItem("lawyers");

    if (storedLawyerSTR) {
        const storedLawyerData = JSON.parse(storedLawyerSTR);
        return storedLawyerData;
    }
    else {
        return [];
    }

}

const addToStoredDB = (id) => {
    
    const storedLawyerData = getStoredLawyer();
    storedLawyerData.push(id);
    const data = JSON.stringify(storedLawyerData);
    localStorage.setItem("lawyers",data)   

}
// const deleteFromStoredDB = (id) => {
//     const storedLawyerData = getStoredLawyer(); 
//     const remaining = storedLawyerData.filter(storedId => storedId !== id);
//     localStorage.setItem("lawyers", JSON.stringify(remaining));
// };

const deleteFromStoredDB = (id) => {
    const storedLawyerData = getStoredLawyer(); 
    const remaining = storedLawyerData.filter(storedId => Number(storedId) !== Number(id));
    localStorage.setItem("lawyers", JSON.stringify(remaining));
};

export { addToStoredDB,getStoredLawyer,deleteFromStoredDB };