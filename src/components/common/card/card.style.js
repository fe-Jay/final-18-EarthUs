import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { NO_IMAGE } from "../../../utils/config";

const Cards = styled.article`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap);
  max-width: 100%;
  overflow: hidden;
  .imgWrap {
    position: relative;
    max-width: 100%;
    aspect-ratio: 1/1;
    border-radius: 0.5rem;
    overflow: hidden;
    border: 1px solid var(--color-light);
    background: var(--color-bg);
    margin: 0;
    .swiper-pagination {
      .swiper-pagination-bullet {
        width: 1rem;
        height: 1rem;
        opacity: 0.5;
      }
      .swiper-pagination-bullet-active {
        opacity: 1;
        background: var(--color-primary);
      }
    }
  }
`;

const PostLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap);
  position: relative;
`;

const Imgs = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${props =>
    props.src === NO_IMAGE &&
    css`
      width: 50px;
      height: 45px;
      object-fit: contain;
    `};
`;

const Content = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-gray-46);
  margin: 24px 0;
  strong {
    display: block;
    font-size: var(--font-size-md);
    color: var(--color-gray-2);
    margin: 0 0 0.5rem;
  }
`;

const Reaction = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--size-gap);
  align-items: center;

  img {
    filter: invert(80%) sepia(0%) saturate(7467%) hue-rotate(168deg)
      brightness(89%) contrast(96%);
  }

  span {
    margin-left: 4px;
    font-size: var(--font-size-xs);
    color: var(--color-gray-76);
  }
`;

const Time = styled.p`
  font-size: var(--font-size-xs);
  color: var(--color-gray-76);
`;

const LayerIcon = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 10;
`;

export { Cards, PostLink, Imgs, Img, Content, Reaction, Time, LayerIcon };