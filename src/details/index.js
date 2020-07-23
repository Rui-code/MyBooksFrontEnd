import React from 'react';
import './styles.css'

function Detail () {
    return (
        <section className="centralTable">
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Autor</th>
                    <th>Descrição</th>
                </tr>
                <tr>
                    <td>O jogador</td>
                    <td>Fiodor Dostoievsky</td>
                    <td>Diario de um jovem jogador de cassinos</td>
                </tr>
            </table>
        </section>
    )
}

export default Detail;