import "./card.css"

export default function Card({transaction, removeTransaction}) {

    return (
                <li className={transaction.type === "Entrada" ? 
                "transactionItem transactionItemGreen" : "transactionItem transactionItemGrey"}>
                    <div className="transactionInfo">
                        <p>{transaction.description}</p>
                        <span>{transaction.type}</span>
                    </div>

                    <div className="transactionValue">
                        <p>R$ {transaction.totalMoney}</p>
                        <button className="trashBtn" onClick={() => removeTransaction(transaction)}></button>
                    </div>
                </li>
    )
}