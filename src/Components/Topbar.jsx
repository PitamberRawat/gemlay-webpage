import {
  HeaderContainer,
  Container,
  TopHeaderInner,
  TopHeaderRight,
  TopHeaderText,
  Pincode,
} from "../styledComponents/TopbarStyledComponent";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Container>
          <TopHeaderInner>
            <TopHeaderText>Gemaly By Garnet Lanee</TopHeaderText>
            <TopHeaderRight>
              <Pincode>Pincode</Pincode>
              <img
                style={{ padding: "0 10px " }}
                src="	https://www.gemlay.com/assets/header/pinCodeModalIcon.svg"
              />
              <img src="	https://www.gemlay.com/assets/header/flag.svg" />
            </TopHeaderRight>
          </TopHeaderInner>
        </Container>
      </HeaderContainer>
    </>
  );
}
