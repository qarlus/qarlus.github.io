# Vals SVG Design Brief

## Objective

Create a custom, premium-quality SVG illustration for the `Vals` xatspace.

The final design should feel polished, intentional, and memorable rather than generic, clipart-like, or over-rendered. It should work well as a web-first illustration inside the existing page and remain maintainable for future edits.

## Creative Direction

- Primary tone: elegant, sharp, confident, professional
- Visual priority: silhouette first, major forms second, detail third
- Style target: polished custom vector illustration
- Finish target: clean vector depth, not effect-heavy decoration

## Core Quality Standards

### 1. Start With Strong Overall Shape

The illustration must read clearly before interior detail is added.

If it does not feel clear and intentional in a simplified flat version, the base shape is not ready.

### 2. Use Strong Large Forms

Build the illustration from a small number of major forms first.

Do not start with micro-detail, texture noise, or decorative fragments.

### 3. Keep Structure Controlled

The composition should feel balanced and deliberate.

Small asymmetry is acceptable where it adds character, but the overall piece should not feel messy, random, or mechanically mirrored.

### 4. Keep A Clear Focal Point

The design should have an obvious visual center.

Details should support that focal point, not compete equally across the whole illustration.

### 5. Texture Should Be Implied, Not Overdone

Use grouped shapes and intentional contour changes rather than excessive small details.

Avoid random spikes, noisy edges, or overcomplicated internal fragments.

### 6. Use Shape-Based Shading First

Depth should come primarily from vector shapes.

Preferred depth tools:

- flat tone layers
- restrained gradients where useful
- selective highlights on focal areas

Avoid relying on:

- blur-heavy filters
- glow stacks
- glossy/gimmicky effects
- excessive drop shadows

### 7. Keep The SVG Clean And Maintainable

The final SVG should be built for future editing.

Requirements:

- clean `viewBox`
- logical grouping by purpose
- meaningful IDs/classes only where useful
- minimal unnecessary path points
- no editor junk, hidden layers, or stray shapes

### 8. Design For Multiple Sizes

The illustration must still read at smaller display sizes.

At minimum, test readability at:

- small: `32px`
- medium: `64px`
- large: `128px+`

If small-size readability fails, simplify the silhouette and internal detail.

## Technical Build Decisions

### SVG Delivery

Use inline SVG inside the page.

Reason:

- easier iteration during design
- easier future animation if desired
- CSS targeting is available
- easier control over accessibility and layering

### Structure

Expected high-level grouping:

- `illustration-root`
- `base-forms`
- `primary-details`
- `shadows`
- `highlights`

Additional groups can be added as needed once the specific subject is chosen.

### Styling Approach

- keep the SVG mostly self-contained
- use CSS only for layout, sizing, and light presentational control
- avoid splitting visual construction across too many CSS-generated shapes

### Accessibility

Decide one of these at implementation time:

- decorative only: `aria-hidden="true"` and `focusable="false"`
- meaningful illustration: `role="img"` with `<title>` and optional `<desc>`

## Visual Quality Rules

- Must work in simplified form before color is added
- Must avoid generic template aesthetics
- Must avoid overcomplicated edges and noisy detail
- Must avoid muddy midtone overload
- Must keep a clear focal hierarchy
- Must feel intentional at every contour break

## Recommended Production Workflow

1. Collect references before drawing.
2. Identify the key shape language, mood, and focal elements.
3. Sketch or block the main silhouette only.
4. Lock the major forms and proportions.
5. Add interior planes and shadow groups.
6. Add restrained highlights.
7. Build/export the SVG with clean grouping and naming.
8. Optimize carefully without breaking IDs or readability.
9. Test on the xatspace at small and large sizes.

## Pitfalls To Avoid

- starting with detail instead of form
- excessive texture or edge noise
- unclear focal point
- perfectly mirrored internal detail when it hurts naturalism
- heavy gradients or filters doing all the work
- bloated path data from dirty exports
- ignoring small-size readability

## What We Need Before Drawing

Reference images will help once the subject and style are confirmed.

Most useful references:

- subject references
- mood/style references
- color palette references
- examples of the level of sharpness, softness, darkness, or elegance desired

## Success Criteria

The design is successful if:

- it looks high quality at a glance
- it feels custom rather than templated
- it is readable at multiple sizes
- it can be maintained and refined cleanly in SVG
- it sits convincingly inside the `Vals` xatspace
