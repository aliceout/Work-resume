/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Imports
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
import dotenv from 'dotenv';                                                  // On récupère les variables d'environnement
import express from 'express';                                                // On récupère le module Express.js
import helmet from 'helmet';                                                  // On récupère le module helmet
import cors from 'cors';                                                      // On récupère le module cors
import expressLayouts from 'express-ejs-layouts';

import { router } from './router.js';                                         // On récupère les param du routeur
import { notFound } from './middlewares/index.js';                            // On récupère les middlewares

const env = process.env.NODE_ENV || "development";                            // On récupère le type d'environnement actuel
if (env === 'development') {                                                  // Si environnement de développement
  var livereload = await import('livereload');                                // On applique le module connect-livereload
  var connectLiveReload = (await import('connect-livereload')).default;       // On applique le module connect-livereload
} else {                                                                      // Si environnement de production
  var RateLimit = (await import('express-rate-limit')).default;               // On applique le module connect-livereload
}
/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Définitions
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
dotenv.config();                                                              // On les passe en paramètres

const PORT = process.env.PORT || 3000;                                        // On définit le port à partir des variables d'environnement

if (env === 'development') {                                                  // Si environnement de développement
  const liveReloadServer = livereload.createServer();                         // On applique le module connect-livereload
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {                                                        // On défini un timeout
      liveReloadServer.refresh("/");                                          // On rafraichit la page
    }, 100);                                                                  // Définition du ttemps du timeout
  });
};

const app = express();                                                        // On crée l'application

app.use(expressLayouts);                                                      // On applique le module express-ejs-layouts
app.set('layout', 'layouts/main');                                            // On applique le layout

app.set("view engine", "ejs");                                                // On applique l'extension EJS
app.set("views", "app/views");                                                // On applique le dossier views

app.use(express.static('public'));                                            // On applique les fichiers statiques

if (env === 'production') {
  var limiter = RateLimit({                                                   // On récupère le module express-rate-limit
    windowMs: 1 * 60 * 1000,                                                  // OCompteur de temps (requête par minute)
    max: 20,                                                                  // Nombre maximum de requêtes
  });
}

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Middlewares
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
app.use(
  helmet.contentSecurityPolicy({                                              // On applique le module helmet
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],        // On applique les directives
    },
  })
);

if (env === 'development') {                                                  // Si environnement de dévellopement
  app.use(connectLiveReload());                                               // On applique le module connect-livereload
};

if (env === 'production') {                                                   // Si environnement de production
  app.use(limiter);                                                           // On applique le module express-rate-limit
};

app.use(cors('*'));                                                           // On applique le module cors
app.use(router);                                                              // On applique le module router

app.use("/middlewares", notFound);                                            // On applique les middlewares


app.listen(PORT, () => {                                                      // On lance l'application sur le port configuré
  console.log('\n░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n-----------------------------------------------------------------------------\nProjet : ' + process.env.PROJECT_NAME + '\nPort : ' + PORT || 'http://localhost:3000');  // On affiche le message de lancement (configuré dans les variables d'environnement) 
});

// app.use(function (req, res, next) { // 
//   next(createError(404));
// });

// app.use(function (err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   res.status(err.status || 500);
//   res.render("error");
// });