# BACKGROUND IMAGE SELECTOR PLUGIN
Elevate your website's visual appeal with the Background Image Selector Plugin – a versatile jQuery tool that empowers developers to seamlessly integrate a background image switch button into their web pages.

**Check out the live application example at [Background Image Selector](https://background-selector.vercel.app/).**

If you found this plugin useful, please consider making a $2 contribution via PayPal to bestkaraokeapp@gmail.com for continuous improvement. Your support is invaluable, and we genuinely appreciate it!

[Contribute Now](https://www.paypal.com/donate/?hosted_button_id=ZG43MX2NWBDBA)

## 🚀 New Feature!!
Now, experience enhanced customization as the plugin not only switches background images but also dynamically adjusts the text for improved contrast. Elevate the visual aesthetics of your websites effortlessly!

## Description
The Background Image Selector Plugin provides a user-friendly solution for developers looking to add a background image switch button to their web pages. With this plugin, users can seamlessly customize background images and incorporate engaging visual effects for an interactive user experience.

## Features
- Dynamic Image Change: Choose from a variety of pre-defined images to personalize your page's appearance.
- Button Animation: Add a subtle and stylish button animation to captivate your audience.

## How to Use

1. **Installation:**
   - `npm i background_image_selector_plugin`

2. **Initialization:**
   - Select the desired button using jQuery and call the `scrollImageChange()` method to activate the plugin.

   ```html
   <script src="path/to/jquery.min.js"></script>
   <script src="path/to/plugin-background-image.js"></script>
   <script>
     $(document).ready(function () {
       $("#scrollDownButton").scrollImageChange({
         images: [
           "./images/moon.jpg",
           "./images/nebulous.jpg",
           "./images/space.jpg",
           // Add more images as needed
         ],
       });
     });
   </script>

## Customization
This plugin is highly customizable—tweak the images to your liking, play with button effects, and more...

## Contribution
Feel free to contribute with improvements, bug fixes, or new features. Open an issue or submit a pull request!
Send a message and let me know how you're using it!
Let's collaborate!

## Support
Our dedicated team is here to assist you, ensuring a seamless and positive experience with our products and services.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
