import React, { useEffect, useState } from "react";
import { data } from "../Dataimage";
import "./admintag.css";
const Admintag = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    let reponse = data();
    let tagsdata = [];
    reponse.forEach((element) => {
      element.labels.forEach((value) => {
        tagsdata.push(value);
      });
    });
    console.log(tagsdata);
    setTags(tagsdata);
  }, []);
  const handlekeydown = (e) => {
    if (e.key != "Enter") {
      return;
    }
    let value = e.target.value;
    if (!value.trim()) {
      return;
    }
    setTags([...tags, value]);
    e.target.value = "";
  };
  const removetag = (index) => {
    console.log(index);
    const newtage = tags.filter((element, id) => {
      return index !== id;
    });
    setTags(newtage);
  };
  return (
    <div className="tag-container">
      <div className="tag-create">
        {tags.map((element, index) => {
          return (
            <div className="tag" key={index}>
              <span className="tag-heading">{element}</span>
              <span className="cross" onClick={() => removetag(index)}>
                &times;
              </span>
            </div>
          );
        })}
        <input
          onKeyDown={handlekeydown}
          className="input"
          type="text"
          placeholder="type tag and enter"
        />
      </div>
      <div className="tag-section">
        <h1> All Tag Lists</h1>
        <div className="tag-list">
          {tags.map((element, index) => {
            return (
              <div className="tag" key={index * 10 + 12}>
                {element}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Admintag;
