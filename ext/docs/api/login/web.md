---
created: 2025-01-03T08:17:43 (UTC +02:00)
tags: []
source: https://developers.tiktok.com/doc/login-kit-web?enter_method=left_navigation
author: Implement the server code to handle authorization grant flow
---

# TikTok for Developers

> ## Excerpt
> Build awesome experiences and powerful tools that inspire creativity and allow users to create, connect, and share with the world.

---
# Login Kit for Web

This guide details how to enable authentication from your web app to TikTok. After successfully completing authentication with TikTok, developers can obtain an `access_token` for the TikTok user.

## Prerequisites

### Register your app

Register your app following [these steps](https://developers.tiktok.com/doc/getting-started-create-an-app). Then obtain a client key and secret from the developer portal on [https://developers.tiktok.com](https://developers.tiktok.com/) under **Manage apps**.

### Configure redirect URI

Redirect URI is required for web apps. After the user completes authorization with Login Kit on the web, they will be redirected to a URI provided by you. This redirect URI must be registered in the Login Kit product configuration for your app.

The following are restrictions for registering redirect URIs.

-   A maximum of 10 URIs is supported.
-   The length of each URI must be less than 512 characters.
-   URIs must be absolute and begin with `https`. For example:

-   Correct: `https://dev.example.com/auth/callback/`
-   Incorrect: `dev.example.com/auth/callback/`

-   URIs must be static. Parameters will be denied. For example:

-   Correct: `https://dev.example.com/auth/callback/`
-   Incorrect: `https://dev.example.com/auth/callback/?id=1`

-   URIs cannot include a fragment, or hash character (#):

-   Correct: `https://dev.example.com/auth/callback/`
-   Incorrect: `https://dev.example.com/auth/callback/#100`

## Integration Guide

### Implement the front-end code

Get started by connecting your front-end login button to the server endpoint. The following is an example in HTML:

```
<span><span class="xml" style="color: rgb(0, 0, 128); font-weight: normal;">&lt;</span><span class="xml" style="color: rgb(0, 0, 128); font-weight: normal;">a</span><span class="xml" style="color: rgb(0, 0, 128); font-weight: normal;"> </span><span class="xml" style="color: rgb(0, 0, 128); font-weight: normal;">href</span><span class="xml" style="color: rgb(0, 0, 128); font-weight: normal;">=</span><span class="xml" style="color: rgb(221, 17, 68); font-weight: normal;">'{SERVER_ENDPOINT_OAUTH}'</span><span class="xml" style="color: rgb(0, 0, 128); font-weight: normal;">&gt;</span><span class="xml">Continue with TikTok</span><span class="xml" style="color: rgb(0, 0, 128); font-weight: normal;">&lt;/</span><span class="xml" style="color: rgb(0, 0, 128); font-weight: normal;">a</span><span class="xml" style="color: rgb(0, 0, 128); font-weight: normal;">&gt;</span></span>
```

### Implement the server code to handle authorization grant flow

The server code must be responsible for the following:

-   Ensuring that the client secret and refresh token are stored securely.
-   Ensuring that the security for each user is protected by preventing request forgery attacks.
-   Handling the refresh flow before access token expiry.
-   Managing the access token request flow for each user.

#### Redirect request to TikTok's authorization server

##### Create an anti-forgery state token

You must prevent request forgery attacks to protect the security of your users. The first step before making the redirect request to TikTok's authorization server is to create a unique session token to maintain the state between the request and callback.

You will later match this unique session token with the authentication response to verify that the user is making the request and not a malicious attacker.

One of the simple approaches to a state token is a randomly generated alphanumeric string constructed using a random-number generator. For example:

```
<span><span style="color: rgb(51, 51, 51); font-weight: bold;">let</span><span> array = </span><span style="color: rgb(51, 51, 51); font-weight: bold;">new</span><span> </span><span style="color: rgb(0, 134, 179);">Uint8Array</span><span>(</span><span style="color: rgb(0, 128, 128);">30</span><span>); 
</span></span><span><span></span><span style="color: rgb(51, 51, 51); font-weight: bold;">const</span><span> csrfState = </span><span style="color: rgb(0, 134, 179);">window</span><span>.crypto.getRandomValues(array);</span></span>
```

##### Initial redirect to TikTok's authorization page

To make the initial redirect request to TikTok's authorization server, the following query parameters below must be added to the Authorization Page URL using the `application/x-www-form-urlencoded` format.

For example, you can use an [online URL encoder](https://www.urlencoder.org/) to encode parameters. Select **UTF-8** as the destination character set.

<table><tbody><tr><td rowspan="1" colspan="1"><p style="text-align: left;"><b>Parameter</b></p></td><td rowspan="1" colspan="1"><p style="text-align: left;"><b>Type</b></p></td><td rowspan="1" colspan="1"><p style="text-align: left;"><b>Description</b></p></td></tr><tr><td rowspan="1" colspan="1"><p style="text-align: left;"><code>client_key</code></p></td><td rowspan="1" colspan="1"><p style="text-align: left;">String</p></td><td rowspan="1" colspan="1"><p style="text-align: left;">The unique identification key provisioned to the partner.</p></td></tr><tr><td rowspan="1" colspan="1"><p style="text-align: left;"><code>scope</code></p></td><td rowspan="1" colspan="1"><p style="text-align: left;">String</p><br></td><td rowspan="1" colspan="1"><p style="text-align: left;">A comma (,) separated string of authorization scope(s). These scope(s) are assigned to your application on the TikTok for Developers website. They handle what content your application can and cannot access. If a scope is toggleable, the user can deny access to one scope while granting access to others.</p></td></tr><tr><td rowspan="1" colspan="1"><p style="text-align: left;"><code>redirect_uri</code></p></td><td rowspan="1" colspan="1"><p style="text-align: left;">String</p></td><td rowspan="1" colspan="1"><p style="text-align: left;">The redirect URI that you requested for your application. It must match one of the redirect URIs you registered for the app.</p></td></tr><tr><td rowspan="1" colspan="1"><p style="text-align: left;"><code>state</code></p></td><td rowspan="1" colspan="1"><p style="text-align: left;">String</p></td><td rowspan="1" colspan="1"><p style="text-align: left;">The state is used to maintain the state of your request and callback. This value will be included when redirecting the user back to the client. Check if the state returned in the callback matches what you sent earlier to prevent cross-site request forgery.</p><p style="text-align: left;">The state can also include customized parameters that you want TikTok service to return.</p></td></tr><tr><td rowspan="1" colspan="1"><p style="text-align: left;"><code>response_type</code></p></td><td rowspan="1" colspan="1"><p style="text-align: left;">String</p></td><td rowspan="1" colspan="1"><p style="text-align: left;">This value should always be set to <code>code</code>.</p></td></tr></tbody></table>

Redirect your users to the authorization page URL and supply the necessary query parameters. Note that the page can only be accessed through HTTPS.

<table><tbody><tr><td rowspan="1" colspan="1"><p style="text-align: left;"><b>Type</b></p></td><td rowspan="1" colspan="1"><p style="text-align: left;"><b>Description</b></p></td></tr><tr><td rowspan="1" colspan="1"><p style="text-align: left;">URL</p></td><td rowspan="1" colspan="1"><p style="text-align: left;"><code>https://www.tiktok.com/v2/auth/authorize/</code></p></td></tr><tr><td rowspan="1" colspan="1"><p style="text-align: left;">Query parameters</p><br></td><td rowspan="1" colspan="1"><p style="text-align: left;"><code>client_key=&lt;client_key&gt;&amp;response_type=code&amp;scope=&lt;scope&gt;&amp;redirect_uri=&lt;redirect_uri&gt;&amp;state=&lt;state&gt;</code></p></td></tr></tbody></table>

Note: If you are an existing client and use `https://www.tiktok.com/auth/authorize/` as the authorization page URL, please [register a redirect URI](https://developers.tiktok.com/apps/) for your app and migrate to the new URL mentioned above.

The following is an example using Node, Express, and JavaScript:

```
<span><span style="color: rgb(51, 51, 51); font-weight: bold;">const</span><span> express = </span><span style="color: rgb(0, 134, 179);">require</span><span>(</span><span style="color: rgb(221, 17, 68);">'express'</span><span>);
</span></span><span><span></span><span style="color: rgb(51, 51, 51); font-weight: bold;">const</span><span> app = express();
</span></span><span><span></span><span style="color: rgb(51, 51, 51); font-weight: bold;">const</span><span> fetch = </span><span style="color: rgb(0, 134, 179);">require</span><span>(</span><span style="color: rgb(221, 17, 68);">'node-fetch'</span><span>);
</span></span><span><span></span><span style="color: rgb(51, 51, 51); font-weight: bold;">const</span><span> cookieParser = </span><span style="color: rgb(0, 134, 179);">require</span><span>(</span><span style="color: rgb(221, 17, 68);">'cookie-parser'</span><span>);
</span></span><span><span></span><span style="color: rgb(51, 51, 51); font-weight: bold;">const</span><span> cors = </span><span style="color: rgb(0, 134, 179);">require</span><span>(</span><span style="color: rgb(221, 17, 68);">'cors'</span><span>);
</span></span><span>
</span><span>app.use(cookieParser());
</span><span>app.use(cors());
</span><span><span>app.listen(process.env.PORT || </span><span style="color: rgb(0, 128, 128);">5000</span><span>).
</span></span><span>
</span><span><span></span><span style="color: rgb(51, 51, 51); font-weight: bold;">const</span><span> CLIENT_KEY = </span><span style="color: rgb(221, 17, 68);">'your_client_key'</span><span> </span><span style="color: rgb(153, 153, 136); font-style: italic;">// this value can be found in app's developer portal</span><span>
</span></span><span>
</span><span><span>app.get(</span><span style="color: rgb(221, 17, 68);">'/oauth'</span><span>, </span><span class="hljs-function">(</span><span class="hljs-function hljs-params">req, res</span><span class="hljs-function">) =&gt;</span><span> {
</span></span><span><span>    </span><span style="color: rgb(51, 51, 51); font-weight: bold;">const</span><span> csrfState = </span><span style="color: rgb(0, 134, 179);">Math</span><span>.random().toString(</span><span style="color: rgb(0, 128, 128);">36</span><span>).substring(</span><span style="color: rgb(0, 128, 128);">2</span><span>);
</span></span><span><span>    res.cookie(</span><span style="color: rgb(221, 17, 68);">'csrfState'</span><span>, csrfState, { </span><span>maxAge</span><span>: </span><span style="color: rgb(0, 128, 128);">60000</span><span> });
</span></span><span>
</span><span><span>    </span><span style="color: rgb(51, 51, 51); font-weight: bold;">let</span><span> url = </span><span style="color: rgb(221, 17, 68);">'https://www.tiktok.com/v2/auth/authorize/'</span><span>;
</span></span><span>
</span><span><span>    </span><span style="color: rgb(153, 153, 136); font-style: italic;">// the following params need to be in `application/x-www-form-urlencoded` format.</span><span>
</span></span><span><span>    url += </span><span style="color: rgb(221, 17, 68);">'?client_key={CLIENT_KEY}'</span><span>;
</span></span><span><span>    url += </span><span style="color: rgb(221, 17, 68);">'&amp;scope=user.info.basic'</span><span>;
</span></span><span><span>    url += </span><span style="color: rgb(221, 17, 68);">'&amp;response_type=code'</span><span>;
</span></span><span><span>    url += </span><span style="color: rgb(221, 17, 68);">'&amp;redirect_uri={SERVER_ENDPOINT_REDIRECT}'</span><span>;
</span></span><span><span>    url += </span><span style="color: rgb(221, 17, 68);">'&amp;state='</span><span> + csrfState;
</span></span><span>
</span><span>    res.redirect(url);
</span><span>})</span>
```

#### TikTok prompts a users to log in or sign up

The authorization page takes the user to the TikTok website if the user is not logged in. They are then prompted to log in or sign up for TikTok.

#### TikTok prompts a user for consent

After logging in or signing up, an authorization page asks the user for consent to allow your application to access your requested permissions.

#### Manage authorization response

If the user authorizes access, they will be redirected to `redirect_uri` with the following query parameters appended using `application/x-www-form-urlencoded` format:

<table><tbody><tr><td rowspan="1" colspan="1"><p style="text-align: left;"><b>Parameter</b></p></td><td rowspan="1" colspan="1"><p style="text-align: left;"><b>Type</b></p></td><td rowspan="1" colspan="1"><p style="text-align: left;"><b>Description</b></p></td></tr><tr><td rowspan="1" colspan="1"><p style="text-align: left;"><code>code</code></p><br></td><td rowspan="1" colspan="1"><p style="text-align: left;">String</p></td><td rowspan="1" colspan="1"><p style="text-align: left;">Authorization code that is used in getting an access token.</p></td></tr><tr><td rowspan="1" colspan="1"><p style="text-align: left;"><code>scopes</code></p><br></td><td rowspan="1" colspan="1"><p style="text-align: left;">String</p></td><td rowspan="1" colspan="1"><p style="text-align: left;">A comma-separated (,) string of authorization scope(s), which the user has granted.</p></td></tr><tr><td rowspan="1" colspan="1"><p style="text-align: left;"><code>state</code></p><br></td><td rowspan="1" colspan="1"><p style="text-align: left;">String</p><br></td><td rowspan="1" colspan="1"><p style="text-align: left;">A unique, non-guessable string when making the initial authorization request. This value allows you to prevent CSRF attacks by confirming that the value coming from the response matches the one you sent.</p></td></tr><tr><td rowspan="1" colspan="1"><p style="text-align: left;"><code>error</code></p><br></td><td rowspan="1" colspan="1"><p style="text-align: left;">String</p><br></td><td rowspan="1" colspan="1"><p style="text-align: left;">If this field is set, it means that the current user is not eligible for using third-party login or authorization. The partner is responsible for handling the error gracefully.</p></td></tr><tr><td rowspan="1" colspan="1"><p style="text-align: left;"><code>error_description</code></p><br></td><td rowspan="1" colspan="1"><p style="text-align: left;">String</p></td><td rowspan="1" colspan="1"><p style="text-align: left;">If this field is set, it will be a human-readable description about the error.</p></td></tr></tbody></table>

#### Manage access token

Using the `code` appended to your `redirect_uri`, you can obtain `access_token` for the user, which completes the flow for logging in with TikTok.

See [Manage User Access Tokens](https://developers.tiktok.com/doc/login-kit-manage-user-access-tokens) for related endpoints.
