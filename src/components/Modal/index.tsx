import React from "react";
import { Container, Background } from "./styles";

type Props = {
  isOpenModal: boolean;
  children: any;
  setOpenModal: any;
};

export default function Modal({ isOpenModal, children, setOpenModal }: Props) {
  return isOpenModal ? (
    <Background>
      <Container data-testid="modal">{children}</Container>
    </Background>
  ) : (
    <p style={{ display: "none" }} data-testid="hidden-modal"></p>
  );
}
