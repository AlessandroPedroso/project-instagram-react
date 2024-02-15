import { Typography } from "../../style";
import InfoProfile from "../InfoProfile";

import * as C from "./styles";
export default function Publications() {
  return (
    <C.Container>
      <Typography>Publicações</Typography>
      <C.ContainerPublication>
        {Array.from(Array(20)).map((item, index) => (
          <C.Content key={index}>
            <C.PublicationImage
              
              src="https://avatars.githubusercontent.com/u/111211679?v=4"
              alt="imagem perfil github"
            />
            <InfoProfile/>
          </C.Content>
        ))}
      </C.ContainerPublication>
    </C.Container>
  );
}
