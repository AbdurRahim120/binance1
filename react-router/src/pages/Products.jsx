import { useRef } from "react";

const Products = () => {
    const dropdownRef = useRef();

  const toggleDropdown = () => {
    const dropdownContent = dropdownRef.current.nextElementSibling;
    dropdownRef.current.classList.toggle("active");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
  };

  return (
    <div>
      <button className="dropdown-btn" ref={dropdownRef} onClick={toggleDropdown}>
        Toggle Dropdown
      </button>
      <div className="dropdown-content" style={{ display: 'none' }}>
        <p>Dropdown Item 1</p>
        <p>Dropdown Item 2</p>
        <p>Dropdown Item 3</p>
      </div>
      <button className="dropdown-btn" ref={dropdownRef} onClick={toggleDropdown}>
        Toggle Dropdown
      </button>
      <div className="dropdown-content" >
        <p>Dropdown Item 1</p>
        <p>Dropdown Item 2</p>
        <p>Dropdown Item 3</p>
      </div>
    </div>
  );
};

export default Products;