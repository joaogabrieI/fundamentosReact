const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)  
        console.log('Ativou o evento!')
    }

    const renderAlgumaCoisa = (x) => {
        if (x) {
            return <h1>Renderização 1</h1>
        } else {
            return <h1>Renderização 2</h1>
        }
    }
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou!')}>Clique aqui também</button>
            </div>
            <div>
                <button >Clique aqui também2</button>
            </div>
            {renderAlgumaCoisa(false)}      
            {renderAlgumaCoisa(true)}
        </div>
    )


}

export default Events