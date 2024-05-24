import { Card } from "@/components/molecules/Card";
import { Subtitle } from "@/components/atoms/Subtitle";
import { Title } from "@/components/atoms/Title";
import { Container } from "@mui/material";
import SelectBrand from "./components/SelectBrand";
import SelectModel from "./components/SelectModel";

export default function Home() {
  return (
    <main>
      <Title text="Tabela Fipe"/>
      <Subtitle text="Consulte o valor de um veículo de forma gratuita"/>
      <Container
      >
        
        <Card 
          buttonText='Consultar preço'
        >
            <SelectBrand/>
            <SelectModel/>
        </Card>
      </Container>
    </main>
  );
}
