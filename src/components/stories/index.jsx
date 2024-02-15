import { Button, Flex, Typography } from "../../style/index";
import * as C from "./styles";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const Stories = () => {
  const [showAll, setShowAll] = useState(false);

  const numberArray = showAll ? 20 : 8;

  function handleShowAll() {
    setShowAll(!showAll);
  }

  return (
    <Flex padding="8px 20px" align="start" gap="4px">
      <Typography weigh="400" size="18px" height="21px">
        Stories
      </Typography>
      <Flex align="end">
        <Button onClick={() => handleShowAll()}>
          <Typography size="14px">
            {showAll ? "Ver menos" : "Ver mais"}
          </Typography>
        </Button>
      </Flex>

      <C.Container>
          {Array.from(Array(numberArray)).map((item, index) => (
            
              <C.Profile key={index}>
                <img
                  src="https://avatars.githubusercontent.com/u/111211679?v=4"
                  alt="imagem perfil github"
                />
              </C.Profile>
        
          ))}
      </C.Container>


    </Flex>
  );
};
