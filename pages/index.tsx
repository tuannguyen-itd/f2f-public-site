import React from 'react';

export async function getServerSideProps() {

  return {
    props: {},
  };
}

export default function Home(props) {
  const {} = props;

  return (
    <h1>INDEX</h1>
  );
}
