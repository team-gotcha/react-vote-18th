import React, { useEffect, useState } from "react";
import styled from "styled-components";

import TopBar from "../components/TopBar";
import TeamCandidate from "../components/TeamCandidate";
import { useGetTeamResult } from "../apis/get/useGetTeamResult";

const colors = ["#01D1A8", "#5ED8FF", "#3E4CF7", "#224C97"];

const TeamResult = () => {
  //custom-hook
  const fetchedData = useGetTeamResult().teamResult;

  return (
    <>
      <TopBar />
      <Wrapper>
        <Title>데모데이 투표 결과</Title>
        <TeamCandidate
          elected={true}
          teamName={fetchedData[0].team}
          teamCount={fetchedData[0].count}
        />
        <MemDiv>
          {colors.map((color, index) => (
            <TeamCandidate
              key={index}
              color={color}
              teamName={fetchedData[index + 1].team}
              teamCount={fetchedData[index + 1].count}
            />
          ))}
        </MemDiv>
      </Wrapper>
    </>
  );
};

export default TeamResult;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 0 5rem;
`;

const Font = styled.div`
  text-align: center;
  font-family: "Pretendard-regular";
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Title = styled(Font)`
  color: #ffc466;

  margin-bottom: 3.75rem;
`;

const MemDiv = styled.div`
  margin-top: 3.75rem;

  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 1.875rem;

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, max-content);
    gap: 1.2rem;
  }
`;
