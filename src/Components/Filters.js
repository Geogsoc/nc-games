// import React from "react";

// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getCategories } from "../Utils/api";

// export default function Filters() {
//   const [categories, setCategories] = useState([]);

//   let navigate = useNavigate();
//   const { category } = useParams();

//   useEffect(() => {
//     getCategories().then((categoriesFromApi) => {
//       setCategories(categoriesFromApi);
//     });
//   }, []);

//   const handleCategory = (event) => {
//     navigate(`/reviews/${event.target.value}`);
//   };
//   const handleSort = (event) => {
//     const valueObj = JSON.parse(event.target.value);
//     if (category) {
//       navigate(`/reviews/${category}/${valueObj.sort_by}/${valueObj.order}`);
//     } else {
//       navigate(`/${valueObj.sort_by}/${valueObj.order}`);
//     }
//   };
//   return (
//     <div className="wrapper">
//       <label className="navitem">
//         Category{" "}
//         <select onChange={handleCategory}>
//           {categories.map((category) => {
//             return (
//               <option key={category.slug} value={category.slug}>
//                 {category.slug}
//               </option>
//             );
//           })}
//         </select>{" "}
//       </label>
//       <label className="navitem">
//         Sort by
//         <select onChange={handleSort}>
//           <option value='{"sort_by":"created_at", "order": "DESC"}'>
//             Age descending
//           </option>
//           <option value='{"sort_by":"created_at", "order": "ASC"}'>
//             Age ascending
//           </option>
//           <option value='{"sort_by":"comment_count", "order": "DESC"}'>
//             Comments descending
//           </option>
//           <option value='{"sort_by":"comment_count", "order": "ASC"}'>
//             Comments asccending
//           </option>
//           <option value='{"sort_by":"votes", "order": "DESC"}'>
//             Votes decending
//           </option>
//           <option value='{"sort_by":"votes", "order": "ASC"}'>
//             Votes ascending
//           </option>
//         </select>
//       </label>
//     </div>
//   );
// }
