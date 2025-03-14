import { Empresa } from "./empresa";

export class Descritor {
  descrever(empresa: Empresa): void {
    console.log(`Razão social: ${empresa.razaoSocial}`);
    console.log(`Nome fantasia: ${empresa.nomeFantasia}`);
    console.log(`CNPJ: ${empresa.cnpj}`);
    console.log("\nEndereço:");
    console.log(
      `Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} Número: ${empresa.endereco.numero}`
    );

    console.log("\nFuncionários:");
    empresa.funcionarios.forEach((func) => {
      console.log(`Nome: ${func.nome}`);
      console.log(`Matrícula: ${func.matricula}`);
      console.log(`CPF: ${func.cpf}`);
      console.log(
        `Rua: ${func.endereco.rua} Bairro: ${func.endereco.bairro} Cidade: ${func.endereco.cidade} Número: ${func.endereco.numero}`
      );
    });
  }
}
