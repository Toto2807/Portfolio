function Header(){
    return(
        <div className="flex justify-around p-5 relative z-10">
            <a href="/" className="text-2xl font-bold">Mon Portfolio</a>
            <nav className="flex justify-around gap-10">
                <a href="#projets" className="font-bold">Mes projets</a>
                <a href="#presentation" className="font-bold">Qui je suis ?</a>
            </nav>
        </div>
    )
}

export default Header;