import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  padding-top: 28px;
  text-align: center;
  font-family: "Montserrat";
`;

export const Logo = styled.img`
  position: absolute;
  top: 28px;
  left: 28px;
`;

export const CardImg = styled.img`
  display: block;
  width: 308px;
  height: 168px;

  margin-left: auto;
  margin-right: auto;
`;

export const DecorateLines = styled.div`
  position: relative;

  ::before,
  ::after {
    content: "";

    display: block;
    position: absolute;
    top: 36px;

    width: 150px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
  ::before {
    left: 0;
  }
  ::after {
    right: 0;
  }
`;

export const Avatar = styled.img`
  display: block;
  width: 62px;
  height: 62px;

  border-radius: 50%;
`;

export const AvatarContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  overflow: hidden;

  margin-left: auto;
  margin-right: auto;

  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const StyledTextCard = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const StyledButton = styled.button`
  width: 196px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
export const StyledBtnText = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
`;
