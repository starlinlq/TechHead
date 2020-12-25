import React from "react";
import {
  Item,
  Section,
  ProductImg,
  Title,
  Price,
  Content,
  Button,
} from "./related.elements";

const Related = ({ product, addToCart }) => {
  return (
    <Item>
      <Section>
        <ProductImg src={product.media.source} alt={product.name} />
      </Section>
      <Content>
        <Title to={`/display/${product.id}`}>{product.name}</Title>
        <Price>{product.price.formatted_with_symbol}</Price>
      </Content>
      <Button onClick={() => addToCart(product.id, 1)}>Add To Cart</Button>
    </Item>
  );
};

export default Related;
