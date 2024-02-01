import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { Flex, Spacer, Typography } from "../../style";
import * as C from "./style";
import LogoInstagram from "../../assets/instagram-logo.svg";



export function NavBar({ themeToggler, theme }) {
    
    function GroupText({ titile, subtitle }) {
        return (
          <Flex gap="4px">
            <Typography>{titile}</Typography>
            <Typography weight="300" size="12px" height="14px">
              {subtitle}
            </Typography>
          </Flex>
        );
      }

  return (
    <C.Container>
      <Flex>
        <C.BtnTheme onClick={themeToggler}>
          {theme === "light" ? <BiMoon /> : <BsSun />}
        </C.BtnTheme>
      </Flex>
      <img src={LogoInstagram} alt="logo-instagram" />

      <Flex>
        <C.Profile>
          <img
            src="https://avatars.githubusercontent.com/u/111211679?v=4"
            alt="imagem perfil github"
          />
        </C.Profile>

        <GroupText titile="Alessandro Pedroso" subtitle="@alessandrospedroso" />
      </Flex>

      <Spacer margin="8px" />
      <Flex direction="row" justify="space-between">
        <GroupText titile="148" subtitle="Publicações" />
        <GroupText titile="15K" subtitle="Publicações" />
        <GroupText titile="1K" subtitle="Publicações" />
      </Flex>
    </C.Container>
  );
}
