import { Funcionario } from "./funcionario";
import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

export class Empresa {
  constructor(
    public funcionarios: Funcionario[],
    public endereco: Endereco,
    public razaoSocial: string,
    public nomeFantasia: string,
    public cnpj: string,
    public telefones: Telefone[]
  ) {}
}
