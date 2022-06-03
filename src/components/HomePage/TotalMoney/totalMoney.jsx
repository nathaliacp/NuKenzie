import "./totalMoney.css"

export default function TotalMoney({listTransactions}) {

    const totalMoney = listTransactions.reduce((acc, current) => {
        if(current.type === "Saída"){
            return acc+Number(-current.totalMoney)
        }

        return acc+Number(current.totalMoney)
    }, 0);

    return (
        <div className="totalMoneyDiv">
            <p className="totalMoneyValue">Valor Total: <span>${totalMoney}</span></p>
            <p className="totalMoneyText">O valor se refere ao saldo</p>
        </div>
    )
}