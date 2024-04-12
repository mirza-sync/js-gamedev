# Topic 2: Parallax Backgrounds

> Parallax. It has nothing to do with Snorlax

## Dev Logs

1. This project doesn't start with creating a parallax backgrounds. First we need to create a continuous endless looping background. Without it, there'll be no side-scrolling games haha. And to make it, it requires an understanding of if else algorithm, and a lil bit of imagination. Fortunately, he already visualise it for us in the tutorial. Very much appreciated.

2. Endless background done. Now back to the parallax backgrounds. So it starts with multiple background images, and we'll draw them all on the canvas together. They all will be stacked on top of each other. But since the images has transparent background, it will look like a single background image (And of course only the base image is opaque). Then each layer will have different speed that if will be drawn. This was the key for the parallex effect. The top-most layer was the fastest. The furter a away the layer, the slower the speed will be.

3. In this tutorial, the layers were initialized using javascript class. Haven't used classes in JS for a long time. Even when doing Angular, I prefer to use use Types instead hahaha.

4. Damn, DOM manipulation again. Kinda have a love hate relationship with it. I like it because it gives you so much power. You can manipulate lots of things. Creativity is the limit. But also hating it since I'm kind suck with it lol. Kids nowadays do frameworks XD.
