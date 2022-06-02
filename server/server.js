/* =========================================================================
 * library and NPM imports
 * ========================================================================= */
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

/* =========================================================================
 * database imports
 * ========================================================================= */
const { typeDefs, resolvers } = require("./schemas/index.js");
const db = require("./config/connection");

/* =========================================================================
 * establishing server
 * ========================================================================= */
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "../client/images")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};
// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
