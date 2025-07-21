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
    './assets/css/icons.css',
    './assets/css/buttons.css',
    './assets/css/modal.css'
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
    'form-control',
        // Classes de botões
    'button-xs',
    'button-sm',
    'button-md',
    'button-lg',
    'button-xl',
    'pill',
    'outline',
    // Classes de cores
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    // Classes de texto colorido
    'text-primary',
    'text-secondary',
    'text-success',
    'text-warning',
    'text-danger',
    'text-info',
    // Classes de background
    'bg-primary',
    'bg-secondary',
    'bg-success',
    'bg-warning',
    'bg-danger',
    'bg-info',
    'bg-white',
    // Classes de formulário
    'form-group',
    'form-error',
    'form-success',
    'required',
    'block',
    'font-weight-600',
    'font-size-16',
    'border-radius-8',
    'border-radius-16',
    'border-1',
    'border-gray-300',
    'resize-vertical',
    'max-w-600',
    'justify-center',
    'mt-48',
    // Classes do modal de status
    'status-overlay',
    'status-modal',
    'status-icon',
    'loading-spinner',
    'success-icon',
    'bg-secondary-50',
    'hidden',
    'text-center',
    'text-gray-600'
  ]
}
