import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  console.log("PUBLIC");
  
  return <Outlet />;
};

export default PublicLayout;
