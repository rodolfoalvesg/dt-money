import { Container } from "./style";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from "../../hooks/useTransactions";

export function Summary(){
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount
        }else{
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0
    })
    

    return(
        <Container>
            <section>
                <header>
                    <p>Entradas</p>

                    <img src={incomeImg} alt="Entradas" />
                </header>

                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </section>


            <section>
                <header>
                    <p>Saídas</p>

                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>
                    - {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.withdraw)}
                </strong>
            </section>

            <section>
                <header>
                    <p>Total</p>

                    <img src={totalImg} alt="Total" />
                </header>

                <strong>
                {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total)}
                </strong>
            </section>

            
        </Container>
    );
}