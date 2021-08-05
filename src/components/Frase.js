import React from 'react';
import styled from '@emotion/styled'

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    box-shadow: 0px 5px 14px 4px rgba(0,0,0,0.3);
    -webkit-box-shadow: 0px 5px 14px 4px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 5px 14px 4px rgba(0,0,0,0.3);
    
    @media (min-width: 992px){
        margin-top: 5rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &:before{
            content: open-quote;
            font-size: 10rem;
            color:black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        margin-top: 2rem;        
        color: #666;
        font-weight: 500;

    }
`;

const Frase = ({frase}) => {
    return ( 
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </ContenedorFrase>
     );
}
 
export default Frase;