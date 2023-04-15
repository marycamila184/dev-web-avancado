export default function ButtonCustom(){
    function handleClick(){
        alert ("Ai!! Você me clicou!!")
    }

    return (
        <button onClick={handleClick}>
            Me Clica vai...
        </button>
    );
}
