const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config()


//Send Grid API
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  process.env.API_KEY
);

//Date format package
const dateFormat = require("dateformat");
//Localhost 8080
const port = 8080;

//Express usage
app.use(express.json());
app.use(cors());

//Test route 
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * @route POST /report
 * @params body will be the data from the input form on the frontend. 
 * @desc this route will take the data from the frontend and generate an 
 * an email with a table based on the data that is passed in. 
 * @note this can route can be better in readability if we create some
 * helper functions. 
 */

app.post("/report", async (req, res) => {
  // Store the body params into a temporary varibable
  let reqDataArray = req.body;

  //Styling for the table created in the email. 
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

  //Get the current time and format it to be put in the subject field
  let currentTime = new Date();
  let formattedTime = dateFormat(currentTime, "mm/dd/yyyy");

  //Create the message following the send-grid API
  //More information on this can be found in the SendGrid docs
  //A link to the documenation can be found in the readme. 
  const msg = {
    to: ["c_v204@txstate.edu"], //Can have many users
    from: {
      name: "DEMO PRESENTATION",
      email: "codyvela13@gmail.com",
    },
    subject: `Items Received ${formattedTime}`,
    html: template, //the HTML body of the template
  };

  //Create the message
  sgMail
    .send(msg) //send the message
    .then(() => res.send(200))
    .catch((error) => res.send(error));
});


app.listen(port, () => {
  console.log(`Server started on Port: ${port}`);
});
