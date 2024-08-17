import {
  Anchor,
  HeaderContainer,
  HeaderContent,
  HeaderRight,
  HeaderStatic,
  Para,
  SearchBar,
} from "../styledComponents/HeaderStyledComponent";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <div style={{ width: "20%" }}>
            <a href="/">
              <img
                height="40"
                width="200"
                src="https://www.gemlay.com/assets/header/brand_logo.svg"
                alt=""
              />
            </a>
          </div>
          <div style={{ width: "30%" }}>
            <SearchBar>
              <div className="searchIcon">
                <img
                  style={{ margin: "4px 4px 0 0" }}
                  src="	https://www.gemlay.com/assets/header/searchIcon1.svg"
                  width="14"
                  height="14"
                  alt=""
                />
              </div>
              <input
                type="search"
                name="search"
                placeholder="Search Products..."
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  marginLeft: "2px",
                  letterSpacing: "1px",
                }}
              />
            </SearchBar>
          </div>

          <HeaderRight>
            <HeaderStatic>
              <Anchor>
                <img
                  src="https://www.gemlay.com/assets/header/gsp.svg"
                  alt=""
                />
              </Anchor>
              <Para>
                <Anchor>GSP</Anchor>
              </Para>
            </HeaderStatic>
            <HeaderStatic>
              <Anchor>
                <img
                  src="https://www.gemlay.com/assets/header/wishlist-svg.svg"
                  alt=""
                />
              </Anchor>
              <Para>
                <Anchor>WISHLIST</Anchor>
              </Para>
            </HeaderStatic>
            <HeaderStatic>
              <Anchor>
                <img
                  src="https://www.gemlay.com/assets/header/mini-cart.svg"
                  alt=""
                />
              </Anchor>
              <Para>
                <Anchor>CART</Anchor>
              </Para>
            </HeaderStatic>
            <HeaderStatic>
              <Anchor>
                <img src="https://www.gemlay.com/assets/header/qr.svg" alt="" />
              </Anchor>
              <Para>
                <Anchor>VERIFY REPORT</Anchor>
              </Para>
            </HeaderStatic>
          </HeaderRight>
          <div style={{ width: "15%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <img src="https://www.gemlay.com/profile/profile.svg" alt="" />
              <span
                style={{
                  marginLeft: "10px",
                  color: "#000",
                  fontFamily: "Avenir, sans-serif",
                  fontWeight: "500",
                }}
              >
                Sign In
              </span>
            </div>
          </div>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
