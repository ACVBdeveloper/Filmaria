import {useEffect, useState} from 'react';
import api from '../../services/api';

// URL :/movie/550?api_key=c07e5f599e8c80173e821b413f7e1dc6


function Home(){

    const [fil,es, setFilmes] = useState([])

    useEffect(()=> {

        async function loadFilmes(){
            const response = await api.get("movie", {
                params:{
                    api_key:"c07e5f599e8c80173e821b413f7e1dc6",
                    language: "pt-BR",
                    page: 1,
                }
            })
       
            console.log(response)
        }

        loadFilmes();

    }, [])

    return(
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
}

export default Home;