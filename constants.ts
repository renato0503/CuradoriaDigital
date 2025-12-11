import { ShieldCheck, Search, FileCode, Scale, Users, ShoppingBag, Building2, UserCheck } from 'lucide-react';

export const SERVICES = [
  {
    title: "Verificação de Links",
    description: "Análise profunda de URLs suspeitas para evitar phishing e malwares.",
    icon: Search,
  },
  {
    title: "Leilões e Compras",
    description: "Validação de veracidade de sites de leilão e e-commerce desconhecidos.",
    icon: ShoppingBag,
  },
  {
    title: "Análise de Software",
    description: "Verificação de integridade de arquivos e downloads antes da instalação.",
    icon: FileCode,
  },
  {
    title: "Due Diligence Digital",
    description: "Investigação completa sobre a reputação digital de vendedores ou entidades.",
    icon: Scale,
  },
];

export const DIFFERENTIALS = [
  {
    title: "Especialização",
    description: "Foco exclusivo em validação de segurança digital."
  },
  {
    title: "Tecnologia Híbrida",
    description: "Poder da IA combinado com discernimento humano."
  },
  {
    title: "Rapidez",
    description: "Respostas ágeis para tomadas de decisão urgentes."
  },
  {
    title: "Imparcialidade",
    description: "Análise técnica fria, sem viés comercial."
  }
];

export const PRICING = [
  {
    title: "Curadoria Individual",
    price: "R$ 50,00",
    features: ["1 Análise Completa", "Relatório em PDF", "Entrega em 24h", "Suporte via E-mail"],
    highlight: false,
  },
  {
    title: "Pacote Essencial",
    price: "R$ 180,00",
    features: ["4 Curadorias", "Desconto de 10%", "Prioridade na Fila", "Validade de 30 dias"],
    highlight: true,
  },
  {
    title: "Pacote Familiar",
    price: "R$ 350,00",
    features: ["8 Curadorias", "Desconto de 12%", "Relatório Detalhado", "Monitoramento Básico"],
    highlight: false,
  },
];

export const AUDIENCE = [
  { name: "Empresas", icon: Building2 },
  { name: "Idosos", icon: Users },
  { name: "Pais", icon: UserCheck },
  { name: "Compradores", icon: ShoppingBag },
];

export const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "Recebimento e Triagem",
    description: "Seu pedido foi registrado! Em 1 hora, nossa equipe de triagem revisará os dados e confirmará o orçamento via e-mail.",
    duration: "1 hora"
  },
  {
    id: 2,
    title: "Análise Técnica (IA + Humana)",
    description: "O ativo (link, leilão, arquivo) está sendo processado por nossas ferramentas de IA e analisado por um Curador Digital especialista.",
    duration: "4-24 horas"
  },
  {
    id: 3,
    title: "Elaboração do Parecer",
    description: "O Curador Digital está redigindo o Relatório de Due Diligence, transformando dados técnicos em linguagem simples e decisiva.",
    duration: "Processamento"
  },
  {
    id: 4,
    title: "Entrega do Relatório Final",
    description: "O parecer técnico de segurança (com o veredito: CONFIÁVEL ou ALERTA DE RISCO) será enviado para o seu e-mail. Valide para Confiar!",
    duration: "Conclusão"
  }
];

export const COMPETITORS = [
  "Google Safe Browsing",
  "Bitdefender Link Checker",
  "ESET Link Checker"
];