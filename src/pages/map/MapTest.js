import React, { useEffect, useState } from "react";
import axios from "axios";

function MapTest(){

    const [test, setTest] = useState('');

    useEffect(() => {
        axios.get('/api/test')
            .then(reponse => setTest(reponse.data))
            .catch(error => console.log(error))
    }, []);//end of useEffect

    return (
        <div className="MapTest">
            Spring Data : {test}
        </div>
    );
}
export default MapTest;