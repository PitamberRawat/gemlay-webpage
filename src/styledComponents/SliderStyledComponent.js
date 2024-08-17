import styled from "styled-components";

export const SlideContainer = styled.div`
  display: inline-block;
  background-color: rgb(255, 255, 255);
  padding-bottom: 0px;
  border-radius: 20px;
  margin: 0 12px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 12px 0px;
  /* width: 100% !important; */
`;

export const InfoDiv = styled.div`
  padding-left: 9px;
  padding-right: 9px;
  padding-top: 4px;
  display: flex;
  justify-content: space-between;
`;
export const Img = styled.img`
  /* transition: "transform 5s ease-in-out"; */
  &:hover {
    transform: scale(1.2);
  }
`;
export const H1 = styled.h1`
  font-size: 20px;
  color: rgb(48, 47, 47);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0px;
`;

export const H4 = styled.h4`
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 13px;
  color: rgb(48, 47, 47);
  line-height: 18px;
  font-weight: 500;
  margin: 0px;
  padding: 4px 0px;
`;

export const BtnDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  gap: 10px;
  width: 20%;
`;

export const Button = styled.button`
  height: 16px;
  width: 16px;
  display: block;
  background: ${(props) => props.color};
  border-radius: 100px;
  position: relative;
  border: 0px;
  padding: 0px;
  cursor: pointer;

  &::before {
    content: "";
    width: 23px;
    height: 23px;
    border-radius: 100px;
    position: relative;
    border: 0px;
    padding: 0px;
  }
`;

export const BuyBtn = styled.button`
  cursor: pointer;
  width: 127px;
  height: 41px;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  color: rgb(255, 255, 255);
  letter-spacing: 1px;
  border: 0px;
  border-radius: 35px 0px 0px !important;
  background: linear-gradient(
    90deg,
    rgb(1, 36, 51) 7.87%,
    rgb(0, 122, 100) 100%
  ) !important;
`;
export const ViewSpan = styled.span`
  color: rgb(48, 47, 47);
  font-weight: 500;
  font-style: normal;
  line-height: 18px;
  font-size: 13px;
  white-space: nowrap;
  /* padding-left: "50px"; */
`;
