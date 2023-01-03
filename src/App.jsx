import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImgCripto from './assets/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;  
`
const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-size: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    display: block;
    background-color: #66a2fe;
    margin: 10px auto 10px auto;
  }
`
function App() {

  const [objMonedas, setObjMonedas] = useState({})
  const [objResultado, setObjResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if (Object.keys(objMonedas).length > 0) {
      const
        { cripto, moneda } = objMonedas,
        url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`,
        cotizarCripto = async () => {
          setCargando(true)
          setObjResultado({})

          const 
            response = await fetch(url),
            result = await response.json();
            console.log(result);
            setObjResultado(result.DISPLAY[cripto][moneda])

          setCargando(false)

        }

      cotizarCripto();
    }
    
  }, [objMonedas])
  

  return (
    <Contenedor>
      <Imagen 
        src={ImgCripto}
        alt='Img criptos'/>

      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>

        <Formulario
          setObjMonedas={setObjMonedas} />

        { cargando && <Spinner /> }

        {
          Object.keys(objResultado).length > 0 && <Resultado objResultado={objResultado} />
        }

      </div>

    </Contenedor>
  )
}

export default App
