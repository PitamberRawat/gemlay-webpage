import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: rgba(0, 213, 172, 0.03);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 1px 0px;
  z-index: 12;
  position: relative;
  padding: 18px 0px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const SearchBar = styled.div`
  border: 2px solid rgb(0, 122, 100);
  border-radius: 16px;
  padding: 10px;
  display: flex;
  &:hover {
    background-color: #ccc;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 35%;
`;

export const HeaderStatic = styled.div`
  padding: 0px 7px;
  width: 16%;
  border-right: 1px solid rgb(239, 239, 239);
  display: flex;
  flex-flow: column;
  gap: 8px;
  align-items: center;
`;
export const Para = styled.p`
  color: rgb(0, 0, 0);
  font-size: 11px;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
export const Anchor = styled.a`
  color: rgb(0, 0, 0);
  font-size: 11px;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
