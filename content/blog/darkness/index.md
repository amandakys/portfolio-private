---
title: InTune
date: "2019-05-08"
thumbnail: ./bbbb.jpg
description: Developed in response to the shortcomings of existing music notation software when composing in groups. InTune streamlines collaborative composition by providing a single platform that combines communication with notation editing capabilties.
---

## MY ROLE

I was part of a team of 4 developers who worked on this web application. As a code heavy project, I took on the role of **designer** both for my team’s benefit and for personal development. In this capacity I worked on interface and user workflow design.

As a **programmer**, I focused on front end development and integration. My main back end contribution was implementing multi-user functionality outside of concurrent editing. For this, I implemented notifications, comments and chat systems.

## THE PROBLEM

#### POOR FILE MANAGEMENT

Existing music notation software lacks version control, and over the course of a collaboration, many copies of the same file build up. It is not uncommon to a project folder with file names like “Composition – V1”, “Composition – V2” and so on. It quickly becomes difficult to know whether they are working on the most up to date version. In addition, merging changes between composers who initially started on the same file is also convoluted.

#### FRAGMENTED COMMUNICATION

Musicians often email each other different versions of the ‘current’ music notation file to keep each other up to date. With large file sizes and proprietary file types, this process is fraught with unnecessary complexities. In addition to email, collaborating musicians often communicate through some kind of team management software like Slack, or simple through a social messenger like WhatsApp, Skype or Facebook. It is not uncommon to see a mixture of images, audio recordings and videos being sent to discuss the music notation. It can become hard to keep track of these messages, especially for longer collaborations.

## OUR SOLUTION

#### CONCURRENT EDITING

To tackle the problem of poor version control and a complicated workflow for remote collaboration, we envisioned a concurrent editing system for music notation. Our goal was **Google Docs, but for sheet music.** It would be possible for multiple composers to work collaboratively on a single shared copy of the composition. When editing concurrently, they would see each others changes live.

In addition, a simpler **version control** system similar to that which we (as programmers) were familiar with, would allow composers to browse through a linear history of saved versions. In conjunction, these features would eliminate the need for composers to send each other updated copies of music notation files.

#### BUILT IN COMMUNICATION CHANNELS

To tackle the problem of fragmented communication and ensure that our web application provided the most all-encompassing composition experience, we designed built in communication systems that complemented the composition workflow.

**1. Comment on each bar of the composition**

- To allow for detailed discussion about specific areas of the composition, each bar has a separate comments section to allow for annotations, suggestions and discussion.
- This allows composers to keep track of the changes they made to this bar and the conversations they had that led to them.

**2. Separate chats for each composition**

- For more general discussions i.e. about the tone of the piece, time signatures or arranging meetings, each composition has a chat that allows all composers involved to communicate.

With these features, composers should have no need to leave the app during the composition process. In addition, all records and notes about their compositions would be conveniently stored in one place.

##DESIGNING USER FLOW

When designing the user journey through the application, it was important I had a strong vision about where our application belonged in the world of music notation software. **Our focus was collaboration.** We were not looking to compete with existing music notation software available on the market which provided incredibly powerful and comprehensive notation scribing capabilities.

Instead, we wanted to provide a platform for collaboration, where notation capabilities were functional but not central to the whole experience. With this in mind, I set out to design workflows and screens that emphasised the applications collaborative capabilities.

####THE CORE LOOP

In line with our focus on collaboration, we wanted our platform to be a community of composers. Having user profiles allowed us to achieve this and was the intuitive strategy for giving the app a long term presence in a composers workflow. It should be their go to application to view all their composition work or start a new composition.

![core-loop-user-flow.jpg](./core-loop-user-flow.jpg)

### A wallpaper series using shapes and light by [Jean-Marc Denis](http://jmd.im/black)

I used a poly reduction on the mesh as a proxy to be able to create my studio setup with a responsive viewport. I used a simple 2 point lighting setup. I created a roughness map using the height map to get the exact results I was looking. After that, I applied my material to the high poly mesh and used a subtle smoothing deformer for the creases.

This is the final render.

<div class="kg-card kg-image-card kg-width-full">

![Darkness](./BLACK_II_desktop-1.jpg)

</div>

<div class="kg-card kg-image-card kg-width-full">

![Darkness](./BLACK_IX_desktop-1.jpg)

</div>

<div class="kg-card kg-image-card kg-width-full">

![Darkness](./BLACK_I_desktop-1.jpg)

</div>
