function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}

const teams = ["Red Sox", "Yankees", "Astros", "Dodgers"];

const iterator = createTeamIterator(teams);

for (const team of createTeamIterator(teams)) {
  console.log(team);
}

console.log([...createTeamIterator(teams)]);
