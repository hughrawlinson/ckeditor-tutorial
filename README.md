# CKEditor5 Demo

NextJS demo of CKEditor 5.

## Pitfalls

- The MathType integration doesn't have typescript, and doesn't seem to handle NextJS well.
- The AI Assistant docs don't completely specify the proxy endpoint - which HTTP methods should it support, which routes should it have, which upstream endpoint should be called.
- Contradicts itself - code example imports OpenAITextAdapter from `ckeditor-premium-features`, but prose says it's in `ckeditor5-ai`.
- Supported models for openai seems out of date.
- All 3 AI providers on one page is confusing - ctrl+f could take a reader to the wrong section without realizing it.
- Consider explaining to users why it's unsafe to keep the OpenAI token in the frontent, but
  keeping the CKEditor License Key there is fine.

## Script

### Intro

Hi! I’m Hugh, and I’m about to show you how to get set up with CKEditor in your NextJS typescript app. We’ll cover initial setup, how to handle the user’s interaction with CKEditor, and how to set up some premium CKEditor features.

### Get Started

#### Create NextJS Project

First we’ll create our NextJS project with the project generator provided by NextJS. We’ll accept the defaults, except for tailwind - we’ll write CSS instead.
Now that our project directory is created, we’ll open it in our editor, Visual Studio Code. Lets have a look at our site. I’ll open a terminal and run npm run dev to start the development server. We can click this link to view our site in the browser.

#### Install deps

To get started with ckeditor, we’ll need to install the ckeditor packages. ckeditor5 is the core package, and we’ll use ckeditor5-premium-features to check out some premium features later on in the video. We also need to install @ckeditor/ckeditor5-react, since we are using CKEditor from inside React.

#### Create editor component

We want to keep our editor instance configured the way we like it, and reusable across multiple pages. Therefore, we’ll create a component to encapsulate the configuration.

#### Create components/custom-editor.tsx.

We’ll create a component and export it as our module default.

#### Use editor component

Within our component, we will use the CKEditor component from the ckeditor5-react package. We’ll provide an editor prop, in this case we’ll use the ClassicEditor, which provides a standard editor UI. CKEditor supports inline editing, balloon editing, and more - you can find more information in the docs.

Next, we’ll provide a configuration for the editor. Configuration allows us to set CKEditor up with the features we want to provide to our users. I’ve copied a configuration from earlier that includes many standard features.

Make sure to import the features from the ckeditor5 package!

The last step is to make sure we import the CKEditor5 CSS, so that our editor looks as it was designed.

#### Demo

Back in our browser, we can now see and interact with our editor!

### Implement “save” button

What if we want to save the content from our editor? We’ll need to access the content. When the user changes content in the editor, the editor will give us a callback on a function we provide, giving us the new content. Let’s implement that function.

Here we can see the content being logged to the console. Instead, let’s save that content in a useState hook, so that other code can access it.

We could implement a save button here to push the new content to a Content Management System, a custom backend, or to save the content locally.

### Premium Features

Let’s have a look at some premium features that CKEditor offers.

To use Premium features, we’ll need to sign up for a license. We can use the 30 day free trial for this demo.

#### Feature 1: Case Change

##### Overview

The Case Change feature lets writers change the case of their text to upper case, lower case or title case, using the new menu item.

##### Implementation

The CaseChange feature is in the ckeditor5-premium-features package. We’ll import it, and add it to the plugins array in our config. We’ll also add it to our toolbar, so that our users are able to interact with it.

##### Demo

We can use the Case Change feature by highlighting text, clicking the case change button in the toolbar, and selecting our desired case.

We can exclude certain words from being capitalised in Title Case - here are some exclude words from elsewhere.

#### Feature 2: Multi-level Lists

##### Overview

Multi-level numbered lists are supported in CKEditor. They’re critical for hierarchies of information - for example, as appears in legal documents.

##### Implementation

We’ll import the MultiLevelList feature from ckeditor5-premium-features, and add it to our plugins and toolbar configurations.

##### Demo

We can create a multilevel list by using the button in the toolbar. We can then use the Tab key to shift right, and shift+tab to shift left.

#### Feature 3: Text Styling

##### Overview

Lets add some text styling to our editor. Writers should be able to change font, font size, and the color and background color of their content

##### Implementation

Font, FontFamily, FontSize, FontColor, FontBackgroundColor

##### Demo

The writer can now use the new buttons in the toolbar to modify the style of their content.

#### Feature 4: Format Painter

##### Overview

Format Painter lets writers copy formatting attributes from one part of their content to another.

##### Implementation

Once again, we’ll add our plugin to our Plugins list, and add it to our toolbar.

FormatPainter
formatPainter

##### Demo

```
Title

Here is a description
```

Let's use format painting to copy this text background color from our title to our description

#### Feature 5: Slash Commands

##### Overview

Slash commands are a way for the user to execute editor functions directly while typing.

##### Implementation

We’ll import SlashCommand from ckeditor5-premium-features, and add it to our plugins list. This feature doesn’t need to be added to the toolbar.

##### Demo

Now, when I type the / character in my editor, I get a list of formatting options that I can select with my arrow keys.

#### AI Assistant

**Cut, because the docs don't make it clear how to write the proxy endpoint, and I wouldn't
provide content to developers that instructs them to do something insecure - instead, I'd
focus on making it easy to do the secure thing.**

##### Overview

AI Assistant adds powerful AI tools to CKEditor. Writers can select from a variety of existing AI commands, including editing, content generation, tone and style modifications, and language translation. The writer can also write their own prompts that the AI will apply to their text.

##### Implementation

AI Assistant requires an AI service - OpenAI, Azure OpenAI, or Amazon Bedrock. You’ll need an API token from one of those services. Since OpenAI is recommended, we’ll go with that for the purpose of this demo.

To call OpenAI, we’ll need an API token - we have to keep our API token secure and confidential. For this reason, we won’t make our token available in the client code. To do so would be a serious security risk - any user of our site could grab the token and use up our OpenAI budget! Instead, we’ll create a proxy endpoint.

A proxy endpoint conforms to the same API provided by OpenAI, but when our code receives the request, it will forward the request to OpenAI with the API token. When it receives a response from OpenAI, it will return that response to the client, as if it had been

##### Demo

### Conclusion

In this demo, we’ve covered

- How to get set up with CKEditor in NextJS
- Interacting with CKEditor from our code
- Setting up a selection of CKEditor’s premium features
- Getting started with CKEditor’s AI Assistant

There’s so much more to learn - check out ckeditor.com/docs for even more details!
