import {
  FooterLink,
  FooterStyle,
  H3,
  Thumb,
  UL,
  LI,
  A,
  FooterText,
} from "../styledComponents/FooterStyledComponent";
import { Container } from "../styledComponents/MiddleStyledComponent";

export default function Footer() {
  return (
    <>
      <FooterStyle>
        <Container>
          <footer style={{ display: "flex", gap: "15px" }}>
            <FooterLink>
              <H3>OUR SERVICES</H3>
              <div className="footerContent">
                <UL>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="https://www.gemlay.com/assets/footer/gold-rate.svg"
                        alt=""
                      />
                      <A href="/">GOLD RATE</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="https://www.gemlay.com/assets/footer/payment-method.svg"
                        alt=""
                      />
                      <A href="/">VARIOUS PAYMENT OPTIONS</A>
                    </Thumb>
                  </LI>
                </UL>
              </div>
            </FooterLink>
            <FooterLink>
              <H3>OUR POLICIES</H3>
              <div className="footerContent">
                <UL>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="https://www.gemlay.com/assets/footer/return.svg"
                        alt=""
                      />
                      <A href="/">30 DAYS RETURNS</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/shipping.svg"
                        alt=""
                      />
                      <A href="/">FREE SHIPPING</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/shipping.svg"
                        alt=""
                      />
                      <A href="/">LIFETIME EXCHANGE POLICY</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="https://www.gemlay.com/assets/footer/refund.svg"
                        alt=""
                      />
                      <A href="/">RETURN AND REFUND POLICY</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/gspLogo.svg"
                        alt=""
                      />
                      <A href="/">GSP TERMS AND CONDITIONS</A>
                    </Thumb>
                  </LI>
                </UL>
              </div>
            </FooterLink>
            <FooterLink>
              <H3>JEWELLERY KNOWLEDGE</H3>
              <div className="footerContent">
                <UL>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="https://www.gemlay.com/assets/footer/gold.svg"
                        alt=""
                      />
                      <A href="/">GOLD GUIDE</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/diamond.svg"
                        alt=""
                      />
                      <A href="/">DIAMOND GUIDE</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/JEWELLERY.svg"
                        alt=""
                      />
                      <A href="/">JEWELLERY GUIDE</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="https://www.gemlay.com/assets/footer/SOLITIARE-DIAMOND.svg"
                        alt=""
                      />
                      <A href="/">SOLITIARE DIAMOND GUIDE</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/GEMSTONE.svg"
                        alt=""
                      />
                      <A href="/">GEMSTONE GUIDE</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/CERTIFICATION.svg"
                        alt=""
                      />
                      <A href="/">CERTIFICATION GUIDE</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/JEWELLERY1.svg"
                        alt=""
                      />
                      <A href="/">JEWELLERY GIFTING</A>
                    </Thumb>
                  </LI>
                </UL>
              </div>
            </FooterLink>
            <FooterLink>
              <H3>ABOUT US</H3>
              <div className="footerContent">
                <UL>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="https://www.gemlay.com/assets/footer/vision.svg"
                        alt=""
                      />
                      <A href="/">OUR VISION</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/garnet.svg"
                        alt=""
                      />
                      <A href="/">WHY GEMLAY ?</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/story.svg"
                        alt=""
                      />
                      <A href="/">OUR STORY</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="https://www.gemlay.com/assets/footer/team.svg"
                        alt=""
                      />
                      <A href="/">OUR TEAM</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/review.svg"
                        alt=""
                      />
                      <A href="/">REVIEWS AND RATING</A>
                    </Thumb>
                  </LI>
                  <LI>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/press.svg"
                        alt=""
                      />
                      <A href="/">PRESS RELEASE</A>
                    </Thumb>
                  </LI>
                </UL>
              </div>
            </FooterLink>
            <FooterLink>
              <H3>GET IN TOUCH</H3>
              <div className="footerContent">
                <div
                  className="about-auto"
                  style={{
                    paddingTop: "10px",
                  }}
                >
                  <FooterText>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/whatsapp.svg"
                        alt=""
                      />
                      <A
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=9988898866"
                      >
                        99888-98866
                      </A>
                    </Thumb>
                  </FooterText>
                  <FooterText>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/email.svg"
                        alt=""
                      />
                      <A href="mailto: info@gemlay.com">info@gemlay.com</A>
                    </Thumb>
                  </FooterText>
                  <FooterText>
                    <Thumb>
                      <img
                        width="25"
                        height="22"
                        src="	https://www.gemlay.com/assets/footer/navigation.svg"
                        alt=""
                      />
                      <span style={{ marginLeft: "10px" }}>
                        Sco 15, Ground Floor, Jubilee Junction, Sector 66, Main
                        Mohali Airport Road.
                      </span>
                    </Thumb>
                  </FooterText>
                </div>
                <UL
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                    paddingBottom: "5px",
                  }}
                >
                  <LI
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      paddingBottom: "10px",
                      margin: "0",
                    }}
                  >
                    <img
                      width="30"
                      height="30"
                      src="	https://www.gemlay.com/assets/footer/fb.svg"
                      alt=""
                    />
                  </LI>
                  <LI
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      paddingBottom: "10px",
                      margin: "0",
                    }}
                  >
                    <img
                      width="30"
                      height="30"
                      src="	https://www.gemlay.com/assets/footer/insta.svg"
                      alt=""
                    />
                  </LI>
                  <LI
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      paddingBottom: "10px",
                      margin: "0",
                    }}
                  >
                    <img
                      width="30"
                      height="30"
                      src="	https://www.gemlay.com/assets/footer/youtube.svg"
                      alt=""
                    />
                  </LI>
                </UL>
                <div
                  style={{
                    color: "rgba(48, 47, 47, 0.7)",
                    fontSize: "12px",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                >
                  Download Our Application
                  <Thumb style={{ marginTop: "12px" }}>
                    <img
                      width="100"
                      style={{ borderRadius: "6px" }}
                      src="	https://www.gemlay.com/assets/footer/google-play.png"
                      alt=""
                    />
                    <img
                      width="100"
                      style={{ borderRadius: "6px" }}
                      src="	https://www.gemlay.com/assets/footer/apple-pay.png"
                      alt=""
                    />
                  </Thumb>
                </div>
              </div>
            </FooterLink>
          </footer>
          <UL
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              fontSize: "10px",
              color: "rgba(48, 47, 47, 0.7)",
              fontWeight: "600",
              lineHeight: "normal",
            }}
          >
            <LI>
              <a href="https://www.gemlay.com/sitemap.xml">SITE MAP</a>
            </LI>
            <LI>|</LI>
            <LI>
              <a href="https://www.gemlay.com/privacy-policy.xml">
                PRIVACY POLICY
              </a>
            </LI>
            <LI>|</LI>
            <LI>
              <a href="https://www.gemlay.com/terms-and-condition">
                TERMS AND CONDITION
              </a>
            </LI>
            <LI>|</LI>
            <LI>
              <a href="https://www.gemlay.com/faqs">FAQs</a>
            </LI>
          </UL>
        </Container>
      </FooterStyle>
    </>
  );
}
