import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f5f5;
`;

export const FilterTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  border: red solid;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 180px;
`;

export const FilterLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FilterSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FilterCheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
`;

export const FilterCheckbox = styled.input``;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

export const Button = styled.button<{ variant?: string }>`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  ${({ variant }) =>
    variant === 'secondary'
      ? `
      background: #e0e0e0;
      color: #333;
    `
      : variant === 'primary'
      ? `
      background: #1a73e8;
      color: white;
    `
      : `
      background: #f0f0f0;
      color: black;
    `}
`;
