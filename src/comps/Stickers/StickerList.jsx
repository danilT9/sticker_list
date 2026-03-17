import { Sticker } from "./Sticker.jsx";
import { styled, createGlobalStyle } from "styled-components";
import { Component } from "react";
import { ChoiceInfo } from "../Choice/Choice.jsx";

export const GlobalStyles = createGlobalStyle`
  body {
    user-select: none;
  }
`

const StickerUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;
  list-style: none;
`
 
export class StickerList extends Component {
  state = {
    selected: null
  }
  
  render() {
    return (
    <section>
        {this.state.selected && <ChoiceInfo data={this.state.selected} />}
      <div>
        <StickerUl>
          {this.props.stickers.map((d) => (
            <Sticker {...d} onSelect={() => this.setState({ selected: d })}></Sticker>
          ))}
        </StickerUl>
      </div>
    </section>
    );
  }
}