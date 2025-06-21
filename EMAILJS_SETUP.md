# EmailJS Setup Guide

To make the contact form work and send emails to adityasr2018@gmail.com, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account (adityasr2018@gmail.com)
5. Note down the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., "user_def456")

## Step 5: Update the Code
Replace the placeholder values in `components/Contact.tsx`:

```typescript
const serviceId = 'YOUR_EMAILJS_SERVICE_ID' // Replace with your actual Service ID
const templateId = 'YOUR_EMAILJS_TEMPLATE_ID' // Replace with your actual Template ID
const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY' // Replace with your actual Public Key
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email (adityasr2018@gmail.com) for the message

## Features Implemented:
- ✅ Form validation (required fields, email format, message length)
- ✅ Real-time error feedback
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Form reset after successful submission
- ✅ Email sent to adityasr2018@gmail.com

## Free Tier Limits:
- EmailJS free tier allows 200 emails per month
- Perfect for a portfolio website

## Alternative Setup:
If you prefer not to use EmailJS, you can also:
1. Use a backend API (Node.js, Python, etc.)
2. Use other email services like SendGrid, Mailgun, etc.
3. Use form services like Formspree, Netlify Forms, etc. 