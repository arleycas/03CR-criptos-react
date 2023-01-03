import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { arrMonedas } from '../data/monedas'
import Error from './Error'

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  text-align: center;
  margin-top: 30px;
  &:hover {
    background-color: #7a7bfe;
    cursor: pointer;
  }
`
export default function Formulario({ setObjMonedas }) {
  
  const [criptos, setCriptos ] = useState([])
  const [error, setError ] = useState(false)

  const [ moneda, SelectMonedas ] = useSelectMonedas('Elije tu Moneda', arrMonedas)
  const [ cripto, SelectCriptomonedas ] = useSelectMonedas('Elije tu Cripotomoneda', criptos)

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD'
      const response = await fetch(url)
      const resultado = await response.json()
      const arrCriptos = resultado.Data.map(objCripto => {
        return {
          id: objCripto.CoinInfo.Name,
          nombre: objCripto.CoinInfo.FullName
        }
      })

      setCriptos(arrCriptos);
    }

    consultarAPI();

  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviando....', moneda, cripto);

    if([moneda, cripto].includes('')) {
      return setError(true)
    }

    setError(false)
    setObjMonedas({
      moneda,
      cripto
    })
  }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}

      <form
        onSubmit={handleSubmit}>
        
        <SelectMonedas />
        <SelectCriptomonedas />
        <InputSubmit type="submit" value='Cotizar' />
      </form>
    </>
  )
}