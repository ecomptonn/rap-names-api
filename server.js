const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
    "21 savage": {
        age: 31,
        birthName: "Shéyaa Bin Abraham-Joseph",
        birthLocation: "Plaistow, London, England",
    },

    "chance the rapper": {
        age: 31,
        birthName: "Chancelor Johnathan Bennett",
        birthLocation: "Chicago, Illinois, U.S.",
    },

    "dylan": {
        age: 31,
        birthName: "Dylan",
        birthLocation: "Dylan",
    },
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (req, res) => {
    const rapperName = req.params.rapperName.toLowerCase();
    if (rappers[rapperName]) {
        res.json(rappers[rapperName]);
    } else {
        res.json(rappers["dylan"]);
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});
