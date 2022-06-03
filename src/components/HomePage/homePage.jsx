import "./reset.css"
import "./homepage.css"
import { useState } from "react"
import Form from "./Form/form.jsx"
import TotalMoney from "./TotalMoney/totalMoney.jsx"
import List from "./List/list.jsx"

//import TotalMoney 


export default function HomePage({setIsLoggedIn}) {

      // vai receber um array de objetos
    const [listTransactions, setListTransactions] = useState([]);

    const [filter, setFilter] = useState("Todos");

    const removeTransaction = (entry) => {
        const removeEntry = listTransactions.filter((transaction) => {
            return transaction.id !== entry.id
        }) 

        setListTransactions(removeEntry)
    }

    return (
        <div className="homePageContent">
        <header className="homePageHeader">
            <h1 className="homePageTitle"><span>Nu</span> Kenzie</h1>
            <button className="homePageLogoutBtn" onClick={() => setIsLoggedIn(false)}>Sair</button>
        </header>

        <main className="mainContent">

            <div>
                <section>
                    <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/> 
                </section>
        
                <section className="totalMoneySection">
                    <TotalMoney listTransactions={listTransactions}/> 
                </section>
            </div>
            <section className="listSection">
                <div className="listInfos">
                    <p>Resumo Financeiro</p>

                    <div className="listFilters">
                        <button onClick={() => setFilter("Todos")}>Todos</button>
                        <button onClick={() => setFilter("Entrada")}>Entradas</button>
                        <button onClick={() => setFilter("Saída")}>Saídas</button>
                    </div>
                </div>

                 <List listTransactions={listTransactions} filter={filter} removeTransaction={removeTransaction}/> 
            </section>

        </main>
        </div>
    )
}