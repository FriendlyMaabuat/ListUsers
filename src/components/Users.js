import React, {useState, useEffect} from "react"

export default function Users() {
  const [arr, changeArr] = useState([])

  useEffect(()=>{
    fetch("https://reqres.in/api/users?page=2")
    .then((response)=>response.json())
    .then((json)=> changeArr(json))
  })


  return (
    <div>
    <h3>User Page</h3> 
       {
           arr["data"].map((item)=>{
            return(
                <div key={item.id}>
                    <figure>
                        <img src={item.avatar} alt=""/> 
                    </figure>
                <p> first name:{item.first_name}  </p>
                <p> last name:{item.last_name}   </p> 
                <p> email:{item.email}   </p>
                <p>===============================</p>
                </div>
            )
        })
       }
</div>
  )
}
