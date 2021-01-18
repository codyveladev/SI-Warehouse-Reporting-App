const express = require("express");
const app = express();
const cors = require("cors");

//Send Grid API
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);



//Date format package
const dateFormat = require("dateformat");

const port = 8080;

app.use(express.json());
app.use(cors());

// app.use(express.static(path.join(__dirname, './client/src')))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/report", async (req, res) => {
  // Store the body params into a temporary varibable
  let reqDataArray = req.body;

  let inlineStyling = `<head>
  <style>
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      font-size: 14px;
      padding: 6px;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
    </style>
    </head>`;

  /**
   * set the temporary variable 'vars' to the rows from the frontend
   * form submission
   */
  let vars = reqDataArray.map((index) => {
    return `<tr>
    <td>${index.PO}</td>
    <td>${index.vendor}</td>
    <td>${index.receiver}</td>
    <td>${index.materialsType}</td>
    <td>${index.status}</td>
    <td>${index.notes}</td>
    <td>${index.reqDate}</td>
    </tr>`;
  });

  //Create the template which will be the body of the email
  const template = `
  <html>
  ${inlineStyling}
  <body>
  <h2>Attention:</h2>
  <h3>The items below have been received and checked in.</h3>
  <table>
  <thead>
  <tr>
  <th>PO #</th>
  <th>Vendor</th>
  <th>Receiver</th>
  <th>Materials Type</th>
  <th>Status</th>
  <th>Notes</th>
  <th>Required Date (if order is incomplete)</th>
  </tr>
  </thead>
  <tbody>
  ${vars.join("")}
  </tbody>
  </table>
  </body>
  </html>
  `;

  console.log(template);

  res.send(template)

  //Get the current time and format it to be put in the subject field
  let currentTime = new Date();
  let formattedTime = dateFormat(currentTime, "mm/dd/yyyy");

  //Create the message following the send-grid API
  const msg = {
    //Add this to the array come presentation time.
    /* Jessica.Gallio@spitzerind.com, Lonnie.Vela@spitzerind.com, Rigo.Montes@spitzerind.com, Diana.Fong@spitzerind.com, Chris.Schellhaas@spitzerind.com, Willie.Vela@spitzerind.com */
    to: ["c_v204@txstate.edu", "Jessica.Gallio@spitzerind.com", "Lonnie.Vela@spitzerind.com", "Rigo.Montes@spitzerind.com", "Diana.Fong@spitzerind.com", "Chris.Schellhaas@spitzerind.com", "Willie.Vela@spitzerind.com", "Will.Essner@spitzerind.com"],
    from: {
      name: "DEMO PRESENTATION",
      email: "codyvela13@gmail.com",
    },
    subject: `Items Received ${formattedTime}`,
    html: template,
  };

  //Create the message
  sgMail
    .send(msg)
    .then(() => res.send(200))
    .catch((error) => res.send(error));
});

app.listen(port, () => {
  console.log(`Server started on Port: ${port}`);
});
