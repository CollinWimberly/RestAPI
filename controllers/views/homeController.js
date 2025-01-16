const axios = require("axios");
const settings = require("../../config/settings");
async function renderHomePage(req, res) {
    //res.render("home", { title: "Games!" });
    let data = [];
    if (req.query.like) {
        const response = await axios.get(
            `${settings.ROOT}:${settings.PORT}/api/games`,
            { params: req.query }
        );
        data = response.data;
    }
    res.render("home", {
        title: "Games!",
        search: req.query.like ? req.query.like : "",
        gameData: data,
    });
}
module.exports = { renderHomePage };
