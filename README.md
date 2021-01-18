# SI-Warehouse-Reporting-App

# Development commands 
## Install
Backend: 
```npm install``` 

Frontend
```cd client npm install ```
## Start 
Backend: 
```npm start``` 

Frontend
```cd client npm start```


# Frontend
The front end was built creating React.js and it is a simple one page application. 
The frontend of this application can be viewed in the 'client' folder
# Pages 
There are currently 3 pages 
- Dashboard 
- Shipping 
- Receiving
Source code for those can be found in client>src>components>pages 

# Backend 
The backend is a simple Express.js server with one main route currently 

# POST /reports (Route)

Body Params: inputFields which is take from the frontend react application when the form is submitted. 

inputFields object (Example): 
```
{
      PO: "",
      vendor: "",
      receiver: "",
      materialsType: "",
      status: "",
      notes: "",
      reqDate: "",
}
```

The route then uses the [SendGrid API](https://sendgrid.com/docs/for-developers/sending-email/api-getting-started/) to generate emails based on the data in the body of the request.









