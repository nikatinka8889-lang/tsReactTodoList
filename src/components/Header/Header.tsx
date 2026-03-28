import { HeaderBlock, HeaderContainer, HeaderNavigation } from './Header.styled'
export default function Header() {

  return (
      <HeaderBlock >
        <HeaderContainer >
            <HeaderNavigation to="/">ToDo</HeaderNavigation>
                      <HeaderNavigation  to="/list">List</HeaderNavigation>

        </HeaderContainer>
    </HeaderBlock>

  )
}