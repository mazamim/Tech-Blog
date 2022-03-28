const path=require('path');
const express=require('express');
const session = require('express-session');
const {engine,create} = require('express-handlebars');
const routes = require('./routes');
const helpers = require('./utils/helpers');
const cors = require('cors');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: process.env.DB_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  app.use(session(sess));

  app.set("view engine", "hbs");
app.engine("hbs", engine({
  layoutDir:`${__dirname}/views/`,
  extname:'hbs',
  helpers:helpers

}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});