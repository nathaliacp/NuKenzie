import imgLandingPage from "../../assets/img/index.png"
import "./reset.css"
import "./landingPage.css"
function LandingPage({setIsLoggedIn}) {

    return (
        <main className="mainLandingPage">
            <section className="landingSection">
                <p className="landingName"><span>Nu</span> Kenzie</p>

                <h1 className="landingTitle">Centralize o controle das suas finanças</h1>

                <p className="landingText">de forma rápida e segura</p>

                <button className="landingBtn" onClick={() => setIsLoggedIn(true)}>Iniciar</button>
            </section>

            <section className="imgSection">
                <img src={imgLandingPage} alt="naosei" />
            </section>
        </main>
    )
}

export default LandingPage;