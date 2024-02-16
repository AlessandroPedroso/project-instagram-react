import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import { Flex, Screen, Typography } from "./style";
import { NavBar } from "./components/navbar";
import Header from "./components/header";
import { Stories } from "./components/stories";
import Publications from "./components/publications";

function App() {

  const [theme,setTheme] = useState('dark')

  const themeToggler = () =>{
    theme === 'light' ? setTheme('dark'):setTheme('light')
  }

  const api = import.meta.env.VITE_KEY_API_PEXELS
  console.log(api)

  return (
    <ThemeProvider theme={theme === 'light'? lightTheme:darkTheme}>
      <Screen>
        <NavBar themeToggler={themeToggler} theme={theme} />
        <Flex gap="2px">
          <Header/>
          <Stories/>
          <Publications/>
        </Flex>
      </Screen>
    </ThemeProvider>
  );
}

export default App;