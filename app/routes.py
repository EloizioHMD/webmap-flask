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
        user = User(
            username=form.username.data,
            is_active=False  # Novo usuário inativo por padrão
        )
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

@app.route('/admin/users')
@login_required
def admin_users():
    if not current_user.is_admin:
        abort(403)  # Proíbe acesso não autorizado
    
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

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))

@app.route('/webmap')
@login_required
def webmap():
    return render_template('webmap.html')