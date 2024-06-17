import React, { useState } from "react";
import styled from "styled-components";
import { sinners } from "../utils/Constants.js";

export const Tabs = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const CategoryContainer = styled.div`
    display: flex;
    flexwrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
  `;

  const SinnerList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
  `;

  const Button = styled.button`
    padding: 8px;
    background-color: ${(props) => (props.selected ? "blue" : "gray")};
    color: white;
    border-radius: 5px;
    cursor: pointer;
  `;

  const [category, setCategory] = useState("identity");
  const [selectedSinners, setSelectedSinners] = useState([]);

  const toggleCategory = (category) => {
    setCategory(category);
  };

  const toggleSinner = (currentSinner) => {
    if (selectedSinners.includes(currentSinner)) {
      setSelectedSinners(
        selectedSinners.filter((sinner) => sinner !== currentSinner)
      );
    } else {
      setSelectedSinners([...selectedSinners, currentSinner]);
    }
  };

  return (
    <Container>
      <CategoryContainer>
        <Button
          selected={category === "identity"}
          onClick={() => toggleCategory("identity")}
        >
          Identities
        </Button>
        <Button
          selected={category === "ego"}
          onClick={() => toggleCategory("ego")}
        >
          Egos
        </Button>
      </CategoryContainer>

      <SinnerList>
        {sinners.map((sinner) => (
          <Button
            key={sinner}
            selected={selectedSinners.includes(sinner)}
            onClick={() => toggleSinner(sinner)}
          >
            {sinner}
          </Button>
        ))}
      </SinnerList>
    </Container>
  );
};
