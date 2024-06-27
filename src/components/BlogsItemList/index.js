import { AiOutlineDelete } from "react-icons/ai";

import "./index.css"

const BlogsItemList = (props) => {
    const {BlogsDetails,deleteItem} = props 
    const {Title,Author,Content,date,id} = BlogsDetails

    const onDelete = () => {
        deleteItem(id)

    }
    return (
        <div className="Blogs">
            <div className="blogs-items">
            <h1 className="Title">{Title}</h1>
            <p className="Author">{Author}</p>  
            <p className="Content">{Content}</p>
            <p className="Data">{date}</p>
            <button onClick={onDelete} className="delete-button"><AiOutlineDelete /></button>
            </div>
            </div>     
    )
}
export default BlogsItemList