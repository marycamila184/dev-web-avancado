export default function Toolbar(){
    return(
        <div className="Toolbar" onClick={() =>{
            alert("Você clicou na toolbar!");

        }}>
            <button onClick={() => alert("Playing!")}>
                Play Movie
            </button>
            <button onClick={() => alert("Uploading!")}>
                Upload Image
            </button>
        </div>
    );
}