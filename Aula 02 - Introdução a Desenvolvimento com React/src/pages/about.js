import { useParams } from 'react-router-dom'
import Footer from './../components/Footer/index';

export default function About() {
    const { name } = useParams()
    return (
        <div>
            <p>Ola usuario {name}</p>
            <Footer />
        </div>
    )
}