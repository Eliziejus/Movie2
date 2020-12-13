// import React, { useState } from 'react';

// const Search = (props) => {
//      const [q, setQ] = useState('');
    

//     const handleSearchInputChanges = (e) => {
//         setQ(e.target.value);
//     }

//     const resetInputField = () => {
//         setSearchValue('');
//           //console.log(props);
//     }

//     const callSearchFuntion = (e) => {
//         e.preventDefault();
//         props.search(q);
      
//         resetInputField();
//     }

//     return (
//         <form className="search">
//             <input style={{style:'1rem'}} type="text" value={q} onChange={handleSearchInputChanges}></input>

//             <input type="submit" value="SEARCH" onClick={callSearchFuntion}></input>
//         </form>
//     );

   
// }
// export default Search;