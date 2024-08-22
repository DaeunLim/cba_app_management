import { EColor } from "@styles/color";
import { Title0, Title1, Title2, Title3,  Title4,  body1, body2, body3 } from "@styles/font";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 18px 24px;
`;

export const HeaderView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderText = styled.div`
  width: 144px;
  justify-content: center;
  ${Title3}
  color: ${EColor.TEXT_800};
  user-select: none;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledThead = styled.thead`
  background-color: ${EColor.COLOR_PRIMARY_SUB1};
  color: white;

  th {
    padding: 15px 20px;
    text-align: left;
    font-weight: bold;
  }
`;

export const StyledTbody = styled.tbody`
  tr {
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #eaeaea; // 호버 시 배경색 변경
    }

    &:nth-child(even) {
      background-color: #f2f2f2;
    }

    &:nth-child(even):hover {
      background-color: #eaeaea;
    }
  }

  td {
    padding: 12px 20px;
    border-top: 1px solid #ddd;
  }
`;

export const ButtonView = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  bottom: 18px;
`;

export const PageNumber = styled.span`
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${EColor.TEXT_600};
`;

export const StyledButton = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  background-color: ${EColor.COLOR_PRIMARY_SUB1};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${EColor.TEXT_600}; // 조금 더 어두운 색상으로 변경
  }

  &:disabled {
    background-color: ${EColor.TEXT_500};
    cursor: not-allowed;
  }
`;

export const StyledSelect = styled.select`
  padding: 8px 12px;
  background-color: white;
  color: ${EColor.COLOR_PRIMARY_SUB1};
  border: 2px solid ${EColor.COLOR_PRIMARY_SUB1};
  border-radius: 5px;
  font-size: 16px;
  margin: 0 5px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: ${EColor.COLOR_PRIMARY};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    border-color: ${EColor.COLOR_PRIMARY};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`;


export const EditPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  gap: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const EditPageHeader = styled.h2`
  text-align: center;
  color: ${EColor.COLOR_PRIMARY};
  margin-bottom: 20px;
  user-select: none;
`;

export const EditPageItemView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px solid ${EColor.COLOR_PRIMARY_SUB1};
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const EditPageLabel = styled.div`
  ${body1}
  color: ${EColor.TEXT_600};
`;

export const EditPageValue = styled.div`
  ${body1}
  color: ${EColor.TEXT_700};
`;

export const TextInput = styled.input`
  ${body2};
  width: 256px;
  height: 32px;
  padding: 10px;
  border: 1px solid ${EColor.TEXT_500};
  border-radius: 4px;
  color: ${EColor.TEXT_900};
  background-color: ${EColor.TEXT_200};

  &:focus {
    border-color: ${EColor.COLOR_PRIMARY};
    outline: none;
  }

  &::placeholder {
    color: ${EColor.TEXT_600};
  }
`;

export const Box1 = styled.div`
  display: flex;
  width: 270px;
  height: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  
`;
/** margin: 0 30px; */


export const TextBox = styled.div`
  ${body2};
  flex: 1;
  text-align: center;
`;

export const Numbers = styled.div`
  ${body2}
  display: flex;
  width: 100%;
  justify-content: space-evenly;

`;

export const Box2 = styled.div`
  display: flex;
  width: 350px;
  height: 400px;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const Box3 = styled.div`
  display: flex;
  width: 170px;
  height: 400px;
  background-color: white;
  align-items: center;
  border-radius: 15px;
  justify-content: center;
  
  
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  background-color: #FAFAFA;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const OutterContainer = styled.div`
  display: flex;
	flex-direction: column;
	width: 100%;
  column: 100%;
	align-items: center;
  gap: 25px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;

`;


/*export const InnerContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
padding: 32px 32px 32px 32px;
gap: 28px;
`;*/

export const DDayTest = styled.div`
  ${Title0};
  letter-spacing: 1px;
  color: ${EColor.TEXT_800};
  user-select: none;
`;

export const StatusTitle = styled.div`
  ${Title2}
  color: ${EColor.TEXT_800};
`;

export const CountTitle = styled.div`
  ${Title3}
  color: ${EColor.TEXT_800};
`;

export const Position = styled.div`
  ${body3}
  color: white;
  background-color: ${EColor.COLOR_PRIMARY_SUB2};
  border-radius: 20px;
  
  text-align: center;
  flex: 1;
`;
