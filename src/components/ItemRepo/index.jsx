import { ItemContainer } from "./styles";

export const ItemRepo = ({repo}) => {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank">Go to repository</a> <br />
      <a href="#" className="remove">Remove</a>
      <hr />
    </ItemContainer>
  );
};
