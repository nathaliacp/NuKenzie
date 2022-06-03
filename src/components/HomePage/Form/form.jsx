import { useState } from "react";
import "./form.css";

export default function Form({listTransactions, setListTransactions}) {    

    const [description, setDescription] = useState("");
    const [totalMoney, setTotalMoney] = useState(0);
    const [type, setType] = useState("Entrada");

    const send = () => {

        const idTransaction = "id-" + Math.random().toString(16).slice(2);

        const newTransaction = {
            id: idTransaction,
            description: description, 
            totalMoney: totalMoney, 
            type: type
        }
        

        setListTransactions([...listTransactions, newTransaction])
    }

    return (
        <div className="formSection">

            <label className="descriptionLabel">Descrição</label>
            <input 
            className="descriptionInput" 
            type="text" 
            required
            placeholder="Digite aqui sua descrição"
            onChange={(e) => {
                setDescription(e.target.value)
            }}
            />
            <span className="descriptionSpan">Ex: Compra de roupas</span>

            <div className="transactionValueType">
                <div className="totalValueDiv">
                    <label>Valor</label>
                    <input 
                    className="valueInput" 
                    type="number" 
                    required
                    min={1}
                    placeholder="1"
                    onChange={(e) => {
                        setTotalMoney(e.target.value)
                    }}
                    />
                </div>

                <div className="valueType">
                    <label>Tipo de valor</label>
                    <select 
                    className="valueTypeSelect" 
                    defaultValue="Entrada"
                    onChange={(e) => {
                        setType(e.target.value)
                    }}
                    >
                        <option className="valueOptions" value="Entrada">Entrada</option>
                        <option className="valueOptions" value="Saída">Saída</option>
                    </select>
                </div>
            </div>


            <button className="insertValueBtn" onClick={send}>Inserir valor</button>
        </div>
    )
}