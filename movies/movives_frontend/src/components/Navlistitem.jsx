import React, { useState } from 'react';

import './Navlistitem.css';

function Navlistitem({btn}) {

  return (
    <li><a href={btn.link}>{btn.name}</a></li>
  )
}

export default Navlistitem