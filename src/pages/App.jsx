import { Container } from "./styles";
import { Input } from "../components/Input";
import { ItemRepo } from "../components/ItemRepo";
import { Button } from "../components/Button";
import { useState } from "react";
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const ifExists = repos.find((repo) => repo.id === data.id);

      if (!ifExists) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
      alert("Repository already exists");
    }
  };

  return (
    <Container>
      <img
        src="https://raw.githubusercontent.com/digitalinnovationone/trilha-react-desafio-2/master/src/assets/github.png"
        alt="Logo Github"
        width={72}
        height={72}
      />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo repo={repo} />
      ))}
    </Container>
  );
}

export default App;
