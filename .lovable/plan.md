## Indiana Farma - App Institucional de Estrutura Organizacional

### Regras Importantes

1. **Fonte de verdade**: Os arquivos HTML enviados pelo usuário são a ÚNICA fonte de dados. Nunca inventar ou alterar informações.
2. **Nomes**: Copiar exatamente como no HTML (ex: **Kassia** com K, não Cassia).
3. **Códigos de filiais**: Exibir com 3 dígitos (`FL 001`, `FL 030`) usando `padStart(3, '0')`.
4. **Regional TO** = Teófilo Otoni (código "TO", NÃO "PARA").
5. **Dados centralizados** em `src/data/organizationalData.ts`.
6. **Deploy**: GitHub + Netlify (vendasgestao.netlify.app). Publicar após alterações.

### Estrutura Organizacional

- **2 Divisionais**: LUCIMAR e GERVANIA
- **LUCIMAR**: Regionais BA, ES, ILH, PS, VCA, VIT
- **GERVANIA**: Regionais CA, DIA, GV, OP, TO, VA, VA2, VJ, ZM
- **296 filiais ativas**, 15 regionais, 10 distritais

### Distritais com Contato

| Distrital | Regional | Telefone | Email |
|-----------|----------|----------|-------|
| Nayphi | ILH | 73 9909-9033 | nayphi.alves@farmaciaindiana.com.br |
| Jarlerson | PS | 73 9944-2681 | jarleson.carvalho@farmaciaindiana.com.br |
| Jairo | VCA | 71 9719-9837 | jairo.lima@farmaciaindiana.com.br |
| Ezequiel Andrade C Barbosa | VIT | 27 99737-5202 | ezequiel.andrade@farmaciaindiana.com.br |
| Kassia Monteiro Laurindo | VIT | (27) 99503-2792 | kassia.laurindo@farmaciaindiana.com.br |
| Felipe | CA | 32 9989-1946 | felipe.fagundes@farmaciaindiana.com.br |
| Manuela | DIA | 34 8846-5690 | manuela.souza@farmaciaindiana.com.br |
| Eduardo Bastos | TO | 33 98819-7398 | eduardo.bastos@farmaciaindiana.com.br |
| Gabriela | VA | 31 8782-3033 | gabriela.martins@farmaciaindiana.com.br |
| Sandra | VA2 | 31 9428-3713 | sandra.cangussu@farmaciaindiana.com.br |

### Arquitetura

| Arquivo | Função |
|---------|--------|
| `src/data/organizationalData.ts` | Todos os dados hierárquicos |
| `src/components/StatsCards.tsx` | Cards de estatísticas |
| `src/components/SearchBar.tsx` | Busca e filtros |
| `src/components/RegionalCard.tsx` | Card de cada regional |
| `src/components/DivisionalSection.tsx` | Seção colapsável por divisional |
| `src/components/OrgHeader.tsx` | Header institucional |
| `src/pages/Index.tsx` | Página principal |

### Responsividade
- **Celular (<640px)**: Layout coluna única
- **Tablet (640-1024px)**: Grid 2 colunas
- **Desktop (>1024px)**: Grid 3 colunas

### Design
- Cores: azul #0052CC, roxo #5B2D82, laranja #FF8B3D
- Tailwind CSS com tokens semânticos
- Radix UI Collapsible para seções
