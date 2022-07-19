import React from "react";
import { Link } from "react-router-dom";

// components
import { Text } from "../../common/components/elements";

const Logo = () => {
  return (
    <Link to='/'>
      <Text
        center
        type='h1'
        size='3rem'
        color='var(--white)'
        padding='4rem 0 1rem 0'
      >
        Travel Log
      </Text>
    </Link>
  );
};

export default Logo;
