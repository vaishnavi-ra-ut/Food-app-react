import AccordianItems from "./AccordianItems";

const Category = ({ data , showItems , setShowIndex}) => {
    // const[showItems , setShowItems] = useState(false)
    const handleClick = ()=>{
        // setShowItems(!showItems);
        setShowIndex(showItems) ;
    }
    return (
      <div className="w-6/12 mx-auto my-4 bg-green-50 shadow-lg p-4 " >
        <div className="flex justify-between cursor-pointer " onClick={handleClick} >
          <span className="font-bold " >{data.title}</span>
          <span className="cursor-pointer">🔽</span>
        </div>
        {showItems && <AccordianItems items={data.itemCards}/>}
      </div>
    );
  };
    
export default Category;  