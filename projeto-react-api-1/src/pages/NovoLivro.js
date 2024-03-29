import Input from '../components/form/Input';

import styles from './NovoLivro.module.css';

function NovoLivro (){
    return(
        <section className={styles.novo_livro_container}>

            <h1>Cadastro de Livro</h1>

            <form>

                <Input
                    type='text'
                    name='nome_livro'
                    id='nome_livro'
                    placeholder='digite o titulo do livro'
                    text='digite o titulo do livro'
                />

                <Input
                    type='text'
                    name='nome_autor'
                    id='nome_autor'
                    placeholder='digite o nome do autor'
                    text='digite o nome do autor'
                />

                <Input
                    type='text'
                    name='descricao'
                    id='descricao'
                    placeholder='digite uma descrição para o livro'
                    text='descrição'
                />

                {/* <p>
                    <input type='text' placeholder='Nome do Livro'/>
                </p>

                <p>
                    <input type='text' placeholder='Nome do Autor'/>
                </p>

                <p>
                    <input type='text' placeholder='Descrição do Livro'/>
                </p> */}

                <p>
                    <input type='submit' value='Cadastrar livro'/>
                </p>

            </form>
        </section>
    )
}

export default NovoLivro;