import { PropTypes } from "prop-types";
const SectionTitle = ({ title }) => {
  return (
    <div className=" md:text-4xl font-bold border-l-[6px] border-gray-500 pl-5">
      {title}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.node,
};

export default SectionTitle;
