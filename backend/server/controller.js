import { QuoteRequest, JobRequest } from "../database/model.js"; // Adjust the path as necessary
import nodemailer from 'nodemailer'; // Import nodemailer for email functionality

const handlerFunctions = {
    createQuote: async (req, res) => {
        console.log("Received data for new quote:", req.body); // Log the incoming data

        const { 
            firstName,
            lastName,
            email,
            phone,
            streetAddress,
            city,
            state,
            zipCode
         } = req.body;

        try {
             // Validate input data
            if (!firstName || !lastName || !email || !phone || !streetAddress || !city || !state || !zipCode) {
                throw new Error("All fields are required.");
            }

             // Create a new quote request in the database
            const newQuoteRequest = await QuoteRequest.create({
                firstName,
                lastName,
                email,
                phone,
                streetAddress,
                city,
                state,
                zipCode,
            });
            console.log("New quote request created successfully:", newQuoteRequest.toJSON()); // Log the newly created quote request


             // Setup the transporter for email sending
            const transporter = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "9b2dcbcef92a43",
                    pass: "4e38c4efe069b6",
                 },
             });

             // Define the email content
            const content = `First Name: ${firstName} \n
            Last Name: ${lastName} \n
            Email: ${email} \n
            Phone: ${phone} \n
            Street Address: ${streetAddress} \n
            City: ${city} \n
            State: ${state} \n
            Zip Code: ${zipCode}`;

             // Setup email options
            const mailOptions = {
                from: `"${firstName} ${lastName}" <${email}>`, // Sender address
                to: "jessegarlick11@gmail.com", // List of recipients
                subject: "New Quote Request Submission", // Subject line
                text: content, // Plain text body
            };

             // Send the email
            const emailResponse = await transporter.sendMail(mailOptions);
            console.log("Email sent successfully:", emailResponse);

            res.json({
                message: "New quote request created and email sent successfully.",
                status: "success",
                quoteRequest: newQuoteRequest,
            });
        } catch (error) {
            console.error("Failed to create quote request or send email:", error); // Log the error
            res.status(500).json({
                message: "Failed to create quote request or send email.",
                status: "fail",
                error: error.message,
                quoteRequest: req.body, // Respond with the original request body or the partial newQuoteRequest
            });
        }
    },
    createJob: async (req, res) => {
        console.log("Received data for new job:", req.body); // Log the incoming data

        const { 
            firstName,
            lastName,
            email,
            phone,
            streetAddress,
            city,
            state,
            zipCode
         } = req.body;

        try {
             // Create a new job request in the database
            const newJobRequest = await JobRequest.create({
                firstName,
                lastName,
                email,
                phone,
                streetAddress,
                city,
                state,
                zipCode,
            });
            console.log("New job request created successfully:", newJobRequest.toJSON()); // Log the newly created job request
        } catch (error) {
            console.error("Failed to create job request:", error); // Log the error
            res.status(500).json({
                message: "Failed to create job request.",
                status: "fail",
                error: error.message,
                jobRequest: req.body, // Respond with the original request body or the partial newJobRequest
            });
        }
    },
};

export default handlerFunctions;