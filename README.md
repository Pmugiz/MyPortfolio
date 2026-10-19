# Student Portfolio Website — Setup & Publishing Guide

This site is a fully static HTML/CSS/JavaScript portfolio. It has three individual project pages, local image galleries and a contact form ready to connect to Formspree. It works on GitHub Pages without React, Node, paid hosting or a database.

## 1. First: personalise your website

Open the files with a plain-text editor such as VS Code. You can open `index.html` by double-clicking it to preview the site locally. The images and navigation work offline. The contact form needs an internet connection and a configured Formspree form. YouTube playback also needs an internet connection.

- `index.html`: use Find/Replace for `Your Name` and `YOURNAME`. Update your professional title, hero text, About Me section, skills, CV summary, social-profile links and featured project cards. Change project titles here **and** in their individual HTML pages if you want consistent names.
- `style.css`: change colours under `:root` at the top.
- `projects/project1.html`, `project2.html`, `project3.html`: edit the page heading, overview, role, tools, intended audience, development stages and descriptions.
- `assets/CV.pdf`: replace the marked example PDF with your real CV, keeping the same filename. The View CV and Download CV buttons will then use the real document.
- `images/project1/`, `images/project2/`, `images/project3/`: replace example JPGs with your own images. These are *graphic placeholders* made for the template and should never be presented as actual project work.

**Privacy:** Use only contact details and files you are happy to publish openly. Do not put passwords, private keys, API credentials or confidential student data in your repository.

## 2. Replace project gallery images

Put your image files inside `images/project1/` (or the corresponding project folder). In the relevant `projects/project1.html`, find `const galleryImages = [` near the end. Each line contains:

```js
{src:"../images/project1/image1.jpg", alt:"Description for accessibility", caption:"Stage 1 — initial sketches"},
```

Change `src` to the real filename; change `alt` to a useful image description; change `caption` to describe the development stage. Copy a line to add a sixth (or seventh) image, or delete a line to remove one. The counter and thumbnails update automatically. Images can use JPG, PNG or WebP. Use reasonably sized files and optimise them for the web. Gallery images keep their proportions instead of cropping.

On a project page, use the previous/next buttons or press the keyboard's left/right arrows when the gallery has focus.

## 3. Add YouTube videos

Upload your own video to YouTube, then copy its video ID. For a URL like `https://www.youtube.com/watch?v=ABCDEFGHIJK`, the ID is `ABCDEFGHIJK`.

In the corresponding `projects/project1.html`, near the end, change:

```js
const VIDEO_ID = "";
const VIDEO_TITLE = "Your video title";
const VIDEO_DESCRIPTION = "What does the viewer see?";
```

Leave the ID empty to show a professional "video not added" message. YouTube player settings are in the shared `project.js`; most students do not need to edit it. Ensure the video permits embedding. For privacy, the player uses the YouTube no-cookie embed host.

## 4. Enable the contact form using Formspree

1. Go to https://formspree.io/ and create a free account.
2. Create a new form and verify your email if requested by Formspree.
3. Find your unique endpoint, which resembles `https://formspree.io/f/xyzabcde`.
4. In `index.html`, find `https://formspree.io/f/YOUR_FORM_ID` and replace `YOUR_FORM_ID` with your real ID (or replace the entire URL with the endpoint).
5. Save, publish and open your live page. Complete all three fields and click **Send Message**.
6. Confirm the success message appears, then check your Formspree dashboard or configured notification email. If an error appears, confirm the form is active and the URL is correct.

The built-in client-side script submits using `fetch` and displays success/errors without launching an email application. HTML field validation is built in; a hidden `_gotcha` field is included for simple honeypot spam filtering. Formspree may provide additional anti-spam measures. **Free-tier limits and available anti-spam settings can change: check Formspree's current plan.** For local `file://` previews, test the form on the published HTTPS site if browser restrictions prevent submission.

## 5. Publish for free on GitHub Pages (no command line)

1. Visit https://github.com/signup and create a free GitHub account, then sign in.
2. Click **New repository**. For a personal site, name it **`yourusername.github.io`**, where `yourusername` is your *actual* GitHub username (e.g. `alexdev.github.io`). Choose **Public** and create the repository.
3. On the repository page, choose **Add file → Upload files**. Upload the *contents* of `MyPortfolio`, preserving its folder structure. The root of your repository must contain `index.html`, `style.css` and `script.js`. If the web upload interface flattens folders, use GitHub's web editor or upload the folder with a compatible browser workflow that preserves paths; confirm each nested folder exists afterwards.
4. Click **Commit changes**.
5. Go to **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**. Choose **main** and **/(root)** and click **Save**.
6. Once Pages deployment completes, open **`https://yourusername.github.io/`**. A repository named `yourusername.github.io` produces a user-site URL. For a project repository, the URL instead includes `/<repository-name>/`.
7. To update a file later, open it in the GitHub repository, click the pencil icon (Edit), make changes and **Commit changes**. To add images, choose **Add file → Upload files** in the relevant project folder and commit. GitHub Pages will publish changes after deployment.

GitHub menus may change slightly. GitHub Pages documentation: https://docs.github.com/en/pages

## 6. Troubleshooting

- **Broken images:** Check spelling, case sensitivity and extensions exactly. `image1.jpg` is not the same as `Image1.JPG` on GitHub Pages. On project pages paths start `../images/`; on the homepage paths start `images/`.
- **Missing CSS or JavaScript:** `index.html` must be at the repository root. Project pages reach the root with `../style.css`, `../script.js` and `../project.js`.
- **Project link goes nowhere:** Check that `projects/project1.html` exists and links use `.html` exactly.
- **No video:** Confirm the full video ID has been inserted in the relevant page and embedding is permitted by its uploader.
- **No email messages:** Check you replaced `YOUR_FORM_ID`, verified the destination, and tested from the published HTTPS page. Inspect the visible status message.
- **Old version appears:** Wait for the GitHub Actions/Pages deployment status to complete, then refresh without cached assets.
- **CV still shows example:** Replace `assets/CV.pdf` with your own PDF, with matching spelling/capitalisation.

## 7. Add a fourth project

1. Copy `projects/project3.html` to `projects/project4.html`.
2. Create `images/project4/` and add image files.
3. Edit the new page's text and the `galleryImages` paths to point at `../images/project4/`.
4. Add a fourth card in the `<div class="cards">` of `index.html` that links to `projects/project4.html`.
5. Update the Previous / Next Project links on the relevant pages to include the fourth project.
6. Add a video ID and captions if available; publish the new files.

## 8. Folder map

```text
MyPortfolio/
├── index.html
├── style.css
├── script.js
├── project.js             # Shared gallery + video behaviour
├── images/
│   ├── project1/          # image1.jpg – image5.jpg
│   ├── project2/          # image1.jpg – image5.jpg
│   └── project3/          # image1.jpg – image5.jpg
├── projects/
│   ├── project1.html
│   ├── project2.html
│   └── project3.html
├── assets/
│   └── CV.pdf             # Example only — replace before publication
└── README.md
```

Every internal asset/link uses relative URLs so it also works on a GitHub Pages project subpath, not just a personal username domain.
