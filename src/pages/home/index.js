import {useEffect, useState} from 'react';
import api from '../../services/api';
import{Link} from 'react-router-dom';
import './home.css';

// URL :/movie/550?api_key=c07e5f599e8c80173e821b413f7e1dc6


function Home(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=> {

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key:"c07e5f599e8c80173e821b413f7e1dc6",
                    language: "pt-BR",
                    page: 1,
                }
            })
       
            //console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 10))  
        }

        loadFilmes();

    }, [])

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {

                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={'https://image.tmdb.org/t/p/original/${filme.backdrop_path}'} alt={filme.title} />
                            <Link to={'/filme/${filme.id}'} >Acessar </Link>
                        </article>
                    )
                })}    
            </div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
}

export default Home;