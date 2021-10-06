import styled from "styled-components"

export const WholeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  column-gap: 32px;
  grid-template-rows: 15vh auto;
`

export const LogoBox = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  padding: 32px 24px 24px 32px;
  cursor: pointer;
`

export const MapBox = styled.div`
  grid-column: 3/4;
  grid-row: 1/3;
`

/*맵을 사용하지 않을 경우 사용하는 우측 본문 박스*/
export const TestBox = styled.div`
  grid-column: 3/4;
  grid-row: 2/3;
  background-color: gray;
  margin: 0px 32px 32px 0px;
`

export const MenuBox = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`

export const ContentsBox = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  overflow: scroll;
  height: 85vh;
  padding-right: 20px;
`

export const MainBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const ContentsBoxRight = styled.div`
  width: 33%;
`

export const ContentsBoxLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 4%;
`
