import { useLocation } from 'react-router-dom';
import Message from '../components/message/Message';
import styles from './Livros.module.css';

function Livros (){

    const location = useLocation();
    let message = '';

    console.log('location state: ' + location.state);

    if (location.state){
        message = location.state;
    }

    return(
        <section className={styles.livros_container}>

            <h1>Aqui Serão Listados os Seus <span>Livros!</span></h1>
            
            {
                message && (
                    <Message
                        msg={message}
                        type='success'
                    />                    
                )
            }


        </section>
    )
}

export default Livros;