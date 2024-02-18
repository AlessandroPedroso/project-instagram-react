import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Flex, Typography } from "../../style";
import * as C from "./styles";
import { randomNumbers } from "../../utils/randomNumbers";

export default function InfoProfile({name,photo,link}) {
  return (
    <Flex direction="row" align="center" justify="spacer-between">
      <C.Container>
        <C.Link href={link} target="_blank" >
          <C.ProfileImage
            src={photo}
            alt="imagem perfil github"
          />
          <Typography weigh="300" size="13px" height="15px">
            {name}
          </Typography>
        </C.Link>
      </C.Container>

      <C.Container>
        <AiFillHeart color="red" />
        <Typography weigh="300" size="13px" height="15px">
          {randomNumbers()}
        </Typography>

        <FaRegComment />
        <Typography weigh="300" size="13px" height="15px">
          {randomNumbers()}
        </Typography>
      </C.Container>
    </Flex>
  );
}
