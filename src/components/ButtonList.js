import React from "react";
import Button from "./Button";
const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Movies" />
      <Button name="Songs" />
      <Button name="Cricket" />
      <Button name="Gaming" />
      <Button name="Videos" />
      <Button name="News" />
      <Button name="Live" />
      <Button name="Vlogs" />
      <Button name="Cooking" />
      <Button name="Football" />
    </div>
  );
};

export default ButtonList;
