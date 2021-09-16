import { Email } from '@material-ui/icons';
import sendgrid from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
    try {
        console.log(req.body);
        await sendgrid.send({
            to: "constanceingram94@gmail.com",
            from: `${req.body.email}`,
            subject: `${req.body.title}`,
            html: `${req.body.message}`,
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
    return res.status(200).json({ error: "??? "});
}

export default sendEmail;