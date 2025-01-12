# File Analysis Report

This document contains an analysis of the project files.

| No.   | File                                 | Lines    | Words    | AI Tokens |
| ----- | ------------------------------------ | -------- | -------- | --------- |
|  1    | ./privacy-policy.html                | 188      | 1295     | 2351      |
|  2    | ./terms-of-service.html              | 252      | 1530     | 2612      |
|  3    | ./footer.html                        | 11       | 51       | 153       |
|  4    | ./index.html                         | 329      | 1916     | 4155      |
|  5    | ./header.html                        | 76       | 450      | 1258      |
|  6    | ./base-template.html                 | 67       | 143      | 364       |
|  7    | ./contact_us.html                    | 103      | 279      | 699       |
|  8    | ./styles.css                         | 17       | 34       | 68        |
|  9    | ./scripts.js                         | 73       | 235      | 472       |
|  10   | ./auth.html                          | 170      | 341      | 767       |
|  11   | ./download.html                      | 68       | 148      | 361       |
|  12   | ./auth.js                            | 267      | 728      | 2250      |
|  13   | ./about.html                         | 68       | 148      | 361       |
|  14   | ./dashboard.html                     | 34       | 90       | 266       |
|  15   | ./affiliates.html                    | 186      | 707      | 1596      |
|  16   | ./paypal-service.html                | 121      | 531      | 1163      |
|  17   | ./index.js                           | 31       | 66       | 149       |
|  18   | ./send_email.php                     | 62       | 232      | 453       |
|  19   | ./contact_error.html                 | 27       | 75       | 188       |
|  20   | ./contact_success.html               | 29       | 78       | 196       |
|       | Total                                | 2179     | 9077     | 19882     |


## Total Counts Across All Files. Tokenizer Used: NLTK's Punkt Tokenizer
- Total Lines: 2179
- Total Words: 9077
- Total AI Tokens: 19882

## File: privacy-policy.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Privacy Policy - TikTok Rescue</title>
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
    <!-- Header Placeholder -->
    <div id="header-placeholder"></div>

    <div id="root">
        <div class="min-h-screen bg-[#2e2b2e] text-white">
            <!-- Privacy Policy Content -->
            <main class="pt-4 pb-4 pl-10 pr-10">
                <div class="container mx-auto px-4 py-20 text-gray-300">
                    <!-- Title and Last Updated -->
                    <h1 class="text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
                    <p class="mb-8">Last Updated: January 3, 2025</p>

                    <!-- Introduction -->
                    <p class="mb-6">
                        Welcome to TikTokRescue, a service provided by WebAlly Software Development ("we", "our", "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our application, Chrome extension, and related services (collectively, the "Service"). Please read this Privacy Policy carefully. By accessing or using our Service, you agree to the terms outlined herein.
                    </p>

                    <!-- Section 1 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>

                    <!-- Subsection: Personal Data -->
                    <h3 class="text-xl font-semibold mb-2 text-white">Personal Data</h3>
                    <p class="mb-4">
                        While using our Service, we may collect personally identifiable information that you voluntarily provide to us, including but not limited to:
                    </p>
                    <ul class="list-disc list-inside mb-6">
                        <li><strong>Email Address:</strong> Used for account registration, communication, and support.</li>
                        <li><strong>User Credentials:</strong> We collect users details through Googles Firebase Service. Only usernames, phone numbers(if applicable) and unique ID's are stored. We Do not have access to any sensitive information such as Passwords </li>
                        <li><strong>Payment Information:</strong> If applicable, for processing transactions (Note: We do not store payment details; transactions are handled through secure third-party providers).</li>
                    </ul>

                    <!-- Subsection: Usage Data -->
                    <h3 class="text-xl font-semibold mb-2 text-white">Usage Data</h3>
                    <p class="mb-4">
                        We may automatically collect information about how you access and use the Service, including:
                    </p>
                    <ul class="list-disc list-inside mb-6">
                        <li><strong>Device Information:</strong> Including IP address, browser type, operating system, device identifiers.</li>
                        <li><strong>Access Times:</strong> Date and time of your access to the Service.</li>
                        <li><strong>Usage Patterns:</strong> Pages or features you access, actions you take within the Service.</li>
                        <li><strong>Log Data:</strong> Server logs may collect information such as your device’s Internet Protocol (IP) address, browser type, and pages visited.</li>
                    </ul>

                    <!-- Subsection: Content Data -->
                    <h3 class="text-xl font-semibold mb-2 text-white">Content Data</h3>
                    <p class="mb-4">
                        When you use TikTokRescue to download or transfer content, we may process the content you interact with, including:
                    </p>
                    <ul class="list-disc list-inside mb-6">
                        <li><strong>Downloaded Content:</strong> Videos, images, and other media downloaded from TikTok or transferred to other platforms like YouTube or Instagram.</li>
                        <li><strong>Metadata:</strong> Information related to the content, such as timestamps, descriptions, and associated user information.</li>
                    </ul>

                    <!-- Section 2 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
                    <ul class="list-disc list-inside mb-6">
                        <li><strong>To Provide and Maintain the Service:</strong> Ensuring the functionality and performance of TikTokRescue.</li>
                        <li><strong>To Process Transactions:</strong> Handling payments and delivering purchased services.</li>
                        <li><strong>To Improve the Service:</strong> Analyzing usage patterns to enhance user experience and develop new features.</li>
                        <li><strong>To Communicate with You:</strong> Sending updates, support messages, and promotional materials (with your consent where required).</li>
                        <li><strong>To Ensure Security:</strong> Monitoring and protecting against unauthorized access, breaches, or other security threats.</li>
                        <li><strong>To Comply with Legal Obligations:</strong> Adhering to applicable laws, regulations, and legal processes.</li>
                    </ul>

                    <!-- Section 3 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">3. How We Share Your Information</h2>
                    <ul class="list-disc list-inside mb-6">
                        <li><strong>With Service Providers:</strong> Third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer support.</li>
                        <li><strong>For Legal Reasons:</strong> When required by law, regulation, or legal process, or to protect our rights, property, or safety, and that of our users or others.</li>
                        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                        <li><strong>With Your Consent:</strong> We may share your information with third parties if you have given us explicit consent to do so.</li>
                    </ul>
                    <div class="bg-[#3a373a] border-l-4 border-[#ff4d4d] p-4 mb-6">
                        <strong>Important:</strong> We do not sell, rent, or lease your personal information to third parties for their marketing purposes without your explicit consent.
                    </div>

                    <!-- Section 4 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">4. Third-Party Platforms and Services</h2>
                    <p class="mb-6">
                        When you use TikTokRescue to transfer or migrate content to third-party platforms such as YouTube, Instagram, or others, please be aware that:
                    </p>
                    <ul class="list-disc list-inside mb-6">
                        <li><strong>Responsibility:</strong> You are responsible for complying with the terms, policies, and regulations of those third-party platforms.</li>
                        <li><strong>Data Handling:</strong> WebAlly Software Developers does not assume any responsibility for how third-party platforms handle your data. We recommend reviewing the privacy policies of those platforms to understand their data practices.</li>
                    </ul>

                    <!-- Section 5 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
                    <p class="mb-4">
                        We implement a variety of security measures to maintain the safety of your personal information. These measures include:
                    </p>
                    <ul class="list-disc list-inside mb-6">
                        <li><strong>Encryption:</strong> Protecting sensitive information during transmission using secure protocols (e.g., SSL/TLS).</li>
                        <li><strong>Access Controls:</strong> Restricting access to personal data to authorized personnel only.</li>
                        <li><strong>Regular Audits:</strong> Conducting periodic reviews of our data collection, storage, and processing practices.</li>
                    </ul>
                    <p class="mb-6">
                        However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                    </p>

                    <!-- Section 6 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">6. Your Rights and Choices</h2>
                    <p class="mb-4">
                        Depending on your jurisdiction, you may have the following rights regarding your personal information:
                    </p>
                    <ul class="list-disc list-inside mb-6">
                        <li><strong>Access:</strong> Request access to the personal data we hold about you.</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal data under certain conditions.</li>
                        <li><strong>Objection:</strong> Object to or restrict our processing of your personal data.</li>
                        <li><strong>Portability:</strong> Request the transfer of your data to another service provider.</li>
                    </ul>
                    <p class="mb-6">
                        To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below. We will respond to your request in accordance with applicable laws.
                    </p>

                    <!-- Section 7 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">7. Children’s Privacy</h2>
                    <p class="mb-6">
                        Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information from our servers.
                    </p>

                    <!-- Section 8 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">8. International Data Transfers</h2>
                    <p class="mb-6">
                        Your information may be transferred to and maintained on servers located outside your country of residence. By using our Service, you consent to the transfer of your information to countries that may have different data protection laws than your country. We take steps to ensure that your data is treated securely and in accordance with this Privacy Policy.
                    </p>

                    <!-- Section 9 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">9. Changes to This Privacy Policy</h2>
                    <p class="mb-4">
                        We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Updated” date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                    </p>
                    <p class="mb-6">
                        If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>
                </div>
            </main>
        </div>
    </div>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <!-- Footer Inclusion Script -->
    <script src="scripts.js"></script>
</body>
</html>

```

## File: terms-of-service.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Terms of Service - TikTok Rescue</title>
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
    <!-- Header Placeholder -->
    <div id="header-placeholder"></div>

    <div id="root">
        <div class="min-h-screen bg-[#2e2b2e] text-white">
            <!-- Unique Content for Terms of Service Page -->
            <main class="pt-4 pb-4 pl-10 pr-10">
                <div class="container mx-auto px-4 py-20 text-gray-300">
                    <!-- Title and Last Updated -->
                    <h1 class="text-4xl font-bold mb-4 text-white">Terms of Service</h1>
                    <p class="mb-8">Last Updated: January 3, 2025</p>
                
                    <!-- Introduction -->
                    <p class="mb-6">
                        Welcome to TikTokRescue! Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the TikTokRescue application, Chrome extension, and related services (collectively, the "Service") operated by Webally Web and Mobile Development ("us", "we", or "our").
                    </p>
                    <p class="mb-6">
                        By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                    </p>
                
                    <!-- Definitions -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">Definitions:</h2>
                    <ul class="list-disc list-inside mb-8">
                        <li>
                            <strong>Webally Web and Mobile Development:</strong> The company responsible for developing, maintaining, and operating the TikTokRescue service. Referred to as "we," "us," or "our" in these documents.
                        </li>
                        <li>
                            <strong>TikTokRescue:</strong> The application and Chrome extension provided by Webally Web and Mobile Development, designed to help TikTok users download, preserve, and transfer their content.
                        </li>
                    </ul>
                
                    <!-- Section 1 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
                    <p class="mb-6">
                        By downloading, installing, or using TikTokRescue, you agree to comply with and be legally bound by these Terms and Conditions. These Terms apply to all users of the Service, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content.
                    </p>
                
                    <!-- Section 2 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">2. Use of the Service</h2>
                    
                    <!-- Subsection: Eligibility -->
                    <h3 class="text-xl font-semibold mb-2 text-white">Eligibility:</h3>
                    <p class="mb-4">
                        You must be at least 13 years old to use the Service. By using the Service, you represent and warrant that you meet this age requirement.
                    </p>
                
                    <!-- Subsection: License -->
                    <h3 class="text-xl font-semibold mb-2 text-white">License:</h3>
                    <p class="mb-4">
                        We grant you a limited, non-exclusive, non-transferable, revocable license to use the Service strictly in accordance with these Terms.
                    </p>
                
                    <!-- Subsection: Permitted Uses -->
                    <h3 class="text-xl font-semibold mb-2 text-white">Permitted Uses:</h3>
                    <ul class="list-disc list-inside mb-6">
                        <li>Downloading TikTok content in bulk or individually.</li>
                        <li>Transferring videos directly to YouTube or downloading them to your home computer’s drive.</li>
                        <li>Migrating content to other platforms like Instagram.</li>
                        <li>Accessing and downloading older or archived TikTok content.</li>
                    </ul>
                
                    <!-- Subsection: Prohibited Uses -->
                    <h3 class="text-xl font-semibold mb-2 text-white">Prohibited Uses:</h3>
                    <ul class="list-disc list-inside mb-6">
                        <li>Using the Service for any unlawful purpose or in violation of any local, state, national, or international law.</li>
                        <li>Attempting to interfere with or disrupt the integrity or performance of the Service.</li>
                        <li>Reverse engineering, decompiling, or disassembling the Service.</li>
                    </ul>
                
                    <!-- Subsection: Compliance with Third-Party Platforms -->
                    <h3 class="text-xl font-semibold mb-2 text-white">Compliance with Third-Party Platforms:</h3>
                    <p class="mb-6">
                        When using the Service to transfer or migrate content to third-party platforms such as YouTube, Instagram, or others, you are responsible for complying with all applicable terms, policies, and regulations of those platforms. Webally Web and Mobile Development does not assume any responsibility for your adherence to TikTok’s, YouTube’s, Instagram’s, or any other third-party platform’s rules and guidelines. It is your responsibility to ensure that your use of the Service and any content transferred complies with the respective platform’s terms of service and community guidelines.
                    </p>
                
                    <!-- Section 3 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">3. Affiliate Program</h2>
                    
                    <!-- Subsection: Participation -->
                    <h3 class="text-xl font-semibold mb-2 text-white">Participation:</h3>
                    <p class="mb-4">
                        By joining our affiliate program, you agree to promote TikTokRescue in accordance with these Terms and any additional guidelines provided.
                    </p>
                
                    <!-- Subsection: Commissions -->
                    <h3 class="text-xl font-semibold mb-2 text-white">Commissions:</h3>
                    <p class="mb-4">
                        Affiliates will earn a 30% commission for every valid referral that results in a purchase of the Service.
                    </p>
                
                    <!-- Subsection: Eligibility -->
                    <h3 class="text-xl font-semibold mb-2 text-white">Eligibility:</h3>
                    <p class="mb-4">
                        Affiliates must provide accurate and complete information during registration and maintain their account in good standing.
                    </p>
                
                    <!-- Subsection: Termination -->
                    <h3 class="text-xl font-semibold mb-2 text-white">Termination:</h3>
                    <p class="mb-6">
                        We reserve the right to terminate your participation in the affiliate program at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or us.
                    </p>
                
                    <!-- Section 4 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">4. Payment and Refunds</h2>
                    
                    <!-- Subsection: Pricing -->
                    <h3 class="text-xl font-semibold mb-2 text-white">Pricing:</h3>
                    <p class="mb-4">
                        The Service is available for a one-time payment of $4.99 with no hidden costs.
                    </p>
                
                    <!-- Subsection: Refund Policy -->
                    <h3 class="text-xl font-semibold mb-2 text-white">Refund Policy:</h3>
                    <p class="mb-6">
                        Due to the nature of the Service, all sales are final. We do not offer refunds once the purchase is completed.
                    </p>
                
                    <!-- Section 5 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">5. Intellectual Property</h2>
                    <p class="mb-6">
                        All content, features, and functionality of the Service, including but not limited to information, software, text, displays, images, and logos, are the exclusive property of Webally Web and Mobile Development or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    </p>
                
                    <!-- Section 6 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">6. Disclaimer of Warranties</h2>
                    <p class="mb-4">
                        The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Webally Web and Mobile Development makes no representations or warranties of any kind, express or implied, regarding the operation or availability of the Service, or the information, content, or materials included therein.
                    </p>
                    <p class="mb-6">
                        To the fullest extent permitted by applicable law, we disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.
                    </p>
                
                    <!-- Section 7 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">7. Limitation of Liability</h2>
                    <p class="mb-4">
                        In no event shall Webally Web and Mobile Development, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                    </p>
                    <ul class="list-disc list-inside mb-6">
                        <li>Your use or inability to use the Service.</li>
                        <li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
                        <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Service by any third party.</li>
                        <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Service.</li>
                    </ul>
                
                    <!-- Section 8 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">8. Indemnification</h2>
                    <p class="mb-4">
                        You agree to defend, indemnify, and hold harmless Webally Web and Mobile Development and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:
                    </p>
                    <ul class="list-disc list-inside mb-6">
                        <li>Your use of and access to the Service.</li>
                        <li>Your violation of any term of these Terms.</li>
                        <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right.</li>
                        <li>Any claim that your use of the Service caused damage to a third party.</li>
                    </ul>
                
                    <!-- Section 9 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">9. Termination</h2>
                    <p class="mb-6">
                        We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                
                    <!-- Section 10 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">10. Governing Law</h2>
                    <p class="mb-6">
                        These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                    </p>
                
                    <!-- Section 11 -->
                    <h2 class="text-2xl font-semibold mb-4 text-white">11. Changes to the Terms</h2>
                    <p class="mb-4">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>
                    <p class="mb-6">
                        By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                    </p>
                </div>
                
            </main>
        </div>
    </div>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <!-- Footer Inclusion Script -->
    <script>
        // Function to load external HTML files
        function loadHTML(elementId, url) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    document.getElementById(elementId).innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading ' + url + ':', error);
                });
        }

        // Load header and footer on DOMContentLoaded
        document.addEventListener('DOMContentLoaded', () => {
            loadHTML('header-placeholder', 'header.html');
            loadHTML('footer-placeholder', 'footer.html');
        });
    </script>
</body>
</html>

```

## File: footer.html
```html
<!-- footer.html -->
<footer class="bg-[#3a373a] py-8">
    <div class="container mx-auto px-4 text-center text-gray-400">
        |
        <a href="https://tiktokrescue.online/privacy-policy.html" target="_blank" class="hover:text-tiktok-blue transition-colors">Privacy Policy</a> |
        <a href="https://tiktokrescue.online/terms-of-service.html" target="_blank" class="hover:text-tiktok-blue transition-colors">Terms of Service</a> | 
        <a href="https://tiktokrescue.online/contact_us.html" target="_blank" class="hover:text-tiktok-blue transition-colors">Contact Us</a> |<br>
        © 2025 TikTokRescue. Product by <a href="https://webally.co.za/projects/?q=" class="hover:text-tiktok-blue transition-colors">WebAlly</a> Software Development. All rights reserved.      
    </div>
</footer>

```

## File: index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>TikTok Rescue - Bulk Download Your TikTok Videos</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore-compat.js"></script>
    
    <script src="auth.js"></script>
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
        @media (max-width: 1024px) {
            #mobile-menu {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                z-index: 50;
            }
            #mobile-menu a {
                padding: 1rem;
                display: block;
            }
        }
        .gradient-btn {
            background: linear-gradient(45deg, #ff2e57, #5cfffa);
            color: white;
            border: none;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            border-radius: 30px;
            cursor: pointer;
            transition: transform 0.3s;
            margin: 1rem 0;
        }
        .gradient-btn:hover {
            transform: scale(1.05);
        }
    </style>
</head>
  <body class="bg-[#2e2b2e] text-white">
    <div id="header-placeholder"></div>

    <div id="root">
        <div class="min-h-screen bg-[#2e2b2e] text-white">
            <!-- Hero Section -->
            <section id="home" class="pt-32 pb-20">
                <div class="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-tiktok-blue to-tiktok-pink text-transparent bg-clip-text">
                            Secure Your TikTok Memories Before the Ban!
                        </h1>
                        <p class="text-xl text-gray-300 mb-8">
                            Effortlessly Download, Preserve, and Transfer Your TikTok Content Safely.
                        </p>
                        <button class="download-btn px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-l from-tiktok-blue to-tiktok-pink hover:opacity-90 transition-opacity mb-4">
                            Download Now - <span style="color: #df3b5d">Only $4.99</span>
                        </button>
                    </div>
                    <div class="relative">
                        <div class="rounded-2xl shadow-2xl relative pt-[56.25%] ">
                            <iframe 
                              class="rounded-2xl shadow-4xl absolute top-0 left-0 w-full h-full"
                              src="https://www.youtube.com/embed/ptmoyffIbHY?si=ZSRy_3Oy8mvgUxIR" 
                              title="YouTube video player" 
                              frameborder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                              referrerpolicy="strict-origin-when-cross-origin" 
                              allowfullscreen>
                            </iframe>
                        </div>
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
                        <div class="relative"><img
                        src="https://tiktokrescue.online/img/poster.png"
                        alt="TikTok Content"
                        class="rounded-2xl shadow-2xl"
                    />
                        <p class="text-xl text-gray-400">Video Placeholder</p>
                    </div>
                </div>
            </section>
            <!-- See How It Works Section -->
<section class="py-20 bg-[#2e2b2e]">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-12">Simple Steps To Secure Your Content</h2>
        <div class="max-w-md mx-auto bg-[#3a373a] p-8 rounded-2xl">
            <div class="text-5xl font-bold mb-6"></div>
            <ol class="text-left space-y-4 mb-8 list-decimal list-inside">
                <li class="flex items-start gap-2">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
                         stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-tiktok-blue mt-1" height="20" width="20">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Download the TikTokRescue application or Chrome extension.</span>
                </li>
                <li class="flex items-start gap-2">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
                         stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-tiktok-blue mt-1" height="20" width="20">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Select individual videos or download in bulk.</span>
                </li>
                <li class="flex items-start gap-2">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
                         stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-tiktok-blue mt-1" height="20" width="20">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Select the videos you want to download, preserve, or transfer.</span>
                </li>
            </ol>
            <button class="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-l from-tiktok-blue to-tiktok-pink hover:opacity-90 transition-opacity download-btn">
                Get Started <span style="color: #df3b5d">Now</span>
            </button>
        </div>
    </div>
</section>

            <!-- Why Choose Us Section -->
            <section id="features" class="py-20 bg-[#3a373a]">
                <div class="container mx-auto px-4">
                    <h2 class="text-4xl font-bold mb-6 text-center">Why choose TikTok Rescue?</h2>
                    <p class="text-gray-300 max-w-3xl mx-auto text-center mb-16">
                        With the impending TikTok ban on January 19th, safeguarding your cherished content has never been more crucial. TikTokRescue is your reliable solution to securely download and preserve your TikTok videos before they potentially disappear.
                    </p>
                    <p class="text-2xl text-tiktok-blue font-semibold mb-8 text-center">MAIN FEATURES</p>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="flex flex-col items-center text-center p-6 bg-[#2e2b2e] rounded-xl">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check text-tiktok-blue mb-4" height="32" width="32"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="15 11 17 13 22 8"></polyline></svg>
                            <h3 class="text-xl font-semibold mb-2 text-white">Secure Signup</h3>
                            <p class="text-gray-300">Users can join TikTok Rescue using their email, password, TikTok, or Google account, ensuring a secure and versatile entry point into the service</p>
                        </div>
                        <div class="flex flex-col items-center text-center p-6 bg-[#2e2b2e] rounded-xl">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link text-tiktok-blue mb-4" height="32" width="32"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                            <h3 class="text-xl font-semibold mb-2 text-white">Easy Integration</h3>
                            <p class="text-gray-300">The application allows for seamless connection to your TikTok account, providing straightforward access to your videos for easy management</p>
                        </div>
                        <div class="flex flex-col items-center text-center p-6 bg-[#2e2b2e] rounded-xl">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-cloud text-tiktok-blue mb-4" height="32" width="32"><path d="M18 10h-1.26A8 8 0 1 0 6 10H4a9 9 0 1 1 5-8.94L10.3 7"></path><polyline points="16 16 12 20 8 16"></polyline><line x1="12" x2="12" y1="12" y2="20"></line></svg>
                            <h3 class="text-xl font-semibold mb-2 text-white">Download Videos</h3>
                            <p class="text-gray-300">TikTok Rescue offers the capability to download up to three TikTok videos for free directly to your device.</p>
                        </div>
                        <div class="flex flex-col items-center text-center p-6 bg-[#2e2b2e] rounded-xl">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload text-tiktok-blue mb-4" height="32" width="32"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
                            <h3 class="text-xl font-semibold mb-2 text-white">YouTube Upload</h3>
                            <p class="text-gray-300">Users can effortlessly transfer their downloaded videos directly to YouTube as private uploads, simplifying the process of managing content across platforms</p>
                        </div>
                         <div class="flex flex-col items-center text-center p-6 bg-[#2e2b2e] rounded-xl">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout text-tiktok-blue mb-4" height="32" width="32"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="3"></line></svg>
                            <h3 class="text-xl font-semibold mb-2 text-white">User-Friendly Design</h3>
                            <p class="text-gray-300">The Chrome extension interface of TikTokRescue includes everything from login pages to detailed progress dashboards, making it easy to navigate and utilize for all levels of tech-savvy users</p>
                        </div>
                         <div class="flex flex-col items-center text-center p-6 bg-[#2e2b2e] rounded-xl">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database text-tiktok-blue mb-4" height="32" width="32"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.7 2.6 3 6 3s6-1.3 6-3V5"></path><path d="M14 5c0 1.7 2.6 3 6 3v11m-12 0v-8"></path></svg>
                            <h3 class="text-xl font-semibold mb-2 text-white">Robust Backend and Secure Database</h3>
                            <p class="text-gray-300">The service is powered by Slim PHP, ensuring smooth operation from authentication to data management.</p>
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
                    <a href="https://tiktokrescue.online/affiliates.html" class="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-tiktok-blue to-tiktok-pink hover:opacity-90 transition-opacity">Become an Affiliate</a>
                </div>
            </section>
            <!---FAQ Section-->
            <section id="faq" class="py-20 bg-[#3a373a]">
                                <div class="container mx-auto px-4 mb-16">
                                    <h2 class="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                                    <div class="max-w-3xl mx-auto space-y-4">
                                        <div class="bg-black/30 p-6 rounded-lg">
                                            <h3 class="text-xl font-bold mb-2">How do I install TikTok Rescue?</h3>
                                            <p>Just follow the download links. Download the Chrome extension or app in playstore and follow the instructions to add it to your browser. It’s quick and easy!</p>
                                        </div>
                                        <div class="bg-black/30 p-6 rounded-lg">
                                            <h3 class="text-xl font-bold mb-2">TikTok Rescue allows you to:</h3>
<ul class="list-none pl-0">
    <li class="flex items-center mb-2">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-tiktok-blue mt-1 mr-2" height="20" width="20">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Download your TikTok videos directly to your device.</span>
    </li>
    <li class="flex items-center mb-2">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-tiktok-blue mt-1 mr-2" height="20" width="20">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Upload your videos to YouTube as private videos.</span>
    </li>
    <li class="flex items-center mb-2">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-tiktok-blue mt-1 mr-2" height="20" width="20">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Manage your TikTok and YouTube content easily from one platform.</span>
    </li>
</ul>
<span>Download the TikTokRescue application or Chrome extension.</span>
                                        </div>
                                        <div class="bg-black/30 p-6 rounded-lg">
                                            <h3 class="text-xl font-bold mb-2">Is TikTok Rescue free to use?</h3>
                                             <p>TikTokRescue is free for downloading up to 3 TikTok videos. If you wish to download more, you can easily upgrade to by making a small payment of $4.99.</p>
                                        </div>
                                        <div class="bg-black/30 p-6 rounded-lg">
                                           <h3 class="text-xl font-bold mb-2">How do I link my TikTok account to TikTokRescue?</h3>
                                            <p>Once you’ve installed TikTok Rescue, go to the settings page where you can securely link your TikTok account by logging in with your TikTok credentials. We ensure all data is encrypted and securely handled.</p>
                                        </div>
                                        <div class="bg-black/30 p-6 rounded-lg">
                                            <h3 class="text-xl font-bold mb-2">How do I upload videos to YouTube using TikTokRescue?</h3>
                                            <p>After downloading your TikTok videos, go to the ‘Uploads’ tab in the extension and select the videos you want to transfer to YouTube. You can set them as private so that only you can view them unless you decide to share further.</p>
                                         </div>
                                         <div class="bg-black/30 p-6 rounded-lg">
                                             <h3 class="text-xl font-bold mb-2">Can I use TikTok Rescue on any browser?</h3>
                                              <p>Currently, TikTok Rescue is available as a Chrome extension. We plan to expand to other browsers in the future. Stay tuned for updates!</p>
                                         </div>
                                         <div class="bg-black/30 p-6 rounded-lg">
                                             <h3 class="text-xl font-bold mb-2">What happens if I face issues with the extension?</h3>
                                            <p>If you encounter any issues or errors, please contact our support team by submitting a ticket through the support section in the extension. We are here to help resolve any problems as quickly as possible.</p>
                                        </div>
                                        <div class="bg-black/30 p-6 rounded-lg">
                                             <h3 class="text-xl font-bold mb-2">How secure is my data with TikTok Rescue?</h3>
                                            <p>At TikTokRescue, we prioritize your privacy and security. All communications are encrypted, and we never store your TikTok or YouTube login credentials.</p>
                                        </div>
                                         <div class="bg-black/30 p-6 rounded-lg">
                                            <h3 class="text-xl font-bold mb-2">How do I become an affiliate?</h3>
                                            <p>There are only 500 Affiliate Applications Available.
                You must have at least a Minimum 10,000 followers on TikTok (nano-influencer status).
                An active PayPal account for receiving payments.
                Minimum 10 sales = $49.90 must be made before first payout will be processed</p>
                                         </div>
                                          <div class="bg-black/30 p-6 rounded-lg">
                                            <h3 class="text-xl font-bold mb-2">Will I still be able to use TikTok Rescue after 19 January 2025?</h3>
                                            <p>We’re constantly working to enhance TikTok Rescue. Stay tuned for new features, more integration options, and even smoother operations.</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>  
                                </section>
                                 <!-- Download Section -->
                                 <section id="downloads" class="py-20 bg-[#212121]">
                                    <div class="container mx-auto px-4 text-center">
                                        <h1 class="text-5xl font-bold mb-10 bg-gradient-to-r from-tiktok-blue to-tiktok-pink text-transparent bg-clip-text">
                                            Backup Your TikTok Account Today
                                        </h1>
                                         <div class="max-w-md mx-auto bg-[#3A373A] p-8 rounded-2xl">
                                            <div class="grid  justify-center">
                                                 <div class="flex flex-col items-center text-center">
                                                    <svg stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" 
                                                        class="lucide lucide-download text-tiktok-blue mb-4" height="36" width="36">
                                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                        <polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line>
                                                    </svg>
                                                    <h2 class="text-xl font-semibold mb-5 text-white">Test With 3 FREE Downloads</h2>
                                                    <p class="text-gray-300 mb-5">Transfer Your Videos to Youtube Privately, or Download to Your Own System. All in Bulk</p>
                                                    <a href="#" class="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-tiktok-blue to-tiktok-pink hover:opacity-90 transition-opacity">
                                                        <span style="color: #df3b5d">Start</span> Downloading Now
                                                    </a>
                                                    <p class="text-2xl text-tiktok-blue font-semibold mt-8">Only $4.99</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                
                                
            <!-- Footer -->
                    <div id="footer-placeholder"></div>
                </div>
            </div>
            <script src="scripts.js"></script>
</body>
</html>

```

## File: header.html
```html
<!-- header.html -->
<nav class="fixed w-full bg-black text-white py-2 z-50">
    <div class="container mx-auto px-4 flex items-center justify-between">
        <!-- Logo Section -->
        <div class="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-tiktok-blue to-tiktok-pink text-transparent bg-clip-text">
            <a href="https://tiktokrescue.online" class="flex items-center gap-2">
                <img src="https://tiktokrescue.online/img/logo.png" alt="TikTok Rescue Logo" class="h-10">
                <span>TikTok Rescue</span>
            </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex gap-6 text-sm">
            <a href="https://tiktokrescue.online/#home" class="flex items-center gap-1 hover:text-tiktok-blue transition-colors">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" 
                        class="lucide lucide-home" height="16" width="16"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                Home
            </a>
            <a href="https://tiktokrescue.online/#features" class="flex items-center gap-1 hover:text-tiktok-blue transition-colors">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" 
                        class="lucide lucide-layers" height="16" width="16"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                Features
            </a>
            <a href="https://tiktokrescue.online/#downloads" class="flex items-center gap-1 hover:text-tiktok-blue transition-colors">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" 
                        class="lucide lucide-download" height="16" width="16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                Download
            </a>
            <a href="https://tiktokrescue.online/#how-it-works" class="flex items-center gap-1 hover:text-tiktok-blue transition-colors">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" 
                        class="lucide lucide-info" height="16" width="16"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line>
                        <line x1="12" x2="12.01" y1="8" y2="8"></line></svg>
                How It Works
            </a>
            <a href="https://tiktokrescue.online/#faq" class="flex items-center gap-1 hover:text-tiktok-blue transition-colors">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" 
                        class="lucide lucide-help-circle" height="16" width="16"><circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                FAQ
            </a>
            <a href="https://tiktokrescue.online/#affiliates" class="flex items-center gap-1 hover:text-tiktok-blue transition-colors">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" 
                        class="lucide lucide-users" height="16" width="16"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                Affiliates
            </a>
        </div>

        <!-- Mobile Hamburger Menu Button -->
        <div class="md:hidden">
            <button id="menu-button" class="text-white focus:outline-none" aria-label="Toggle Menu" aria-expanded="false">
                <!-- Hamburger Icon -->
                <svg id="menu-open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>
                <!-- Close Icon (Hidden by Default) -->
                <svg id="menu-close" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>

    <!-- Mobile Navigation Menu (Hidden by Default) -->
    <div id="mobile-menu" class="hidden md:hidden bg-black">
        <a ref="https://tiktokrescue.online/#home"class="block px-4 py-2 hover:bg-gray-700">Home</a>
        <a href="https://tiktokrescue.online/#features" class="block px-4 py-2 hover:bg-gray-700">Features</a>
        <a href="https://tiktokrescue.online/#downloads" class="block px-4 py-2 hover:bg-gray-700">Download</a>
        <a hhref="https://tiktokrescue.online/#how-it-works" class="block px-4 py-2 hover:bg-gray-700">How It Works</a>
        <a hhref="https://tiktokrescue.online/#faq" class="block px-4 py-2 hover:bg-gray-700">FAQ</a>
        <a href="https://tiktokrescue.online/#affiliates" class="block px-4 py-2 hover:bg-gray-700">Affiliates</a>
    </div>
</nav>
```

## File: base-template.html
```html
<!-- base-template.html -->
<head>
    <name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <!-- Existing head content -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Firebase SDKs -->
    
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore-compat.js"></script>
    
    <script src="auth.js"></script>
    <!-- Tailwind Configuration -->
    <script defer>
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
    
    <!-- Favicon and Custom Styles -->
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
      <!-- Header Placeholder -->
      <div id="header-placeholder"></div>
  
      <div id="root">
          <div class="min-h-screen bg-[#2e2b2e] text-white">
              <!-- Unique Content for Each Page -->
              <main>
                  <!-- Insert unique content here -->
              </main>
          </div>
      </div>
  
      <!-- Footer Placeholder -->
      <div id="footer-placeholder"></div>
  
      <!-- Footer Inclusion Script -->
      <script src="scripts.js"></script>
  </body>
  </html>
  
```

## File: contact_us.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Us - TikTok Rescue</title>
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
    <!-- Header Placeholder -->
    <div id="header-placeholder"></div>

    <div id="root">
        <div class="min-h-screen bg-[#2e2b2e] text-white text-center">
            <!-- Unique Content for Each Page -->
            <main class="py-20">
                <div class="container mx-auto px-4">
                    <h1 class="text-4xl font-bold mb-6">Contact Us</h1>
                    <p class="text-gray-300 mb-4">
                        Have questions or feedback? We'd love to hear from you!
                    </p>
                    <form class="max-w-lg mx-auto" action="send_email.php" method="post">
                        <div class="mb-4">
                            <label class="block text-gray-300 mb-2" for="name">Name</label>
                            <input type="text" id="name" name="name" class="w-full p-2 rounded bg-[#3a373a] text-white" placeholder="Your Name" required>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-300 mb-2" for="email">Email</label>
                            <input type="email" id="email" name="email" class="w-full p-2 rounded bg-[#3a373a] text-white" placeholder="Your Email" required>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-300 mb-2" for="message">Message</label>
                            <textarea id="message" name="message" class="w-full p-2 rounded bg-[#3a373a] text-white" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" class="download-btn">Send Message</button>
                    </form>
                </div>
            </main>
            
        </div>
    </div>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <!-- Footer Inclusion Script -->
    <script>
        // Function to load external HTML files
        function loadHTML(elementId, url) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    document.getElementById(elementId).innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading ' + url + ':', error);
                });
        }

        // Load header and footer on DOMContentLoaded
        document.addEventListener('DOMContentLoaded', () => {
            loadHTML('header-placeholder', 'header.html');
            loadHTML('footer-placeholder', 'footer.html');
        });
    </script>
</body>
</html>

```

## File: styles.css
```css
/* styles.css */
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

```

## File: scripts.js
```js
// Function to load external HTML files into specified elements
function loadHTML(elementId, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // Initialize mobile menu after header content is loaded
            if (elementId === 'header-placeholder') {
                initializeMobileMenu();
            }
        })
        .catch(error => {
            console.error('Error loading ' + url + ':', error);
        });
}

// Load header and footer when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header-placeholder', 'header.html');
    loadHTML('footer-placeholder', 'footer.html');
});

function initializeMobileMenu() {
    // Wait a brief moment for the DOM to be updated
    setTimeout(() => {
        const menuButton = document.querySelector('#menu-button');
        const mobileMenu = document.querySelector('#mobile-menu');
        const menuOpen = document.querySelector('#menu-open');
        const menuClose = document.querySelector('#menu-close');

        // Add logging to check if elements are found
        console.log('Menu elements:', { menuButton, mobileMenu, menuOpen, menuClose });

        if (menuButton && mobileMenu && menuOpen && menuClose) {
            console.log('Mobile menu initialized successfully');
            
            menuButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event from bubbling up
                mobileMenu.classList.toggle('hidden');
                menuOpen.classList.toggle('hidden');
                menuClose.classList.toggle('hidden');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        menuOpen.classList.remove('hidden');
                        menuClose.classList.add('hidden');
                    }
                }
            });

            // Add click handlers for mobile menu links
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    menuOpen.classList.remove('hidden');
                    menuClose.classList.add('hidden');
                });
            });
        } else {
            console.error('Mobile menu elements not found');
        }
    }, 100); // Reduced timeout since we're initializing after content load
}
```

## File: auth.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In - TikTok Rescue</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Firebase SDKs -->
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore-compat.js"></script>
    <!-- Feather Icons for password visibility toggle -->
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
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
    <style>
        .auth-container {
            max-width: 400px;
            margin: 2rem auto;
            padding: 2rem;
            background-color: #1a1a1a;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .auth-button {
            width: 100%;
            padding: 0.75rem;
            margin: 0.5rem 0;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s;
        }

        .google-button {
            background-color: #fff;
            color: #757575;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .google-button:hover {
            background-color: #f5f5f5;
        }

        .email-button {
            background: linear-gradient(45deg, #fe2c55, #25f4ee);
            color: white;
        }

        .email-button:hover {
            opacity: 0.9;
        }

        .input-field {
            width: 100%;
            padding: 0.75rem;
            margin: 0.5rem 0;
            border: 1px solid #444;
            border-radius: 8px;
            background-color: #2e2b2e;
            color: white;
            transition: all 0.3s;
        }

        .input-field:focus {
            border-color: #5cfffa;
            outline: none;
            box-shadow: 0 0 0 2px rgba(92, 255, 250, 0.2);
        }

        .password-container {
            position: relative;
        }

        .toggle-password {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #666;
            cursor: pointer;
            padding: 0;
        }

        .toggle-password:hover {
            color: #fff;
        }

        .auth-separator {
            display: flex;
            align-items: center;
            text-align: center;
            margin: 1rem 0;
            color: #666;
        }

        .auth-separator::before,
        .auth-separator::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid #444;
        }

        .auth-separator span {
            padding: 0 0.5rem;
        }

        .auth-toggle {
            color: #25f4ee;
            cursor: pointer;
            margin-top: 1rem;
            text-align: center;
        }

        .auth-toggle:hover {
            color: #fe2c55;
        }
    </style>
</head>
<body class="bg-[#2e2b2e] text-white">
    <div id="header-placeholder"></div>

    <main class="min-h-screen flex items-center justify-center p-4">
        <div class="w-full max-w-md">
            <!-- Logo -->
            <div class="flex justify-center mb-8">
                <img src="img/Auth_BGR.PNG" alt="TikTok Rescue Logo" class="h-12 object-contain">
            </div>

            <div class="auth-container">
                <div id="authUI">
                    <!-- Content will be dynamically loaded by auth.js -->
                </div>
            </div>
        </div>
    </main>

    <div id="footer-placeholder"></div>

    <!-- Scripts at the end -->
    <script src="scripts.js"></script>
    <script src="auth.js"></script>

    <!-- Debug code to check if everything is loading -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            console.log('DOM Loaded');
            console.log('AuthUI Element:', document.getElementById('authUI'));
            console.log('Firebase Auth:', firebase.auth);
        });
    </script>
</body>
</html>
```

## File: download.html
```html
<!-- base-template.html -->
<head>
    <!-- Existing head content -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Firebase SDKs -->
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js" defer></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js" defer></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore-compat.js" defer></script>
    
    <!-- Your auth script -->
    <script src="auth.js" defer></script>
    
    <!-- Tailwind Configuration -->
    <script defer>
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
    
    <!-- Favicon and Custom Styles -->
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
      <!-- Header Placeholder -->
      <div id="header-placeholder"></div>
  
      <div id="root">
          <div class="min-h-screen bg-[#2e2b2e] text-white">
              <!-- Unique Content for Each Page -->
              <main>
                  <!-- Insert unique content here -->
              </main>
          </div>
      </div>
  
      <!-- Footer Placeholder -->
      <div id="footer-placeholder"></div>
  
      <!-- Footer Inclusion Script -->
      <script src="scripts.js" defer></script>
  </body>
  </html>
  
```

## File: auth.js
```js
// auth.js

/************************************
 * Top-Level Declarations
 ************************************/
let auth;
let db;
let firebase;

// Note: Double-check your storageBucket if you plan to use Cloud Storage.
// Firebase projects typically have buckets like "<project-id>.appspot.com".
// If "tiktokrescue-b1657.firebasestorage.app" is correct, leave it as is.
// Otherwise, update it to match your Firebase Console's bucket name.
const firebaseConfig = {
  apiKey: "AIzaSyAUMUhiYqLvcRdr3Bruu6vW_eR5NIOey_8",
  authDomain: "tiktokrescue-b1657.firebaseapp.com",
  projectId: "tiktokrescue-b1657",
  storageBucket: "tiktokrescue-b1657.firebasestorage.app",
  messagingSenderId: "854599213395",
  appId: "1:854599213395:web:c4a53d76294e65136f01a6",
  measurementId: "G-TS5SBFV0ZC"
};

/************************************
  * Single DOMContentLoaded Listener
  ************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Make sure Firebase SDK is available on window
  firebase = window.firebase;
  if (!firebase) {
    console.error("Firebase SDK not found on window. Make sure the Firebase scripts are loaded first.");
    return;
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // Create messages collection if it doesn't exist
  db.collection('messages').get().then((snapshot) => {
      if (snapshot.empty) {
          console.log('Messages collection ready');
      }
  });

  auth = firebase.auth();

  // Initialize UI after Firebase setup
  initializeAuthUI();

  // Attach the global auth state listener
  auth.onAuthStateChanged(handleAuthStateChange);
});

/************************************
 * Authentication UI Initialization
 ************************************/
let isSignUp = true; // Tracks whether we're signing up or signing in

function initializeAuthUI() {
  const authUI = document.getElementById('authUI');
  if (!authUI) {
    console.warn("No element with ID 'authUI' found. UI won't render here.");
    return;
  }

  authUI.innerHTML = `
    <button class="auth-button google-button" onclick="signInWithGoogle()">
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
           alt="Google logo" 
           width="18" 
           height="18">
      Continue with Google
    </button>
    <div class="auth-separator">
      <span>or</span>
    </div>
    <div id="emailAuth">
      <input type="email" id="email" placeholder="Email" class="input-field">
      <input type="password" id="password" placeholder="Password" class="input-field">
      <button class="auth-button email-button" onclick="handleEmailAuth()">
        ${isSignUp ? 'Sign Up with Email' : 'Sign In with Email'}
      </button>
    </div>
    <div class="auth-toggle" onclick="toggleAuthMode()">
      ${isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
    </div>
  `;
}

/************************************
 * Toggle Between Sign Up / Sign In
 ************************************/
function toggleAuthMode() {
  isSignUp = !isSignUp;
  initializeAuthUI();
}

/************************************
 * Google Sign-In
 ************************************/
async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await auth.signInWithPopup(provider);
    // Check if this is a new user
    const isNewUser = result.additionalUserInfo.isNewUser;
    if (isNewUser) {
      await createUserProfile(result.user);
    }
    handleSuccessfulAuth(result.user);
  } catch (error) {
    console.error('Google auth error:', error);
    alert(error.message);
  }
}

/************************************
 * Email Authentication
 ************************************/
async function handleEmailAuth() {
  const email = document.getElementById('email')?.value;
  const password = document.getElementById('password')?.value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  try {
    let userCredential;
    if (isSignUp) {
      // Create new account
      userCredential = await auth.createUserWithEmailAndPassword(email, password);
      // Create user profile
      await createUserProfile(userCredential.user);
    } else {
      // Sign in to existing account
      userCredential = await auth.signInWithEmailAndPassword(email, password);
    }
    handleSuccessfulAuth(userCredential.user);
  } catch (error) {
    console.error('Authentication error:', error);
    alert(error.message);
  }
}

/************************************
 * Create User Profile in Firestore
 ************************************/
async function createUserProfile(user) {
  try {
    await db.collection('users').doc(user.uid).set({
      email: user.email,
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
}

/************************************
 * Handle Successful Auth
 ************************************/
async function handleSuccessfulAuth(user) {
  try {
    // Update last login timestamp
    await db.collection('users').doc(user.uid).update({
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    });

    // Store user info in session storage (ephemeral)
    sessionStorage.setItem('user', JSON.stringify({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    }));

    // Redirect to dashboard (customize path as needed)
    window.location.href = '/dashboard.html';
  } catch (error) {
    console.error('Error in post-authentication:', error);
  }
}

/************************************
 * Auth State Change Listener
 ************************************/
function handleAuthStateChange(user) {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user);

    // Retrieve profile
    db.collection('users').doc(user.uid).get()
      .then((userDoc) => {
        if (userDoc.exists) {
          const userData = userDoc.data();
          console.log('User profile:', userData);
          // Update UI
          updateUIForAuthenticatedUser(userData);
        }
      })
      .catch((error) => {
        console.error('Error getting user profile:', error);
      });
  } else {
    // User is signed out
    console.log('User is signed out');
    updateUIForUnauthenticatedUser();
  }
}

/************************************
 * Update UI for Authenticated User
 ************************************/
function updateUIForAuthenticatedUser(userData) {
  const authNav = document.querySelector('#auth-nav');
  if (authNav) {
    authNav.innerHTML = `
      <div class="flex items-center gap-2">
        <img src="${userData.photoURL || '/img/default-avatar.png'}" 
             alt="Profile" 
             class="w-8 h-8 rounded-full">
        <span>${userData.displayName || userData.email}</span>
        <button onclick="signOut()" class="text-sm text-red-500">Sign Out</button>
      </div>
    `;
  }
}

/************************************
 * Update UI for Unauthenticated User
 ************************************/
function updateUIForUnauthenticatedUser() {
  const authNav = document.querySelector('#auth-nav');
  if (authNav) {
    authNav.innerHTML = `
      <a href="/auth.html" class="flex items-center gap-1 hover:text-tiktok-blue transition-colors">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
             stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        Sign In
      </a>
    `;
  }
}

/************************************
 * Sign Out Function
 ************************************/
async function signOut() {
  try {
    await auth.signOut();
    sessionStorage.removeItem('user');
    window.location.href = '/';
  } catch (error) {
    console.error('Error signing out:', error);
    alert(error.message);
  }
}
```

## File: about.html
```html
<!-- base-template.html -->
<head>
    <!-- Existing head content -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Firebase SDKs -->
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js" defer></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js" defer></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore-compat.js" defer></script>
    
    <!-- Your auth script -->
    <script src="auth.js" defer></script>
    
    <!-- Tailwind Configuration -->
    <script defer>
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
    
    <!-- Favicon and Custom Styles -->
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
      <!-- Header Placeholder -->
      <div id="header-placeholder"></div>
  
      <div id="root">
          <div class="min-h-screen bg-[#2e2b2e] text-white">
              <!-- Unique Content for Each Page -->
              <main>
                  <!-- Insert unique content here -->
              </main>
          </div>
      </div>
  
      <!-- Footer Placeholder -->
      <div id="footer-placeholder"></div>
  
      <!-- Footer Inclusion Script -->
      <script src="scripts.js" defer></script>
  </body>
  </html>
  
```

## File: dashboard.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - TikTok Rescue</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Firebase SDKs -->
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore-compat.js"></script>
</head>
<body class="bg-[#2e2b2e] text-white">
    <div id="header-placeholder"></div>

    <main class="container mx-auto px-4 py-8 mt-16">
        <div class="max-w-4xl mx-auto">
            <div class="bg-gray-800 rounded-lg p-6">
                <h1 class="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
                <div id="user-profile" class="mb-6">
                    <!-- User profile info will be populated here -->
                </div>
                <div id="user-content" class="space-y-4">
                    <!-- User specific content will be loaded here -->
                </div>
            </div>
        </div>
    </main>

    <div id="footer-placeholder"></div>
    <script src="scripts.js"></script>
    <script src="auth.js"></script>
</body>
</html>
```

## File: affiliates.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Affiliate Program - TikTok Rescue</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore-compat.js"></script>
    
    <script src="auth.js"></script>
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
        @media (max-width: 1024px) {
            #mobile-menu {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                z-index: 50;
            }
            #mobile-menu a {
                padding: 1rem;
                display: block;
            }
        }
        .gradient-btn {
            background: linear-gradient(45deg, #ff2e57, #5cfffa);
            color: white;
            border: none;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            border-radius: 30px;
            cursor: pointer;
            transition: transform 0.3s;
            margin: 1rem 0;
        }
        .gradient-btn:hover {
            transform: scale(1.05);
        }
    </style>
</head>
<body class="bg-[#2e2b2e] text-white">
    <div id="header-placeholder"></div>

    <div id="root">
        <div class="min-h-screen bg-[#2e2b2e] text-white">
            <main class="pt-24 pb-16">
                <!-- Hero Section -->
                <div class="container mx-auto px-4 text-center mb-16">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-tiktok-blue to-tiktok-pink text-transparent bg-clip-text">
                        Join Our Affiliate Program & Earn Big!
                    </h1>
                    <p class="text-xl md:text-2xl mb-8 text-gray-300">
                        Earn a 30% commission for every sale you generate
                    </p>
                    <a href="https://tiktokrescue.trackdesk.com/sign-up" class="gradient-btn text-xl">
                        Sign Up Today</a>
                </div>

                <!-- Benefits Grid -->
                <div class="container mx-auto px-4 mb-16">
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-black/30 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-4 text-tiktok-blue">Unlimited Earnings</h3>
                            <p>No cap on your earnings. The more you promote, the more you earn!</p>
                        </div>
                        <div class="bg-black/30 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-4 text-tiktok-blue">Marketing Tools</h3>
                            <p>Access professional banners, links, and content for your campaigns.</p>
                        </div>
                        <div class="bg-black/30 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-4 text-tiktok-blue">Real-Time Tracking</h3>
                            <p>Monitor your performance with our advanced dashboard.</p>
                        </div>
                    </div>
                </div>

                <!-- Requirements Section -->
                <div class="container mx-auto px-4 mb-16">
                    <h2 class="text-3xl font-bold mb-8 text-center">Affiliate Requirements</h2>
                    <div class="max-w-3xl mx-auto bg-black/30 p-8 rounded-lg">
                        <ul class="space-y-4">
                            <li class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-tiktok-pink flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>Only 500 Applications Available</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-tiktok-pink flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>Minimum 10,000 followers (nano-influencer status)</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-tiktok-pink flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>Active PayPal account for receiving payments</span>
                            </li>
                            <li class="flex items-start gap-3">
                                 <svg class="w-6 h-6 text-tiktok-pink flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                 </svg>
                                 <span>Minimum 10 sales = $49.9 before first payout will be processed<br> 
                                  <a href="https://tiktokrescue.online/paypal-service.html" target="_blank" class="hover:text-tiktok-blue transition-colors">
                                    (Click here to see full breakdown of PayPal service fees)</span></a>
                          </li>
                        </ul>
                    </div>
                </div>

                <!-- How It Works -->
                <div class="container mx-auto px-4 mb-16">
                    <h2 class="text-3xl font-bold mb-8 text-center">How It Works</h2>
                    <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div class="text-center">
                            <div class="w-16 h-16 bg-gradient-to-r from-tiktok-pink to-tiktok-blue rounded-full flex items-center justify-center mx-auto mb-4">
                                <span class="text-2xl font-bold">1</span>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Sign Up</h3>
                            <p>Complete our simple registration process</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-gradient-to-r from-tiktok-pink to-tiktok-blue rounded-full flex items-center justify-center mx-auto mb-4">
                                <span class="text-2xl font-bold">2</span>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Promote</h3>
                            <p>Share your unique affiliate link</p>
                        </div>
                        <div class="text-center">
                            <div class="w-16 h-16 bg-gradient-to-r from-tiktok-pink to-tiktok-blue rounded-full flex items-center justify-center mx-auto mb-4">
                                <span class="text-2xl font-bold">3</span>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Earn</h3>
                            <p>Get 30% commission on each sale</p>
                        </div>
                    </div>
                </div>

                <!-- FAQ Section -->
                <div class="container mx-auto px-4 mb-16">
                    <h2 class="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <div class="max-w-3xl mx-auto space-y-4">
                        <div class="bg-black/30 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-2">When do I receive my payouts?</h3>
                            <p>Payouts will be processed no later than 25 January 2025, provided you've reached the minimum threshold of $50.</p>
                        </div>
                        <div class="bg-black/30 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-2">What marketing materials are provided?</h3>
                            <p>You'll get access to banners, text links, promotional articles, and videos to help you promote effectively.</p>
                        </div>
                    </div>
                </div>

                <!-- CTA Section -->
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
                    <p class="text-xl mb-8">Join our affiliate program today and start earning generous commissions!</p>
                    <a href="https://tiktokrescue.trackdesk.com/sign-up" class="gradient-btn text-xl">
                    Get Your Affiliate Link</a>
                    <p class="mt-4 text-gray-400">Questions?<br> 
                        Contact us at affiliate@tiktokrescue.online</p>
                </div>
            </main>
        </div>
    </div>

    <div id="footer-placeholder"></div>
    <script src="scripts.js" defer></script>
</body>
</html>
```

## File: paypal-service.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PayPal Fees Calculation Guide</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen">
    <div class="max-w-4xl mx-auto p-6 space-y-8">
        <!-- Header -->
        <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">PayPal Fees Calculation</h1>
            <p class="text-gray-600">A comprehensive guide to understanding PayPal transaction fees and optimal transfer amounts</p>
        </div>

        <!-- Fee Structure Section -->
        <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span class="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-2">1</span>
                PayPal Fee Structure
                <span class="text-sm font-normal text-gray-500 ml-2">(Current Rates)</span>
            </h2>
            <ul class="space-y-3 text-gray-700">
                <li class="flex items-start">
                    <span class="text-blue-500 mr-2">•</span>
                    <strong class="mr-2">Fixed Fee:</strong>
                    <span>PayPal charges a flat fee depending on the currency (e.g., $0.30 USD per transaction for USD)</span>
                </li>
                <li class="flex items-start">
                    <span class="text-blue-500 mr-2">•</span>
                    <strong class="mr-2">Percentage Fee:</strong>
                    <span>Typically 2.9% for domestic payments (USA) and 4.4% for international payments, plus a fixed fee based on the currency</span>
                </li>
                <li class="flex items-start">
                    <span class="text-blue-500 mr-2">•</span>
                    <strong class="mr-2">Currency Conversion Fee:</strong>
                    <span>Additional fees (typically 3-4%) apply if converting to another currency</span>
                </li>
            </ul>
        </div>

        <!-- Break-even Point Section -->
        <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span class="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-2">2</span>
                Break-even Point Analysis
            </h2>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p class="text-yellow-800">For small amounts, the fixed fee becomes disproportionately high.</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-medium mb-2">Example: $5 USD Transfer</p>
                <ul class="space-y-1 text-gray-700">
                    <li>Fee = $0.30 (fixed) + 2.9% = $0.445</li>
                    <li>Total Fees = $0.445</li>
                    <li>Percentage lost = 8.9% of $5</li>
                    <li class="text-red-600 font-medium">Nearly 9% of the amount is lost to fees</li>
                </ul>
            </div>
        </div>

        <!-- Optimal Transfer Amounts -->
        <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span class="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-2">3</span>
                Optimal Transfer Amounts
            </h2>
            <p class="text-gray-700 mb-4">Larger amounts dilute the impact of the fixed fee. Here's the analysis:</p>
            <div class="grid md:grid-cols-3 gap-4">
                <!-- $10 Transfer -->
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h3 class="font-semibold text-gray-800 mb-2">$10 USD Transfer</h3>
                    <ul class="space-y-1 text-gray-700">
                        <li>Fee = $0.30 + 2.9% = $0.59</li>
                        <li class="font-medium text-orange-600">Percentage lost = 5.9%</li>
                    </ul>
                </div>
                <!-- $50 Transfer -->
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h3 class="font-semibold text-gray-800 mb-2">$50 USD Transfer</h3>
                    <ul class="space-y-1 text-gray-700">
                        <li>Fee = $0.30 + 2.9% = $1.75</li>
                        <li class="font-medium text-yellow-600">Percentage lost = 3.5%</li>
                    </ul>
                </div>
                <!-- $100 Transfer -->
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h3 class="font-semibold text-gray-800 mb-2">$100 USD Transfer</h3>
                    <ul class="space-y-1 text-gray-700">
                        <li>Fee = $0.30 + 2.9% = $3.20</li>
                        <li class="font-medium text-green-600">Percentage lost = 3.2%</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Least Viable Amount -->
        <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span class="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-2">4</span>
                Least Viable Amount
            </h2>
            <div class="space-y-4">
                <div class="flex items-start">
                    <div class="flex-shrink-0">
                        <span class="inline-block w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                    </div>
                    <p class="ml-3 text-gray-700">Transferring less than $10 may be considered less viable because the fees become a larger percentage of the total amount. For example, at $5, nearly 9% is lost to fees.</p>
                </div>
                <div class="flex items-start">
                    <div class="flex-shrink-0">
                        <span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    </div>
                    <p class="ml-3 text-gray-700">Transfers above $50 significantly reduce the fee percentage and are more cost-efficient.</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

## File: index.js
```js
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendEmailNotification = functions.firestore
    .document('messages/{messageId}')
    .onCreate((snap, context) => {
        const data = snap.data();
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: 'your-app-specific-password'
            }
        });

        const mailOptions = {
            from: 'TikTok Rescue <your-email@gmail.com>',
            to: 'projects@webally.co.za.com',
            subject: `New Contact Form Message from ${data.name}`,
            text: `
                Name: ${data.name}
                Email: ${data.email}
                Message: ${data.message}
                Time: ${data.timestamp}
            `
        };

        return transporter.sendMail(mailOptions);
    });

```

## File: send_email.php
```php
<?php
// File: send_email.php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize inputs
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Email settings
    $to = "projects@webally.co.za"; // Your email address
    $subject = "TikTok Rescue Contact Us Form"; // Subject line
    $body = "You received a new contact form submission:\n\n" .
            "Name: " . $name . "\n" .
            "Email: " . $email . "\n" .
            "Message:\n" . $message;

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();                                       // Use SMTP
        $mail->Host = 'smtp.ionos.com';                        // IONOS SMTP server
        $mail->SMTPAuth = true;                                // Enable SMTP authentication
        $mail->Username = 'charl@webally.co.za';               // Your IONOS email address
        $mail->Password = 'Pl@tinum4334';                      // Your IONOS email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;    // Enable TLS encryption
        $mail->Port = 587;                                     // TCP port for TLS

        // Recipients
        $mail->setFrom('projects@webally.co.za', 'TikTok Rescue | Contact Us'); 
        $mail->addAddress($to);                                // Your email as the recipient
        $mail->addReplyTo($email, $name);                      // Reply-To set to client's email

        // Content
        $mail->isHTML(false);                                  // Use plain text email format
        $mail->Subject = $subject;
        $mail->Body    = $body;

        // Send the email
        $mail->send();

        // Redirect to a success page
        header("Location: contact_success.html");
        exit;
    } catch (Exception $e) {
        // Log error and redirect to an error page
        error_log("Mailer Error: " . $mail->ErrorInfo);
        header("Location: contact_error.html");
        exit;
    }
} else {
    // Handle cases where the script is accessed directly
    echo "This page can only be accessed through the contact form.";
    exit;
}

```

## File: contact_error.html
```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Error!</title>
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
    </head>
    <body class="bg-[#2e2b2e] text-white">
        <div class="min-h-screen flex flex-col justify-center items-center p-8">
        <h1 class="text-3xl font-bold mb-4">Oops!</h1>
        <p class="text-lg text-gray-300 mb-6">Something went wrong when submitting your form. Please try again later.</p>
         <a href="contact_us.html" class="bg-tiktok-pink hover:bg-tiktok-blue text-white font-bold py-2 px-4 rounded">Go back to Contact Us</a>
    </div>
    </body>
    </html>
```

## File: contact_success.html
```html
```html
<!DOCTYPE html>
<html>
<head>
   <title>Success!</title>
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
</head>
<body class="bg-[#2e2b2e] text-white">
   <div class="min-h-screen flex flex-col justify-center items-center p-8">
       <h1 class="text-3xl font-bold mb-4">Thank You!</h1>
       <p class="text-lg text-gray-300 mb-6">Your message has been sent successfully. We'll get back to you soon!</p>
       <a href="index.html" class="bg-tiktok-pink hover:bg-tiktok-blue text-white font-bold py-2 px-4 rounded">Go back to home</a>
   </div>
</body>
</html>
```
```


