import '../styles/categories.css'

const Categories = () => {
    let Categories=[
        {link:"All"},
        {link:"Sports"},
        {link:"Comedy"},
        {link:"Fashion"},
        {link:"Vlogs"},
        {link:"Movies"},
        {link:"Travel"},
        {link:"Food"},
        {link:"BollyWood"},
        {link:"Kids"},
        {link:"Recently Uploaded"},
        {link:"Fashion"}
    ]
    
    return ( 
        <div className="categories">
            <ul>
                {Categories.map((data)=>{
                return(
                    <li><a href="">{data.link}</a></li>
                )
            })}
            </ul>
        </div>
     );
}
 
export default Categories;