import DATA from "../DATA";
import ShopDepartments from "./ShopDepartments";

const DisplayShop = () => {
  const dept = DATA.map((item) => {
    return item.category
  });

  const filteredDept = dept.filter((item, i)=>item !== dept[i + 1])
const shopDept  =["All", ...filteredDept].map((item, i)=><ShopDepartments item={item} Key={i}/>) 

//   console.log(dept);

  return(
    <div>
        <h4>Departments</h4>
        {shopDept}
    </div>
  );
};
export default DisplayShop;
