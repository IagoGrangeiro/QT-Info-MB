import React from "react";

export const Header = ({ title }: { title: string }) => {
    return (
        <header className="col-span-3 p-4">
            <h1>Rumo ao Oficialato</h1>
            <h6>Aplicação Web local para auto-estudo</h6>
        </header>
    );
}

export const Sidebar = () => {
    return (
        <nav className="max-w-48 bg-cyan-100 p-4">
            <ul>
                <li><a href="#">Quadro-Técnico</a></li>
                <li><a href="#">Auxiliar da Armada</a></li>
            </ul>
        </nav>
    );
}

export const Footer = () => {
    return (
        <footer className="col-span-3">footer</footer>
    );
}

