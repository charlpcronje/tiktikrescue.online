# File Analysis Report

This document contains an analysis of the project files.

| No.   | File                                 | Lines    | Words    | AI Tokens |
| ----- | ------------------------------------ | -------- | -------- | --------- |
|  1    | ./privacy-policy.html                | 188      | 1179     | 2152      |
|  2    | ./terms-of-service.html              | 298      | 1405     | 2764      |
|  3    | ./footer.html                        | 92       | 335      | 715       |
|  4    | ./index.html                         | 198      | 1072     | 2704      |
|       | Total                                | 776      | 3991     | 8335      |


## Total Counts Across All Files. Tokenizer Used: NLTK's Punkt Tokenizer
- Total Lines: 776
- Total Words: 3991
- Total AI Tokens: 8335

## File: privacy-policy.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy - TikTokRescue</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 50px;
            background-color: #f9f9f9;
            color: #333;
            bottom: 20%:
        }
        .container {
            max-width: 800px;
            margin: 40px auto;
            padding: 20px 30px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            
        }
        header, footer {
            text-align: center;
            padding: 20px 0;
        }
        header h1 {
            margin: 0;
            font-size: 2em;
            color: #0073e6;
        }
        h2 {
            color: #0073e6;
            border-bottom: 2px solid #0073e6;
            padding-bottom: 5px;
        }
        h3 {
            color: #005bb5;
        }
        ul, ol {
            margin: 10px 0 20px 20px;
        }
        .last-updated {
            font-size: 0.9em;
            color: #232323;
        }
        a {
            color: #0073e6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .important {
            background-color: #ffefef;
            border-left: 4px solid #ff4d4d;
            padding: 10px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Privacy Policy</h1>
            <p class="last-updated">Last Updated: January 3, 2025</p>
        </header>

        <section>
            <p>Welcome to TikTokRescue, a service provided by WebAlly Web and Mobile Development ("we", "our", "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our application, Chrome extension, and related services (collectively, the "Service"). Please read this Privacy Policy carefully. By accessing or using our Service, you agree to the terms outlined herein.</p>
        </section>

        <section>
            <h2>1. Information We Collect</h2>
            <h3>Personal Data</h3>
            <p>While using our Service, we may collect personally identifiable information that you voluntarily provide to us, including but not limited to:</p>
            <ul>
                <li><strong>Email Address:</strong> Used for account registration, communication, and support.</li>
                <li><strong>User Credentials:</strong> Such as usernames and passwords for accessing the Service.</li>
                <li><strong>Payment Information:</strong> If applicable, for processing transactions (Note: We do not store payment details; transactions are handled through secure third-party providers).</li>
            </ul>

            <h3>Usage Data</h3>
            <p>We may automatically collect information about how you access and use the Service, including:</p>
            <ul>
                <li><strong>Device Information:</strong> Including IP address, browser type, operating system, device identifiers.</li>
                <li><strong>Access Times:</strong> Date and time of your access to the Service.</li>
                <li><strong>Usage Patterns:</strong> Pages or features you access, actions you take within the Service.</li>
                <li><strong>Log Data:</strong> Server logs may collect information such as your device’s Internet Protocol (IP) address, browser type, and pages visited.</li>
            </ul>

            <h3>Content Data</h3>
            <p>When you use TikTokRescue to download or transfer content, we may process the content you interact with, including:</p>
            <ul>
                <li><strong>Downloaded Content:</strong> Videos, images, and other media downloaded from TikTok or transferred to other platforms like YouTube or Instagram.</li>
                <li><strong>Metadata:</strong> Information related to the content, such as timestamps, descriptions, and associated user information.</li>
            </ul>
        </section>

        <section>
            <h2>2. How We Use Your Information</h2>
            <ul>
                <li><strong>To Provide and Maintain the Service:</strong> Ensuring the functionality and performance of TikTokRescue.</li>
                <li><strong>To Process Transactions:</strong> Handling payments and delivering purchased services.</li>
                <li><strong>To Improve the Service:</strong> Analyzing usage patterns to enhance user experience and develop new features.</li>
                <li><strong>To Communicate with You:</strong> Sending updates, support messages, and promotional materials (with your consent where required).</li>
                <li><strong>To Ensure Security:</strong> Monitoring and protecting against unauthorized access, breaches, or other security threats.</li>
                <li><strong>To Comply with Legal Obligations:</strong> Adhering to applicable laws, regulations, and legal processes.</li>
            </ul>
        </section>

        <section>
            <h2>3. How We Share Your Information</h2>
            <ul>
                <li><strong>With Service Providers:</strong> Third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer support.</li>
                <li><strong>For Legal Reasons:</strong> When required by law, regulation, or legal process, or to protect our rights, property, or safety, and that of our users or others.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                <li><strong>With Your Consent:</strong> We may share your information with third parties if you have given us explicit consent to do so.</li>
            </ul>
            <div class="important">
                <strong>Important:</strong> We do not sell, rent, or lease your personal information to third parties for their marketing purposes without your explicit consent.
            </div>
        </section>

        <section>
            <h2>4. Third-Party Platforms and Services</h2>
            <p>When you use TikTokRescue to transfer or migrate content to third-party platforms such as YouTube, Instagram, or others, please be aware that:</p>
            <ul>
                <li><strong>Responsibility:</strong> You are responsible for complying with the terms, policies, and regulations of those third-party platforms.</li>
                <li><strong>Data Handling:</strong> WebAlly Web and Mobile Development does not assume any responsibility for how third-party platforms handle your data. We recommend reviewing the privacy policies of those platforms to understand their data practices.</li>
            </ul>
        </section>

        <section>
            <h2>5. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. These measures include:</p>
            <ul>
                <li><strong>Encryption:</strong> Protecting sensitive information during transmission using secure protocols (e.g., SSL/TLS).</li>
                <li><strong>Access Controls:</strong> Restricting access to personal data to authorized personnel only.</li>
                <li><strong>Regular Audits:</strong> Conducting periodic reviews of our data collection, storage, and processing practices.</li>
            </ul>
            <p>However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.</p>
        </section>

        <section>
            <h2>6. Your Rights and Choices</h2>
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
            <ul>
                <li><strong>Access:</strong> Request access to the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data under certain conditions.</li>
                <li><strong>Objection:</strong> Object to or restrict our processing of your personal data.</li>
                <li><strong>Portability:</strong> Request the transfer of your data to another service provider.</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below. We will respond to your request in accordance with applicable laws.</p>
        </section>

        <section>
            <h2>7. Children’s Privacy</h2>
            <p>Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information from our servers.</p>
        </section>

        <section>
            <h2>8. International Data Transfers</h2>
            <p>Your information may be transferred to and maintained on servers located outside your country of residence. By using our Service, you consent to the transfer of your information to countries that may have different data protection laws than your country. We take steps to ensure that your data is treated securely and in accordance with this Privacy Policy.</p>
        </section>

        <section>
            <h2>9. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Updated” date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
            <p>If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
        </section>

        <!-- Footer Placeholder -->
        <!-- Footer -->
        <footer class="bg-[#3a373a] py-8">
            <div class="container mx-auto px-4 text-center text-gray-400">
                |
                <a href="privacy-policy.html" class="hover:text-tiktok-blue transition-colors">Privacy Policy</a> |
                <a href="terms-of-service.html" class="hover:text-tiktok-blue transition-colors">Terms of Service</a> | <br>
                © 2025 TikTokRescue. Product by<a href="https://webally.co.za/projects/?q=" class="hover:text-tiktok-blue transition-colors"> WebAlly</a> Software Development. All rights reserved.      
            </div>
        </footer>
</body>
</html>

```

## File: terms-of-service.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy - TikTokRescue</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }
        .container {
            max-width: 800px;
            margin: 40px auto;
            padding: 20px 30px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        header, footer {
            text-align: center;
            padding: 20px 0;
        }
        header h1 {
            margin: 0;
            font-size: 2em;
            color: #0073e6;
        }
        h2 {
            color: #0073e6;
            border-bottom: 2px solid #0073e6;
            padding-bottom: 5px;
        }
        h3 {
            color: #005bb5;
        }
        ul, ol {
            margin: 10px 0 20px 20px;
            list-style-type: disc;
        }
        .last-updated {
            font-size: 0.9em;
            color: #666;
        }
        a {
            color: #0073e6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .important {
            background-color: #ffefef;
            border-left: 4px solid #ff4d4d;
            padding: 10px;
            margin: 20px 0;
        }
        /* Footer Styles */
        footer {
            background-color: #333;
            color: #fff;
            text-align: left;
            padding: 40px 20px;
        }
        .footer-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            max-width: 1000px;
            margin: 0 auto;
        }
        .footer-section {
            flex: 1 1 200px;
            margin: 10px;
        }
        .footer-section h4 {
            border-bottom: 1px solid #555;
            padding-bottom: 10px;
            margin-bottom: 10px;
            color: #fff;
        }
        .footer-section ul {
            list-style: none;
            padding: 0;
        }
        .footer-section ul li {
            margin-bottom: 8px;
        }
        .footer-section ul li a {
            color: #ddd;
            text-decoration: none;
        }
        .footer-section ul li a:hover {
            text-decoration: underline;
            color: #fff;
        }
        .social-links a {
            margin-right: 10px;
            color: #ddd;
            text-decoration: none;
            font-size: 1.2em;
        }
        .social-links a:hover {
            color: #fff;
        }
        .parent-website {
            margin-top: 20px;
        }
        .parent-website a {
            color: #0073e6;
            text-decoration: none;
        }
        .parent-website a:hover {
            text-decoration: underline;
        }
        @media (max-width: 600px) {
            .footer-container {
                flex-direction: column;
                align-items: center;
            }
            .footer-section {
                margin: 20px 0;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Privacy Policy</h1>
            <p class="last-updated">Last Updated: January 3, 2025</p>
        </header>

        <section>
            <p>Welcome to TikTokRescue, a service provided by WebAlly Web and Mobile Development ("we", "our", "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our application, Chrome extension, and related services (collectively, the "Service"). Please read this Privacy Policy carefully. By accessing or using our Service, you agree to the terms outlined herein.</p>
        </section>

        <section>
            <h2>1. Information We Collect</h2>
            <h3>Personal Data</h3>
            <p>While using our Service, we may collect personally identifiable information that you voluntarily provide to us, including but not limited to:</p>
            <ul>
                <li><strong>Email Address:</strong> Used for account registration, communication, and support.</li>
                <li><strong>User Credentials:</strong> Such as usernames and passwords for accessing the Service.</li>
                <li><strong>Payment Information:</strong> If applicable, for processing transactions (Note: We do not store payment details; transactions are handled through secure third-party providers).</li>
            </ul>

            <h3>Usage Data</h3>
            <p>We may automatically collect information about how you access and use the Service, including:</p>
            <ul>
                <li><strong>Device Information:</strong> Including IP address, browser type, operating system, device identifiers.</li>
                <li><strong>Access Times:</strong> Date and time of your access to the Service.</li>
                <li><strong>Usage Patterns:</strong> Pages or features you access, actions you take within the Service.</li>
                <li><strong>Log Data:</strong> Server logs may collect information such as your device’s Internet Protocol (IP) address, browser type, and pages visited.</li>
            </ul>

            <h3>Content Data</h3>
            <p>When you use TikTokRescue to download or transfer content, we may process the content you interact with, including:</p>
            <ul>
                <li><strong>Downloaded Content:</strong> Videos, images, and other media downloaded from TikTok or transferred to other platforms like YouTube or Instagram.</li>
                <li><strong>Metadata:</strong> Information related to the content, such as timestamps, descriptions, and associated user information.</li>
            </ul>
        </section>

        <section>
            <h2>2. How We Use Your Information</h2>
            <ul>
                <li><strong>To Provide and Maintain the Service:</strong> Ensuring the functionality and performance of TikTokRescue.</li>
                <li><strong>To Process Transactions:</strong> Handling payments and delivering purchased services.</li>
                <li><strong>To Improve the Service:</strong> Analyzing usage patterns to enhance user experience and develop new features.</li>
                <li><strong>To Communicate with You:</strong> Sending updates, support messages, and promotional materials (with your consent where required).</li>
                <li><strong>To Ensure Security:</strong> Monitoring and protecting against unauthorized access, breaches, or other security threats.</li>
                <li><strong>To Comply with Legal Obligations:</strong> Adhering to applicable laws, regulations, and legal processes.</li>
            </ul>
        </section>

        <section>
            <h2>3. How We Share Your Information</h2>
            <ul>
                <li><strong>With Service Providers:</strong> Third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer support.</li>
                <li><strong>For Legal Reasons:</strong> When required by law, regulation, or legal process, or to protect our rights, property, or safety, and that of our users or others.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                <li><strong>With Your Consent:</strong> We may share your information with third parties if you have given us explicit consent to do so.</li>
            </ul>
            <div class="important">
                <strong>Important:</strong> We do not sell, rent, or lease your personal information to third parties for their marketing purposes without your explicit consent.
            </div>
        </section>

        <section>
            <h2>4. Third-Party Platforms and Services</h2>
            <p>When you use TikTokRescue to transfer or migrate content to third-party platforms such as YouTube, Instagram, or others, please be aware that:</p>
            <ul>
                <li><strong>Responsibility:</strong> You are responsible for complying with the terms, policies, and regulations of those third-party platforms.</li>
                <li><strong>Data Handling:</strong> WebAlly Web and Mobile Development does not assume any responsibility for how third-party platforms handle your data. We recommend reviewing the privacy policies of those platforms to understand their data practices.</li>
            </ul>
        </section>

        <section>
            <h2>5. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. These measures include:</p>
            <ul>
                <li><strong>Encryption:</strong> Protecting sensitive information during transmission using secure protocols (e.g., SSL/TLS).</li>
                <li><strong>Access Controls:</strong> Restricting access to personal data to authorized personnel only.</li>
                <li><strong>Regular Audits:</strong> Conducting periodic reviews of our data collection, storage, and processing practices.</li>
            </ul>
            <p>However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.</p>
        </section>

        <section>
            <h2>6. Your Rights and Choices</h2>
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
            <ul>
                <li><strong>Access:</strong> Request access to the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data under certain conditions.</li>
                <li><strong>Objection:</strong> Object to or restrict our processing of your personal data.</li>
                <li><strong>Portability:</strong> Request the transfer of your data to another service provider.</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below. We will respond to your request in accordance with applicable laws.</p>
        </section>

        <section>
            <h2>7. Children’s Privacy</h2>
            <p>Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information from our servers.</p>
        </section>

        <section>
            <h2>8. International Data Transfers</h2>
            <p>Your information may be transferred to and maintained on servers located outside your country of residence. By using our Service, you consent to the transfer of your information to countries that may have different data protection laws than your country. We take steps to ensure that your data is treated securely and in accordance with this Privacy Policy.</p>
        </section>

        <section>
            <h2>9. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Updated” date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
            <p>If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
        </section>

        <footer>
            <div class="footer-container">
                <!-- Site Map Section -->
                <div class="footer-section">
                    <h4>Site Map</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li>
                            <a href="download.html">Download</a>
                            <ul>
                                <li><a href="features.html">Features</a></li>
                                <li><a href="install.html">Installation Guide</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="documentation.html">Documentation</a>
                            <ul>
                                <li><a href="user-manual.html">User Manual</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                            </ul>
                        </li>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="terms-of-service.html">Terms of Service</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>

                <!-- Follow Us Section -->
                <div class="footer-section">
                    <h4>Follow Us On</h4>
                    <div class="social-links">
                        <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub">🔗 GitHub</a>
                        <a href="https://youtube.com/yourchannel" target="_blank" aria-label="YouTube">▶️ YouTube</a>
                        <a href="https://api.whatsapp.com/send?phone=yourphonenumber" target="_blank" aria-label="WhatsApp">💬 WhatsApp</a>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">🔗 LinkedIn</a>
                    </div>
                </div>

                <!-- Contact and Parent Website Section -->
                <div class="footer-section">
                    <h4>Contact &amp; More</h4>
                    <p><a href="mailto:support@webally.com">Contact Us</a></p>
                    <div class="parent-website">
                        <p>Visit our parent website:</p>
                        <p><a href="https://webally.co.za/" target="_blank">WebAlly</a></p>
                    </div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <p>&copy; 2025 WebAlly Web and Mobile Development. All rights reserved.</p>
            </div>
        </footer>
    </div>
</body>
</html>

```

## File: footer.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <title>Footer Example</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: #f0f0f0; /* Light gray background for the body */
            color: #333; /* Dark text color for body */
            min-height: 100vh; /* Minimum height to take full viewport height */
            display: flex;
            flex-direction: column;
        }

        footer {
            width: 100%; /* Full width */
            background-color: #222; /* Dark background for footer */
            color: #fff; /* White text color for footer */
            text-align: center;
            font-size: 16px;
            position: fixed; /* Fix position to bottom */
            bottom: 0; /* Align to bottom */
            left: 0; /* Align to left */
            padding: 10px 0; /* Vertical padding only */
            height: 50px; /* Fixed height for the footer */
        }

        .social-icons {
            display: inline-block; /* Align icons in line */
            font-size: 24px;
        }

        .social-icons a {
            color: #fff; /* Set icons to white */
            margin: 0 10px; /* Space around icons */
            text-decoration: none;
        }

        .social-icons a:hover {
            color: #ccc; /* Light grey color on hover for icons */
        }

        .footer-links {
            display: inline-block; /* Align links in line */
            margin: 0 15px; /* Space between links */
        }

        .footer-links a {
            color: #fff; /* White color for footer links */
            text-decoration: none;
            margin-right: 30px; /* Space between links */
        }

        .footer-links a:hover {
            text-decoration: underline; /* Underline on hover for better visibility */
        }

        /* Additional style for the WebAlly link to make it green */
        .footer-links a[href="https://webally.co.za/"] {
            color: #4CAF50; /* Green color */
        }

        .footer-links a[href="https://webally.co.za/"]:hover {
            color: #367c39; /* Darker green on hover */
        }
    </style>
</head>
<body>
    <footer>
        <div class="social-icons">
            <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="https://facebook.com/yourpage" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://youtube.com/yourchannel" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="https://webally.co.za/" target="_blank" aria-label="WebAlly Website"><i class="fas fa-globe"></i></a>
        </div>
        <div class="footer-links">
            <a href="about.html">About TikTok Rescue</a>
            <a href="how-it-works.html">How It Works</a>
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms-of-service.html">Terms of Service</a>
            <a href="contact.html">Contact Us</a>
        </div>
        <div>© 2025 TikTok Rescue. Web design by <a href="https://webally.co.za/" target="_blank">WebAlly</a>.</div>
    </footer>
</body>
</html>

```

## File: index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TikTok Rescue - Bulk Download Your TikTok Videos</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              'tiktok-pink': '#ff2e57',
              'tiktok-blue': '#5cfffa',
            },
          },
        },
      }
    </script>
    <link rel="icon" href="favicon.png" type="image/png">
    <style>
      .download-btn {
        background: linear-gradient(45deg, #fe2c55, #25f4ee);
        color: white;
        border: none;
        padding: 1rem 2rem;
        font-size: 1.2rem;
        border-radius: 30px;
        cursor: pointer;
        transition: transform 0.3s;
        margin: 1rem 0;
    }
    
    .download-btn:hover {
        transform: scale(1.05);
    }
    </style>
</head>
<body class="bg-[#2e2b2e] text-white">
    <nav class="fixed w-full bg-black text-white py-2 z-50">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-tiktok-blue to-tiktok-pink text-transparent bg-clip-text">
                <a href="https://tiktokrescue.online" class="flex items-center gap-2">
                  <img src="https://tiktokrescue.online/img/logo.png" alt="Logo" class="h-10">
                  <span>Tik Tok Rescue</span>
                </a>
              </div>
                <div class="flex gap-6 text-sm">
                    <a href="#home" class="flex items-center gap-1 hover:text-tiktok-blue transition-colors">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home" height="16" width="16"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        Home
                    </a>
                    <a href="#download" class="flex items-center gap-1 hover:text-tiktok-blue transition-colors">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download" height="16" width="16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                        Download
                    </a>
                    <a href="#how-it-works" class="flex items-center gap-1 hover:text-tiktok-blue transition-colors">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info" height="16" width="16"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg>
                        How it Works
                    </a>
                    <a href="#affiliates" class="flex items-center gap-1 hover:text-tiktok-blue transition-colors">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users" height="16" width="16"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        Affiliates
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <div id="root">
        <div class="min-h-screen bg-[#2e2b2e] text-white">
            <!-- Hero Section -->
            <section id="home" class="pt-32 pb-20">
                <div class="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-tiktok-blue to-tiktok-pink text-transparent bg-clip-text">
                            COMING SOON!!!
                        </h1>
                        <p class="text-xl text-gray-300 mb-8">
                            Effortlessly Download, Preserve, and Transfer Your TikTok Content Safely.
                        </p>
                        <button class="download-btn px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-l from-tiktok-blue to-tiktok-pink hover:opacity-90 transition-opacity">
                            Download Now - <span style="color: #df3b5d">Only $4.99</span>
                        </button>
                    </div>
                    <div class="relative">
                        <img
                            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80"
                            alt="TikTok Content"
                            class="rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            <!-- Pricing Section -->
            <section class="py-20 bg-[#3a373a]">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-4xl font-bold mb-12">Once off Payment. No Hidden Fees</h2>
                    <div class="max-w-md mx-auto bg-[#2e2b2e] p-8 rounded-2xl">
                        <div class="text-5xl font-bold mb-6">$4.99</div>
                        <ul class="text-left space-y-4 mb-8">
                            <li class="flex items-center gap-2">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-tiktok-blue" height="20" width="20"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Unlimited downloads and transfers
                            </li>
                            <li class="flex items-center gap-2">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-tiktok-blue" height="20" width="20"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Lifetime access to updates
                            </li>
                            <li class="flex items-center gap-2">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-tiktok-blue" height="20" width="20"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                No recurring fees
                            </li>
                        </ul>
                        <button class="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-l from-tiktok-blue to-tiktok-pink hover:opacity-90 transition-opacity download-btn">Get Started <span style="color: #df3b5d">Now</span></button>
                    </div>
                </div>
            </section>

            <!-- Video Section -->
            <section id="how-it-works" class="py-20">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-4xl font-bold mb-12">See How It Works</h2>
                    <div class="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-[#3a373a] rounded-2xl flex items-center justify-center">
                        <p class="text-xl text-gray-400">Video Placeholder</p>
                    </div>
                </div>
            </section>

            <!-- Why Choose Us Section -->
            <section class="py-20 bg-[#3a373a]">
                <div class="container mx-auto px-4">
                    <h2 class="text-4xl font-bold mb-6 text-center">Why choose TikTok Rescue?</h2>
                    <p class="text-gray-300 max-w-3xl mx-auto text-center mb-16">
                        With the impending TikTok ban on January 19th, safeguarding your cherished content has never been more crucial. TikTokRescue is your reliable solution to securely download and preserve your TikTok videos before they potentially disappear.
                    </p>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="flex flex-col items-center text-center p-6 bg-[#2e2b2e] rounded-xl">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield text-tiktok-blue mb-4" height="32" width="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            <h3 class="text-xl font-semibold mb-2 text-white">Secure Downloads</h3>
                            <p class="text-gray-300">Safe and private content downloading with encryption</p>
                        </div>
                        <div class="flex flex-col items-center text-center p-6 bg-[#2e2b2e] rounded-xl">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap text-tiktok-blue mb-4" height="32" width="32"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                            <h3 class="text-xl font-semibold mb-2 text-white">Lightning Fast</h3>
                            <p class="text-gray-300">Download multiple videos simultaneously at high speed</p>
                        </div>
                        <div class="flex flex-col items-center text-center p-6 bg-[#2e2b2e] rounded-xl">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share-2 text-tiktok-blue mb-4" height="32" width="32"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="10.5" y2="6.5"></line><line x1="15.41" x2="8.59" y1="17.5" y2="13.5"></line></svg>
                            <h3 class="text-xl font-semibold mb-2 text-white">Easy Transfer</h3>
                            <p class="text-gray-300">Seamlessly transfer content to other platforms</p>
                        </div>
                        <div class="flex flex-col items-center text-center p-6 bg-[#2e2b2e] rounded-xl">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock text-tiktok-blue mb-4" height="32" width="32"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            <h3 class="text-xl font-semibold mb-2 text-white">Time-Saving</h3>
                            <p class="text-gray-300">Batch download functionality for efficiency</p>
                        </div>
                        <div class="flex flex-col items-center text-center p-6 bg-[#2e2b2e] rounded-xl">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud text-tiktok-blue mb-4" height="32" width="32"><path d="M18 10h-1.26A8 8 0 1 0 6 10H4a9 9 0 1 1 5-8.94L10.3 7"></path></svg>
                            <h3 class="text-xl font-semibold mb-2 text-white">Cloud Backup</h3>
                            <p class="text-gray-300">Automatic cloud backup of your content</p>
                        </div>
                        <div class="flex flex-col items-center text-center p-6 bg-[#2e2b2e] rounded-xl">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download text-tiktok-blue mb-4" height="32" width="32"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                            <h3 class="text-xl font-semibold mb-2 text-white">Offline Access</h3>
                            <p class="text-gray-300">Download for offline viewing anytime</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Affiliate Section -->
            <section id="affiliates" class="py-20">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-4xl font-bold mb-6">Join Our Affiliate Program</h2>
                    <p class="text-2xl text-tiktok-blue font-semibold mb-8">Earn 30% for Every Referral</p>
                    <p class="text-gray-300 max-w-2xl mx-auto mb-12">
                        Partner with TikTokRescue and turn your network into earnings. As an affiliate, you'll receive a generous 30% commission for every referral that purchases our service.
                    </p>
                    <button class="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-tiktok-blue to-tiktok-pink hover:opacity-90 transition-opacity">Become an Affiliate</button>
                </div>
            </section>

            <!-- Footer -->
            <footer class="bg-[#3a373a] py-8">
                <div class="container mx-auto px-4 text-center text-gray-400">
                    |
                    <a href="https://tiktokrescue.online/privacy-policy.html" target="_blank" class="hover:text-tiktok-blue transition-colors">Privacy Policy</a> |
                    <a href="https://tiktokrescue.online/terms-of-service.html" target="_blank" class="hover:text-tiktok-blue transition-colors">Terms of Service</a> | <br>
                    © 2025 TikTokRescue. Product by<a href="https://webally.co.za/projects/?q=" class="hover:text-tiktok-blue transition-colors"> Webally</a> Software Development. All rights reserved.      
                </div>
            </footer>
        </div>
    </div>
</body>
</html>
```


