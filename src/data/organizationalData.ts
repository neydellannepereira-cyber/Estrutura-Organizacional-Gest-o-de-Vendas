export interface Filial {
  codigo: number;
  nome: string;
}

export interface Distrital {
  nome: string;
  telefone: string;
  email: string;
  filiais: Filial[];
}

export interface Regional {
  codigo: string;
  gerente: string;
  telefone: string;
  email: string;
  distritais: Distrital[];
  filiais_diretas: Filial[];
  total_filiais: number;
}

export interface OrganizationalData {
  [divisional: string]: Regional[];
}

export const DADOS: OrganizationalData = {
  "LUCIMAR": [
    {
      codigo: "BA",
      gerente: "Monique Araujo Pereira",
      telefone: "73 99989-3404",
      email: "monique.pereira@farmaciaindiana.com.br",
      distritais: [],
      filiais_diretas: [
        { codigo: 30, nome: "Matriz" },
        { codigo: 31, nome: "Drive" },
        { codigo: 32, nome: "Fae" },
        { codigo: 34, nome: "Itabata" },
        { codigo: 35, nome: "Posto Da Mata" },
        { codigo: 48, nome: "Itamaraju" },
        { codigo: 80, nome: "Regional" },
        { codigo: 91, nome: "Rondelli" },
        { codigo: 95, nome: "Medeiros Neto" },
        { codigo: 148, nome: "Sobrasa" },
        { codigo: 168, nome: "Jardim Caraipe" },
        { codigo: 169, nome: "Itamaraju 2" },
        { codigo: 174, nome: "Padre Anchieta" },
        { codigo: 213, nome: "Prado" },
        { codigo: 226, nome: "Vila Vargas" },
        { codigo: 247, nome: "Costa Das Baleias" },
        { codigo: 280, nome: "Pioneiro" },
        { codigo: 283, nome: "Mucuri" }
      ],
      total_filiais: 18
    },
    {
      codigo: "ES",
      gerente: "Flavia Nico",
      telefone: "27 99721-6383",
      email: "flavia.nico@farmaciaindiana.com.br",
      distritais: [],
      filiais_diretas: [
        { codigo: 85, nome: "São Mateus" },
        { codigo: 119, nome: "Barra De São Francisco" },
        { codigo: 137, nome: "Pedro Canário" },
        { codigo: 151, nome: "São Mateus 2" },
        { codigo: 159, nome: "Mantena" },
        { codigo: 160, nome: "Guriri" },
        { codigo: 163, nome: "Montanha" },
        { codigo: 181, nome: "Pinheiros" },
        { codigo: 183, nome: "Santo Antonio" },
        { codigo: 188, nome: "Guanabara" },
        { codigo: 198, nome: "Pio Xii" },
        { codigo: 208, nome: "Duarte Santos" },
        { codigo: 234, nome: "Marco Polo" },
        { codigo: 273, nome: "Conceicao Da Barra" },
        { codigo: 294, nome: "Sao Gabriel Da Palha" }
      ],
      total_filiais: 15
    },
    {
      codigo: "ILH",
      gerente: "Renan Geraldo Assis Fraga",
      telefone: "31 98486-4987",
      email: "renan.fraga@farmaciaindiana.com.br",
      distritais: [
        {
          nome: "Nayphi",
          telefone: "73 9909-9033",
          email: "nayphi.alves@farmaciaindiana.com.br",
          filiais: [
            { codigo: 228, nome: "Canavieiras" },
            { codigo: 256, nome: "Jequie" },
            { codigo: 263, nome: "Jequiezinho" },
            { codigo: 270, nome: "Jaguaquara" },
            { codigo: 277, nome: "Maracas" },
            { codigo: 288, nome: "Sao Jose" }
          ]
        }
      ],
      filiais_diretas: [
        { codigo: 66, nome: "Itabuna" },
        { codigo: 117, nome: "Itabuna 2" },
        { codigo: 120, nome: "Jorge Amado" },
        { codigo: 124, nome: "Cinquentenário" },
        { codigo: 138, nome: "Jardim Vitoria" },
        { codigo: 145, nome: "Jardim Atlantico" },
        { codigo: 147, nome: "Itabuna Conlar" },
        { codigo: 155, nome: "Posto Sante" },
        { codigo: 189, nome: "Ilheus Pontal" },
        { codigo: 231, nome: "Sao Caetano" },
        { codigo: 232, nome: "Itacare" },
        { codigo: 246, nome: "Ipiau" },
        { codigo: 269, nome: "Ilheus Orla" },
        { codigo: 271, nome: "Barra Grande" }
      ],
      total_filiais: 20
    },
    {
      codigo: "PS",
      gerente: "Jeferson de Souza Felisberto",
      telefone: "73 99942-2474",
      email: "jeferson.felisberto@farmaciaindiana.com.br",
      distritais: [
        {
          nome: "Jarlerson",
          telefone: "73 9944-2681",
          email: "jarleson.carvalho@farmaciaindiana.com.br",
          filiais: [
            { codigo: 65, nome: "Eunapolis" },
            { codigo: 71, nome: "Eunapolis 2" },
            { codigo: 77, nome: "Itabela" },
            { codigo: 83, nome: "Eunapolis 3" },
            { codigo: 106, nome: "Eunapolis 4" },
            { codigo: 149, nome: "Igrejinha" },
            { codigo: 173, nome: "Eunapolis Pequi" },
            { codigo: 217, nome: "Eunacenter" },
            { codigo: 252, nome: "Eunapolis Br" },
            { codigo: 286, nome: "Itabela 2" }
          ]
        }
      ],
      filiais_diretas: [
        { codigo: 33, nome: "Passarela" },
        { codigo: 67, nome: "Porto Seguro" },
        { codigo: 79, nome: "Baianão" },
        { codigo: 84, nome: "Navegantes" },
        { codigo: 86, nome: "Porto Centro" },
        { codigo: 92, nome: "Arraial D Ajuda" },
        { codigo: 123, nome: "Broadway" },
        { codigo: 158, nome: "Coroa Vermelha" },
        { codigo: 164, nome: "Trancoso" },
        { codigo: 242, nome: "Campinho" },
        { codigo: 248, nome: "Navegantes 2" },
        { codigo: 261, nome: "Passarela 2" },
        { codigo: 267, nome: "Porto Orla" },
        { codigo: 279, nome: "Indiana Dermo Store" }
      ],
      total_filiais: 24
    },
    {
      codigo: "VCA",
      gerente: "Jose Leandro S. de Oliveira",
      telefone: "73 99997-3132",
      email: "jose.oliveira@farmaciaindiana.com.br",
      distritais: [
        {
          nome: "Jairo",
          telefone: "71 9719-9837",
          email: "jairo.lima@farmaciaindiana.com.br",
          filiais: [
            { codigo: 196, nome: "Itapetinga" },
            { codigo: 197, nome: "Lauro De Freitas" },
            { codigo: 201, nome: "Lions Club" },
            { codigo: 249, nome: "Brumado" },
            { codigo: 251, nome: "Juracy Magalhaes" },
            { codigo: 259, nome: "Patagonia" }
          ]
        }
      ],
      filiais_diretas: [
        { codigo: 190, nome: "Otavio Santos" },
        { codigo: 200, nome: "Vitor Brito" },
        { codigo: 214, nome: "Conquista Sul" },
        { codigo: 223, nome: "Olivia Flores" },
        { codigo: 225, nome: "Frei Benjamin" },
        { codigo: 265, nome: "Livramento" },
        { codigo: 274, nome: "Bom Jesus Da Lapa" },
        { codigo: 278, nome: "Guanambi" },
        { codigo: 285, nome: "Caetite" }
      ],
      total_filiais: 15
    },
    {
      codigo: "VIT",
      gerente: "Lucimar Guimaraes Pidner",
      telefone: "31 98419-0305",
      email: "lucimar@farmaciaindiana.com.br",
      distritais: [
        {
          nome: "Ezequiel Andrade C Barbosa",
          telefone: "27 99737-5202",
          email: "ezequiel.andrade@farmaciaindiana.com.br",
          filiais: [
            { codigo: 76, nome: "Esplanada" },
            { codigo: 94, nome: "Linhares" },
            { codigo: 114, nome: "Colatina" },
            { codigo: 115, nome: "Sao Silvano" },
            { codigo: 146, nome: "Linhares 2" },
            { codigo: 167, nome: "Linhares 3" },
            { codigo: 179, nome: "Vila Nova" },
            { codigo: 187, nome: "Aracruz" },
            { codigo: 222, nome: "Interlagos" },
            { codigo: 239, nome: "Anhanguera" },
            { codigo: 240, nome: "Baixo Guandu" },
            { codigo: 287, nome: "N Sra Da Conceicao" },
            { codigo: 295, nome: "Sao Miguel" }
          ]
        },
        {
          nome: "Kassia Monteiro Laurindo",
          telefone: "(27) 99503-2792",
          email: "kassia.laurindo@farmaciaindiana.com.br",
          filiais: [
            { codigo: 210, nome: "Meridional" },
            { codigo: 211, nome: "Henrique Moscoso" },
            { codigo: 221, nome: "Guarapari" },
            { codigo: 235, nome: "Novo Horizonte" },
            { codigo: 236, nome: "Itaparica" },
            { codigo: 243, nome: "Norte Sul" },
            { codigo: 255, nome: "Guarapari 2" },
            { codigo: 260, nome: "Anchieta" },
            { codigo: 275, nome: "Castelo" },
            { codigo: 276, nome: "Cachoeiro De Itapemirim" },
            { codigo: 282, nome: "Jacaraipe" },
            { codigo: 291, nome: "Itaipava" },
            { codigo: 292, nome: "Gloria" },
            { codigo: 293, nome: "Nova Almeida" }
          ]
        }
      ],
      filiais_diretas: [],
      total_filiais: 27
    }
  ],
  "GERVANIA": [
    {
      codigo: "CA",
      gerente: "Fabiano Garcia Tavares",
      telefone: "33 99150-8205",
      email: "fabianogarcia@farmaciaindiana.com.br",
      distritais: [
        {
          nome: "Felipe",
          telefone: "32 9989-1946",
          email: "felipe.fagundes@farmaciaindiana.com.br",
          filiais: [
            { codigo: 134, nome: "Carangola" },
            { codigo: 156, nome: "Ipanema" },
            { codigo: 171, nome: "Manhumirim" },
            { codigo: 206, nome: "Mutum" },
            { codigo: 212, nome: "Lajinha" },
            { codigo: 245, nome: "Espera Feliz" }
          ]
        }
      ],
      filiais_diretas: [
        { codigo: 28, nome: "Raul Soares" },
        { codigo: 29, nome: "Rodoviaria" },
        { codigo: 44, nome: "Inhapim" },
        { codigo: 72, nome: "Praça Conceição" },
        { codigo: 73, nome: "Moacir Matos" },
        { codigo: 96, nome: "Olegário" },
        { codigo: 100, nome: "Manhuaçu 2" },
        { codigo: 102, nome: "Manhuaçu" },
        { codigo: 152, nome: "Caratinga Br" },
        { codigo: 165, nome: "Manhuacu 3" },
        { codigo: 170, nome: "Manhuacu Rodoviaria" },
        { codigo: 178, nome: "Matipo" },
        { codigo: 202, nome: "Praca Da Estacao" },
        { codigo: 230, nome: "Calogeras" },
        { codigo: 241, nome: "Piedade De Caratinga" }
      ],
      total_filiais: 21
    },
    {
      codigo: "DIA",
      gerente: "Robson Oliveira Moreira",
      telefone: "33 99110-6939",
      email: "robson@farmaciaindiana.com.br",
      distritais: [
        {
          nome: "Manuela",
          telefone: "",
          email: "",
          filiais: [
            { codigo: 13, nome: "Itabira" },
            { codigo: 50, nome: "João Monlevade 2" },
            { codigo: 104, nome: "João Monlevade" },
            { codigo: 110, nome: "Joao Monlevade 3" },
            { codigo: 175, nome: "Nova Era" },
            { codigo: 191, nome: "Carlos Drummond" },
            { codigo: 194, nome: "Joao Pinheiro" },
            { codigo: 215, nome: "Alvorada" },
            { codigo: 220, nome: "Gabiroba" }
          ]
        }
      ],
      filiais_diretas: [
        { codigo: 52, nome: "Malacacheta" },
        { codigo: 54, nome: "Capelinha" },
        { codigo: 69, nome: "Guanhaes" },
        { codigo: 87, nome: "Diamantina" },
        { codigo: 93, nome: "Itamarandiba" },
        { codigo: 101, nome: "Itabira 2" },
        { codigo: 105, nome: "Novo Cruzeiro" },
        { codigo: 125, nome: "Dom Joao" },
        { codigo: 133, nome: "Acacias" },
        { codigo: 139, nome: "Turmalina" },
        { codigo: 203, nome: "Milton Campos" },
        { codigo: 264, nome: "Planalto" },
        { codigo: 298, nome: "Minas Novas" }
      ],
      total_filiais: 22
    },
    {
      codigo: "GV",
      gerente: "Alba Valeria Miranda Batista",
      telefone: "33 98409-2039",
      email: "alba@farmaciaindiana.com.br",
      distritais: [],
      filiais_diretas: [
        { codigo: 5, nome: "Chiste" },
        { codigo: 6, nome: "Mercado" },
        { codigo: 8, nome: "Ibituruna" },
        { codigo: 9, nome: "Perola" },
        { codigo: 10, nome: "Belvick" },
        { codigo: 12, nome: "Jk" },
        { codigo: 14, nome: "Vila Isa" },
        { codigo: 16, nome: "Peçanha" },
        { codigo: 22, nome: "Minas Gerais" },
        { codigo: 25, nome: "Santa Rita" },
        { codigo: 37, nome: "Lourdes" },
        { codigo: 38, nome: "Ilha" },
        { codigo: 41, nome: "São Lucas" },
        { codigo: 107, nome: "Posto" },
        { codigo: 130, nome: "Santo Agostinho" },
        { codigo: 131, nome: "Sao Raimundo" },
        { codigo: 136, nome: "Sao Pedro" },
        { codigo: 150, nome: "Mirante" },
        { codigo: 153, nome: "Conselheiro Pena" },
        { codigo: 176, nome: "Praca Do Emigrante" },
        { codigo: 229, nome: "Avenida Brasil 2" },
        { codigo: 244, nome: "Castanheiras" },
        { codigo: 258, nome: "Pedro Lessa" },
        { codigo: 272, nome: "Morada Do Vale" }
      ],
      total_filiais: 24
    },
    {
      codigo: "OP",
      gerente: "Amanda Augusta de Carvalho",
      telefone: "33 98422-5024",
      email: "amanda.carvalho@farmaciaindiana.com.br",
      distritais: [],
      filiais_diretas: [
        { codigo: 15, nome: "Ponte Nova" },
        { codigo: 64, nome: "Lavras" },
        { codigo: 98, nome: "Ponte Nova 2" },
        { codigo: 182, nome: "Barbacena" },
        { codigo: 184, nome: "Conselheiro Lafaiete" },
        { codigo: 185, nome: "Mariana" },
        { codigo: 186, nome: "Bias Fortes" },
        { codigo: 195, nome: "Sao Sebastiao" },
        { codigo: 199, nome: "Congonhas" },
        { codigo: 204, nome: "Ouro Branco" },
        { codigo: 205, nome: "Bauxita" },
        { codigo: 207, nome: "Tiradentes" },
        { codigo: 209, nome: "Sao Joao Del Rei" },
        { codigo: 257, nome: "Barro Preto" },
        { codigo: 266, nome: "Ouro Branco 2" },
        { codigo: 296, nome: "Nova Serrana" },
        { codigo: 301, nome: "Marelli" }
      ],
      total_filiais: 17
    },
    {
      codigo: "TO",
      gerente: "Fabiano Resende",
      telefone: "31 97231-0731",
      email: "fabianoresende@farmaciaindiana.com.br",
      distritais: [
        {
          nome: "Eduardo Bastos",
          telefone: "33 98819-7398",
          email: "eduardo.bastos@farmaciaindiana.com.br",
          filiais: [
            { codigo: 40, nome: "Nanuque" },
            { codigo: 61, nome: "Nanuque2" },
            { codigo: 62, nome: "Carlos Chagas" },
            { codigo: 88, nome: "Aguas Formosas" }
          ]
        }
      ],
      filiais_diretas: [
        { codigo: 1, nome: "Matriz" },
        { codigo: 2, nome: "Getulio Vargas" },
        { codigo: 3, nome: "Drogalar" },
        { codigo: 4, nome: "Feirinha" },
        { codigo: 7, nome: "Bela Vista" },
        { codigo: 17, nome: "Avenida" },
        { codigo: 20, nome: "Praça Tiradentes" },
        { codigo: 23, nome: "São Jacinto" },
        { codigo: 24, nome: "Itambacuri" },
        { codigo: 39, nome: "Francisco Sa" },
        { codigo: 60, nome: "Duque De Caxias" },
        { codigo: 78, nome: "Mc Donald" },
        { codigo: 122, nome: "Rio Bahia" },
        { codigo: 162, nome: "Sao Cristovao" },
        { codigo: 166, nome: "Safra T.O" },
        { codigo: 233, nome: "Rua Das Flores" },
        { codigo: 300, nome: "Marajoara" }
      ],
      total_filiais: 21
    },
    {
      codigo: "VA",
      gerente: "Fabricio Rodrigues N de Oliveira",
      telefone: "31 99644-1920",
      email: "fabricio.oliveira@farmaciaindiana.com.br",
      distritais: [
        {
          nome: "Gabriela",
          telefone: "",
          email: "",
          filiais: [
            { codigo: 43, nome: "Avenida Brasil" },
            { codigo: 47, nome: "Ipatinga 2" },
            { codigo: 51, nome: "Igreja" },
            { codigo: 82, nome: "Posto Bonanza" },
            { codigo: 132, nome: "Canaa 3" },
            { codigo: 144, nome: "Horto 2" },
            { codigo: 237, nome: "Cidade Nova" },
            { codigo: 253, nome: "Macapa" }
          ]
        }
      ],
      filiais_diretas: [
        { codigo: 11, nome: "Ipatinga" },
        { codigo: 26, nome: "Bom Jardim" },
        { codigo: 27, nome: "Cidade Nobre" },
        { codigo: 36, nome: "Bom Retiro" },
        { codigo: 42, nome: "Horto" },
        { codigo: 63, nome: "Canaa" },
        { codigo: 70, nome: "Iguacu" },
        { codigo: 81, nome: "Canaa 2" },
        { codigo: 89, nome: "Shopping" },
        { codigo: 99, nome: "Cidade Nobre 2" },
        { codigo: 108, nome: "Rotatoria" },
        { codigo: 127, nome: "Bethania" },
        { codigo: 157, nome: "Iguacu 2" },
        { codigo: 172, nome: "Caravelas" },
        { codigo: 177, nome: "Veneza" },
        { codigo: 193, nome: "Canaanzinho" },
        { codigo: 254, nome: "Bom Retiro 2" },
        { codigo: 262, nome: "Ipaba" }
      ],
      total_filiais: 26
    },
    {
      codigo: "VA2",
      gerente: "Ruy Rosa Batalha Junior",
      telefone: "31 99322-5613",
      email: "ruy.batalha@farmaciaindiana.com.br",
      distritais: [
        {
          nome: "Sandra",
          telefone: "",
          email: "",
          filiais: [
            { codigo: 21, nome: "Acesita" },
            { codigo: 45, nome: "Metasita" },
            { codigo: 46, nome: "Sao Rafael" },
            { codigo: 49, nome: "Timoteo" },
            { codigo: 142, nome: "Olaria" },
            { codigo: 216, nome: "Funcionarios" }
          ]
        }
      ],
      filiais_diretas: [
        { codigo: 18, nome: "Panorama" },
        { codigo: 19, nome: "Melo Viana" },
        { codigo: 74, nome: "Calçadão" },
        { codigo: 113, nome: "Fabriciano Centro" },
        { codigo: 126, nome: "Melo Viana 2" },
        { codigo: 129, nome: "Caladinho" },
        { codigo: 180, nome: "Magalhaes Pinto" },
        { codigo: 218, nome: "Santa Cruz" },
        { codigo: 227, nome: "Fabriciano Br" },
        { codigo: 250, nome: "Amaro Lanari" },
        { codigo: 290, nome: "Acesita 2" }
      ],
      total_filiais: 17
    },
    {
      codigo: "VJ",
      gerente: "Viviane Chaves S Peixoto",
      telefone: "33 99198-0072",
      email: "viviane@farmaciaindiana.com.br",
      distritais: [],
      filiais_diretas: [
        { codigo: 53, nome: "Jequitinhonha" },
        { codigo: 55, nome: "Almenara" },
        { codigo: 56, nome: "Almenara 2" },
        { codigo: 57, nome: "Rubim" },
        { codigo: 58, nome: "Itaobim" },
        { codigo: 59, nome: "Aracuai" },
        { codigo: 68, nome: "Pedra Azul" },
        { codigo: 75, nome: "Padre Paraiso" },
        { codigo: 224, nome: "Medina" }
      ],
      total_filiais: 9
    },
    {
      codigo: "ZM",
      gerente: "Leonardo Carlos da Fonseca",
      telefone: "32 99962-1988",
      email: "leonardo.fonseca@farmaciaindiana.com.br",
      distritais: [],
      filiais_diretas: [
        { codigo: 97, nome: "Viçosa" },
        { codigo: 103, nome: "Uba" },
        { codigo: 109, nome: "Leopoldina" },
        { codigo: 111, nome: "Viçosa 2" },
        { codigo: 112, nome: "Muriae" },
        { codigo: 116, nome: "Elias Netto" },
        { codigo: 118, nome: "Cataguases" },
        { codigo: 121, nome: "Monte Alto" },
        { codigo: 128, nome: "Barra" },
        { codigo: 135, nome: "Visconde Do Rio Branco" },
        { codigo: 140, nome: "Industrial" },
        { codigo: 141, nome: "Itatiaia" },
        { codigo: 143, nome: "Viçosa 3" },
        { codigo: 154, nome: "Sao Januario" },
        { codigo: 161, nome: "Ervalia" },
        { codigo: 192, nome: "Ferroviaria" },
        { codigo: 219, nome: "Alem Paraiba" },
        { codigo: 238, nome: "Sao Joao Nepomuceno" },
        { codigo: 284, nome: "Leopoldina 2" },
        { codigo: 297, nome: "Cascatinha" }
      ],
      total_filiais: 20
    }
  ]
};

export const DIVISIONAL_NAMES: Record<string, string> = {
  LUCIMAR: "Lucimar Guimaraes Pidner",
  GERVANIA: "Gervania Maria de Souza"
};
