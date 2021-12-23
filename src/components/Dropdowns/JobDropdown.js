import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const JobDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
    <div className="w-full relative">
        <a
            className="w-full bg-white border border-input hover:text-blueGray-500 px-3 py-4 lg:py-2 shadow flex items-center font-base rounded"
            href="#pablo"
            ref={btnDropdownRef}
            onClick={(e) => {
            e.preventDefault();
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
            }}
        >
            I'm a freelancer...
        </a>
        <div
            ref={popoverDropdownRef}
            className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            "w-full bg-white text-base z-50 border border-input float-left py-2 list-none text-left rounded shadow-lg"
            }
        >
        <Link
          to="/admin/dashboard"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        > <p className="mb-1"> Developer </p> <br/> <p> Front-end, Back-end, Full-stack, QA, etc. </p> </Link>
      </div>
    </div>
    </>
  );
};

export default JobDropdown;
