import sadCat from "../assets/sad-cat.png";
import StyledError from "../styles/FetchError.styles";

// User friendly error message to display to user upon data Fetch failure
const FetchError = () => {
  return (
    <StyledError>
      <img src={sadCat} alt="Sad cat" />
      <p>
        Apologies but we could not load new cats for you at this time! Miau!
      </p>
    </StyledError>
  );
};

export default FetchError;
