# Documentação do Projeto WebMap com Flask

Este projeto implementa um sistema de controle de acesso para um WebMap usando Flask, SQLite e Flask-Login. O objetivo é proteger o acesso ao mapa com autenticação de usuários e garantir que todos os recursos (CSS, JS, layers) sejam carregados corretamente.

---

## Estrutura do Projeto

```
projeto/
├── app/
│   ├── __init__.py
│   ├── models.py
│   ├── routes.py
│   ├── forms.py
│   ├── templates/
│   │   ├── base.html
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── webmap.html
│   │   └── admin_users.html
│   └── static/
│       └── qgis2web/
│           ├── css/
│           ├── js/
│           ├── layers/
│           └── resources/
├── config.py
├── run.py
└── README.md
```

---

## Requisitos

- Python 3.8+
- Flask
- Flask-SQLAlchemy
- Flask-Login
- Flask-WTF

Instale as dependências com:

```bash
pip install Flask Flask-SQLAlchemy Flask-Login Flask-WTF
```

---

## Configuração

### 1. **Configuração do Ambiente**

Crie um ambiente virtual e instale as dependências:

```bash
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. **Banco de Dados**

O banco de dados SQLite é criado automaticamente na primeira execução. Para recriar o banco de dados:

```bash
flask shell
>>> from app import db
>>> db.create_all()
```

---

## Funcionalidades

### 1. **Autenticação de Usuários**

- **Registro**: Os usuários podem se registrar, mas suas contas ficam inativas até serem aprovadas por um administrador.
- **Login**: Apenas usuários ativos podem fazer login.
- **Logout**: Encerra a sessão do usuário.

### 2. **Painel de Administração**

- **Aprovar Usuários**: Administradores podem aprovar ou rejeitar novos usuários.
- **Excluir Usuários**: Administradores podem remover usuários.

### 3. **Proteção de Rotas**

- Rotas protegidas com `@login_required`.
- Acesso administrativo restrito com `@admin_required`.

---

## Código Principal

### 1. **Modelos (`app/models.py`)**

Define a estrutura do banco de dados.

```python
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from app import db

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    is_active = db.Column(db.Boolean, default=False)
    is_admin = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
```

### 2. **Rotas (`app/routes.py`)**

Define as rotas da aplicação.

```python
from flask import render_template, redirect, url_for, flash, abort
from flask_login import login_user, logout_user, login_required, current_user
from app import app, db
from app.models import User
from app.forms import LoginForm, RegistrationForm

@app.route('/')
def home():
    return redirect(url_for('login'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, is_active=False)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Sua conta foi criada! Aguarde aprovação do administrador.')
        return redirect(url_for('login'))
    return render_template('register.html', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user and user.check_password(form.password.data):
            if not user.is_active:
                flash('Sua conta ainda não foi aprovada!')
                return redirect(url_for('login'))
            login_user(user)
            return redirect(url_for('webmap'))
        flash('Credenciais inválidas')
    return render_template('login.html', form=form)

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))

@app.route('/webmap')
@login_required
def webmap():
    return render_template('webmap.html')

@app.route('/admin/users')
@login_required
def admin_users():
    if not current_user.is_admin:
        abort(403)
    users = User.query.all()
    return render_template('admin_users.html', users=users)

@app.route('/admin/approve/<int:user_id>')
@login_required
def approve_user(user_id):
    if not current_user.is_admin:
        abort(403)
    user = User.query.get_or_404(user_id)
    user.is_active = True
    db.session.commit()
    flash(f'Usuário {user.username} aprovado com sucesso!')
    return redirect(url_for('admin_users'))

@app.route('/admin/delete/<int:user_id>')
@login_required
def delete_user(user_id):
    if not current_user.is_admin:
        abort(403)
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    flash(f'Usuário {user.username} removido!')
    return redirect(url_for('admin_users'))
```

### 3. **Formulários (`app/forms.py`)**

Define os formulários de login e registro.

```python
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, EqualTo, ValidationError
from app.models import User

class LoginForm(FlaskForm):
    username = StringField('Usuário', validators=[DataRequired()])
    password = PasswordField('Senha', validators=[DataRequired()])
    submit = SubmitField('Entrar')

class RegistrationForm(FlaskForm):
    username = StringField('Usuário', validators=[DataRequired()])
    password = PasswordField('Senha', validators=[DataRequired()])
    confirm_password = PasswordField('Confirmar Senha', validators=[
        DataRequired(),
        EqualTo('password', message='Senhas devem ser iguais')
    ])
    submit = SubmitField('Registrar')

    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user:
            raise ValidationError('Nome de usuário já existe')
```

---

## Como Executar

1. **Inicie o Servidor**:
   ```bash
   python run.py
   ```

2. **Acesse a Aplicação**:
   - Abra o navegador e acesse `http://localhost:5000`.

---

## Próximos Passos

- Implementar confirmação por e-mail para novos registros.
- Adicionar funcionalidades de recuperação de senha.
- Integrar o WebMap gerado pelo QGIS.

---

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
