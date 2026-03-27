

## Indiana Farma - App Institucional de Estrutura Organizacional

### O que será construído
Uma página única e responsiva (celular, tablet e computador) mostrando a estrutura organizacional completa da Indiana Farma com todos os dados do HTML fornecido.

### Estrutura

**1. Header**
- Título "Estrutura Organizacional - Gestão de Vendas"
- Branding Indiana Farma (cores: azul #0052CC, roxo #5B2D82, laranja #FF8B3D)

**2. Cards de Estatísticas**
- 4 cards: Gerentes Divisionais (2), Gerentes Regionais (15), Gerentes Distritais (10), Filiais Ativas (295)
- Grid responsivo: 2 colunas no celular, 4 no desktop

**3. Barra de Busca + Filtros**
- Busca por nome, código de filial, gerente, telefone ou email
- Filtro por divisional (dropdown)

**4. Organograma Hierárquico**
- Cada divisional como seção colapsável
- Dentro: cards de regionais com info do gerente (nome, telefone, email)
- Distritais com suas filiais como chips/badges
- Filiais diretas listadas separadamente
- Layout: grid responsivo (1 col celular, 2 tablet, 3 desktop)

**5. Footer**
- "Indiana Farma © 2026 • Dashboard Organizacional"

### Arquivos a criar/editar

| Arquivo | Ação |
|---------|------|
| `src/data/organizationalData.ts` | Todos os dados hierárquicos extraídos do HTML |
| `src/components/StatsCards.tsx` | Cards de estatísticas |
| `src/components/SearchBar.tsx` | Busca e filtros |
| `src/components/RegionalCard.tsx` | Card de cada regional com gerente e filiais |
| `src/components/DivisionalSection.tsx` | Seção colapsável por divisional |
| `src/components/OrgHeader.tsx` | Header institucional |
| `src/pages/Index.tsx` | Página principal compondo tudo |
| `src/index.css` | Cores Indiana Farma no design system |

### Responsividade
- **Celular (<640px)**: Layout em coluna única, cards empilhados, chips de filiais em 2 colunas
- **Tablet (640-1024px)**: Grid 2 colunas para regionais, chips em 3 colunas
- **Desktop (>1024px)**: Grid 3 colunas para regionais, chips em 4-5 colunas

### Detalhes Técnicos
- Tailwind CSS para responsividade (`sm:`, `md:`, `lg:` breakpoints)
- Componente Collapsible do Radix UI para seções divisionais
- Estado local com useState para busca/filtros
- Sem dependências externas adicionais

