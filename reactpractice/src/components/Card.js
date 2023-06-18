import React from 'react';

class Card extends React.Component {
  render() {
    const { name, username, email, id } = this.props;
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
        <div>
          <h2>{name}</h2>
          <p>{username}</p>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Card;