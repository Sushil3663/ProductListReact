// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react'
// import "./style.css"
// import Menu from './menuApi'
// import MenuCard from './MenuCard'
// import Navbar from "./Navbar";

// // used to print unique category and when item added in Api, automatically get viewed 
// //  ... called spreadOperator
// const uniqueList = [...new Set(
//     Menu.map((value) => {
//         return value.category;
//     })
//     ),
// ];
// console.log(uniqueList);

// const Resturent = () => {

//    const [menuData, setMenuData] = useState(Menu); // using state hook. I help to get and store data. Two array is used in useState hook. Here data is get through api i.e menuApi self created api.
//    const [menuList, setMenuList] = useState(uniqueList)

//    const filterItem = (category) => {
//     let updatelist = Menu.filter((value)=>{
//         // console.log(val.category)
//         return value.category === category;
//     })
//     setMenuData(updatelist);
//    };

// //    let filterLunch = (lunch) => {
// //     let updateLunch = Menu.filter((lun) =>
// //     {
// //         return lun.category === lunch
// //     })
// //     setMenuData(updateLunch);
// //    };

// //    var filterevening = (evening) => {
// //         var updateEvening = Menu.filter((even) =>{
// //             return even.category === evening
// //         })
// //         setMenuData(updateEvening);
// //    };

// //    var filterDinner = (dinner) => {
// //     var updateDinner = Menu.filter((dinn) =>{
// //         return dinn.category === dinner
// //     })
// //     setMenuData(updateDinner);
// // };

// // const filterAll = () =>{
// //     return setMenuData(Menu)
    
// // }

//   return (
//     <>
//     <Navbar filterItem={filterItem} />
//     {/* <nav className='navbar'>
//         <div className="btn-group">
//             <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
//             <button className='btn-group__item' onClick={ () => filterLunch("lunch")}>Lunch</button>
//             <button className='btn-group__item' onClick={ () => filterevening("evening")}>Evening</button>
//             <button className='btn-group__item' onClick={() => filterDinner("dinner")}>Dinner</button>
//             <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>

//         </div>

//     </nav> */}
//     {/* using props */}
//        <MenuCard menuData={menuData} /> 
//     </>
//   )
// }

// export default Resturent




import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  // eslint-disable-next-line no-unused-vars
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
