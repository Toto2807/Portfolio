function Card(){
    return(
        <div id="projets" className="projets grid grid-cols-2 gap-5 p-5 justify-items-center">
            <a href="https://sutom-mu.vercel.app">
                <div className="projet flex flex-col items-center gap-5 p-5 border-2 border-white rounded-lg w-125 bg-slate-900 text-white shadow-[0_0_15px_rgba(255,255,255,0.7),inset_0_0_10px_rgba(255,255,255,0.5)] transition-transform duration-500 hover:scale-105 scroll-mt-24">
                    <img src="../src/assets/SUTOM.png" className="w-100 rounded-lg"></img>
                    <h2 className="font-bold text-xl underline">Projet 1 : SUTOM</h2>
                    <p>Ceci est un clone du jeu aussi SUTOM avec un catalogue de mot plus simple.</p>
                </div>
            </a>
        </div>
    )
}

export default Card;