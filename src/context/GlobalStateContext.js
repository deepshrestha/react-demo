export const GlobalStateContext = createContext(
     {
         id: Number,
         name: String
     }
 )
 
 const GlobalState = ({children}) => {
     const [data, setData] = useState(
         {
             id: 1,
             name: "Deep"
         }
     )
     
     return(
         <GlobalStateContext.Provider value={[data, setData]}>
             {children}
         </GlobalStateContext.Provider>
     )
 }

 export default GlobalState