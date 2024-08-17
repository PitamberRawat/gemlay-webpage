import { UL, LI } from "../styledComponents/FooterStyledComponent";
import {
  Container,
  H1,
  ImgDiv,
  InfoDiv,
  ShareIcon,
  WhislistCompare,
  Price,
  MRP,
  AttributeLevel,
  ListItems,
  Item,
  Button,
  ButtonYellow,
  NotSurePara,
  Control,
  InputDiv,
  LocatePara,
  ButtonDiv,
  AddButton,
  Spinner,
  DetailWrapper,
  StyleDiv,
  H3,
  LiMid,
  H4,
  ProductInfo,
  Span,
  A,
  TabContent,
  AccToggle,
  H5,
  TabInfo,
  TitleInfo,
  SubTitle,
  Title,
  TitleH3,
  Discover,
} from "../styledComponents/MiddleStyledComponent";
import SliderStyled from "./SliderStyled";

export default function MiddleSection() {
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
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
                <a href="/">Home</a>
              </LI>
              <LI>
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="1em"
                  role="presentation"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="1em"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </LI>
              <LI>
                <a href="https://www.gemlay.com/jewellery/rings">Products</a>
              </LI>
              <LI>
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="1em"
                  role="presentation"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="1em"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </LI>
              <LI>
                <a href="https://www.gemlay.com/jewellery/rings">Rings</a>
              </LI>
              <LI>
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="1em"
                  role="presentation"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="1em"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </LI>
              <LI>
                <a style={{ color: "#bdc6d0" }} target="_blank" href="">
                  Chavvi Diamond Ring
                </a>
              </LI>
            </UL>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <ImgDiv>
              <img
                height="425"
                width="425"
                src="https://cdn.gemlay.com/media1/garnet/product/images/rings/LR-2152-GL/images/Chavvi-Diamond-Ring_YA.jpg"
                alt=""
              />
            </ImgDiv>
            <InfoDiv>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <H1>Chavvi Diamond Ring</H1>
                <WhislistCompare>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="25"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    ></path>
                  </svg>
                  <ShareIcon></ShareIcon>
                </WhislistCompare>
              </div>
              <Price>₹29,290</Price>
              <MRP>MRP (Inclusive all Taxes)</MRP>
              <div
                className="exchange"
                style={{ display: "flex", gap: "60px" }}
              >
                <div
                  style={{
                    width: "60%",
                    borderTop: " 1px solid rgb(209, 207, 207)",
                    paddingTop: "15px",
                  }}
                >
                  <div>
                    <div>
                      <AttributeLevel>
                        <strong>Karat :</strong> 18K
                      </AttributeLevel>
                      <ListItems>
                        <Item>14K</Item>
                        <Item
                          style={{
                            border: "1px solid rgb(1, 36, 51)",
                            color: "rgb(1, 36, 51)",
                          }}
                        >
                          18K
                        </Item>
                      </ListItems>
                    </div>
                    <div>
                      <AttributeLevel>
                        <strong>Diamond Origin :</strong> Natural
                      </AttributeLevel>
                      <ListItems>
                        <Item
                          style={{
                            border: "1px solid rgb(1, 36, 51)",
                            color: "rgb(1, 36, 51)",
                            width: "90px",
                          }}
                        >
                          Natural
                        </Item>
                      </ListItems>
                    </div>
                    <div>
                      <AttributeLevel>
                        <strong>Diamond Quality :</strong> IJ-SI
                      </AttributeLevel>
                      <ListItems>
                        <Item
                          style={{
                            border: "1px solid rgb(1, 36, 51)",
                            color: "rgb(1, 36, 51)",
                            width: "90px",
                          }}
                        >
                          IJ-SI
                        </Item>
                        <Item style={{ width: "90px" }}>GH-VS/SI</Item>
                        <Item style={{ width: "90px" }}>GH-VVS</Item>
                        <Item style={{ width: "90px" }}>EF-VVS</Item>
                      </ListItems>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "40%",
                  }}
                >
                  <div>
                    <div className="related_filter">
                      <AttributeLevel>
                        <strong>Metal :</strong> Yellow Gold
                      </AttributeLevel>
                      <ListItems className="color-btn">
                        <li style={{ listStyle: "none" }}>
                          <ButtonYellow></ButtonYellow>
                        </li>
                        <li style={{ listStyle: "none" }}>
                          <Button $bgColor="grey"></Button>
                        </li>
                        <li style={{ listStyle: "none" }}>
                          <Button $bgColor="orange"></Button>
                        </li>
                      </ListItems>
                    </div>
                    <div className="related_filter">
                      <AttributeLevel>
                        <strong>Size :</strong> 12
                      </AttributeLevel>
                      <div style={{ marginBottom: "15px" }}>
                        <div className=" css-b62m3t-container">
                          <Control>
                            <div
                              style={{
                                color: "rgb(44,44,44)",
                                fontWeight: "500",
                              }}
                            >
                              12
                            </div>
                            <svg
                              height="20"
                              width="20"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                            </svg>
                          </Control>
                        </div>
                        <NotSurePara className="ring-size-req">
                          Not Sure about Ring Size ?
                        </NotSurePara>
                      </div>
                    </div>
                    <div className="related_filter">
                      <AttributeLevel>
                        <strong>Delivery &amp; Store Details</strong>
                      </AttributeLevel>
                      <div
                        style={{
                          display: "flex",
                          flexFlow: "column",
                          gap: "10px",
                        }}
                      >
                        <InputDiv
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            position: "relative",
                          }}
                        >
                          <input
                            type="numeric"
                            maxlength="6"
                            className="input-text"
                            name="pincode"
                            placeholder="Enter Pincode"
                            value=""
                            style={{
                              outline: "none",
                              border: "none",
                              color: "rgb(44,44,44)",
                              fontWeight: "600",
                            }}
                          />
                          <img
                            alt="location"
                            width="25"
                            height="25"
                            src="https://gemlay.com/locate-me.svg"
                            style={{ color: "transparent" }}
                          />
                        </InputDiv>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            paddingBottom: "15px",
                          }}
                        >
                          <LocatePara role="button">Locate Me</LocatePara>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ButtonDiv className="sc-49119926-9 iHXFAG">
                <AddButton style={{ borderRadius: "0 50px 0 0" }} type="button">
                  ADD TO WISHLIST
                </AddButton>
                <AddButton
                  style={{
                    display: "flex",
                    justifyContent: "center",

                    alignItems: "center",
                    borderRadius: "50px 0 0 0",
                  }}
                  type="button"
                >
                  Checking Availability
                  <Spinner></Spinner>
                </AddButton>
              </ButtonDiv>
            </InfoDiv>
          </div>
        </div>
      </Container>
      <Container>
        <div>
          <DetailWrapper>
            <StyleDiv />
            <H3
              style={{
                position: "absolute",
                top: "10px",
                left: "65px",
                textTransform: "uppercase",
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H14V12.375C14 12.806 13.8288 13.2193 13.524 13.524C13.2193 13.8288 12.806 14 12.375 14H2.625C2.19402 14 1.7807 13.8288 1.47595 13.524C1.1712 13.2193 1 12.806 1 12.375V1Z"
                  stroke="#007A64"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7.5 4.24927H7.50813V4.25739H7.5V4.24927Z"
                  stroke="#007A64"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7.5 7.49927V10.7493"
                  stroke="#007A64"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              Product information
            </H3>
            <div
              style={{ display: "flex", margin: "60px 0 15px", gap: "30px" }}
            >
              <ul
                style={{
                  margin: "0",
                  display: "flex",
                  width: "55%",
                  listStyle: "none",
                }}
              >
                <LiMid>
                  <H4>Dimension</H4>
                  <span>Width - 7.4 mm</span>
                  <span>Height - 5 mm</span>
                  <span>Size - 12 (51.8 mm)</span>
                </LiMid>
                <LiMid>
                  <H4>Weight</H4>
                  <span>Approx.Weight - 2.464 Gm</span>
                  <strong>Purity</strong>
                  <span>Purity - 18kt</span>
                  <strong>Product Id</strong>
                  <span>PRD-LR-2152-GL-2024-863</span>
                </LiMid>
                <LiMid style={{ borderRight: "0px" }}>
                  <H4>Diamonds &amp; Gemstones</H4>
                  <span>Diamond Type - IJ-SI</span>
                  <div className="diamond-details">
                    <span>Total Diamonds - 7</span>
                  </div>
                  <div className="diamond-details">
                    <span>Total Weight - 0.155 ct</span>
                    <span></span>
                  </div>
                </LiMid>
              </ul>
              <ul
                style={{
                  margin: "0",
                  display: "flex",
                  width: "45%",
                  listStyle: "none",
                }}
              >
                <li style={{ margin: 0, width: "25%", padding: "12px" }}>
                  <ProductInfo>
                    <div style={{ height: "40px", marginBottom: "5px" }}>
                      <img
                        alt="30 Days Return"
                        width="42"
                        height="36"
                        src="https://www.gemlay.com/cash-on-delivery.svg"
                      />
                    </div>
                    <Span>Cash on Delivery</Span>
                  </ProductInfo>
                </li>
                <li style={{ margin: 0, width: "25%", padding: "12px" }}>
                  <ProductInfo>
                    <div style={{ height: "40px", marginBottom: "5px" }}>
                      <img
                        alt="30 Days Return"
                        width="42"
                        height="36"
                        src="https://www.gemlay.com/return.svg"
                      />
                    </div>
                    <Span>30 Days Return</Span>
                  </ProductInfo>
                </li>
                <li style={{ margin: 0, width: "25%", padding: "12px" }}>
                  <ProductInfo>
                    <div style={{ height: "40px", marginBottom: "5px" }}>
                      <img
                        alt="30 Days Return"
                        width="42"
                        height="36"
                        src="https://www.gemlay.com/exchange.svg"
                      />
                    </div>
                    <Span>Lifetime Exchange</Span>
                  </ProductInfo>
                </li>
                <li style={{ margin: 0, width: "25%", padding: "12px" }}>
                  <ProductInfo>
                    <div style={{ height: "40px", marginBottom: "5px" }}>
                      <img
                        alt="30 Days Return"
                        width="42"
                        height="36"
                        src="https://www.gemlay.com/bis.svg"
                      />
                    </div>
                    <Span>BIS Hallmark</Span>
                  </ProductInfo>
                </li>
              </ul>
            </div>
          </DetailWrapper>
        </div>
        <div style={{ padding: "20px 35px" }}>
          <H3 style={{ fontSize: "13px" }}>
            PRICE BREAKUP
            <A>show more</A>
          </H3>
        </div>
      </Container>
      <div style={{ paddingTop: "50px", borderRadius: "5px" }}>
        <Container>
          <div
            className="tabs"
            style={{ display: "flex", alignItems: "center", gap: "30px" }}
          >
            <AccToggle style={{ borderBottom: "2px solid rgb(1,36,51)" }}>
              <H5 style={{ color: "rgb(1,36,51" }}>
                <img
                  alt=""
                  width="17"
                  height="17"
                  src="https://www.gemlay.com/BisHallmark.svg"
                />{" "}
                BIS Hallmark
              </H5>
            </AccToggle>
            <AccToggle>
              <H5>
                <img
                  alt=""
                  width="17"
                  height="17"
                  src="https://www.gemlay.com/igi.svg"
                />{" "}
                IGI
              </H5>
            </AccToggle>
            <AccToggle>
              <H5>
                <img
                  alt=""
                  width="17"
                  height="17"
                  src="https://www.gemlay.com/sgl.svg"
                />{" "}
                SGL
              </H5>
            </AccToggle>
          </div>
        </Container>
        <TabContent>
          <Container>
            <TabInfo>
              Hallmark Unique Identification (HUID) is a revolutionary system
              designed to provide unparalleled authenticity and traceability for
              products. Each item is assigned a unique identifier, encoded with
              encrypted data and embedded within the hallmark. This identifier
              serves as a digital fingerprint, allowing for seamless
              verification of authenticity and origin throughout the supply
              chain and beyond.
            </TabInfo>
          </Container>
        </TabContent>
      </div>
      <div
        style={{
          padding: "50px 0px",
          background:
            "linear-gradient(rgba(248, 248, 248, 0.59) 0%, rgba(248, 248, 248, 0.53) 100%)",
          marginBottom: "5px",
        }}
      >
        <Container>
          <div
            style={{
              display: "inline-block",
              width: "100%",
              height: "60px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "-46px",
              }}
            >
              <TitleInfo>
                <TitleH3>
                  <Title>SIMILAR PRODUCTS</Title>
                </TitleH3>
                <SubTitle>SAME BUT DIFFERENT</SubTitle>
              </TitleInfo>
            </div>
          </div>

          <SliderStyled />

          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: "50px",
            }}
          >
            <a
              style={{
                position: "relative",
              }}
              href="https://www.gemlay.com/jewellery"
            >
              <div
                style={{
                  width: "250px",
                  clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                  background: "rgb(255, 255, 255)",
                  height: "35px",
                }}
              ></div>
              <TitleInfo style={{ top: "11px" }}>
                <Discover>DISCOVER ALL</Discover>
              </TitleInfo>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
