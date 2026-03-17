import { Component } from "react";
import { styled } from "styled-components";

const ChoiceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ChoiceButton = styled.button`
    display: flex;
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

export class ChoiceInfo extends Component {
  render() {
    const { img, label } = this.props.data;
    return (
      <ChoiceContainer>
        <ChoiceButton>
          <img src={img} alt={label} />
          <h2>{label}</h2>
        </ChoiceButton>
      </ChoiceContainer>
    );
  }
}