// I B RR L
import { Link } from "react-router-dom";

const AllLinks = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/Project'>Project</Link>
      <Link to='/About'>About</Link>
      <Link to='/Contact'>Contact</Link>
    </div>
  );
};
export default AllLinks;
