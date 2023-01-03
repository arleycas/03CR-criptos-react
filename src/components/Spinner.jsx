import '../styles/Spinner.css'
import styled from '@emotion/styled'

const ContSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
  transform: scale(1.4);
`

export default function Spinner() {
  return (
    <ContSpinner>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </ContSpinner>
  )
}
