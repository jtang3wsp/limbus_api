import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { sinners } from "../utils/Constants.js";

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

export const Filters = ({ setResults }) => {
  const [category, setCategory] = useState("identities");
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

  useEffect(() => {
    const fetchData = async (url) => {
      const sinnerNames = selectedSinners.map((name) => name.toLowerCase());
      console.log(
        `Fetching from http://localhost:3000/api/${category}/${sinnerNames.join(
          ","
        )}`
      );
      const response = await fetch(
        `http://localhost:3000/api/${category}/${sinnerNames.join(",")}`
      );
      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        console.log("Failed to fetch data");
        setResults([]);
      }
    };
    if (selectedSinners.length > 0) {
      fetchData();
    } else {
      setResults([]);
    }
  }, [category, selectedSinners, setResults]);

  return (
    <Container>
      <CategoryContainer>
        <Button
          selected={category === "identities"}
          onClick={() => toggleCategory("identities")}
        >
          Identities
        </Button>
        <Button
          selected={category === "egos"}
          onClick={() => toggleCategory("egos")}
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
