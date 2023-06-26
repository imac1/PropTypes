/*
  Instructions
    Add the appropriate PropTypes (which is already imported) to the 
    Badge component
*/

import React from "react";
import PropTypes from "prop-types";

class Badge extends React.Component {
  render() {
    const { authed, style, name, handle, img, addFriend } = this.props;

    if (authed !== true) {
      return <p>You need to log in.</p>;
    }

    return (
      <div style={style}>
        <img alt={`Avatar for ${name}`} src={img} />
        <div>
          <h4>{name}</h4>
          <p>@{handle}</p>
          <button onClick={addFriend}>Add Friend</button>
        </div>
      </div>
    );
  }
}



Badge.propTypes = {
name: PropTypes.string.isRequired,
handle: PropTypes.string.isRequired,
img: PropTypes.string.isRequired,
authed: PropTypes.bool,
style: PropTypes.object.isRequired,
addFriend: PropTypes.func.isRequired,

 }

export default function App() {
  return (
    <Badge
      name="Tyler McGinnis"
      handle="tylermcginnis"
      img="https://avatars0.githubusercontent.com/u/2933430?v=3&s=460"
      authed={true}
      style={{
        width: 300,
        margin: "0 auto",
        border: "1px solid var(--biege-10)",
        borderRadius: 8,
        backgroundColor: "var(--charcoal)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center"
      }}
      addFriend={() => alert("Added!")}
    />
  );
}
