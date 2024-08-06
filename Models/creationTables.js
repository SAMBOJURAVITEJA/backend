import db from "../db.js";

const data = [
  {
    name: "users",
    query: `CREATE TABLE if not exists users (
  id INT not null unique primary key auto_increment ,
  pokeMonOwnerName VARCHAR(255) 

)`,
  },
  
  {
    name: "pokemons",
    query: `CREATE TABLE  if not exists pokeMons (
  id INT not null unique  PRIMARY KEY AUTO_INCREMENT,
  pokeMonName VARCHAR(255) default null,
  pokeMonAbility VARCHAR(255) default null,
  initialPositionX INT default null,
  initialPositionY INT default null,
  speed INT default null,
  direction VARCHAR(50) default null,
  userId INT)`,
  },
];

const createTables = (each) => {
  const { name, query } = each;

  db.query(query, async (err, result) => {
    if (err) {
      console.log("Table Already Exist");
    } else {
      console.log(`${name} Table is created successfully`);
    }
  });
};

const distributeTables = () => {
  data.forEach((each) => createTables(each));
};

export default distributeTables;
