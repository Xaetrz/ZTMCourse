import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  const cardArr = robots.map(({id, name, username, email}) =>
                    <Card key={id} id={id} name={name} username={username} email={email}/>
                  );
  return (
    <>
      {cardArr}
    </>
  );
}

export default CardList;