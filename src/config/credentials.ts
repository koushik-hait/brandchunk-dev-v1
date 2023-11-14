class Config {
  static APP_NAME: string = process.env.APP_NAME!;
  static APP_ENV: string = process.env.APP_ENV!;
  static APP_URL: string = process.env.APP_URL!;
  static DATABASE_URL: string = process.env.DATABASE_URL!;
  static ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET!;
  static ACCESS_TOKEN_EXPIRY: string = process.env.ACCESS_TOKEN_EXPIRY!;
  static JWT_SECRET: string = process.env.JWT_SECRET!;
  static REFRESH_TOKEN_SECRET: string = process.env.REFRESH_TOKEN_SECRET!;
  static REFRESH_TOKEN_EXPIRY: string = process.env.REFRESH_TOKEN_EXPIRY!;
  static NEXTAUTH_URL: string = process.env.NEXTAUTH_URL!;
  static NEXTAUTH_SECRET: string = process.env.NEXTAUTH_SECRET!;
  static GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID!;
  static GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET!;
  static GITHUB_CLIENT_ID: string = process.env.GITHUB_CLIENT_ID!;
  static GITHUB_CLIENT_SECRET: string = process.env.GITHUB_CLIENT_SECRET!;
  static MAILTRAP_HOST: string = process.env.MAILTRAP_HOST!;
  static MAILTRAP_PORT: string = process.env.MAILTRAP_PORT!;
  static MAILTRAP_USER: string = process.env.MAILTRAP_USER!;
  static MAILTRAP_PASSWORD: string = process.env.MAILTRAP_PASSWORD!;
  static EMAIL_FROM: string = process.env.EMAIL_FROM!;
  static SMTP_SECURE: string = process.env.SMTP_SECURE!;
  static CLOUDINARY_NAME: string = process.env.CLOUDINARY_NAME!;
  static CLOUDINARY_API_KEY: string = process.env.CLOUDINARY_API_KEY!;
  static CLOUDINARY_API_SECRET: string = process.env.CLOUDINARY_API_SECRET!;
  static STRIPE_API_KEY: string = process.env.STRIPE_API_KEY!;
  static STRIPE_SECRET: string = process.env.STRIPE_SECRET!;
  static RAZORPAY_API_KEY: string = process.env.RAZORPAY_API_KEY!;
  static RAZORPAY_SECRET: string = process.env.RAZORPAY_SECRET!;
}

export default Config;
