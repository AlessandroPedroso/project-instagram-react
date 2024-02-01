import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import { Flex, Screen, Typography } from "./style";
import { NavBar } from "./components/navbar";

function App() {

  const [theme,setTheme] = useState('dark')

  const themeToggler = () =>{
    theme === 'light' ? setTheme('dark'):setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light'? lightTheme:darkTheme}>
      <Screen>
        <NavBar themeToggler={themeToggler} theme={theme} />
      </Screen>
    </ThemeProvider>
  );
}

export default App;
