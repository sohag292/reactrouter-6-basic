import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Friend from '../Friend/Friend';

export default function Friends() {
    const friends =useLoaderData();
    // console.log(friends);
  return (
          <div>
                <div>These are my Friends: {friends.length}</div>
                <div>
                  {
                    friends.map(friend => <Friend
                    key={friend.id}
                    friend ={friend}
                    >

                    </Friend>)
                  }
                </div>
          </div>
  )
}
