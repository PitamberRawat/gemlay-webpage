import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: linear-gradient(90deg, rgb(1, 36, 51) 0%, rgb(0, 122, 100) 100%);
  padding: 5px 0px;
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0px auto;
  max-width: 1599px;
  width: auto;
  box-sizing: border-box;
`;
export const TopHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopHeaderText = styled.span`
  font-size: 13px;
  text-align: center;
  width: 100%;
  color: rgb(255, 255, 255);
  transition: opacity 1s ease-in-out;
`;

export const TopHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Pincode = styled.p`
  color: white;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
`;

export const FixedIcon = styled.div`
  /* background: transparent; */
  /* display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; */
`;

export const Img = styled.img`
  position: fixed;
  bottom: 10px;
  right: 10px;
  /* width: 70px;
  height: 70px; */
  /* border-radius: 20%; */
  /* width: 10%;
  height: 10%; */
  object-fit: contain;
`;
