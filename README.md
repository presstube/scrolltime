
# Scrolltime

Rough spike of binding a timeline-based canvas animation to a vertical scrolling page.

Rough inital steps:
- make a simple demo animation ✓
- wire animation up fullscreen 'fixed' ✓
- setup a scrolling DOM element of arbitrary length ✓
- listen for scroll event ✓
- normalize scroll position to a number between 0-1 ✓
- apply that scroll percentage to the timeline ✓


Potential next steps:
- re-center animation on resize
- resolution independant
    + on startup
    + on resize (only matters for multi-monitors)


Notes:
- explore why stage is getting passed in as a callback to the tick listener
- come up w/ a good story for importing createjs (maybe submit a PR for gskinner?)
- build isn't watching html and copying to build
- we have multiple files not being watched: index and assets
- explore whether or not to scale the animation in this
- explore scroll boundary 'bounce' and cross platform differences (safari hello?)
- 