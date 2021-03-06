import styled from 'styled-components';
import { symbols } from '../../themes/symbols';

export const Title = styled.h1`
  font-size: ${symbols.font.size._20};
  font-family: ${symbols.font.family.lato};
  font-weight: ${symbols.font.weight.semiBold};
  line-height: ${symbols.font.lineHeight._32};
  margin: 0;
`;

export const Caption = styled.p`
  color: ${symbols.font.colors.primary};
  font-size: ${symbols.font.size._12};
  font-family: ${symbols.font.family.lato};
  font-weight: ${symbols.font.weight.regular};
  margin: 0;
`;

export const Small = styled.p`
  color: ${symbols.font.colors.primary};
  font-size: ${symbols.font.size._10};
  font-family: ${symbols.font.family.lato};
  font-weight: ${symbols.font.weight.regular};
  margin: 0;
`;

export const SmallBold = styled.p`
  color: ${symbols.font.colors.primary};
  font-size: ${symbols.font.size._10};
  font-family: ${symbols.font.family.lato};
  font-weight: ${symbols.font.weight.bold};
  margin: 0;
`;
