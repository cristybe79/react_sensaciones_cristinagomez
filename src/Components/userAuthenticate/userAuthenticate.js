// import { useContext, useState } from "react";
// import { UserAutContext } from "../../Context/UserAutContext";

// const UserAutentificado = () => {
//     const { setAutenticado } = useContext(UserAutContext)
//     const [userName, setUserName] = useState()
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         setAutenticado(true)
//     }
//     return (
//         <>
//         <form onSubmit={handleSubmit}>
//             <label>
//             User Name:
//             <input
//                 type="text"
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//             />
//             </label>
//         </form>
//         </>
//     );
// }

// export default UserAutentificado