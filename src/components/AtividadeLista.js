import React from 'react'
import Atividades from './Atividades'

export default function AtividadeLista(props) {
    return (
        <div className="mt-3">

          {props.atividades.map(ativ =>(
              <Atividades
                key={ativ.id}
                deletarAtividade={props.deletarAtividade}
                pegarAtividade={props.pegarAtividade}
                ativ={ativ}
              />
          ))}

        </div>
    )
}
