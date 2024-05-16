import styles from './CardBook.module.css';

function CardBook({id, livro, autor, category, handlerRemove}){

    const remove = (event)=>{
        event.preventDefault();
        handlerRemove(id);
    }

    return(
        <div className={styles.book_card}>

            <h4>{livro}</h4>
            
            <p></p>{autor}

            <p className={styles.category_text}>
                <span></span> {category}
            </p>

            <div className={styles.card_book_actions}>
                <button onClick={remove}>
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default CardBook;