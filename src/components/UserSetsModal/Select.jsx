import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "₴ UAH", label: "₴ UAH" },
  { value: "$ USD", label: "$ USD" },
  { value: "€ EUR", label: "€ EUR" },
];

export default function UserSelect() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            width: 122,
            height: 48,
            padding: "0 18px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            borderRadius: 12,
            borderColor: "rgba(250, 250, 250, 0.40)",
            borderWidth: 1,
            color: "#FAFAFA",
            fontFamily: "Suisse Intl",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 400,
            background: "#171719",
            boxShadow: state.isFocused
              ? "#0EF387"
              : "rgba(250, 250, 250, 0.40)",
            "&:hover": {
              borderColor: "#0EF387",
            },
            "div:first-of-type": {
              padding: 0,
              color: "#FAFAFA",
            },
            cursor: "pointer",
          }),
          container: (base) => ({
            ...base,
            width: 122,
          }),
          placeholder: (base) => ({
            ...base,
            color: "#FAFAFA",
            margin: 0,
            "& +div": {
              padding: 0,
              margin: 0,
            },
          }),
          singleValue: (base) => ({
            ...base,
            color: "#FAFAFA",
            margin: 0,
            "& +div": {
              padding: 0,
              margin: 0,
            },
          }),
          dropdownIndicator: (base, state) => ({
            ...base,
            transform: state.selectProps.menuIsOpen
              ? "rotate(-180deg)"
              : "rotate(0)",
            transition: ".3s",
          }),
          indicatorSeparator: () => ({ display: "none" }),
          option: (styles) => ({
            ...styles,
            display: "flex",
            width: 86,
            padding: 0,
            background: "#0C0D0D",
            color: "#FAFAFA",
            fontFamily: "Suisse Intl",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              color: "rgba(250, 250, 250, 0.4)",
            },
            "&:active": {
              background: "none",
            },
          }),
          menu: (styles) => ({
            ...styles,
            width: 122,
            height: 104,
            borderRadius: 15,
            padding: 0,
            paddingTop: 12,
            paddingLeft: 18,
            paddingRight: 18,
            display: "flex",
            marginBottom: 0,
            marginTop: 4,
            background: "#0C0D0D",
            overflow: "hidden",
          }),
          menuList: (styles) => ({
            ...styles,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            overflow: "auto",
          }),
        }}
      />
    </>
  );
}
