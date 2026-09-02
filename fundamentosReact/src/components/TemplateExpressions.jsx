const TemplateExpressions = () => {
    const nome = "Matheus"
    const data = {
        tempo: 12,
        profissao: "Programador"
    }
    return (
        <div>
            <h1>Olá {nome}, tudo bem?</h1>
            <p>Você atua como {data.profissao}?</p>
            <p>{data.tempo}</p>
        </div>
    )
}

export default TemplateExpressions