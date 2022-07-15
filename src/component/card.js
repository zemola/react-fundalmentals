const Card = ({imageUrl,name,description,price}) => {
    return (  
        <div>
            <div>
                <img src= {imageUrl} alt = {name}/>         
            </div>
            <div><h1>{name}</h1>
            <p>{description}</p>
            </div>
            <div>
                <p>N ❤{price}</p>
            </div>
        </div>
    );
}
 
export default Card;