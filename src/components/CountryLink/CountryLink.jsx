import { Link } from "../Link/Link";
import { countryPath } from "../../constans/routerPath";

export const CountryLink = ({ name, children, ...otherProps }) => {
  return (
    <Link
      to={`${countryPath}${name}`}
      {...otherProps}
    >
      { children }
    </Link>
  );
};
