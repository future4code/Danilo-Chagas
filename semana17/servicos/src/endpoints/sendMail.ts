import { Request, Response } from 'express'
import { transporter } from '../services/mailTransporter'


export default async function sendMail(req: Request, res: Response): Promise<any> {
    const { to, subject, msg } = req.body
    try {

        if (!to || !subject || !msg) {
            throw Object({ status: 422, mensage: "Expected 'to', 'subject' and 'text' keys and values in body request" })
        }

        const result = await transporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: to,
            subject: subject,
            html: msg,
        }, (error, info) => {
            if (error) {
                return res.status(400).send("Something went wrong. Verify if all fields are correctly filled in").end()
            }
            return res.status(200)
                .send({
                    result: "Success to send e-mail",
                    to: info.accepted.join(";"),
                    note: "we aren't able to check if recipients email addresses are correct or will they receive this e-mail"
                })
                .end()
        })
    } catch (err) {
        res.status(err.status || 500).send(err.mensage || "Failed to send email")
    }
}