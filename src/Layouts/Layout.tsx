import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import { GlobalStyle } from '../Styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function Layout() {
    const theme = useSelector((state: RootState) => state.themeList.theme);

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme}/>
        <Header/>
        <Outlet />
    </ThemeProvider>
    </>
  )
}
