import '../App.css'; 
import {useState} from "react"; 
 
function App() { 
 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState(""); 

 
 const clearForm = () => { 
   setFirstName(""); 
   setLastName(""); 
   setEmail(""); 
   setPassword(""); 
 }; 
 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Account created!"); 
   clearForm(); 
 }; 
 
 return ( 
   <div className="App"> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Sign Up</h2> 
         <div className="Field"> 
           <label> 
             First name <sup>*</sup> 
           </label> 
           <input 
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <input 
             value={lastName} 
             onChange={(e) => { 
               setLastName(e.target.value); 
             }} 
             placeholder="Last name" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             placeholder="Password" 
           /> 
         </div> 
         <button type="submit"> 
           Create account 
         </button> 
       </fieldset> 
     </form> 
   </div> 
 ); 
} 

export default App; 