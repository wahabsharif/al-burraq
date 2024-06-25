import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

interface PropTypes {
  label: string;
  value: string;
  error: boolean | "" | undefined;
  errorText: string | undefined;
  handleOnChange: any;
}

const GooglePlacesAutoComplete = ({
  handleOnChange,
  label,
  value,
  error,
  errorText,
}: PropTypes) => {
  return (
    <div>
      <label htmlFor="places-autocomplete">{label}</label>
      <GooglePlacesAutocomplete
        selectProps={{
          onChange: handleOnChange,
          name: "property_address",
          defaultInputValue: value,
          id: "places-autocomplete",
          placeholder: "Please Enter Address",
          styles: {
            input: (provided: object) => ({
              ...provided,
              padding: ".23rem 0",
            }),
          },
        }}
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API}
      />
      {error && <p className="text-darkGold text-sm my-2">{errorText}</p>}
    </div>
  );
};

export default GooglePlacesAutoComplete;
