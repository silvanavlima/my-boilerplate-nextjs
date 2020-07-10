import * as S from './styles'

const Main = ({
  title = 'Boilerplate React with NextJS',
  description = 'TypeScript, ReactJS, NextJS, Styled Components, React Testing Library and Jest'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
