import { AiOutlineHome } from "react-icons/ai";
import { RiGlobalLine } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { BiExit,BiMoon } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { MdMonitor } from "react-icons/md";
import { BsGear } from "react-icons/bs";


import { Flex, Spacer, Typography } from "../../style";
import * as C from "./style";
import LogoInstagram from "../../assets/instagram-logo.svg";

const menuNAV = [
  {
    icon: <AiOutlineHome />,
    menuName: "Inicio",
  },
  {
    icon: <RiGlobalLine />,
    menuName: "Explorer",
  },
  ,
  {
    icon: <FiSend />,
    menuName: "Direct",
  },
  ,
  {
    icon: <MdMonitor />,
    menuName: "IGTV",
  },
  ,
  {
    icon: <BsGear />,
    menuName: "Ajustes",
  },
];

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

      <Spacer />

      <Flex align="start" gap="16px">
        {menuNAV.map((menu, index) => (
          <C.ListIcon key={index}>
            {menu.icon}
            <Typography>{menu.menuName}</Typography>
          </C.ListIcon>
        ))}
      </Flex>

      <Spacer />
      <C.Divider />
      <Spacer margin="8px" />
      <Flex align="start" gap="16px">
        <C.ListIcon>
            <BiExit/>
          <Typography>Sair</Typography>
        </C.ListIcon>
      </Flex>
    </C.Container>
  );
}
