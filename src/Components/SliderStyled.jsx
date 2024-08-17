import {
  BtnDiv,
  Button,
  BuyBtn,
  H1,
  H4,
  Img,
  InfoDiv,
  SlideContainer,
  ViewSpan,
} from "../styledComponents/SliderStyledComponent";

const data = [
  {
    name: "Duo Star Diamond Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/CLR-704-GL/images/Duo-Star-Diamond-Ring_YB.jpg",
    price: "36,488",
  },
  {
    name: "Hanging Leaf Diamond Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/CLR-705-GL/images/Hanging-Leaf-Diamond-Ring_YD.jpg",
    price: "25,059",
  },
  {
    name: "Fi-Cut Diamond Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/CLR-706-GL/images/Fi-Cut-Diamond-Ring_YB.jpg",
    price: "27,125",
  },
  {
    name: "Two Ring Diamond Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/CLR-707-GL/images/Two-Ring-Diamond-Ring_YD.jpg",
    price: "22,960",
  },
  {
    name: "Love Heart Diamond Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/CLR-708-GL/images/Love-Heart-Diamond-Ring_YA.jpg",
    price: "28,048",
  },
  {
    name: "Flower Dot Diamond Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/CLR-710-GL/images/Flower-Dot-Diamond-Ring_YD.jpg",
    price: "22,474",
  },
  {
    name: "Emily Diamond Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/CLR-711-GL/images/Emily-Diamond-Ring_YA.jpg",
    price: "25,298",
  },
  {
    name: "Petal Flower Diamond Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/CLR-720-GL/images/Petal-Flower-Diuamond-Rngs_YB.jpg",
    price: "21,483",
  },
  {
    name: "Classy Diamond Band Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/LRB-1101-GL/images/Classy-Diamond-Band-Ring_YA.jpg",
    price: "22,417",
  },
  {
    name: "Scarlet Lotus Diamond  Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/CLR-701-GL/images/Scarlet-Lotus-Diamond-Ring_YA.jpg",
    price: "52,117",
  },
  {
    name: "Twin Butterfly Diamond  Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/CLR-702-GL/images/Twin-Butterfly-Diamond-Ring_YE.jpg",
    price: "32,457",
  },
  {
    name: "Tri Hanging Drop Diamond  Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/CLR-703-GL/images/Tri-Hanging-Drop-Diamond-Ring_YA.jpg",
    price: "44,239",
  },
  {
    name: "Shimmer Diamond Band Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/LRB-1103-GL/images/Shimmer-Diamond-Band-Ring_YA.jpg",
    price: "23,245",
  },
  {
    name: "Vivacious Diamond  Ring",
    url: "https://cdn.gemlay.com/media1/garnet/product/miniimages/rings/CLR-724-GL/images/Vivacious-Diamond-Ring_YA.jpg",
    price: "19,454",
  },
];

const SliderStyled = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
        }}
      >
        <div>
          {data.map((item, index) => (
            <SlideContainer key={index}>
              <Img height="230" width="230" src={item.url} alt={item.name} />
              <div
                style={{
                  display: "flex",
                  margin: "0 10px",
                  height: "91px",
                  marginTop: "20px",
                }}
              >
                <InfoDiv>
                  <div style={{ width: "80%" }}>
                    <H1>₹{item.price}</H1>
                    <H4>{item.name}</H4>
                  </div>
                </InfoDiv>
                <BtnDiv>
                  <Button color="yellow"></Button>
                  <Button color="grey"></Button>
                  <Button color="orange"></Button>
                </BtnDiv>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: " space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "5px",
                  }}
                >
                  <img
                    src="https://www.gemlay.com/img/card/viewSimilar.svg"
                    height="13"
                    width="14"
                  />
                  <ViewSpan>View Similar</ViewSpan>
                </div>
                <BuyBtn>Buy Now</BuyBtn>
              </div>
            </SlideContainer>
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderStyled;
