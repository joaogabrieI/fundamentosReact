const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)  
        console.log('Ativou o evento!')
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
                <button>Clique aqui também2</button>
            </div>
        </div>
    )


}

export default Events