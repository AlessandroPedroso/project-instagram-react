import { Typography } from "../../style";
import InfoProfile from "../InfoProfile";

import * as C from "./styles";
export default function Publications({photos}) {
  return (
    <C.Container>
      <Typography>Publicações</Typography>
      <C.ContainerPublication>
      {photos.map((item, index) => (
          <C.Content key={index}>
            <C.PublicationImage
              
              src={item.src.medium}
              alt="imagem perfil github"
            />
            <InfoProfile name={item?.photographer} photo={item?.src?.small} link={item?.photographer_url}/>
          </C.Content>
        ))}
        {/* {Array.from(Array(20)).map((item, index) => (
          <C.Content key={index}>
            <C.PublicationImage
              
              src="https://avatars.githubusercontent.com/u/111211679?v=4"
              alt="imagem perfil github"
            />
            <InfoProfile/>
          </C.Content>
        ))} */}
      </C.ContainerPublication>
    </C.Container>
  );
}
