import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const sinners = [
  { id: 1, name: "Yi Sang" },
  { id: 2, name: "Faust" },
  { id: 3, name: "Don Quixote" },
  { id: 4, name: "Ryoshu" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/sinners", (req, res) => {
  res.send(sinners);
});

app.post("/api/sinners", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const result = Joi.validate(req.body, schema);
  console.log(result);

  const sinner = {
    id: sinners.length + 1,
    name: req.body.name,
  };
  sinners.push(sinner);
  res.send(sinner);
});

app.get("/api/sinners/:id", (req, res) => {
  const sinner = sinners.find((s) => s.id === parseInt(req.params.id));
  if (!sinner)
    res.status(404).send("The sinner with the given ID was not found.");
  res.send(sinner);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
