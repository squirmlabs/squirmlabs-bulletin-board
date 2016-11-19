import React from 'react';
import ResultCard from './ResultCard';

export default (props) => {
  const { cards } = props;
  const retrieve = cards;
  const collection = retrieve.map(function(card) {
    const cardResult = {
      created_time: card.created_time,
      filter: card.filter,
      images: card.images,
      likes: card.likes,
      link: card.link,
      user: card.user,
      user_has_liked: card.user_has_liked,
      users_in_photo: card.users_in_photo,
      location: card.location,
      tags: card.tags,
      type: card.type,
      id: card.id,
      caption: card.caption,
      comments: card.comments };
    return (
      <ResultCard cardResult={cardResult} key={card.id} />
    );
  });
  // return cards;
  return (
    <div className="cards">
      {collection}
    </div>
  );
}
