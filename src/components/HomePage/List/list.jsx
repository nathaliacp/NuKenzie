import Card from "./Card/card.jsx"
import "./list.css"



export default function List({listTransactions, filter, removeTransaction}) {

    function filterAdd(){
        return  listTransactions.filter((transaction) => {
            return filter === "Todos" ? listTransactions : transaction.type === filter
        }) 
    }

    return (
        <ul className="transactionsList">
            {   
                listTransactions.length === 0 ?
                <div className="emptyTransactions">
                    <h2>Você ainda não possui nenhum lançamento</h2>
                    <div className="emptyCardIMG"></div>
                    <div className="emptyCardIMG"></div>
                    <div className="emptyCardIMG"></div>
                    <div className="emptyCardIMG"></div>
                </div>
                :
                filterAdd().map((transaction) => <Card key={transaction.id} transaction={transaction} removeTransaction={removeTransaction}/>)
            }
        </ul>
    )
}