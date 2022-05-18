import React from 'react'

export const ContactCard =(props) => {
    const {name,mail,phone,id,imgUrl}=props

    const[isActive,setIsActive]= React.useState(false)
  return (
    // <div className={styles.container}>
     <div style={{display:"flex",justifyContent:"space-evenly",}}>
    <div>
      <img style={{width:"90px",height:"90px",borderRadius:"10px"}} src={imgUrl}/></div>
    <div>{name}</div>
      <div>{mail}</div>

<div>
      {isActive?
     (<button onClick={()=>setIsActive(!isActive)}>Showmore</button>)
    :
    (<div onClick={()=>setIsActive(!isActive)}>{phone}</div>)}

</div>
 </div>
  )
}
