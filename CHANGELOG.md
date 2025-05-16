# MeteoSwiss' Open Data Changelog

## 0.9.0 (2025-05-16)

#### Example Title

- `Example topic`
  - [#270](https://github.com/MeteoSwiss/opendata/pull/270/) Example Pull Request

<!--
#### New Feature

- `docusaurus-faster`, `docusaurus`
  - [#10800](https://github.com/facebook/docusaurus/pull/10800) feat(core): Turn Rspack incremental on by default (again) ([@slorber](https://github.com/slorber))
- `docusaurus-plugin-content-blog`, `docusaurus-theme-classic`
  - [#10768](https://github.com/facebook/docusaurus/pull/10768) feat(blog): Add author social icons for bluesky, mastodon, threads, twitch, youtube, instagram ([@GingerGeek](https://github.com/GingerGeek))
- `create-docusaurus`, `docusaurus-mdx-loader`, `docusaurus-module-type-aliases`, `docusaurus-plugin-client-redirects`, `docusaurus-plugin-content-blog`, `docusaurus-plugin-content-docs`, `docusaurus-plugin-content-pages`, `docusaurus-plugin-debug`, `docusaurus-plugin-google-analytics`, `docusaurus-plugin-google-gtag`, `docusaurus-plugin-google-tag-manager`, `docusaurus-plugin-ideal-image`, `docusaurus-plugin-pwa`, `docusaurus-plugin-rsdoctor`, `docusaurus-plugin-sitemap`, `docusaurus-plugin-svgr`, `docusaurus-plugin-vercel-analytics`, `docusaurus-preset-classic`, `docusaurus-theme-classic`, `docusaurus-theme-common`, `docusaurus-theme-live-codeblock`, `docusaurus-theme-mermaid`, `docusaurus-theme-search-algolia`, `docusaurus-types`, `docusaurus`
  - [#10763](https://github.com/facebook/docusaurus/pull/10763) feat: Add React 19 support to Docusaurus v3 ([@slorber](https://github.com/slorber))
- `docusaurus-plugin-content-blog`
  - [#10729](https://github.com/facebook/docusaurus/pull/10729) feat(blog): Add `frontMatter.sidebar_label` ([@slorber](https://github.com/slorber))
- `docusaurus-module-type-aliases`, `docusaurus-plugin-svgr`, `docusaurus-preset-classic`, `docusaurus-types`, `docusaurus-utils`, `docusaurus`
  - [#10677](https://github.com/facebook/docusaurus/pull/10677) feat(svgr): create new Docusaurus SVGR plugin ([@slorber](https://github.com/slorber))

#### Bug Fix

- `docusaurus-remark-plugin-npm2yarn`
  - [#10803](https://github.com/facebook/docusaurus/pull/10803) fix(npm-to-yarn): add missing npm-to-yarn converter for Bun ([@Lehoczky](https://github.com/Lehoczky))
- `docusaurus-theme-classic`, `docusaurus-theme-common`
  - [#10796](https://github.com/facebook/docusaurus/pull/10796) fix(theme): Footer Column/Link should merge provided className ([@slorber](https://github.com/slorber))
- `docusaurus-bundler`, `docusaurus-theme-common`
  - [#10786](https://github.com/facebook/docusaurus/pull/10786) fix(core): fix React hydration errors, change html minifier settings ([@slorber](https://github.com/slorber))
- `docusaurus-theme-common`
  - [#10782](https://github.com/facebook/docusaurus/pull/10782) fix(theme-common): code block magic comments should support SQL block comments ([@WillBlack403](https://github.com/WillBlack403))
- `docusaurus-theme-translations`
  - [#10783](https://github.com/facebook/docusaurus/pull/10783) fix(theme-translations): Add missing Dutch (nl) theme translations ([@janaukema](https://github.com/janaukema))
  - [#10760](https://github.com/facebook/docusaurus/pull/10760) fix(theme-translation): add missing Korean (ko) theme translations ([@effozen](https://github.com/effozen))
- `docusaurus-plugin-content-docs`
  - [#10754](https://github.com/facebook/docusaurus/pull/10754) fix(docs): fix sidebar item visibility bug for category index ([@slorber](https://github.com/slorber))
- `docusaurus`
  - [#10727](https://github.com/facebook/docusaurus/pull/10727) fix(core): fix codegen routesChunkName possible hash collision ([@slorber](https://github.com/slorber))
- `docusaurus-mdx-loader`
  - [#10723](https://github.com/facebook/docusaurus/pull/10723) fix(mdx-loader): fix md image paths with spaces bug related to transformImage encoding problem ([@slorber](https://github.com/slorber))

#### Documentation

- [#10740](https://github.com/facebook/docusaurus/pull/10740) docs: Link initialization docs together ([@waldyrious](https://github.com/waldyrious))

#### Dependencies

- [#10771](https://github.com/facebook/docusaurus/pull/10771) chore(deps): bump nanoid from 3.3.7 to 3.3.8 ([@dependabot[bot]](https://github.com/apps/dependabot))
- [#10721](https://github.com/facebook/docusaurus/pull/10721) chore(deps): bump actions/dependency-review-action from 4.4.0 to 4.5.0 ([@dependabot[bot]](https://github.com/apps/dependabot))

#### Maintenance

- Other
  - [#10770](https://github.com/facebook/docusaurus/pull/10770) chore: Devcontainer upgrade to Ubuntu Noble & Node 22 ([@GingerGeek](https://github.com/GingerGeek))
- `docusaurus-theme-search-algolia`
  - [#10801](https://github.com/facebook/docusaurus/pull/10801) refactor(algolia): simplify SearchBar component ([@slorber](https://github.com/slorber))
  - [#10672](https://github.com/facebook/docusaurus/pull/10672) chore(algolia): upgrade algoliasearch to v5 ([@millotp](https://github.com/millotp))
- `docusaurus`
  - [#10798](https://github.com/facebook/docusaurus/pull/10798) refactor(core): Use Intl native API to get locale direction, remove rtl-detect depend… ([@slorber](https://github.com/slorber))
  - [#10747](https://github.com/facebook/docusaurus/pull/10747) refactor(core): swizzle wrap should use ReactNode instead of JSX.Element ([@slorber](https://github.com/slorber))
- `create-docusaurus`, `docusaurus-mdx-loader`, `docusaurus-module-type-aliases`, `docusaurus-plugin-content-blog`, `docusaurus-plugin-content-docs`, `docusaurus-plugin-content-pages`, `docusaurus-plugin-debug`, `docusaurus-plugin-ideal-image`, `docusaurus-plugin-pwa`, `docusaurus-theme-classic`, `docusaurus-theme-common`, `docusaurus-theme-live-codeblock`, `docusaurus-theme-mermaid`, `docusaurus-theme-search-algolia`, `docusaurus-types`, `docusaurus`
  - [#10746](https://github.com/facebook/docusaurus/pull/10746) refactor: prepare types for React 19 ([@slorber](https://github.com/slorber))
- `docusaurus-theme-common`
-->
  - [#10728](https://github.com/facebook/docusaurus/pull/10728) refactor(theme-common): change storageUtils useSyncExternalCode getSnapshot workaround ([@slorber](https://github.com/slorber))
