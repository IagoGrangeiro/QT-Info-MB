import React from "react";

const Gerenciador = () => {
    return (
        <div>
            <h1 className="text-1xl font-bold px-2">Gerenciador de Perguntas</h1>
            <form className="max-w-2xl mx-auto mt-2">
                <label className="block mt-4" htmlFor="pergunta">Digite a pergunta no campo abaixo:</label>
                <textarea className="border border-gray-300 rounded-lg block w-full p-2.5" name="pergunta" id="pergunta" rows={6}></textarea>
                <label className="block mt-4" htmlFor="a">Digite a alternativa <strong>a</strong>:</label>
                <textarea className="border border-gray-300 rounded-lg block w-full p-2.5" name="a" id="a" rows={1}></textarea>
                <label className="block mt-4" htmlFor="b">Digite a alternativa <strong>b</strong>:</label>
                <textarea className="border border-gray-300 rounded-lg block w-full p-2.5" name="b" id="b" rows={1}></textarea>
                <label className="block mt-4" htmlFor="c">Digite a alternativa <strong>c</strong>:</label>
                <textarea className="border border-gray-300 rounded-lg block w-full p-2.5" name="c" id="c" rows={1}></textarea>
                <label className="block mt-4" htmlFor="d">Digite a alternativa <strong>d</strong>:</label>
                <textarea className="border border-gray-300 rounded-lg block w-full p-2.5" name="d" id="d" rows={1}></textarea>
                <label className="block mt-4" htmlFor="e">Digite a alternativa <strong>e</strong>:</label>
                <textarea className="border border-gray-300 rounded-lg block w-full p-2.5" name="e" id="e" rows={1}></textarea>
                <label className="block mt-4" htmlFor="resposta">Selecione a alternativa correta:</label>
                <select className="block p-2 rounded-sm border border-gray-300" id="resposta">
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d">d</option>
                    <option value="e">e</option>
                </select>
                <label className="block mt-4" htmlFor="assunto">Digite o assunto da pergunta:</label>
                <textarea className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="assunto" id="assunto" rows={1}></textarea>
                <label className="block mt-4" htmlFor="ano">Digite o ano da prova de referência:</label>
                <input className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 block w-24" pattern="" id="ano"/>
                <input className="bg-gray-500 rounded-lg p-2 mt-4 hover:cursor-pointer hover:text-white" type="submit" value={"Enviar"}/>
            </form>
        </div>
    );
}

export default Gerenciador;