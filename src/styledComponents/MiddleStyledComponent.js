import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0px auto;
  max-width: 1599px;
  width: auto;
  box-sizing: border-box;
`;
export const ProductContainer = styled.div`
  display: flex;
`;

export const ImgDiv = styled.div`
  width: 40%;
  position: relative;
  border: 1px solid rgb(239, 239, 239);
  padding: 20px;
`;
export const InfoDiv = styled.div`
  width: 60%;
  padding: 23px 40px 83px;
  border-radius: 5px;
  background: linear-gradient(
    rgba(241, 255, 253, 0.5) 60%,
    rgb(248, 248, 248) 100%
  );
  position: relative;
`;
export const H1 = styled.h1`
  color: rgba(0, 0, 0, 0.7);
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 1px;
  margin: 0px 0px 20px;
`;
export const WhislistCompare = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  line-height: 0;
`;

export const Price = styled.div`
  color: rgb(0, 100, 82);
  font-size: 18px;
  font-weight: 800;
  line-height: normal;
  padding-bottom: 10px;
`;

export const MRP = styled.div`
  color: rgb(0, 0, 0);
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 1px;
  padding-bottom: 15px;
`;
export const ShareIcon = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: url("https://www.gemlay.com/compare.svg") 0% 0% / 30px no-repeat;
`;

export const AttributeLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-weight: 500;
  color: rgb(44, 44, 44);
  padding-bottom: 15px;
`;

export const Strong = styled.strong`
  color: rgb(0, 0, 0);
  font-weight: bolder;
`;

export const ListItems = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* flex-direction: row; */
  gap: 12px;
  margin-bottom: 15px;
`;

export const Item = styled.li`
  list-style: none;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: rgb(44, 44, 44);
  padding: 5px;
`;

export const Button = styled.button`
  height: 22px;
  width: 22px;
  display: block;
  background: ${(props) => props.bgColor};
  border-radius: 100px;
  position: relative;
  border: 0px;
  padding: 0px;

  cursor: pointer;
`;
export const ButtonYellow = styled.button`
  height: 22px;
  width: 22px;
  display: block;
  background: yellow;
  border-radius: 100px;
  position: relative;
  border: 0px;

  cursor: pointer;
  padding: 0px;

  &::after {
    content: "";
    border: 1px solid yellow;
    width: 30px;
    height: 30px;
    position: absolute;
    border-radius: 100px;
    top: -4px;
    left: -4px;
  }
`;

export const Control = styled.div`
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  min-height: auto;
  position: relative;
  transition: 100ms;
  background-color: rgb(255, 255, 255);
  border-radius: 100px;
  box-shadow: none;
  box-sizing: border-box;
  border: 1px solid rgb(229, 229, 229);
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  height: 45px;
  outline: 0px !important;
  padding: 0 10px;
`;
export const InputDiv = styled.div`
  border: 1px solid rgb(229, 229, 229);
  height: 45px;
  width: 100%;
  border-radius: 100px;
  padding: 10px;
  font-size: 15px;
  font-weight: 700;
  color: rgb(44, 44, 44);
  letter-spacing: 3px;
`;
export const NotSurePara = styled.p`
  display: flex;
  justify-content: end;
  color: rgb(18, 86, 74);
  font-size: 9px;
  margin-right: 10px;
  font-weight: 700;
  padding-top: 5px;
  cursor: pointer;
`;

export const LocatePara = styled.p`
  color: rgb(1, 36, 51);
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 1px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin: 0px;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
`;

export const AddButton = styled.button`
  background: linear-gradient(rgb(1, 36, 51) 0%, rgb(0, 122, 100) 100%);
  width: 40%;
  height: 40px;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  letter-spacing: 1px;
  border: 0px;
  &:hover {
    background: linear-gradient(rgb(1, 1, 51) 0%, rgb(0, 112, 100) 100%);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: #07bc0c;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-left: 8px;
  animation: ${spin} 1s linear infinite;
`;

export const DetailWrapper = styled.div`
  background: linear-gradient(
    rgba(248, 248, 248, 0.59) 0%,
    rgba(248, 248, 248, 0.53) 100%
  );
  padding: 20px;
  margin: 10px 0px 15px;
  position: relative;
`;

export const StyleDiv = styled.div`
  width: 300px;
  background: rgb(255, 255, 255);
  height: 70px;
  position: absolute;
  top: -31px;
  clip-path: polygon(52% 39%, 100% 38%, 88% 100%, 12% 100%, 0% 38%);
`;

export const H3 = styled.h3`
  display: flex;
  gap: 10px;
  color: rgb(48, 47, 47);
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 1px;
`;

export const LiMid = styled.li`
  width: 33.333%;
  color: rgb(48, 47, 47);
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  display: flex;
  flex-flow: column;
  margin: 0px;
  border-right: 1px solid rgb(226, 226, 226);
  padding: 0px 25px;
`;

export const A = styled.a`
  color: rgb(1, 36, 51);
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;
export const H4 = styled.h4`
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
  margin: 0px;
`;
export const H5 = styled.h5`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0px;
  color: rgb(160, 157, 157);
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  border-radius: 10px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(242, 238, 238) 0px 0px 5px 0px;
  padding: 10px;
  text-align: center;
  height: 120px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const Span = styled.span`
  color: rgb(48, 47, 47);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 10px;
  display: block;
`;

export const TabContent = styled.div`
  background: linear-gradient(
    4.85deg,
    rgb(248, 248, 248) -22.69%,
    rgba(248, 248, 248, 0) 100.49%
  );
  border-width: 1px 0px;
  border-style: solid;
  border-color: rgb(248, 246, 246);
  padding: 35px 0px;
  text-align: justify;
`;

export const AccToggle = styled.div`
  display: flex;
  width: 150px;
  justify-content: center;
  padding: 5px 0px;
  border-bottom: 2px solid rgb(255, 255, 255);
`;
export const TabInfo = styled.div`
  color: rgb(48, 47, 47);
  font-size: 13px;
  font-weight: 500;
  line-height: 30px;
`;

export const TitleInfo = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const TitleH3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: rgb(48, 47, 47);
  position: relative;
  &::after {
    content: "";
    background: rgb(1, 36, 51);
    position: absolute;
    left: 50%;
    top: 14px;
    width: 350px;
    height: 2px;
    transform: translateX(-50%);
  }
`;

export const Title = styled.span`
  background: rgb(251, 251, 251);
  z-index: 1;
  position: relative;
  padding: 0px 20px;
`;
export const SubTitle = styled.span`
  font-size: 18px;
  color: rgb(160, 157, 157);
  letter-spacing: 1.2px;
`;

export const Discover = styled.span`
  font-size: 13px;
  color: rgb(1, 36, 51);
  letter-spacing: 1.2px;
  padding-right: 15px;
  position: relative;
  display: block;
  width: 130px;
  margin: 0px auto;

  &::after {
    content: "";
    width: 0px;
    height: 0px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid rgb(1, 36, 51);
    position: absolute;
    right: 0px;
    top: 4px;
  }
`;
