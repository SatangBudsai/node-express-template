import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const PORT = process.env.PORT || 8081;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

const router = express.Router();
app.get("/", async (_req, res) => {
  res.send({
    message: "API START",
    swaggerPath: `http://localhost:${PORT}/swagger`,
  });
});
app.use(router);

RegisterRoutes(app);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/swagger`);
});
