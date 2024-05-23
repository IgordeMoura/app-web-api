import styles from './EditarLivro.module.css';

import { useState, useEffect } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';

import Input from '../components/form/Input';
import Select from '../components/form/Select/Select';


function EditarLivros(params){
    const navigate = useNavigate();

    /* State de Dados das Categorias Vindas do Arquivo db.json */
    const [categories, setCategories] = useState([]);

    // Recuperando o ID da URl
    const {id} = useParams(); //useParams pega o parametro da URL
    console.log('ID: ' + id);

    const [book, setBook] = useState({});

    /* Recupera os Dados de Categoria do Arquivo db.json */
    useEffect(() =>{

        fetch(
            'http://localhost:5000/categories',
            {
                method: 'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            }
        ).then(
            (response) => response.json()
        ).then(
            (data) =>{
                setCategories(data)
            }
        ).catch(
            (error) =>{
                console.log(error);
            }
        )
    }, []);

    // Recuperando os Dados de Livro Para a Edição
    useEffect(()=>{ 

        fetch(`http://localhost:5000/books/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
                setBook(data)
                console.log(data)
            })
            .catch((err)=>{console.log(err)});

    }, []);

    /* Handler de Captura dos Dados de Input */
    function handlerChangeBook(event){

        setBook({...book, [event.target.name] : event.target.value});
        console.log(book)
    }

    /* Handler de Captura dos Dados de Select*/
    function handlerChangeCategory(event){

        setBook({...book, category:{
            id: event.target.value,
            category: event.target.options[event.target.selectedIndex].text
        }});
    }

    // Funcionalidade de Edição de Livro
    function editBook(book){

        fetch(`http://localhost:5000/books/${book.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(book)
        })
        .then (resp => resp.json())
        .then ((data) => {
            setBook(data)
            navigate('/livros', {state: 'Livro Alterado com Sucesso!'})
        })
        .catch (err=>(console.log(err)));
    }

    // FUnção de Submit Controlado dos Dados
    function submit (event){
        event.preventDefault();
        editBook(book);
    }

    return(
        <div className={styles.book_container}>
            <h1>Edição de Livros</h1>

            <form onSubmit={submit}>

                <Input
                    type='text'
                    name='nome_livro'
                    id='nome_livro'
                    placeholder='digite o titulo do livro'
                    text='digite o titulo do livro'
                    value={book.nome_livro}
                    handlerOnChange={handlerChangeBook}
                    />                

                <Input
                    type='text'
                    name='nome_autor'
                    id='nome_autor'
                    placeholder='digite o nome do autor'
                    text='digite o nome do autor'
                    value={book.nome_autor}
                    handlerOnChange={handlerChangeBook}
                    />

                <Input
                    type='text'
                    name='descricao'
                    id='descricao'
                    placeholder='digite uma descrição para o livro'
                    text='descrição'
                    value={book.descricao}
                    handlerOnChange={handlerChangeBook}
                    />
                
                <Select
                    name='categoria_id'
                    text='Categoria'
                    options={categories}
                    handlerOnChange={handlerChangeCategory}
                />

                <button type='submit' value='Editar'>teste</button>
            </form>
        </div>
    );
}

export default EditarLivros;