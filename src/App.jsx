import { useState,useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import { Flex, Screen, Typography } from "./style";
import { NavBar } from "./components/navbar";
import Header from "./components/header";
import { Stories } from "./components/stories";
import Publications from "./components/publications";
import { getPhotos } from "./services/photos";

function App() {

  const PHOTOS_POR_PAGE = 20

  const [theme,setTheme] = useState('dark')
  const [photos,setPhotos] = useState([])
  const [isLoading,setIsLoading] = useState(false);
  const [photosPorPage,setPhotosPorPage] = useState(PHOTOS_POR_PAGE);

  const releaseLoading = () => setIsLoading(false);

  const themeToggler = () =>{
    theme === 'light' ? setTheme('dark'):setTheme('light')
  }

  async function fetchPhotos(){
    
    const data = await getPhotos(PHOTOS_POR_PAGE,releaseLoading);
    setPhotos(data);

  }

  console.log(photos)

  useEffect(()=>{
    fetchPhotos();
  },[])

  // const api = import.meta.env.VITE_KEY_API_PEXELS
  // console.log(api)

  return (
    <ThemeProvider theme={theme === 'light'? lightTheme:darkTheme}>
      <Screen>
        <NavBar themeToggler={themeToggler} theme={theme} />
        <Flex gap="2px">
          <Header/>
          <Stories photos={photos}/>
          <Publications photos={photos}/>
        </Flex>
      </Screen>
    </ThemeProvider>
  );
}

export default App;