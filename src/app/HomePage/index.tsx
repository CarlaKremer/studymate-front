import React from "react";
import { Container, GridContainer } from "./styles";
import Topbar from "@/components/Topbar";
import RoomCard from "@/components/RoomCard";

export default function HomePage() {
  return (
    <Container>
      <Topbar/>
      <GridContainer>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
      </GridContainer>
    </Container>
  );
}
