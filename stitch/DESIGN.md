# Design System Strategy: Architectural Precision

## 1. Overview & Creative North Star
The design system is built upon the "Architectural Precision" North Star. In the world of premium construction and luxury real estate, we do not simply build structures; we curate environments of trust and engineering excellence. This system moves away from the "template" look of standard corporate sites by embracing **Industrial Minimalism**.

Instead of rigid, repetitive grids, we utilize intentional asymmetry, overlapping structural elements, and high-contrast typography scales. The goal is to make the digital experience feel like a physical blueprint—clean, authoritative, and meticulously planned. We prioritize breathing room (whitespace) to allow the high-end imagery of Florida real estate to command attention.

## 2. Colors & Surface Philosophy
The palette is a sophisticated interplay between the heavy "Construction Blue" and the neutral, airy "Concrete Gray."

*   **Primary Authority:** `primary` (#132778) and `primary_container` (#2E3F8F) provide the visual weight of an established firm.
*   **The Tonal Foundation:** We move away from pure white to `surface` (#f7f9ff), a cooler, engineered white that reduces eye strain and feels more "designed" than a default background.

### The "No-Line" Rule
To achieve a high-end editorial feel, **designers are prohibited from using 1px solid borders for sectioning.** Boundaries must be defined through:
1.  **Background Color Shifts:** Use `surface_container_low` (#f1f4f9) to distinguish a new section from the main `surface`.
2.  **Tonal Transitions:** A subtle shift from `surface` to `surface_container` creates a natural break without the "cheap" look of a stroke line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers (Lowest to Highest) to create "nested" depth. 
*   An inner card (`surface_container_highest` - #e0e2e8) should sit atop a section background (`surface_container_low` - #f1f4f9). This creates a soft, natural lift.

### The "Glass & Gradient" Rule
Floating navigation bars and overlaying content modules must use **Glassmorphism**. Combine `surface` at 70% opacity with a `backdrop-blur` of 12px-20px. 
*   **Signature Texture:** For primary CTAs, use a subtle linear gradient from `primary` (#132778) to `primary_container` (#2E3F8F) at a 135-degree angle. This adds "soul" and depth that flat color cannot provide.

## 3. Typography
The typography system pairs the industrial strength of **Work Sans** with the technical clarity of **Inter**.

*   **Display & Headlines (Work Sans):** Used for "Architectural Statements." Large scales like `display-lg` (3.5rem) should be set with tight letter-spacing (-0.02em) to feel like chiseled stone. This conveys authority and engineering precision.
*   **Body & Labels (Inter):** Used for "Technical Specs." Inter provides a clean, neutral balance to the bold Work Sans. Body text should maintain generous line-height (1.6) to ensure readability against wide spacing.
*   **Visual Hierarchy:** Use `on_surface_variant` (#454651) for secondary descriptions to create a sophisticated, de-emphasized layer that keeps the primary headlines dominant.

## 4. Elevation & Depth
In this design system, depth is a matter of "Tonal Layering" rather than traditional drop shadows.

*   **The Layering Principle:** Stack `surface_container_lowest` (#ffffff) cards onto `surface_container` (#eceef3) backgrounds. The 12px rounded corners (`xl` scale) provide a modern, Tesla-inspired softness to the industrial concrete tones.
*   **Ambient Shadows:** If a floating element requires a shadow, it must be an "Ambient Shadow."
    *   **Spec:** Blur: 40px, Spread: -5px, Color: `on_surface` (#181c20) at 6% opacity.
    *   This mimics natural light reflecting off architectural surfaces.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use the "Ghost Border" method: `outline_variant` (#c6c5d3) at 15% opacity. Never use 100% opaque lines.
*   **Glassmorphism Depth:** Overlaying a glass module (`surface` at 60% opacity) over a construction site photograph creates a "Blueprint Overlay" effect, bridging the gap between raw construction and finished luxury.

## 5. Components

### Buttons
*   **Primary:** `primary` background with `on_primary` text. 12px (`xl`) corner radius. Subtle gradient texture.
*   **Secondary (Glass):** Semi-transparent `white` (20%) with a heavy backdrop-blur. 
*   **Tertiary:** No background. `primary` text with a 2px `primary` underline that appears on hover.

### Cards & Layout Modules
*   **Rule:** Forbid the use of divider lines. Separate content using the Spacing Scale (specifically `8` (2.75rem) or `10` (3.5rem)).
*   **Modular Architecture:** Use the 12px corner radius for all image containers. Images should be slightly desaturated to match the `secondary` concrete tones.

### Input Fields
*   **Style:** Minimalist. No border on three sides; only a 2px bottom "Architectural Line" using `outline_variant`. 
*   **Focus State:** The line transitions to `primary` blue with a subtle `surface_tint` glow.

### Additional Signature Component: The "Progress Rail"
For long-form project pages, use a vertical progress rail on the left margin. It uses `surface_container_highest` for the track and `primary` for the progress, echoing the verticality of a skyscraper.

## 6. Do's and Don'ts

### Do:
*   **Do** embrace wide spacing. Use `spacing-16` (5.5rem) between major sections to let the "Industrial Minimalism" breathe.
*   **Do** use asymmetrical layouts (e.g., a 60/40 split where the image overlaps the container boundary).
*   **Do** use `surface_bright` (#f7f9ff) for the main background to maintain a premium, high-end real estate feel.

### Don't:
*   **Don't** use 1px solid black or dark grey borders. This breaks the "Architectural Precision" and feels like a legacy template.
*   **Don't** use standard "drop shadows." If it doesn't look like ambient light, it doesn't belong.
*   **Don't** cram content. If a section feels crowded, double the spacing values.
*   **Don't** use vibrant accent colors outside of the defined palette. Trust is built through a restrained, authoritative color story.