import React, { useEffect, useState } from "react";
import { data } from "../Dataimage";
import "./dashboard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Dashboard = () => {
  const [imagedata, setImagedata] = useState([]);
  const [tag, setTag] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    let reponse = data();
    setImagedata(reponse);
    let tagsdata = reponse.map((current) => {
      return current.labels;
    });
    setTag(tagsdata);
  }, []);
  const filteritem = () => {
    let data = imagedata;
    console.log(data);
    let newdata = data.filter((element) => {
      let present = false;
      for (let i = 0; i < element.labels.length; i++) {
        if (text === element.labels[i]) {
          present = true;
        }
      }
      if (present) {
        return element;
      }
    });
    setImagedata(newdata);
    setText("");
  };
  const remove = (index, name) => {
    let newtage = tag.map((current, id) => {
      if (id != index) {
        return current;
      } else {
        let newdata = current.filter((tagname) => {
          return tagname !== name;
        });
        return newdata;
      }
    });
    let newimagedata = imagedata.map((current, id) => {
      if (id !== index) {
        return current;
      } else {
        let obj = {
          id: current.id,
          img: current.img,
          labels: current.labels.filter((ele) => {
            return ele !== name;
          }),
        };
        return obj;
      }
    });
    console.log("remove", newimagedata);
    setImagedata(newimagedata);
    setTag(newtage);
  };
  const handlekeydown = (e, index) => {
    if (e.key != "Enter") {
      return;
    }
    let value = e.target.value;
    if (!value.trim()) {
      return;
    }
    console.log(value);
    let newdata = tag.map((element, id) => {
      if (id != index) {
        return element;
      } else {
        element.push(value);
        return element;
      }
    });
    let newimagedata = imagedata.map((current, id) => {
      if (id != index) {
        return current;
      } else {
        let obj = {
          id: current.id,
          img: current.img,
          labels: [...current.labels],
        };
        return obj;
      }
    });
    console.log(newimagedata);
    setImagedata(newimagedata);
    setTag(newdata);
    e.target.value = "";
  };
  return (
    <div className="dashboard">
      <div className="filter-section">
        <input
          type="text"
          className="filter-input"
          value={text}
          placeholder="Search....."
          onChange={(e) => setText(e.target.value)}
        />
        <button className="filter-btn" onClick={filteritem}>
          Search
        </button>
      </div>
      <div className="card-container">
        {imagedata.map((element, index) => {
          const { id, img, labels } = element;
          return (
            <div className="card" key={id}>
              <LazyLoadImage
                src={img}
                style={{ width: "17rem", height: "20rem" }}
              />
              {tag[index].map((name) => {
                return (
                  <div className="tag">
                    <span className="tag-heading">{name}</span>
                    <span
                      className="cross"
                      onClick={() => {
                        remove(index, name);
                      }}
                    >
                      &times;
                    </span>
                  </div>
                );
              })}
              <input
                onKeyDown={(e) => handlekeydown(e, index)}
                className="input"
                type="text"
                placeholder="type tag and enter"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
