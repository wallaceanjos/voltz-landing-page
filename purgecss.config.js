module.exports = {
  content: [
    './index.html',
    './assets/js/**/*.js',
    './**/*.html'
  ],
  css: [
    './assets/css/core.css',
    './assets/css/colors.css', 
    './assets/css/forms.css',
    './assets/css/icons.css'
  ],
  output: './assets/css/',
  safelist: [
    // Classes básicas que sempre devem ser mantidas
    'text-3xl',
    'font-bold', 
    'underline',
    // Adicione aqui outras classes que você sempre usa
    'container',
    'btn',
    'form-control'
  ]
} 