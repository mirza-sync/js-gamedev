# Topic 3: Enemy Movement Patterns

> Brace yourself. Enemies incoming!

## Dev Logs

1. I added `/** @type {HTMLCanvasElement} */` when declaring the `canvas` variable, hoping to get type inference from VSCode. Unfortunately it doesn't seem to work. I dont know why it works in the tutorial

2. Randomizing those enemies behaviour such as movement speed and wing flapping speed was astonishing (I'm using some bombastic word right here just to improve my vocabulary). However those `Math.random()`, `Math.floor()` and modulus operator starting to get overwhelming. I hate math. Am I too stupid for this?

3. OMG. Using `Math.random() * <range> - <range/2>` to set the x or y coordinate when drawing images is astonishing. If the range is small, it produces jiggle effect. But when the range is big, it creates a shaky effect. It felt like earthquake!

4. Wait, just realized I used the `astonishing` bombastic word again in previous point. Should've replaced it with **breathtaking**. Because my vocabulary is breathtaking isn't? No, you're breathtaking (Wtf am I talking about lol. Thanks for reading my vobcabulary rant).
