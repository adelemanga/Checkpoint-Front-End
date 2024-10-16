import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COUNTRY, GET_COUNTRIES } from "../graphql/queries";
import { useRouter } from "next/router";

const AddCountry = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [emoji, setEmoji] = useState("");
  const [continentId, setContinentId] = useState("");
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();

  const [addCountry] = useMutation(ADD_COUNTRY, {
    refetchQueries: [{ query: GET_COUNTRIES }],
    onCompleted: () => {
      router.push("/countries");
    },
    onError: (error) => {
      console.error("Error adding country:", error);
    },
  });

  const validateForm = () => {
    const newErrors: any = {};
    if (!name) newErrors.name = "Name is required";
    if (!code) newErrors.code = "Code is required";
    if (!emoji) newErrors.emoji = "Emoji is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return; 
    }

    try {
      await addCountry({
        variables: {
          name,
          code,
          emoji,
          continentId,
        },
      });
    } catch (error) {
      console.error("An error was occured", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-field-with-button">
      <div className="name1">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors({ ...errors, name: "" });
          }}
          placeholder="Name"
        />
        {errors.name && <p className="error"> {errors.name}</p>}
      </div>
      <div className="name1">
        Code:
        <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setErrors({ ...errors, code: "" });
          }}
          placeholder="Code"
        />
        {errors.code && <p className="error">{errors.code}</p>}
      </div>
      <div className="name1">
        Emoji:
        <input
          type="text"
          value={emoji}
          onChange={(e) => {
            setEmoji(e.target.value);
            setErrors({ ...errors, emoji: "" });
          }}
          placeholder="Emoji"
        />
        {errors.emoji && <p className="error">{errors.emoji}</p>}
      </div>
      <div>
        {errors.continentId && <p className="error">{errors.continentId}</p>}
      </div>

      <button type="submit">Add country</button>
    </form>
  );
};

export default AddCountry;
