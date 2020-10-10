import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-brands-svg-icons";

const iconList = Object
  .keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

export default function FontAwesomeIcon({ icon, className }) {
    return(
        <FAIcon 
            icon={['fab', icon]} 
            className={className}
            size="lg"
        />
    );
}
