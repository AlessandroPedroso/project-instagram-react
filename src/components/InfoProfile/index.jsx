import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Flex, Typography } from "../../style";
import * as C from "./styles";

export default function InfoProfile() {
  return (
    <Flex direction="row" align="center" justify="spacer-between">
      <C.Container>
        <C.Link>
          <C.ProfileImage
            src="https://avatars.githubusercontent.com/u/111211679?v=4"
            alt="imagem perfil github"
          />
          <Typography weigh="300" size="13px" height="15px">
            Alessandro
          </Typography>
        </C.Link>
      </C.Container>

      <C.Container>
        <AiFillHeart color="red" />
        <Typography weigh="300" size="13px" height="15px">
          1234
        </Typography>

        <FaRegComment />
        <Typography weigh="300" size="13px" height="15px">
          52
        </Typography>
      </C.Container>
    </Flex>
  );
}
