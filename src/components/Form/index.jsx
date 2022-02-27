import React, {useState} from 'react'
import './form.scss'

export function Form(){

    const [value, setValues] = useState() //pegando valores do formulario
    const handleChangeValues = value => {
      setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,
      }))
  }

    const handleClickButton = () => {
      console.log(value) //guardando os valores do formulario 
    }

    return(
        <div className="register-container">
      <h1>Adicionar Série</h1>
      <input 
      type="text"
      name="nome"
      placeholder="Nome"
      onChange={handleChangeValues}
      />
      <input 
      type="text"
      name="age"
      placeholder="Ano de lançamento"
      onChange={handleChangeValues}
      />
      <input 
      type="text"
      name="seasons"
      placeholder="Temporadas"
      onChange={handleChangeValues}
      />
      <input 
      type="text"
      name="synopsis"
      placeholder="Sinopse"
      onChange={handleChangeValues}
      />
      <input 
      type="text"
      name="category"
      placeholder="Categoria"
      onChange={handleChangeValues}
      />
      <button onClick={() => handleClickButton()}>Cadastrar</button>
    </div>
    )
}