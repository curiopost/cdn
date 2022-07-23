# CDN

Our CDN for delivering attachments in our service

# Installation

1. The usual download and install packages.
2. Add env vars as mentioned in `.env.example`. All vars that start with `CLOUDINARY` are from [cloudinary](https://cloudinary.com/).
3. You also might have to change the response in [this](https://github.com/curiopost/cdn/blob/main/index.js#L37) line to your domain. 
4. Done. 

# Credits

This is a fork of [spicybirsge/cdn](https://github.com/spicybirsge/cdn)
