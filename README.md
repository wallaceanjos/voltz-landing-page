# 🚀 Voltz Landing Page

Landing page para impulsionar o comércio local com cashback, prêmios e fidelização de clientes.

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🛠️ Instalação

```bash
# Clonar o repositório
git clone [url-do-repositorio]
cd voltz-landing-page

# Instalar dependências
npm install
```

## 🎨 CSS - Configuração de Build

### 📁 Estrutura dos estilos:
- `assets/css/core.css` - **CSS completo** (desenvolvimento)
- `assets/css/core-purge.css` - **CSS otimizado** (produção)
- `assets/css/main.css` - **Arquivo principal** com imports

### 🔄 Alternando entre desenvolvimento e produção:

#### 🧪 **Modo Desenvolvimento:**
```css
/* assets/css/main.css */

/* PROD */
/* npm run build */
/* @import "./core-purge.css"; */

/* DEV */
@import "./core.css";
```

#### 🚀 **Modo Produção:**
```css
/* assets/css/main.css */

/* PROD */
/* npm run build */
@import "./core-purge.css";

/* DEV */
/* @import "./core.css"; */
```

## 📦 Scripts de Build

### Desenvolvimento:
```bash
# Configurar para desenvolvimento
npm run dev

# Ou configurar manualmente:
# 1. Comentar: @import "./core-purge.css";
# 2. Descomentar: @import "./core.css";
```

### Produção:
```bash
# Build para produção
npm run build

# Ou configurar manualmente:
# 1. Comentar: @import "./core.css";
# 2. Descomentar: @import "./core-purge.css";
```

## 🌐 API e Integração

### Endpoint integrado:
```
https://yuwdzuuos4r7wwz3lm6nipmrpu0opiza.lambda-url.us-east-2.on.aws/
```

### Campos do formulário:
- `first_name` - Primeiro nome
- `last_name` - Sobrenome  
- `email` - E-mail
- `company` - Empresa
- `employee_count` - Número de funcionários
- `industry` - Setor de atuação
- `project_type` - Como podemos ajudar
- `cep` - CEP
- `phone` - Telefone

## 🚫 CORS - Desenvolvimento Local

### Problema:
O AWS Lambda pode não estar configurado para CORS, causando erro no browser durante desenvolvimento.

### Solução automática:
O código detecta automaticamente o ambiente:
- **Desenvolvimento**: Funciona com proxy se necessário
- **Produção**: Conecta diretamente ao Lambda

### Para resolver definitivamente:
Configure CORS no AWS Lambda com headers:
```javascript
headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
}
```

## 📱 PWA (Progressive Web App)

### Recursos incluídos:
- ✅ Manifesto configurado
- ✅ Ícones para todos os dispositivos
- ✅ Meta tags para redes sociais
- ✅ Instalável como app mobile

### Ícones disponíveis:
- `favicon-16x16.png`, `favicon-32x32.png`
- `apple-touch-icon.png` 
- `android-chrome-192x192.png`, `android-chrome-512x512.png`
- `og-voltz.png` (Open Graph)

## 🚀 Deploy

### Preparar para produção:

1. **Configurar CSS de produção:**
   ```bash
   npm run build
   ```

2. **Verificar arquivos:**
   - `index.html` - Página principal
   - `assets/` - Todos os recursos
   - `site.webmanifest` - PWA

3. **Upload para servidor:**
   - Subir todos os arquivos
   - Configurar servidor web (Apache, Nginx, etc.)
   - Certificar HTTPS para PWA

## 📄 Estrutura do Projeto

```
voltz-landing-page/
├── assets/
│   ├── css/
│   │   ├── main.css          # ⚠️  Configurar imports aqui
│   │   ├── core.css          # CSS completo (dev)
│   │   ├── core-purge.css    # CSS otimizado (prod)
│   │   └── ...
│   ├── js/
│   │   ├── modal.js          # Sistema de modal e API
│   │   ├── form-mask.js      # Máscaras de formulário
│   │   └── ...
│   └── images/
│       ├── favicons...
│       └── logos...
├── index.html                # Página principal
├── site.webmanifest         # PWA manifest
└── package.json             # Dependências
```

## 🔧 Configurações importantes

### main.css - Imports (⚠️ IMPORTANTE):

**Para desenvolvimento:**
```css
/* @import "./core-purge.css"; */  ← Comentar
@import "./core.css";              ← Descomentar
```

**Para produção:**
```css
@import "./core-purge.css";        ← Descomentar
/* @import "./core.css"; */        ← Comentar
```

## 🐛 Troubleshooting

### CSS não carrega:
- Verificar imports corretos no `main.css`
- Executar `npm run build` ou `npm run dev`

### Erro de CORS:
- Verificar se Lambda tem headers CORS
- Em dev: O código detecta automaticamente

### Formulário não envia:
- Verificar console do browser
- Testar endpoint diretamente
- Verificar formato dos dados

## 👥 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📞 Contato

**Voltz** - Impulsione o comércio local
- Website: [voltz.com.br](https://voltz.com.br)
- E-mail: contato@voltz.com.br

---

*Feito com ❤️ para transformar o comércio local* 
