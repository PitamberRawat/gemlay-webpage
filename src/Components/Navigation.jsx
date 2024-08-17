import {
  MenuContainer,
  MenuLevel,
  NavigationMenu,
} from "../styledComponents/NavigationStyledcomponent";

export default function Navigation() {
  return (
    <>
      <NavigationMenu>
        <MenuContainer>
          <MenuLevel>
            <a href="/">NEW ARIVALS</a>
          </MenuLevel>
          <MenuLevel>
            <a href="/">RINGS</a>
          </MenuLevel>
          <MenuLevel>
            <a href="/">EARRINGS</a>
          </MenuLevel>
          <MenuLevel>
            <a href="/">PENDANTS</a>
          </MenuLevel>
          <MenuLevel>
            <a href="/">BRACELETS & BANGLES</a>
          </MenuLevel>
          <MenuLevel>
            <a href="/">GOLD COINS</a>
          </MenuLevel>
          <MenuLevel>
            <a href="/">ALL JEWELLERY</a>
          </MenuLevel>
        </MenuContainer>
      </NavigationMenu>
    </>
  );
}
