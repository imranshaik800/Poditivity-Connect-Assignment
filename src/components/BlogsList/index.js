import {useState,useEffect} from "react"
import {v4 as uuidv4} from "uuid"
import BlogsItemList from "../BlogsItemList"

import "./index.css"

const getLocalItems = () => {
    const localList = localStorage.getItem("list");

    if (localList) {
        return JSON.parse(localStorage.getItem("list"));
    } else {
        return [];
    }
    
}


const BlogsList = () => {
    const [Title,setTitle] = useState("")
    const [Author,setAuthor] = useState("")
    const [Content,setContent] = useState("")
    const [date,setDate] = useState("")
    const [ItemList,setItemList] = useState(getLocalItems())





    const TitleElement = (event) => {
        setTitle(event.target.value)
    }

    const AuthorElement = (event) => {
        setAuthor(event.target.value)
    }

    const ContentElement = (event) => {
        setContent(event.target.value)
    } 

    const DateElement = (event) => {
        setDate(event.target.value)
    }

    const CreateButton = (event) => {
        event.preventDefault()
        const newItem = {
            id : uuidv4(),
            Title,
            Author,
            Content,
            date
        }
        setItemList((previousList) => [...previousList,newItem]);
        setTitle("")
        setAuthor("")
        setContent("")
        setDate("")

    }


    function deleteItem(id)  {
        const newList = ItemList.filter((each) => each.id !== id)
        setItemList(newList)
    }


    useEffect(() => {
        localStorage.setItem("list",JSON.stringify(ItemList))
    },[ItemList]);
 
    return (
        <div className="main-container">
            <div className="blogs-container">
            <h1>Create Your Blog</h1>
            <form onSubmit={CreateButton} className="form-container">
                <input onChange={TitleElement} className="input-element" type="text" placeholder="Title" value={Title}/>
                <input onChange={AuthorElement} className="input-element" type="text" placeholder="Author" value={Author}/>
                <input onChange={ContentElement} className="input-element" type="text" placeholder="Content" value={Content}/> 
                <input onChange={DateElement} className="input-element" type="date" value={date}/>
                <button className="create-button">Create</button>
            </form>
            </div>
            <div className="blogs-item">
            {ItemList.map((eachItem) => (<BlogsItemList key={eachItem.id} BlogsDetails={eachItem} deleteItem={deleteItem}/>))}
        </div>
        </div>
    )
} 

export default BlogsList