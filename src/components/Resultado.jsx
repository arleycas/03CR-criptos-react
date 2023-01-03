import styled from '@emotion/styled'

const ContResultado = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`

const Imagen = styled.img`
  display: block;
  width: 120px;
`

export default function Resultado({ objResultado }) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, IMAGEURL, LASTUPDATE } = objResultado;
  return (
    <ContResultado>
      <Imagen 
        src={`https://www.cryptocompare.com/${IMAGEURL}`} 
        alt="Imagen crypto" />
        <div>
          <Precio> El precio es de: <span>{ PRICE }</span></Precio>
          <Texto> Precio más alto del día: <span>{ HIGHDAY }</span></Texto>
          <Texto> Precio más bajo del día: <span>{ LOWDAY }</span></Texto>
          <Texto> Variación ultimas 24H: <span>{ CHANGE24HOUR }</span></Texto>
          <Texto> Ultima actualización: <span>{ LASTUPDATE }</span></Texto>
        </div>
    </ContResultado>
  )
}
