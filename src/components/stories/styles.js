import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  overflow-x: scroll;
  padding: 8px 12px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.textPrimary};
    border-radius: 20px;
  }

`;

export const Profile = styled.div`
  position: relative;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: radial-gradient(
      circle farthest-corner at 35% 90%,
      #fec564,
      transparent 50%
    ),
    radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
    radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),
    radial-gradient(
      ellipse farthest-corner at 20% -50%,
      #5258cf,
      transparent 50%
    ),
    radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),
    radial-gradient(
      ellipse farthest-corner at 60% -20%,
      #893dc2,
      transparent 50%
    ),
    radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),
    linear-gradient(
      #6559ca,
      #bc318f 30%,
      #e33f5f 50%,
      #f77638 70%,
      #fec66d 100%
    );

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;
