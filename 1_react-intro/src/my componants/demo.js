function demo(props){

    function foodOrderHandler(){
        console.log('\n\nOrder:-',props.title)
        if(props.price>=199){
            console.log('Congratulations!! \nNo delivery charges addded!')
            console.log('Final price:-' ,props.price)
        }
        else{
            console.log('Rs 40 delivery charges addded!')
            console.log('Final price:-' ,props.price+40)
        }
        console.log("----------------------")
        
    }

    return( 
        <div className="card" onClick={foodOrderHandler}>
            <div className="img-box">
            <img className="img" src={"https://source.unsplash.com/1600x900/?" + props.img} />
            <p className={props.ratings>=4.5?'rate-tag':'d-none'}>Best Seller</p>
            <p className={props.votes>=1000?'vote-tag':'d-none'}>must try</p>
            </div>
            <h3>{props.title}</h3>
            <p> <span className="price">₹ {props.price}</span> for two persons</p>
            <p className="desc">{props.desc}</p>        
        </div>
    )
}

export default demo