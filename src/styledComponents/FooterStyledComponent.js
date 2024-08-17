import styled from "styled-components";

export const FooterStyle = styled.footer`
  padding: 40px 0px 30px;
  border-radius: 5px;
  background: rgba(234, 255, 251, 0.53);
`;

export const FooterLink = styled.div`
  width: 20%;
  padding: 0px 20px;
  position: relative;
  &::after {
    content: "";
    height: 80%;
    background: rgb(217, 217, 217);
    width: 1px;
    position: absolute;
    right: 0px;
    top: 0px;
  }
`;
export const H3 = styled.h3`
  color: rgb(1, 36, 51);
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
  margin: 0px;
`;

export const UL = styled.ul`
  margin: 0;
  padding: 20px 0 0;
`;

export const Thumb = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const LI = styled.li`
  padding-bottom: 10px;
  margin: 0px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const A = styled.a`
  font-size: 10px;
  color: rgba(48, 47, 47, 0.7);
  font-weight: 600;
  line-height: normal;
  margin-left: 10px;
`;

export const FooterText = styled.div`
  font-size: 12px;
  color: rgba(48, 47, 47, 0.7);
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  padding-bottom: 20px;
  padding-left: 30px;
`;
