Project Design Guidelines & Style Update1. 
OverviewThis document outlines the updated visual design standards for the project, focusing specifically on a revised typography system and a streamlined 4-color palette. These guidelines ensure consistency across all UI components.2. TypographyWe are moving to a dual-font system to establish clear hierarchy between structure (headings) and content (body).2.1. Heading FontFont Family: [Stardos Stencil]Usage: Used strictly for hierarchical structure.Weights: Bold (700), Semi-Bold (600).Elements: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, and Hero titles.2.2. Body FontFont Family: SupremeUsage: Used for legibility in long-form text and UI inputs.Weights: Regular (400), Medium (500).Elements: Paragraphs <p>, Inputs, Labels, Button text, Tooltips, and Navigation links.3. Color PaletteThe interface utilizes a strict 4-color scheme to maintain visual harmony and accessibility.RoleDescriptionHex Code / ValueUsage RulesColor 1Background[#FFF1E9]Applied to the main <body> background, cards, and modal containers.Color 2Text / Content[#1F1F1F]Main color for all headings, paragraphs, and icons. Must ensure high contrast against Color 1.Color 3Primary Action[#C45124]Reserved for the main "Call to Action" (Submit, Buy, Login). High visibility.Color 4Secondary Action[#EFAC93]Used for alternative actions (Cancel, Back, Filter) or inactive states.4. Component Guidelines4.1. ButtonsPrimary Button:Background: Color 3 (Primary Action)Text: Color 1 (Background Color) or Color 2 (depending on contrast)Font: Body Font (Medium Weight)Use case: The most important action on the screen.Animation: Smooth hoverSecondary Button:Background: Color 4 (Secondary Action) OR Transparent with Color 4 Border.Text: Color 2 (Text Color) or White.Font: Body Font (Regular Weight)Use case: "Cancel", "Go Back", or lower priority options.4.2. LayoutPage Background: Color 1.Content: All readable content should be set in Color 2.5. Technical Implementation (CSS Variables)To implement these changes efficiently, update the global CSS root variables as follows::root {
  /* Typography */
  --font-heading: 'Heading Font Name', sans-serif;
  --font-body:    'Body Font Name', sans-serif;

  /* Color Palette */
  --color-bg:        #______; /* Color 1 */
  --color-text:      #______; /* Color 2 */
  --color-primary:   #______; /* Color 3 */
  --color-secondary: #______; /* Color 4 */
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--color-text);
}

.btn-primary {
  background-color: var(--color-primary);
  font-family: var(--font-body);
}

.btn-secondary {
  background-color: var(--color-secondary);
  font-family: var(--font-body);
}
