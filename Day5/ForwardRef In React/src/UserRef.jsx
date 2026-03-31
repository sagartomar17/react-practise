import React from 'react'

const UserRef = (props) => {
  return (
    <div>
      <input type="text" ref = {props.ref} />
    </div>
  );
}

export default UserRef