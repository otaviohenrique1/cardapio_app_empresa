export interface FormUserTypes {
  nome: string;
  email: string;
  senha: string;
  confirmar_senha: string;
  dataNascimento: string;
  telefone: string;
  cpf_cnpj: string;
  rua: string;
  cidade: string;
  numero: string;
  complemento: string;
  estado: string;
  pais: string;
}

export interface ProdutoCardapioBaseType {
  id: number | string;
  foto_miniatura: FotoTypes;
  nome: string;
  tipo: string;
  preco: number | string;
  ativo: boolean;
  favorito: boolean;
}

export interface ProdutoCardapioType extends ProdutoCardapioBaseType {
  fotos_galeria: FotoTypes[];
  codigo: string;
  descricao: string;
  quantidade: number;
  unidade_quantidade: string;
  ingredientes: IngredientesTypes[];
  ingredientes_removiveis: IngredientesTypes[];
  ingredientes_opcionais: IngredientesTypes[];
  data_cadastro: Date;
  data_modificacao_cadastro: Date;
  empresaId: number | string;
}

export interface FotoTypes {
  id: number | string;
  url: string;
  nome: string;
}

export interface IngredientesTypes {
  id: number | string;
  nome: string;
  quantidade: number;
  quantidade_unidade: string;
  removivel: boolean;
  opcional: boolean;
  preco: number;
}
