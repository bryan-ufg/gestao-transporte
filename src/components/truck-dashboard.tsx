"use client";

import {
  Container,
  FilterTitle,
  FilterContainer,
  FilterGroup,
  FilterLabel,
  FilterInput,
  FilterSelect,
  ButtonGroup,
  Button,
} from "./truck-dashboard.styles";

export default function TruckDashboard() {
  return (
    <Container>
      <FilterContainer>
        <FilterTitle>Filtros</FilterTitle>
        <FilterGroup>
          <FilterLabel>Motorista</FilterLabel>
          <FilterSelect>
            <option>Selecione um motorista</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Caminhão</FilterLabel>
          <FilterInput placeholder="Digite a placa" />
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Analista</FilterLabel>
          <FilterSelect>
            <option>Selecione um analista</option>
          </FilterSelect>
        </FilterGroup>

        <ButtonGroup>
          <Button variant="secondary">Limpar Filtros</Button>
          <Button variant="primary">Pesquisar</Button>
        </ButtonGroup>
      </FilterContainer>
    </Container>
  );
}
