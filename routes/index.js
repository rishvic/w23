const express = require("express");
const userController = require("../controller/userController");
const renderController = require("../controller/renderController");
const paymentController = require("../controller/paymentController");
const wsController = require("../controller/wsController");
const sitpController = require("../controller/sitpController");
const competitionController = require("../controller/competitionsController");

const app = require("../app");
const router = express.Router();

function ensureAuthenticated(req, res, next) {
    if (req.user) { 
      return next();
    }
    res.redirect('/auth/google')
}

//frontend routes
router.get("/", renderController.renderHome);
// , ensureAuthenticated
router.get("/profile", renderController.renderProfile);
router.get("/about", renderController.renderAbout);
router.get("/competitions", renderController.renderCompetitions);
router.get("/workshops", renderController.renderWorkshops);
router.get("/sitp", renderController.renderSitpCourses);
router.get("/guest-lectures", renderController.renderGuestLectures);
router.get("/exhibits", renderController.renderExhibits);
router.get("/initiatives", renderController.renderInitiatives);
router.get("/highlights", renderController.renderHighlights);
router.get("/teams", renderController.renderTeam);
router.get("/sponsors", renderController.renderSponsors);
router.get("/reachUs", renderController.renderContact);
router.post("/contact", userController.postContact);
router.post("/updateProfile", userController.updateProfile);
router.post("/register-competition",ensureAuthenticated, userController.registerCompetition);

//individual workshop routes
router.get("/workshop-staad", wsController.staad);
router.get("/workshop-android", wsController.android);
router.get("/workshop-webdev", wsController.fullstack);
router.get("/workshop-ml", wsController.ml);
router.get("/workshop-ethicalhacking", wsController.ethicalHacking);
router.get("/workshop-python", wsController.python);
router.get("/workshop-automobile", wsController.automobile);
router.get("/workshop-crypto", wsController.crypto);
router.get("/workshop-iiot", wsController.iiot);
router.get("/workshop-dl", wsController.dl);
//posting a query in contact

//individual sitp routes
router.get("/sitp-python", sitpController.python);
router.get("/sitp-android", sitpController.android);
router.get("/sitp-fullstack", sitpController.fullstack);
router.get("/sitp-ml", sitpController.ml);
router.get("/sitp-ethical-hacking", sitpController.ethicalHacking);
router.get("/sitp-automobile", sitpController.automobile);


//individual competition routes
router.get("/artelligence", competitionController.artelligence);
router.get("/riddlegenix", competitionController.riddlegenix);
router.get("/counter-cypher", competitionController.counterCypher);
router.get("/colloquia-cs", competitionController.colloquiaCS);
router.get("/colloquia-civil", competitionController.colloquiaCivil);
router.get("/colloquia-electrical", competitionController.colloquiaElectrical);
router.get("/colloquia-mechanical", competitionController.colloquiaMechanical);

router.get("/analog-circuit-design", competitionController.analogCircuitDesign);
router.get("/maths-olympiad", competitionController.mathsOlympiad);
router.get("/scriptic-wissen", competitionController.scripticWissen);
router.get("/humanity", competitionController.humanity);
router.get("/goldberg-challenge", competitionController.goldbergChallenge);

router.get("/quizzaire", competitionController.quizzaire);

router.get("/bgmi", competitionController.bgmi);
router.get("/valorant", competitionController.valorant);

router.get("/school-champ", competitionController.schoolChamp);

router.get("/science-toons", competitionController.scienceToons);
router.get("/sherlock", competitionController.sherlock);
router.get("/shutter", competitionController.shutter);

router.get("/arduino-hackathon", competitionController.arduinoHackathon);
router.get("/robo-cad", competitionController.roboCAD);

router.get("/innowise", competitionController.innoWise);
router.get("/auction-war", competitionController.auctionWar);
router.get("/pioneers-plan", competitionController.pioneersPlan);
router.get("/investrx", competitionController.investar)
//payment route
// router.post('/payment', paymentController.initiatePayment);
//single webpages
//1. about
//2. profile
//3. guest lectures
//4. exhibits
//5. initiatives
//6. highlights
//7. team
//8. sponsors
//9. contact

module.exports = router;
