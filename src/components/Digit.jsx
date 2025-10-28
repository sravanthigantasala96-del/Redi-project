
export const Digit = ({ number, place, index }) => {
  const digit = Math.floor((number / place) % 10) * place;

  return <span style={{ fontSize: "2rem", margin: "0 5px" }}>{digit}</span>;
};