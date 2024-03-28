import Styles from './Container.module.css'; 

function Container (props){

    return(
        <div className={`${Styles.Container} ${Styles.min_height}`}>
            {props.children}
        </div>
    )
}

export default Container;