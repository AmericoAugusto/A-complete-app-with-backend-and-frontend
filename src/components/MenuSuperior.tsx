const MenuSuperior = () => {
    return (
        <nav className="nav bar navbar-expand-sm bg-primary navbar-dark sticky-top">
            <div className="container">
                <a className="mavbar-brand" href="#">Controle Pessoal de livros</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inclusão</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Manutenção</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Resumo</a></li>
                </ul>
            </div>
        </nav>
    )
};
export default MenuSuperior;