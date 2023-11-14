import Config from "@/config/credentials";
import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
import { generateTemporaryToken, getErrorMessage } from "../utils";
import { TSendEmailParam, sendEmailSchema } from "../zod/user";
import { resetEmailHtml, resetEmailTextual } from "./reset-email";
import { verifyEmailHtml, verifyEmailTextual } from "./verify-email";

export const sendEmail = async ({
  email,
  emailType,
  userId,
}: TSendEmailParam) => {
  try {
    let textEmail;
    let htmlEmail;
    // const { unHashedToken, hashedToken, tokenExpiry } =
    //   generateTemporaryToken();
    //create a hashed token
    const hashedToken = await bcryptjs.hash(userId, 10);

    //save the hashed token into db
    if (emailType === "VERIFY_EMAIL") {
      //find user and update user in database
      await prisma.user.update({
        where: { id: userId },
        data: {
          email_verify_token: hashedToken,
          email_verify_expiry: new Date(Date.now() + 3600000),
        },
      });
      //create verify email link
      const link = `${Config.APP_URL}/verify-email?token=${hashedToken}`;
      //set email content
      textEmail = verifyEmailTextual(email, link);
      htmlEmail = verifyEmailHtml(email, link);
    } else if (emailType === "RESET_PASSWORD") {
      await prisma.user.update({
        where: { id: userId },
        data: {
          forgot_password_token: hashedToken,
          forgot_password_expiry: new Date(Date.now() + 3600000),
        },
      });
      const link = `${Config.APP_URL}/reset-password?token=${hashedToken}`;
      textEmail = resetEmailTextual(email, link);
      htmlEmail = resetEmailHtml(email, link);
    }

    const transporter = nodemailer.createTransport({
      host: Config.MAILTRAP_HOST?.toString(),
      port: parseInt(Config.MAILTRAP_PORT!) || 2525,
      auth: {
        user: Config.MAILTRAP_USER?.toString(),
        pass: Config.MAILTRAP_PASSWORD?.toString(),
      },
    });

    const mail = {
      from: "Brand Chunk <service@brandchunk.com>", // We can name this anything. The mail will go to your Mailtrap inbox
      to: email, // receiver's mail
      subject:
        emailType === "VERIFY_EMAIL"
          ? "Verify your email"
          : "Reset your password", // mail subject
      text: textEmail, // mailgen content textual variant
      html: htmlEmail, // mailgen content html variant
    };

    const mailResponse = await transporter.sendMail(mail);
    return mailResponse;
  } catch (error: unknown) {
    //TODO:extract error messsage from error and pass to Error constractor
    console.log(getErrorMessage(error));
    throw new Error("sendEmail:: internal server error!...");
  }
};
