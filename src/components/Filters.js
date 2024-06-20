import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SINNERS } from "../utils/Constants.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryContainer = styled.div`
  display: flex;
  flexwrap: wrap;
  gap: 30px;
  margin-bottom: 20px;
`;

const SinnerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

const CategoryButton = styled.button`
  padding: 8px;
  min-width: 100pxpx;
  flex: 1;
  background-color: ${(props) => (props.selected ? "blue" : "gray")};
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const SinnerButton = styled.button`
  padding: 8px;
  min-width: 75px;
  height: 60px;
  flex: 1;
  background-color: ${(props) => (props.selected ? "blue" : "gray")};
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

export const Filters = ({ setResults }) => {
  const [category, setCategory] = useState("identities");
  const [selectedSinners, setSelectedSinners] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

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

  const toggleAllSinners = () => {
    if (allSelected) {
      setSelectedSinners([]);
    } else {
      setSelectedSinners(Object.keys(SINNERS));
    }
    setAllSelected(!allSelected);
  };

  const getIconPath = (sinnerName) => {
    return SINNERS[sinnerName];
  };

  useEffect(() => {
    const fetchData = async () => {
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
    // fetchData();
    if (selectedSinners.length > 0) {
      fetchData();
    } else {
      setResults([]);
    }
  }, [category, selectedSinners, setResults]);

  return (
    <Container>
      <CategoryContainer>
        <CategoryButton
          selected={category === "identities"}
          onClick={() => toggleCategory("identities")}
        >
          IDENTITIES
        </CategoryButton>
        <CategoryButton
          selected={category === "egos"}
          onClick={() => toggleCategory("egos")}
        >
          EGOS
        </CategoryButton>
      </CategoryContainer>

      <SinnerList>
        {Object.keys(SINNERS).map((sinner) => (
          <SinnerButton
            key={sinner}
            onClick={() => toggleSinner(sinner)}
            selected={selectedSinners.includes(sinner)}
          >
            <IconWrapper>
              <Icon src={getIconPath(sinner)} alt={`${sinner} icon`} />
            </IconWrapper>
          </SinnerButton>
        ))}
        <SinnerButton onClick={toggleAllSinners} selected={allSelected}>
          {allSelected ? "Deselect All" : "Select All"}
        </SinnerButton>
      </SinnerList>
    </Container>
  );
};
