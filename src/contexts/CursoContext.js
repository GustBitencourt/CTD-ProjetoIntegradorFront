import { createContext, useReducer, useEffect } from "react";
import { cursoReducer } from '../reducers/cursoReducer';


 export const CursoContext = createContext({});

 const CursoContextProvider = ({children}) =>{
     const[cursos, dispatch] = useReducer(cursoReducer, [],()=>{
        const localData = localStorage.getItem('cursos');
        return localData ? JSON.parse(localData) : [];
     });
     useEffect(()=>{
         localStorage.setItem('cursos', JSON.stringify(cursos));
     }, [cursos])

     const addCurso = (curso) => dispatch({type: 'ADD_CURSO', payload: curso})
     /* const deletCurso = (curso) => dispatch({type: 'DELETE_CURSO', payload: curso.id}) */
    return (
        <CursoContext.Provider value={{cursos, addCurso }}>
            {children}
        </CursoContext.Provider>
    )
 }

 export default CursoContextProvider;