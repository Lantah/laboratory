import React from "react";
import PositiveIntPicker from "./PositiveIntPicker";

export default function SequencePicker(props) {
  let { value, onUpdate } = props;

  return (
    <PositiveIntPicker
      value={value}
      placeholder="Amount in µg (1 gram = 1,000,000 µg)"
      onUpdate={(value) => onUpdate(value)}
    />
  );
}
