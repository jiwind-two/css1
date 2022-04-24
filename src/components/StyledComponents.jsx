import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>-Styled Components-</STitle>
      <SButton>Fight!!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const STitle = styled.p`
  mergin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
  background-color: #adebb8;
  border: none;
  padding: 8px;
  border-radius: 8px;
`;
