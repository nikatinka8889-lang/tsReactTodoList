import { useDispatch } from 'react-redux'
import { HeaderBlock, HeaderContainer, HeaderNavigation } from './Header.styled'
import { toggleThemeAction } from '../../features/themeList'
export default function Header() {

  const dispatch = useDispatch()
  return (
      <HeaderBlock >
        <HeaderContainer >
            <HeaderNavigation to="/">ToDo</HeaderNavigation>
                      <HeaderNavigation  to="/list">List</HeaderNavigation>

<div className='toggleButton'>
<button onClick={()=>dispatch(toggleThemeAction())}>toggle</button>

</div>
        </HeaderContainer>
    </HeaderBlock>

  )
}