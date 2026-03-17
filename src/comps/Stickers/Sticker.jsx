import { styled } from "styled-components";
import { Component } from "react";
import { GetInfo } from "../Choice/Choice";

const StickerItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 10px;
  border: 1px solid black;
  transition: all 0.3s ease;
  &:hover {
      transform: scale(1.02)
  }
  &:active {
      background-color: rgba(205, 205, 205, 0.5);
  }
`

export class Sticker extends Component {
  render() {
    const { img, label, onSelect } = this.props;
    return (
      <li>
        <StickerItem onClick={onSelect}>
          <img src={img} alt={label} />
          <h2>{label}</h2>
        </StickerItem>
      </li>
    );
  }
}