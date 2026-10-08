:robot: I have created a release *beep* *boop*
---


<details><summary>chat-client: 0.1.58</summary>

## [0.1.58](https://github.com/dungdong-aws/language-servers/compare/chat-client/v0.1.57...chat-client/v0.1.58) (2026-10-08)


### Features

* add model description to dropdown ([#2374](https://github.com/dungdong-aws/language-servers/issues/2374)) ([ed8c6dd](https://github.com/dungdong-aws/language-servers/commit/ed8c6dda1312f728e9ee7472f7ca447196ad9d84))
* add support for getSupplementalContext LSP API ([#2212](https://github.com/dungdong-aws/language-servers/issues/2212)) ([2ddcae7](https://github.com/dungdong-aws/language-servers/commit/2ddcae7a4fac6b89cbc9784911959743ea0a6d11))
* Adding ATX-FES apis support for transformation ([#2521](https://github.com/dungdong-aws/language-servers/issues/2521)) ([56ee489](https://github.com/dungdong-aws/language-servers/commit/56ee4891a2e19b259c129fd531f8b06f763c1b57))
* **amazonq:** add client-side chat delivery metrics ([#2766](https://github.com/dungdong-aws/language-servers/issues/2766)) ([614bbf5](https://github.com/dungdong-aws/language-servers/commit/614bbf5e122f30c381d7b4dbf9def3679b4d49be))
* **amazonq:** add two more tips for the did you know section ([#2063](https://github.com/dungdong-aws/language-servers/issues/2063)) ([9949c6d](https://github.com/dungdong-aws/language-servers/commit/9949c6dd81c56b5ea82563310da2eaee4d00a059))
* **amazonq:** added mcp admin level configuration with GetProfile ([#2000](https://github.com/dungdong-aws/language-servers/issues/2000)) ([fd6e9a8](https://github.com/dungdong-aws/language-servers/commit/fd6e9a829c6229c276de5340dffce52b426a864d))
* **amazonq:** adding MCP registry for governance for Amazon Q ([#2512](https://github.com/dungdong-aws/language-servers/issues/2512)) ([e8d4bf5](https://github.com/dungdong-aws/language-servers/commit/e8d4bf588e9b7bc13102b33ee03bd357f9698811))
* **amazonq:** default to diff-based scans ([#2195](https://github.com/dungdong-aws/language-servers/issues/2195)) ([da4c3db](https://github.com/dungdong-aws/language-servers/commit/da4c3db5329bd50cfe249bf8c1d59afa9bcb0157))
* **amazonq:** enable show logs feature ([#1947](https://github.com/dungdong-aws/language-servers/issues/1947)) ([86ea83d](https://github.com/dungdong-aws/language-servers/commit/86ea83dd53b447f6decccf16559b76f4989ea712))
* **amazonq:** enable sonnet 4 for fra region ([#2069](https://github.com/dungdong-aws/language-servers/issues/2069)) ([3a4b8df](https://github.com/dungdong-aws/language-servers/commit/3a4b8df981b2c3b0532360a11472169fffec7924))
* **amazonq:** read tool ui revamp ([c65428b](https://github.com/dungdong-aws/language-servers/commit/c65428bab2cf5e47badf1e3a9453babcf881e60c))
* **amazonq:** read tool ui revamp ([#2113](https://github.com/dungdong-aws/language-servers/issues/2113)) ([#2121](https://github.com/dungdong-aws/language-servers/issues/2121)) ([93cf229](https://github.com/dungdong-aws/language-servers/commit/93cf229149ba60491f9f5763793db4a9f570b611))
* **amazonq:** redirect /review, rename CodeReview tool, emit metrics, modify prompts ([#1964](https://github.com/dungdong-aws/language-servers/issues/1964)) ([ad8e2db](https://github.com/dungdong-aws/language-servers/commit/ad8e2db77e34f369fef9af71cdda2d3522f555c6))
* **amazonq:** revert auto-approve ([#2002](https://github.com/dungdong-aws/language-servers/issues/2002)) ([c8181f7](https://github.com/dungdong-aws/language-servers/commit/c8181f7a1de224dfcc7a77cd0bfc905fa1018372))
* Auto fetch models from listAvailableModels API ([#2171](https://github.com/dungdong-aws/language-servers/issues/2171)) ([8600c52](https://github.com/dungdong-aws/language-servers/commit/8600c524877abb459e9338399352446c0dcff6f0))
* **chat-client:** add auto-approve (trust mode) for built-in tools ([#1949](https://github.com/dungdong-aws/language-servers/issues/1949)) ([f17b631](https://github.com/dungdong-aws/language-servers/commit/f17b631d9e06371a11ef8e9cb1413762fb51a143))
* **chat-client:** add IDE deprecation notice ([#2877](https://github.com/dungdong-aws/language-servers/issues/2877)) ([73dd8c6](https://github.com/dungdong-aws/language-servers/commit/73dd8c66a3a11a28d8e011ef52bae2fb2d809d5b))
* **chat-client:** add shortcut for stop/reject/run commands ([#1932](https://github.com/dungdong-aws/language-servers/issues/1932)) ([087f338](https://github.com/dungdong-aws/language-servers/commit/087f3387ba736e92d014274e195f7ef76e377f1e))
* memory bank support ([#2314](https://github.com/dungdong-aws/language-servers/issues/2314)) ([0e215fc](https://github.com/dungdong-aws/language-servers/commit/0e215fc0e475b4c40a8237492371716982d4d532))
* render welcome splash via tabHeaderDetails ([#2739](https://github.com/dungdong-aws/language-servers/issues/2739)) ([#2748](https://github.com/dungdong-aws/language-servers/issues/2748)) ([1fd847b](https://github.com/dungdong-aws/language-servers/commit/1fd847b35dff9a1b27eb29ebb934b1c69990c4f2))
* send pinned context button immediately with pending state  ([#2353](https://github.com/dungdong-aws/language-servers/issues/2353)) ([bee5cad](https://github.com/dungdong-aws/language-servers/commit/bee5cadeaf8840a8af08acfe8b58442aac7ad567))
* support http transport without authorization for MCP ([97e806c](https://github.com/dungdong-aws/language-servers/commit/97e806ce7ea5e5be1fd60c4a4d9a54cf76c8f8cb))
* use dynamic token limits from listAvailableModels API ([#2539](https://github.com/dungdong-aws/language-servers/issues/2539)) ([f87ac9f](https://github.com/dungdong-aws/language-servers/commit/f87ac9fce32d235649f81957b71d424264aae9c8))


### Bug Fixes

* add postMessage origin check to prevent cross-origin XSS ([#2732](https://github.com/dungdong-aws/language-servers/issues/2732)) ([0dabdea](https://github.com/dungdong-aws/language-servers/commit/0dabdeab4b046a7c52f161afb37482f9ca0a210e))
* allow empty/null origin in postMessage check for Eclipse SWT browser ([#2740](https://github.com/dungdong-aws/language-servers/issues/2740)) ([200455f](https://github.com/dungdong-aws/language-servers/commit/200455f801df9d97cff39973ff838fad9c8d1a87))
* amazon q chat history restoration to display rich ui elements and persisting model/agentic toggle preferences. ([#2610](https://github.com/dungdong-aws/language-servers/issues/2610)) ([75135dd](https://github.com/dungdong-aws/language-servers/commit/75135ddf2342a355a1fcba463dd6a42d040b75fa))
* **amazonq:** bumping up the language server runtime version ([#2621](https://github.com/dungdong-aws/language-servers/issues/2621)) ([33c9eba](https://github.com/dungdong-aws/language-servers/commit/33c9eba1fcc5ab7da5c520842c239e22b2237e4c))
* **amazonq:** disable typewriter animation ([#2160](https://github.com/dungdong-aws/language-servers/issues/2160)) ([db45d01](https://github.com/dungdong-aws/language-servers/commit/db45d01adba10e8a04d868e1062f899df4f5b7e4))
* **amazonq:** distinguish consent-denied MCP servers ([d51b874](https://github.com/dungdong-aws/language-servers/commit/d51b87433c4452240fe92647cd996cd4e3da4dfe))
* **amazonq:** Fix mock fs clean; Node version upgrade ([#2324](https://github.com/dungdong-aws/language-servers/issues/2324)) ([1d9afd4](https://github.com/dungdong-aws/language-servers/commit/1d9afd410e19624223e300ca06ea7d08a112cc82))
* **amazonq:** fix the issue that invalid image notification always show ([#2007](https://github.com/dungdong-aws/language-servers/issues/2007)) ([ceed762](https://github.com/dungdong-aws/language-servers/commit/ceed762ace5f94cb0e0a7978eb6c4894bc11ce42))
* **amazonq:** fix to add disable/enable feature back to mcp servers ([#2052](https://github.com/dungdong-aws/language-servers/issues/2052)) ([c03e017](https://github.com/dungdong-aws/language-servers/commit/c03e017b9ccbbbb9c80a3c3afd5da38a50bd6cff))
* **amazonq:** improve cross theme support ([#2036](https://github.com/dungdong-aws/language-servers/issues/2036)) ([002a255](https://github.com/dungdong-aws/language-servers/commit/002a255c28ea07ca6623dbd074101cbc6082ceb8))
* **amazonq:** improve welcome screen and enable tips ([#2035](https://github.com/dungdong-aws/language-servers/issues/2035)) ([ac00b94](https://github.com/dungdong-aws/language-servers/commit/ac00b94df45c2bba0666423c937757fad4db95cc))
* **amazonq:** mcp tool panel blocks amazon q chat interface when using right-click context menu ([#2442](https://github.com/dungdong-aws/language-servers/issues/2442)) ([11900ca](https://github.com/dungdong-aws/language-servers/commit/11900ca371adee2611698427dbec7c9323ef8e01))
* **amazonq:** prevent file link click from crashing language server ([#2718](https://github.com/dungdong-aws/language-servers/issues/2718)) ([#2730](https://github.com/dungdong-aws/language-servers/issues/2730)) ([51e1849](https://github.com/dungdong-aws/language-servers/commit/51e184948387714bccd5b9c5e50e07d47d771fb1))
* **amazonq:** refactor the welcome screen to make it look better ([#2027](https://github.com/dungdong-aws/language-servers/issues/2027)) ([1f7c608](https://github.com/dungdong-aws/language-servers/commit/1f7c608ba2f89c8b0675e62451e27d2dc547613c))
* **amazonq:** revert commit f17b631d9e06371a11ef8e9cb1413762fb51a143 ([#1965](https://github.com/dungdong-aws/language-servers/issues/1965)) ([8c2cab6](https://github.com/dungdong-aws/language-servers/commit/8c2cab6995922c96030b5bbdf3cbbdef7eadd7c2))
* **chat-client:** increase timeout for flaky sendGenericCommand test ([#2746](https://github.com/dungdong-aws/language-servers/issues/2746)) ([d7d1927](https://github.com/dungdong-aws/language-servers/commit/d7d1927f405571334b58f48bef57a14eb0891f2a))
* cve and bump language server runtime version to 0.3.10 ([#2544](https://github.com/dungdong-aws/language-servers/issues/2544)) ([d06e09f](https://github.com/dungdong-aws/language-servers/commit/d06e09f1c7c2ce017d0a5b4394cc8d17454e2862))
* enable test flag for amazon q ui testing ([#2046](https://github.com/dungdong-aws/language-servers/issues/2046)) ([f18ea96](https://github.com/dungdong-aws/language-servers/commit/f18ea96c1e5cd9b93974a047d7f2bb1aba0d9436))
* fix for button text and remove profilearn caching ([#2137](https://github.com/dungdong-aws/language-servers/issues/2137)) ([2a4171a](https://github.com/dungdong-aws/language-servers/commit/2a4171a74c15c23c23c481060496162bcc9e6284))
* fix for mcp servers refresh ([#2550](https://github.com/dungdong-aws/language-servers/issues/2550)) ([cd75394](https://github.com/dungdong-aws/language-servers/commit/cd753948c3b3b9b07b626fc41391bd91b55a0d39))
* make code block scrollable when sending to prompt ([#2587](https://github.com/dungdong-aws/language-servers/issues/2587)) ([a837cc9](https://github.com/dungdong-aws/language-servers/commit/a837cc90aa5d37e388a89090e940cc0e7a4a2674))
* migration from /agents ux ([#2248](https://github.com/dungdong-aws/language-servers/issues/2248)) ([debeb41](https://github.com/dungdong-aws/language-servers/commit/debeb414fd0d4d873af2f36cde0ebbeab16d16a4))
* network connection error caused by server runtime dependency changes on windows machine ([#2568](https://github.com/dungdong-aws/language-servers/issues/2568)) ([5d38b12](https://github.com/dungdong-aws/language-servers/commit/5d38b1297a384e5c30d88b05bce075afbaa1a2fa))
* optimize memory bank token usage and add new tab support ([#2366](https://github.com/dungdong-aws/language-servers/issues/2366)) ([3057d56](https://github.com/dungdong-aws/language-servers/commit/3057d56e4a3047d1715d6e3560e9f934d1de469c))
* repoint CODEOWNERS and package repository URLs to the new org ([#2838](https://github.com/dungdong-aws/language-servers/issues/2838)) ([43e44dc](https://github.com/dungdong-aws/language-servers/commit/43e44dc5af94703f51456cd8a913f0d61af7570e))
* update @aws/mynah-ui to 4.39.1 for XSS security fixes ([#2653](https://github.com/dungdong-aws/language-servers/issues/2653)) ([db4283f](https://github.com/dungdong-aws/language-servers/commit/db4283f57f65cc9d1b13e7e0c22f4bedf680c873))
* Use file context override in the inline completion params for Jupyter Notebook ([#2114](https://github.com/dungdong-aws/language-servers/issues/2114)) ([91c8398](https://github.com/dungdong-aws/language-servers/commit/91c839857f8aa4d79098189f9fb620b361c51289))
* use new language server runtime ([#2023](https://github.com/dungdong-aws/language-servers/issues/2023)) ([83ea1e4](https://github.com/dungdong-aws/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))


### Performance Improvements

* **amazonq:** context command performance ([#2682](https://github.com/dungdong-aws/language-servers/issues/2682)) ([f8dec9a](https://github.com/dungdong-aws/language-servers/commit/f8dec9a65b7e72e78e5e16cbbfd470b2d69e75b0))
</details>

<details><summary>lsp-antlr4: 0.1.27</summary>

## [0.1.27](https://github.com/dungdong-aws/language-servers/compare/lsp-antlr4/v0.1.26...lsp-antlr4/v0.1.27) (2026-10-08)


### Features

* add support for getSupplementalContext LSP API ([#2212](https://github.com/dungdong-aws/language-servers/issues/2212)) ([2ddcae7](https://github.com/dungdong-aws/language-servers/commit/2ddcae7a4fac6b89cbc9784911959743ea0a6d11))
* Adding ATX-FES apis support for transformation ([#2521](https://github.com/dungdong-aws/language-servers/issues/2521)) ([56ee489](https://github.com/dungdong-aws/language-servers/commit/56ee4891a2e19b259c129fd531f8b06f763c1b57))
* **amazonq:** adding MCP registry for governance for Amazon Q ([#2512](https://github.com/dungdong-aws/language-servers/issues/2512)) ([e8d4bf5](https://github.com/dungdong-aws/language-servers/commit/e8d4bf588e9b7bc13102b33ee03bd357f9698811))


### Bug Fixes

* **amazonq:** bumping up the language server runtime version ([#2621](https://github.com/dungdong-aws/language-servers/issues/2621)) ([33c9eba](https://github.com/dungdong-aws/language-servers/commit/33c9eba1fcc5ab7da5c520842c239e22b2237e4c))
* cve and bump language server runtime version to 0.3.10 ([#2544](https://github.com/dungdong-aws/language-servers/issues/2544)) ([d06e09f](https://github.com/dungdong-aws/language-servers/commit/d06e09f1c7c2ce017d0a5b4394cc8d17454e2862))
* network connection error caused by server runtime dependency changes on windows machine ([#2568](https://github.com/dungdong-aws/language-servers/issues/2568)) ([5d38b12](https://github.com/dungdong-aws/language-servers/commit/5d38b1297a384e5c30d88b05bce075afbaa1a2fa))
* repoint CODEOWNERS and package repository URLs to the new org ([#2838](https://github.com/dungdong-aws/language-servers/issues/2838)) ([43e44dc](https://github.com/dungdong-aws/language-servers/commit/43e44dc5af94703f51456cd8a913f0d61af7570e))
* Use file context override in the inline completion params for Jupyter Notebook ([#2114](https://github.com/dungdong-aws/language-servers/issues/2114)) ([91c8398](https://github.com/dungdong-aws/language-servers/commit/91c839857f8aa4d79098189f9fb620b361c51289))
* use new language server runtime ([#2023](https://github.com/dungdong-aws/language-servers/issues/2023)) ([83ea1e4](https://github.com/dungdong-aws/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @aws/lsp-core bumped from ^0.0.22 to ^0.0.23
</details>

<details><summary>lsp-codewhisperer: 0.0.130</summary>

## [0.0.130](https://github.com/dungdong-aws/language-servers/compare/lsp-codewhisperer/v0.0.129...lsp-codewhisperer/v0.0.130) (2026-10-08)


### Features

* ab test setup for new repomap strategy ([#2474](https://github.com/dungdong-aws/language-servers/issues/2474)) ([d28867f](https://github.com/dungdong-aws/language-servers/commit/d28867f2a5e06693b83d0cfd0286f017cdc5e5b3))
* add alphabetical sorting for MCP registry servers and URL validation ([#2555](https://github.com/dungdong-aws/language-servers/issues/2555)) ([d936673](https://github.com/dungdong-aws/language-servers/commit/d936673e570301b9abc4e587ef0d7cc92e1d470b))
* add basic OAuth client for remote MCP ([#2136](https://github.com/dungdong-aws/language-servers/issues/2136)) ([2fb896e](https://github.com/dungdong-aws/language-servers/commit/2fb896e094de0bc5a1b4881067e7dcceb3826015))
* add custom_transformation folder support to artifact.zip ([#2201](https://github.com/dungdong-aws/language-servers/issues/2201)) ([1222905](https://github.com/dungdong-aws/language-servers/commit/12229059421b773d3e99d28809fdff4abf242b26))
* add cwsprChatHasWorkspaceContext metric to amazonq_addMessage event ([#2665](https://github.com/dungdong-aws/language-servers/issues/2665)) ([#2668](https://github.com/dungdong-aws/language-servers/issues/2668)) ([7d71d0a](https://github.com/dungdong-aws/language-servers/commit/7d71d0a38d1e9adbb29210fff1c2b6b5e6d7d120))
* add MCP configuration review action ([ba53363](https://github.com/dungdong-aws/language-servers/commit/ba533638ff88afa5222021535261a7fd0181b6e0))
* add model description to dropdown ([#2374](https://github.com/dungdong-aws/language-servers/issues/2374)) ([ed8c6dd](https://github.com/dungdong-aws/language-servers/commit/ed8c6dda1312f728e9ee7472f7ca447196ad9d84))
* add support for getSupplementalContext LSP API ([#2212](https://github.com/dungdong-aws/language-servers/issues/2212)) ([2ddcae7](https://github.com/dungdong-aws/language-servers/commit/2ddcae7a4fac6b89cbc9784911959743ea0a6d11))
* add support for SMUS Q CodeEditor client to send MD IDE origin ([#2032](https://github.com/dungdong-aws/language-servers/issues/2032)) ([a8725b4](https://github.com/dungdong-aws/language-servers/commit/a8725b4b7dcb7718864620721aa3633151e8877b))
* Adding ATX-FES apis support for transformation ([#2521](https://github.com/dungdong-aws/language-servers/issues/2521)) ([56ee489](https://github.com/dungdong-aws/language-servers/commit/56ee4891a2e19b259c129fd531f8b06f763c1b57))
* adding extra context as a workspace config for inline chat ([#1942](https://github.com/dungdong-aws/language-servers/issues/1942)) ([1b402bb](https://github.com/dungdong-aws/language-servers/commit/1b402bb8b083c5505a4e13ecf7e097a43388d10b))
* adding inline chat telemetry ([#2001](https://github.com/dungdong-aws/language-servers/issues/2001)) ([8b1c9c7](https://github.com/dungdong-aws/language-servers/commit/8b1c9c7c3859cdfbbd0abb059066a5c6fe2ffaf2))
* adding new regions ([#2532](https://github.com/dungdong-aws/language-servers/issues/2532)) ([29f08a6](https://github.com/dungdong-aws/language-servers/commit/29f08a60e9919026c4e1a2b2502148d5c738554b))
* adding worklogs and chat pagination support ([#2752](https://github.com/dungdong-aws/language-servers/issues/2752)) ([8db1a33](https://github.com/dungdong-aws/language-servers/commit/8db1a33872895a23db7f5087b3b6a1caf1b81d16))
* **amazonq:** add client-side chat delivery metrics ([#2766](https://github.com/dungdong-aws/language-servers/issues/2766)) ([614bbf5](https://github.com/dungdong-aws/language-servers/commit/614bbf5e122f30c381d7b4dbf9def3679b4d49be))
* **amazonq:** add consent prompt for workspace-scoped MCP servers ([#2708](https://github.com/dungdong-aws/language-servers/issues/2708)) ([7b8595a](https://github.com/dungdong-aws/language-servers/commit/7b8595a4e638562f79d5f71dcf22b0c700490458))
* **amazonq:** add new model error handling code ([#1972](https://github.com/dungdong-aws/language-servers/issues/1972)) ([905f0fc](https://github.com/dungdong-aws/language-servers/commit/905f0fcbb274926d22bcf30600ad4bd419ac8ee4))
* **amazonq:** add user requirement to zipfile for code review tool ([#2430](https://github.com/dungdong-aws/language-servers/issues/2430)) ([2c33b38](https://github.com/dungdong-aws/language-servers/commit/2c33b384a0e406bcd8d3888a911d5482ce1f38ef))
* **amazonq:** added mcp admin level configuration with GetProfile ([#2000](https://github.com/dungdong-aws/language-servers/issues/2000)) ([fd6e9a8](https://github.com/dungdong-aws/language-servers/commit/fd6e9a829c6229c276de5340dffce52b426a864d))
* **amazonq:** adding classification based retry strategy for chat ([#2234](https://github.com/dungdong-aws/language-servers/issues/2234)) ([#2409](https://github.com/dungdong-aws/language-servers/issues/2409)) ([15d1b1f](https://github.com/dungdong-aws/language-servers/commit/15d1b1f5947a1b83dab65c9d3fef901ab8a033c9))
* **amazonq:** adding MCP registry for governance for Amazon Q ([#2512](https://github.com/dungdong-aws/language-servers/issues/2512)) ([e8d4bf5](https://github.com/dungdong-aws/language-servers/commit/e8d4bf588e9b7bc13102b33ee03bd357f9698811))
* **amazonq:** align mcp oauth client with mcp sdk auth patterns ([#2679](https://github.com/dungdong-aws/language-servers/issues/2679)) ([4ff5ab0](https://github.com/dungdong-aws/language-servers/commit/4ff5ab0e6ab4bf1659ffdb07a72bba4d6c358339))
* **amazonq:** default to diff-based scans ([#2195](https://github.com/dungdong-aws/language-servers/issues/2195)) ([da4c3db](https://github.com/dungdong-aws/language-servers/commit/da4c3db5329bd50cfe249bf8c1d59afa9bcb0157))
* **amazonq:** emit metric for each issue ([#2179](https://github.com/dungdong-aws/language-servers/issues/2179)) ([5a3f481](https://github.com/dungdong-aws/language-servers/commit/5a3f481ebe8c6033e3833abcd81799d26c2aa03e))
* **amazonq:** enable compaction, minor UI changes ([#1979](https://github.com/dungdong-aws/language-servers/issues/1979)) ([2b56ca8](https://github.com/dungdong-aws/language-servers/commit/2b56ca87f442a06b554043fee86edd79f96c638d))
* **amazonq:** enable show logs feature ([#1947](https://github.com/dungdong-aws/language-servers/issues/1947)) ([86ea83d](https://github.com/dungdong-aws/language-servers/commit/86ea83dd53b447f6decccf16559b76f4989ea712))
* **amazonq:** enable sonnet 4 for fra region ([#2069](https://github.com/dungdong-aws/language-servers/issues/2069)) ([3a4b8df](https://github.com/dungdong-aws/language-servers/commit/3a4b8df981b2c3b0532360a11472169fffec7924))
* **amazonq:** enable two-way workspace sync for customer edits ([#2769](https://github.com/dungdong-aws/language-servers/issues/2769)) ([f066772](https://github.com/dungdong-aws/language-servers/commit/f066772903633db5d9f140c48ab607856adeadce))
* **amazonq:** enhance workspaceContext classpath generation ([#1955](https://github.com/dungdong-aws/language-servers/issues/1955)) ([f7ed20b](https://github.com/dungdong-aws/language-servers/commit/f7ed20bc4010996c508f6ea8ca87950e117e43c1))
* **amazonq:** env var change for JupyterLab conversation history on refresh support ([#2395](https://github.com/dungdong-aws/language-servers/issues/2395)) ([a908195](https://github.com/dungdong-aws/language-servers/commit/a9081954bcaf20b7d0fbe0af11e61b8f82c7e82f))
* **amazonq:** implement displayFindings tool ([#2029](https://github.com/dungdong-aws/language-servers/issues/2029)) ([da11663](https://github.com/dungdong-aws/language-servers/commit/da1166340f3d13e1d7fd83b260359661443230ea))
* **amazonq:** initialize Q services when credentials arrive ([#2840](https://github.com/dungdong-aws/language-servers/issues/2840)) ([4e0d3b0](https://github.com/dungdong-aws/language-servers/commit/4e0d3b0d69e0aa7a230f64a1b168a09bcfd4b7cd))
* **amazonq:** read tool ui revamp ([c65428b](https://github.com/dungdong-aws/language-servers/commit/c65428bab2cf5e47badf1e3a9453babcf881e60c))
* **amazonq:** read tool ui revamp ([#2113](https://github.com/dungdong-aws/language-servers/issues/2113)) ([#2121](https://github.com/dungdong-aws/language-servers/issues/2121)) ([93cf229](https://github.com/dungdong-aws/language-servers/commit/93cf229149ba60491f9f5763793db4a9f570b611))
* **amazonq:** redirect /review, rename CodeReview tool, emit metrics, modify prompts ([#1964](https://github.com/dungdong-aws/language-servers/issues/1964)) ([ad8e2db](https://github.com/dungdong-aws/language-servers/commit/ad8e2db77e34f369fef9af71cdda2d3522f555c6))
* **amazonq:** revert auto-approve ([#2002](https://github.com/dungdong-aws/language-servers/issues/2002)) ([c8181f7](https://github.com/dungdong-aws/language-servers/commit/c8181f7a1de224dfcc7a77cd0bfc905fa1018372))
* **amazonq:** semantic search tool integration ([#2283](https://github.com/dungdong-aws/language-servers/issues/2283)) ([8eb3c34](https://github.com/dungdong-aws/language-servers/commit/8eb3c340534f3c66fd9082a83b31e84a4d9348bb))
* **amazonq:** show kiro pricing information for Amazon Q builderId paid tier users ([#2556](https://github.com/dungdong-aws/language-servers/issues/2556)) ([5896298](https://github.com/dungdong-aws/language-servers/commit/58962981604d1d0d5363b23c0e52df119bcc824e))
* **amazonq:** support for wildcard permissions from agent config ([#2249](https://github.com/dungdong-aws/language-servers/issues/2249)) ([2f6e86b](https://github.com/dungdong-aws/language-servers/commit/2f6e86b0a676674744b962b0e335543c6c39e9e1))
* **amazonq:** support JupyterLab conversation history on refresh ([#2325](https://github.com/dungdong-aws/language-servers/issues/2325)) ([0980351](https://github.com/dungdong-aws/language-servers/commit/09803514d1ce31ca77a532161e071e1d037e3fb1))
* **amazonq:** surface Q Developer plugin access-blocked rejections to the client ([#2794](https://github.com/dungdong-aws/language-servers/issues/2794)) ([724f629](https://github.com/dungdong-aws/language-servers/commit/724f62909ef16e750f52f5ba8b570b42b8bf00c8))
* Auto fetch models from listAvailableModels API ([#2171](https://github.com/dungdong-aws/language-servers/issues/2171)) ([8600c52](https://github.com/dungdong-aws/language-servers/commit/8600c524877abb459e9338399352446c0dcff6f0))
* **chat-client:** add auto-approve (trust mode) for built-in tools ([#1949](https://github.com/dungdong-aws/language-servers/issues/1949)) ([f17b631](https://github.com/dungdong-aws/language-servers/commit/f17b631d9e06371a11ef8e9cb1413762fb51a143))
* **chat-client:** add shortcut for stop/reject/run commands ([#1932](https://github.com/dungdong-aws/language-servers/issues/1932)) ([087f338](https://github.com/dungdong-aws/language-servers/commit/087f3387ba736e92d014274e195f7ef76e377f1e))
* chatty-agent transformation flow ([927bd03](https://github.com/dungdong-aws/language-servers/commit/927bd03d1b7f72acbc7d9e1748759598251cd8ed))
* copy private package's nupkg file to artifacts folder ([#2613](https://github.com/dungdong-aws/language-servers/issues/2613)) ([99cb9a8](https://github.com/dungdong-aws/language-servers/commit/99cb9a8f87d750a496c13b0678cae82de101b99d))
* differentiate implicit and explicit reject for inline completion ([#2475](https://github.com/dungdong-aws/language-servers/issues/2475)) ([4b68eea](https://github.com/dungdong-aws/language-servers/commit/4b68eea03374db79b8ad728aa048b623de8efa91))
* disable pkce flow during plugin load ([#2153](https://github.com/dungdong-aws/language-servers/issues/2153)) ([71b3595](https://github.com/dungdong-aws/language-servers/commit/71b35952333e7581921644ce40fabbc1e6d3c02f))
* enable webforms to blazor transformation via validation bypass ([#1929](https://github.com/dungdong-aws/language-servers/issues/1929)) ([528f820](https://github.com/dungdong-aws/language-servers/commit/528f8206b101e8f0c785b7fc0aceb87d6ef3de7b))
* enhance profile fetching logs to diagnose developerProfiles errors ([#1969](https://github.com/dungdong-aws/language-servers/issues/1969)) ([eb688c2](https://github.com/dungdong-aws/language-servers/commit/eb688c272df1251cd5c14ada7894bcaf625b6453))
* feature to add iam inline suggestion support in codeWhispererservice ([#2223](https://github.com/dungdong-aws/language-servers/issues/2223)) ([8e19f19](https://github.com/dungdong-aws/language-servers/commit/8e19f19a71e63a1196f4cb67ded8360c8da8129e))
* improve code review tool reliability and error handling ([#2033](https://github.com/dungdong-aws/language-servers/issues/2033)) ([124244e](https://github.com/dungdong-aws/language-servers/commit/124244ee7d97adf71a52c4fde7ddb908dbc0bd08))
* **integ:** rewrite ATX integ tests for new chatty-agent handler ([#2751](https://github.com/dungdong-aws/language-servers/issues/2751)) ([2599bb3](https://github.com/dungdong-aws/language-servers/commit/2599bb3368bf64d2d9aaf4909b6d0c241969fa45))
* memory bank support ([#2314](https://github.com/dungdong-aws/language-servers/issues/2314)) ([0e215fc](https://github.com/dungdong-aws/language-servers/commit/0e215fc0e475b4c40a8237492371716982d4d532))
* model selection for code review tool ([#2196](https://github.com/dungdong-aws/language-servers/issues/2196)) ([34bc9bd](https://github.com/dungdong-aws/language-servers/commit/34bc9bd1d3433bbb1d903eb0f212b10709ea8412))
* nep auto trigger ([#2424](https://github.com/dungdong-aws/language-servers/issues/2424)) ([2292bd7](https://github.com/dungdong-aws/language-servers/commit/2292bd75fded0848208de9401d15d3399a9c297b))
* passing suggestionTypes and pluginVersion/lspVersion to STE ([#2180](https://github.com/dungdong-aws/language-servers/issues/2180)) ([66742ad](https://github.com/dungdong-aws/language-servers/commit/66742adfc44f33efbd8dd33b803000e08241e5ce))
* rejecting atx .ent v1 agent jobs ([#2761](https://github.com/dungdong-aws/language-servers/issues/2761)) ([7df75d0](https://github.com/dungdong-aws/language-servers/commit/7df75d094a1ca1dd354906e80d09a13bc2504e76))
* remove project type validation from LSP layer ([#2103](https://github.com/dungdong-aws/language-servers/issues/2103)) ([d397161](https://github.com/dungdong-aws/language-servers/commit/d397161cc3448c63016e27f5ac2a1917cdaae1cb))
* scope local build verification to the loaded beamed repo and add beam discovery/download ([#2798](https://github.com/dungdong-aws/language-servers/issues/2798)) ([49867d7](https://github.com/dungdong-aws/language-servers/commit/49867d7d2d3c93a5ac9472aaac33b0a26c23cf00))
* send pinned context button immediately with pending state  ([#2353](https://github.com/dungdong-aws/language-servers/issues/2353)) ([bee5cad](https://github.com/dungdong-aws/language-servers/commit/bee5cadeaf8840a8af08acfe8b58442aac7ad567))
* support http transport without authorization for MCP ([97e806c](https://github.com/dungdong-aws/language-servers/commit/97e806ce7ea5e5be1fd60c4a4d9a54cf76c8f8cb))
* support sending requests with the 'external_idp' type ([#2247](https://github.com/dungdong-aws/language-servers/issues/2247)) ([4d3b938](https://github.com/dungdong-aws/language-servers/commit/4d3b938b7e961def0db2a51fba57e8fe73ea0a01))
* update MCP manager and utilities ([#2158](https://github.com/dungdong-aws/language-servers/issues/2158)) ([b99df82](https://github.com/dungdong-aws/language-servers/commit/b99df82826d0ba1a1d52df578cb80674c90505b9))
* Update SMAI clients to return SM_AI_STUDIO_IDE origin ([#2558](https://github.com/dungdong-aws/language-servers/issues/2558)) ([dc1d216](https://github.com/dungdong-aws/language-servers/commit/dc1d21652d48c2ebeb6ddebc6b6ab351d688017c))
* use dynamic token limits from listAvailableModels API ([#2539](https://github.com/dungdong-aws/language-servers/issues/2539)) ([f87ac9f](https://github.com/dungdong-aws/language-servers/commit/f87ac9fce32d235649f81957b71d424264aae9c8))
* web search ([09c4769](https://github.com/dungdong-aws/language-servers/commit/09c47695c48df967e0a22e93290cc69f95b32ac3))


### Bug Fixes

* add bash command parsing for telemetry metrics ([#2039](https://github.com/dungdong-aws/language-servers/issues/2039)) ([01d8112](https://github.com/dungdong-aws/language-servers/commit/01d811225281a2e32f9cd6dab1b575aad8c0b4d6))
* add in-loop compaction ([#2387](https://github.com/dungdong-aws/language-servers/issues/2387)) ([35f0795](https://github.com/dungdong-aws/language-servers/commit/35f0795fa5d09f3610e6a29cb72d49f32cc5534e))
* add OAuth client support to MCP manager ([#2607](https://github.com/dungdong-aws/language-servers/issues/2607)) ([81c1e08](https://github.com/dungdong-aws/language-servers/commit/81c1e089750e90efb4ea302279a915b08eddc0ad))
* Add optional `x-amzn-qt-test-id` header to ATX Transform API requests for test traffic classification.   ([#2602](https://github.com/dungdong-aws/language-servers/issues/2602)) ([2321687](https://github.com/dungdong-aws/language-servers/commit/2321687b1b6ae7e5c4fdc9fcd15792cd54f138c9))
* add programming language to chatInteractWithMessageEvent ([#2605](https://github.com/dungdong-aws/language-servers/issues/2605)) ([af86c21](https://github.com/dungdong-aws/language-servers/commit/af86c218af8f904a806ca43c8695fcb6053e347c))
* add proxy support for ATX Transform using sdkInitializator ([#2619](https://github.com/dungdong-aws/language-servers/issues/2619)) ([83d3bc9](https://github.com/dungdong-aws/language-servers/commit/83d3bc9dd8f2d58dc44ca59a4daa6176b569024f))
* add venv in the common gitignore patterns ([#2445](https://github.com/dungdong-aws/language-servers/issues/2445)) ([d030288](https://github.com/dungdong-aws/language-servers/commit/d030288a2508356db337dfa34ee64c8be1deb8e9))
* adding acceptedCharacterCount to UserTriggerDecisionEvent ([#2014](https://github.com/dungdong-aws/language-servers/issues/2014)) ([3f94486](https://github.com/dungdong-aws/language-servers/commit/3f944865483a6913138335fe61eee70ae71d7c03))
* adding HITL handling for Missing Private Packages ([#2630](https://github.com/dungdong-aws/language-servers/issues/2630)) ([77b6e7d](https://github.com/dungdong-aws/language-servers/commit/77b6e7d0974eb5c1aaebab7b888c9d2f53cb85c2))
* adding streakTracker to track streakLength across Completions and Edits ([#2147](https://github.com/dungdong-aws/language-servers/issues/2147)) ([a6c64f2](https://github.com/dungdong-aws/language-servers/commit/a6c64f2995a17697e3d71d30a1f411f5cf0db279))
* addonly EDITS should be handled as COMPLETIONS ([#2133](https://github.com/dungdong-aws/language-servers/issues/2133)) ([4f5a9da](https://github.com/dungdong-aws/language-servers/commit/4f5a9dacf3bfd68aeb40920fb800adf001ed43d5))
* adjust bash command categories ([#2030](https://github.com/dungdong-aws/language-servers/issues/2030)) ([25ed99f](https://github.com/dungdong-aws/language-servers/commit/25ed99fcf0eeaa86b0a5e040e90d69becf625c71))
* adjust cross file context config ([#2011](https://github.com/dungdong-aws/language-servers/issues/2011)) ([f7ade37](https://github.com/dungdong-aws/language-servers/commit/f7ade3767e714d5178f24fd9cc90349c5f417979))
* amazon q chat history restoration to display rich ui elements and persisting model/agentic toggle preferences. ([#2610](https://github.com/dungdong-aws/language-servers/issues/2610)) ([75135dd](https://github.com/dungdong-aws/language-servers/commit/75135ddf2342a355a1fcba463dd6a42d040b75fa))
* amazon q ignores rules for other os, so adding fallback ([#2663](https://github.com/dungdong-aws/language-servers/issues/2663)) ([4be527a](https://github.com/dungdong-aws/language-servers/commit/4be527a69b4cecc801e23009a63c8d3301b84f2d))
* **amazonq:** add distinctive identifier for cloud trail ([#2059](https://github.com/dungdong-aws/language-servers/issues/2059)) ([18bbc2c](https://github.com/dungdong-aws/language-servers/commit/18bbc2c54f5cc72e2624020fc17214c448926b0e))
* **amazonq:** add fallback classpath generation ([#2077](https://github.com/dungdong-aws/language-servers/issues/2077)) ([3a6ef14](https://github.com/dungdong-aws/language-servers/commit/3a6ef14e78fa2e75b837bba6524751d65038f416))
* **amazonq:** add image context to chat history ([#1859](https://github.com/dungdong-aws/language-servers/issues/1859)) ([788920b](https://github.com/dungdong-aws/language-servers/commit/788920bdd2de0448fd335734b62ac80aba9cff82))
* **amazonq:** add IntelliSense autotriggerType ([#2199](https://github.com/dungdong-aws/language-servers/issues/2199)) ([013aa59](https://github.com/dungdong-aws/language-servers/commit/013aa5913c242451a91ed36b0dcf961a3f8ec697))
* **amazonq:** add server side control for WCS features ([#2128](https://github.com/dungdong-aws/language-servers/issues/2128)) ([5e4435d](https://github.com/dungdong-aws/language-servers/commit/5e4435dfaea7bf8c00e6a27b9bb0d40f699d4e01))
* **amazonq:** add variables for registry server refresh and re-init ([#2585](https://github.com/dungdong-aws/language-servers/issues/2585)) ([9c260f1](https://github.com/dungdong-aws/language-servers/commit/9c260f10041a6b6fee5b40fb80b2885142dbe64b))
* **amazonq:** adding failed state for pin context features ([#2573](https://github.com/dungdong-aws/language-servers/issues/2573)) ([981c6e1](https://github.com/dungdong-aws/language-servers/commit/981c6e1c733d3bb8d171bd9697f443fab7a50c20))
* **amazonq:** adding truncation logic to fileText for inline suggestions ([#2589](https://github.com/dungdong-aws/language-servers/issues/2589)) ([2c236ce](https://github.com/dungdong-aws/language-servers/commit/2c236ce085f7b347d077de58c4fa497a0fa18722))
* **amazonq:** align tilde path validation and add regression tests ([5d2080a](https://github.com/dungdong-aws/language-servers/commit/5d2080a8c037ad677fe940c9bc87c7cca8452854))
* **amazonq:** avoid workspace context server missing historical dependency events ([#1946](https://github.com/dungdong-aws/language-servers/issues/1946)) ([3362956](https://github.com/dungdong-aws/language-servers/commit/3362956ded75d77296fa98abb172bd87d66e5d5e))
* **amazonq:** bind MCP consent to workspace+config ([#2767](https://github.com/dungdong-aws/language-servers/issues/2767)) ([1c84ba6](https://github.com/dungdong-aws/language-servers/commit/1c84ba6c89a212bbea0f9d650bf54bddd8e5abfa))
* **amazonq:** bumping up the language server runtime version ([#2621](https://github.com/dungdong-aws/language-servers/issues/2621)) ([33c9eba](https://github.com/dungdong-aws/language-servers/commit/33c9eba1fcc5ab7da5c520842c239e22b2237e4c))
* **amazonq:** cover merged env and headers in MCP consent fingerprint ([#2851](https://github.com/dungdong-aws/language-servers/issues/2851)) ([#2853](https://github.com/dungdong-aws/language-servers/issues/2853)) ([529aed4](https://github.com/dungdong-aws/language-servers/commit/529aed43259503cf71b475fb3496de7bfab25f17))
* **amazonq:** dedupe openTabs supplemental contexts ([#2172](https://github.com/dungdong-aws/language-servers/issues/2172)) ([aa87ae2](https://github.com/dungdong-aws/language-servers/commit/aa87ae2bd95edc1f38bf90f56093c5bf5ff18c53))
* **amazonq:** deliver Q Developer access-blocked notifications to the client ([#2800](https://github.com/dungdong-aws/language-servers/issues/2800)) ([5e92430](https://github.com/dungdong-aws/language-servers/commit/5e924300c371f36df57994b56666e96b5b5b0c1d))
* **amazonq:** disable WCS feature by default ([#2604](https://github.com/dungdong-aws/language-servers/issues/2604)) ([990f727](https://github.com/dungdong-aws/language-servers/commit/990f7273d39925beba46035597a7d84983eff19f))
* **amazonq:** distinguish consent-denied MCP servers ([d51b874](https://github.com/dungdong-aws/language-servers/commit/d51b87433c4452240fe92647cd996cd4e3da4dfe))
* **amazonq:** don't let flare send discard for the still valid suggestion in JB ([#2145](https://github.com/dungdong-aws/language-servers/issues/2145)) ([0767e07](https://github.com/dungdong-aws/language-servers/commit/0767e074c91682a91d2fe7a6b2a7369c4dea280c))
* **amazonq:** emit failed status for amazonq_invokeLLM ([#2071](https://github.com/dungdong-aws/language-servers/issues/2071)) ([ee52a41](https://github.com/dungdong-aws/language-servers/commit/ee52a41bc869b275fff708d7955b59f43b93bbd4))
* **amazonq:** emit modelid per tab ([#2620](https://github.com/dungdong-aws/language-servers/issues/2620)) ([640179f](https://github.com/dungdong-aws/language-servers/commit/640179f021d68a8bef5ece710d1b928e2c17fed1))
* **amazonq:** escaping user input to mitigate xss issue ([#2360](https://github.com/dungdong-aws/language-servers/issues/2360)) ([45b86be](https://github.com/dungdong-aws/language-servers/commit/45b86bef1a93cf9ced6fbf0c222cf5410de04c81))
* **amazonq:** fix fallout of [#2051](https://github.com/dungdong-aws/language-servers/issues/2051) ([#2057](https://github.com/dungdong-aws/language-servers/issues/2057)) ([565066b](https://github.com/dungdong-aws/language-servers/commit/565066bb61adda60333c9646db958d4208bcc8af))
* **amazonq:** fix for delete mcp for mcp config, disable and create corresponding agent file ([#2298](https://github.com/dungdong-aws/language-servers/issues/2298)) ([8641860](https://github.com/dungdong-aws/language-servers/commit/8641860295c4e089d09154fa5411c305f2f4ecce))
* **amazonq:** fix for legacy mcp permission consistentcy and config update ([#2300](https://github.com/dungdong-aws/language-servers/issues/2300)) ([c8aa7bd](https://github.com/dungdong-aws/language-servers/commit/c8aa7bd3e9d39ed327972bbc950ad72e8e401581))
* **amazonq:** fix for mcp permissions read/write inconsistencies ([#2296](https://github.com/dungdong-aws/language-servers/issues/2296)) ([c7a9a8e](https://github.com/dungdong-aws/language-servers/commit/c7a9a8e1ba5c1a284d661e683dd46133860a1d3d))
* **amazonq:** fix for mcp server permissions ([#2026](https://github.com/dungdong-aws/language-servers/issues/2026)) ([89ae720](https://github.com/dungdong-aws/language-servers/commit/89ae720dc036a90338d192aca801a858e8fa19f8))
* **amazonq:** fix for mcp server permissions to prefer workspace agent config files ([#2038](https://github.com/dungdong-aws/language-servers/issues/2038)) ([d2ac614](https://github.com/dungdong-aws/language-servers/commit/d2ac614f0f16faa8bf689ac9c8bff09d64fc3a3b))
* **amazonq:** fix for mcp servers operations to edit server config only ([#2165](https://github.com/dungdong-aws/language-servers/issues/2165)) ([d28df09](https://github.com/dungdong-aws/language-servers/commit/d28df09ae41871430cd53064eac1f3050c95ea84))
* **amazonq:** fix for tool permissions in allowed paths per tool ([#2601](https://github.com/dungdong-aws/language-servers/issues/2601)) ([01ea0d7](https://github.com/dungdong-aws/language-servers/commit/01ea0d74404baae14462e5557f488b22085bb8d3))
* **amazonq:** fix improperly formed requests ([#2616](https://github.com/dungdong-aws/language-servers/issues/2616)) ([2739718](https://github.com/dungdong-aws/language-servers/commit/273971834e2a307fe79402bef329b53b8bb51a4e))
* **amazonq:** fix processing empty unsupported workspace file ([#2017](https://github.com/dungdong-aws/language-servers/issues/2017)) ([9e4d0af](https://github.com/dungdong-aws/language-servers/commit/9e4d0af244b5edba73771b6cb4290d922ef83c43))
* **amazonq:** fix regression of mcp config in agent config ([#2101](https://github.com/dungdong-aws/language-servers/issues/2101)) ([e4e8bbb](https://github.com/dungdong-aws/language-servers/commit/e4e8bbb89e4b597926582bead2b14ffc43f2a7f8))
* **amazonq:** fix to add disable/enable feature back to mcp servers ([#2052](https://github.com/dungdong-aws/language-servers/issues/2052)) ([c03e017](https://github.com/dungdong-aws/language-servers/commit/c03e017b9ccbbbb9c80a3c3afd5da38a50bd6cff))
* **amazonq:** fix to add filewatcher for mcp config files ([#2295](https://github.com/dungdong-aws/language-servers/issues/2295)) ([fcee77c](https://github.com/dungdong-aws/language-servers/commit/fcee77c1b06e69f9096d8e98a0cfcc42d7fddb01))
* **amazonq:** fix to add mcp server tool error handling and status for card ([#2176](https://github.com/dungdong-aws/language-servers/issues/2176)) ([23f5ec3](https://github.com/dungdong-aws/language-servers/commit/23f5ec343cb4e0de32926204dbcf99e51af829f9))
* **amazonq:** fix to add opt-out header to streaming client ([#2365](https://github.com/dungdong-aws/language-servers/issues/2365)) ([692e77b](https://github.com/dungdong-aws/language-servers/commit/692e77bc99770ac7d676928e95e3dc43bb91e7f0))
* **amazonq:** fix to correct the client for getProfile request ([#2211](https://github.com/dungdong-aws/language-servers/issues/2211)) ([8bde8c9](https://github.com/dungdong-aws/language-servers/commit/8bde8c97e1e3bcd67d9816a3385c50c7765c3b2f))
* **amazonq:** fix to emit event for same region profile switch ([#2320](https://github.com/dungdong-aws/language-servers/issues/2320)) ([aa1a482](https://github.com/dungdong-aws/language-servers/commit/aa1a4827871a1cfa9fcd76f7ba420107a5d44b01))
* **amazonq:** fix to normlize workspace paths in windows ([#2306](https://github.com/dungdong-aws/language-servers/issues/2306)) ([fab073c](https://github.com/dungdong-aws/language-servers/commit/fab073c855109b15005bfd880894471c35652ffc))
* **amazonq:** fix to update MCP servers list when last server is removed from agent config ([#2206](https://github.com/dungdong-aws/language-servers/issues/2206)) ([512502a](https://github.com/dungdong-aws/language-servers/commit/512502af947dcfed9288be2f67fc58affd4445fe))
* **amazonq:** forward the missing-packages HITL when a plan already exists ([#2886](https://github.com/dungdong-aws/language-servers/issues/2886)) ([e201207](https://github.com/dungdong-aws/language-servers/commit/e20120718966af5e4a37b1360d1a2b10effca0de))
* **amazonq:** handle case where multiple rules are provided with the same name ([#2118](https://github.com/dungdong-aws/language-servers/issues/2118)) ([0e23e2d](https://github.com/dungdong-aws/language-servers/commit/0e23e2d29b8cad14403d372b9bbb08ca8ffa7ac7))
* **amazonq:** handle IAM credentials expiration field to be aws sdk versions compatible and add refresh logic to codewhisperer IAM client ([#2349](https://github.com/dungdong-aws/language-servers/issues/2349)) ([5eb3768](https://github.com/dungdong-aws/language-servers/commit/5eb3768bf020d61d0ade767d62e13839048146e4))
* **amazonq:** handle large results ([#2497](https://github.com/dungdong-aws/language-servers/issues/2497)) ([b3efa7c](https://github.com/dungdong-aws/language-servers/commit/b3efa7cff0b23608dd0cca796c9c95a672c9321a))
* **amazonq:** improve MCP consent gate reliability and cleanup ([#2711](https://github.com/dungdong-aws/language-servers/issues/2711)) ([f5aa1a3](https://github.com/dungdong-aws/language-servers/commit/f5aa1a3b25aa38bfe8dd0e830b5839e1cea1d410))
* **amazonq:** improve messaging for code review ([#2303](https://github.com/dungdong-aws/language-servers/issues/2303)) ([60bc68d](https://github.com/dungdong-aws/language-servers/commit/60bc68d1d4d2ce8a0373be6ce7551e961fc2cdb8))
* **amazonq:** leverage lcs to find the chars added and removed ([#2092](https://github.com/dungdong-aws/language-servers/issues/2092)) ([40379a8](https://github.com/dungdong-aws/language-servers/commit/40379a887f8d42cc184239ca3175b4e673cc5286))
* **amazonq:** make display findings tool run more often ([#2067](https://github.com/dungdong-aws/language-servers/issues/2067)) ([479ccd0](https://github.com/dungdong-aws/language-servers/commit/479ccd0a1b8b7e98684275c66274d284599c5933))
* **amazonq:** mark truncated MCP consent previews ([6bf4bcd](https://github.com/dungdong-aws/language-servers/commit/6bf4bcd60af2a023b35dd7a9f11514339be8632d))
* **amazonq:** narrow tool-use   truncation detection and classify retries in telemetry ([#2847](https://github.com/dungdong-aws/language-servers/issues/2847)) ([1eb2f9f](https://github.com/dungdong-aws/language-servers/commit/1eb2f9f270c479ca457658e22f2ef0d06f6517ca))
* **amazonq:** persist mcp configs in agent json on start-up ([#2112](https://github.com/dungdong-aws/language-servers/issues/2112)) ([817cfe2](https://github.com/dungdong-aws/language-servers/commit/817cfe2656cb1deec6111c699c4ba46b4ba53e00))
* **amazonq:** preserve customer edits on checkpoint apply (DealerFx netTransform) ([#2765](https://github.com/dungdong-aws/language-servers/issues/2765)) ([e2118f3](https://github.com/dungdong-aws/language-servers/commit/e2118f383d1acb2952110275573d82ae16b69d59))
* **amazonq:** preserve existing MCP consent prompt behavior ([effa710](https://github.com/dungdong-aws/language-servers/commit/effa7109c1cac5859dcfe6fffa255943b0197075))
* **amazonq:** prevent base64 encoding error by passing undefined instead of empty object ([#2492](https://github.com/dungdong-aws/language-servers/issues/2492)) ([30e28b7](https://github.com/dungdong-aws/language-servers/commit/30e28b75499b1a55da904697fd446a30c6a87665))
* **amazonq:** prevent file link click from crashing language server ([#2718](https://github.com/dungdong-aws/language-servers/issues/2718)) ([#2730](https://github.com/dungdong-aws/language-servers/issues/2730)) ([51e1849](https://github.com/dungdong-aws/language-servers/commit/51e184948387714bccd5b9c5e50e07d47d771fb1))
* **amazonq:** prevent path traversal bypass in agentic chat workspace ([#2612](https://github.com/dungdong-aws/language-servers/issues/2612)) ([13159f8](https://github.com/dungdong-aws/language-servers/commit/13159f842e4c50aae03ace586c42085446a50986))
* **amazonq:** reduce excessive logging from amazon q token service manager causing performance issues [#6111](https://github.com/dungdong-aws/language-servers/issues/6111) ([#2578](https://github.com/dungdong-aws/language-servers/issues/2578)) ([8cce456](https://github.com/dungdong-aws/language-servers/commit/8cce4567729edea58ea9b20aeeaf7143bc494550))
* **amazonq:** reduce number of findings to 30 as a quick fix ([#2318](https://github.com/dungdong-aws/language-servers/issues/2318)) ([b31cf67](https://github.com/dungdong-aws/language-servers/commit/b31cf67ddc68a2ca2e0a4ebd9ee94d0545afc656))
* **amazonq:** removing a bracket from full review message ([#2317](https://github.com/dungdong-aws/language-servers/issues/2317)) ([6d321ac](https://github.com/dungdong-aws/language-servers/commit/6d321ac6f318c27b01f9f97eee45a62798a60cf5))
* **amazonq:** restore a mid-job migration mode from the settings artifact, not the job objective (V2381727290) ([#2887](https://github.com/dungdong-aws/language-servers/issues/2887)) ([b631e38](https://github.com/dungdong-aws/language-servers/commit/b631e382f3188a0f0ec426cac9a656fb07211cbb))
* **amazonq:** retry truncated tool-use streams instead of dropping them silently ([#2841](https://github.com/dungdong-aws/language-servers/issues/2841)) ([368a099](https://github.com/dungdong-aws/language-servers/commit/368a099cc9b5cc3cf7bb1f2298718824a1ab1118))
* **amazonq:** revert commit f17b631d9e06371a11ef8e9cb1413762fb51a143 ([#1965](https://github.com/dungdong-aws/language-servers/issues/1965)) ([8c2cab6](https://github.com/dungdong-aws/language-servers/commit/8c2cab6995922c96030b5bbdf3cbbdef7eadd7c2))
* **amazonq:** route inline chat through getChatResponse for correct API selection ([#2713](https://github.com/dungdong-aws/language-servers/issues/2713)) ([#2714](https://github.com/dungdong-aws/language-servers/issues/2714)) ([b6226e7](https://github.com/dungdong-aws/language-servers/commit/b6226e758d52d8db85c844cab82e6b604566e2ef))
* **amazonq:** sanitize MCP tool schemas for Ajv draft-07 compatibility ([#2638](https://github.com/dungdong-aws/language-servers/issues/2638)) ([69b275f](https://github.com/dungdong-aws/language-servers/commit/69b275f001b964d024ac88d4c5bef70b83bac0e7))
* **amazonq:** send full finding details to plugin, partial to agent ([#2356](https://github.com/dungdong-aws/language-servers/issues/2356)) ([961e6ca](https://github.com/dungdong-aws/language-servers/commit/961e6ca11b122481685f9f65b3da14c6a2497cc4))
* **amazonq:** serialize MCP server consent prompts ([bb2e883](https://github.com/dungdong-aws/language-servers/commit/bb2e883fc32aeeb44151b0fceef6e17bb038f81e))
* **amazonq:** skips continuous monitoring when WCS sees workspace as idle ([#2066](https://github.com/dungdong-aws/language-servers/issues/2066)) ([9cb959d](https://github.com/dungdong-aws/language-servers/commit/9cb959d4cc450d0907f8bf5265ba01d2aa68bcd0))
* **amazonq:** status message update for mcp tool permission accpetance ([#2178](https://github.com/dungdong-aws/language-servers/issues/2178)) ([4893344](https://github.com/dungdong-aws/language-servers/commit/489334466fa084774d6e4737569468d654dc6359))
* **amazonq:** stop continuous monitor when WCS sees ServiceQuotaExceeded ([#1957](https://github.com/dungdong-aws/language-servers/issues/1957)) ([81e19b9](https://github.com/dungdong-aws/language-servers/commit/81e19b97017edddf486ac92fa6a8dc5fb184e008))
* **amazonq:** stream large ATX artifact downloads to disk ([#2885](https://github.com/dungdong-aws/language-servers/issues/2885)) ([37d44ca](https://github.com/dungdong-aws/language-servers/commit/37d44ca3fbc391cf5ebf00aa1cfaa5df7a0e2d80))
* **amazonq:** support mcp config files for backwards compatbility ([#2292](https://github.com/dungdong-aws/language-servers/issues/2292)) ([41c99af](https://github.com/dungdong-aws/language-servers/commit/41c99af02b3f415e39898f11c3c21ac530f9c406))
* **amazonq:** update to the agent config format to bring parity with Q CLI ([#2202](https://github.com/dungdong-aws/language-servers/issues/2202)) ([698d06c](https://github.com/dungdong-aws/language-servers/commit/698d06c643897da6ca37a49e6544b150b72678a3))
* **amazonq:** wrong path in the logs for the function ([#1978](https://github.com/dungdong-aws/language-servers/issues/1978)) ([ed8b4f6](https://github.com/dungdong-aws/language-servers/commit/ed8b4f6755accb624e7dc8c645ecd5cd9370a0f2))
* ATX Transform Fix Retrieve Job Erroring on Profile changes ([#2538](https://github.com/dungdong-aws/language-servers/issues/2538)) ([870d540](https://github.com/dungdong-aws/language-servers/commit/870d5400dd5eb77f32e5592089525dacc001cb81))
* auto trigger should only respect previous decisions in the past 2mins ([#2189](https://github.com/dungdong-aws/language-servers/issues/2189)) ([852b21b](https://github.com/dungdong-aws/language-servers/commit/852b21b66f793102c52e35c2baec07a772e5134a))
* AWS Transform unit-test generation choice + status-only UT substeps ([#2857](https://github.com/dungdong-aws/language-servers/issues/2857)) ([2a478f7](https://github.com/dungdong-aws/language-servers/commit/2a478f7182a7d91fb5d0b2b559d3b826494fc149))
* beam - flat-named transformed zips + lightweight discovery + IsLbvPending ([#2849](https://github.com/dungdong-aws/language-servers/issues/2849)) ([863c5bf](https://github.com/dungdong-aws/language-servers/commit/863c5bf00a6c30ec7658056a155f1ca1005127e6))
* bearer client will not pick up telemetry optout and its always optout ([#2484](https://github.com/dungdong-aws/language-servers/issues/2484)) ([ec6771f](https://github.com/dungdong-aws/language-servers/commit/ec6771fc5dc162f9c65df4e979dcfc3ae4838f06))
* cache subscription status to prevent excessive CreateSubscriptionToken API calls ([#2680](https://github.com/dungdong-aws/language-servers/issues/2680)) ([d26edb7](https://github.com/dungdong-aws/language-servers/commit/d26edb7dfd321122515373e0d08b757f6e367561))
* canonicalize paths through filesystem in requiresPathAcceptance ([#2742](https://github.com/dungdong-aws/language-servers/issues/2742)) ([6c279b0](https://github.com/dungdong-aws/language-servers/commit/6c279b083cc192aa5df1f38c2c185576fd5234f5))
* canonicalize symlinks (including dangling links) in workspace boundary check ([#2787](https://github.com/dungdong-aws/language-servers/issues/2787)) ([b15d04e](https://github.com/dungdong-aws/language-servers/commit/b15d04e05d7248864c72f4209c4a19baee9b7dda))
* classifier last token sometimes fail to capture the right values ([#2434](https://github.com/dungdong-aws/language-servers/issues/2434)) ([7420d59](https://github.com/dungdong-aws/language-servers/commit/7420d591a0fcf5da834f0165696aa50b99fd4d3a))
* compact UI is not updated correctly when multiple nudges are displayed ([#2192](https://github.com/dungdong-aws/language-servers/issues/2192)) ([ef7d793](https://github.com/dungdong-aws/language-servers/commit/ef7d7931954f5083e4a5c358e67c6dc652fa1a40))
* confirm reads and writes of files that carry more than one name ([5626b4a](https://github.com/dungdong-aws/language-servers/commit/5626b4aa43b515b39db41ede4215077d520e77c1))
* correct the implementation of gathering open tabs in cross file context ([#2040](https://github.com/dungdong-aws/language-servers/issues/2040)) ([b7b7a2b](https://github.com/dungdong-aws/language-servers/commit/b7b7a2bd2020f50069ce89f6505cc2a36b1f3fa7))
* correct URI mapping in onDidRenameFiles handler ([#2688](https://github.com/dungdong-aws/language-servers/issues/2688)) ([e2e0b2c](https://github.com/dungdong-aws/language-servers/commit/e2e0b2cd56dbe48f462064d0d0a5cc8397975be7))
* creating a new sesion for Edits trigger with next token ([#2094](https://github.com/dungdong-aws/language-servers/issues/2094)) ([1da8730](https://github.com/dungdong-aws/language-servers/commit/1da8730b6ed6ad53b6561368bf722e56d59596a4))
* cve and bump language server runtime version to 0.3.10 ([#2544](https://github.com/dungdong-aws/language-servers/issues/2544)) ([d06e09f](https://github.com/dungdong-aws/language-servers/commit/d06e09f1c7c2ce017d0a5b4394cc8d17454e2862))
* deduplicate rules in multi workspace mode ([#2660](https://github.com/dungdong-aws/language-servers/issues/2660)) ([c8022fe](https://github.com/dungdong-aws/language-servers/commit/c8022feb7637c64f71330856ecb3cb96096dccb7))
* deprecate [@workspace](https://github.com/workspace) vector search + fix [@folder](https://github.com/folder) files not appearing in context ([#2698](https://github.com/dungdong-aws/language-servers/issues/2698)) ([ae7d3fc](https://github.com/dungdong-aws/language-servers/commit/ae7d3fcd26f57d6cc5d3d26dd5ec79983c4103df))
* emit acceptedLineCount metric and AgenticCodeAccepted interaction type ([#2167](https://github.com/dungdong-aws/language-servers/issues/2167)) ([c53f672](https://github.com/dungdong-aws/language-servers/commit/c53f672b6173ebda530917ccb4e0c2f26f5c8f79))
* emit error code on failed user messages ([#2322](https://github.com/dungdong-aws/language-servers/issues/2322)) ([a949ac0](https://github.com/dungdong-aws/language-servers/commit/a949ac0a9d7a4dbce5fb7c8480952cee0a674b55))
* emit errorMessage in addMessage ([#2197](https://github.com/dungdong-aws/language-servers/issues/2197)) ([58f2064](https://github.com/dungdong-aws/language-servers/commit/58f20649d345f159080006120e23cde559826df1))
* emit metric for tool error ([#1954](https://github.com/dungdong-aws/language-servers/issues/1954)) ([c3bbcea](https://github.com/dungdong-aws/language-servers/commit/c3bbceabcea3d7aea2e414abc632c3a744b0e02b))
* empty userTriggerDecision not being sent for NEP code path ([#2140](https://github.com/dungdong-aws/language-servers/issues/2140)) ([b8e5268](https://github.com/dungdong-aws/language-servers/commit/b8e52682ac2b2337e1d0a32759e8beccde889cee))
* enable repomap for all users ([#1967](https://github.com/dungdong-aws/language-servers/issues/1967)) ([6954085](https://github.com/dungdong-aws/language-servers/commit/69540851e54b65729b2affbe3ae7d98629bdb5f4))
* enforce CodeReview artifact workspace boundaries ([#2898](https://github.com/dungdong-aws/language-servers/issues/2898)) ([0007ee9](https://github.com/dungdong-aws/language-servers/commit/0007ee91a6defc224e0dd38123fbdd70bca26389))
* enforce MAX_TOOL_NAME_LENGTH check in createNamespacedToolName ([#2447](https://github.com/dungdong-aws/language-servers/issues/2447)) ([6663f87](https://github.com/dungdong-aws/language-servers/commit/6663f87e68c9645af6ffb004eaf725e5102fe5ab))
* extend SageMaker env detection to support both SMUS and SMAI ([#2598](https://github.com/dungdong-aws/language-servers/issues/2598)) ([12fbc4c](https://github.com/dungdong-aws/language-servers/commit/12fbc4c4f355ab0a8500de697a5fd7bd7950f661))
* filetype filtering and consolidation of other filtering logic during artifact generation ([#2233](https://github.com/dungdong-aws/language-servers/issues/2233)) ([a3e66f2](https://github.com/dungdong-aws/language-servers/commit/a3e66f2d414060adde90cc7312f07c6359ae3246))
* fix calculation for num-lines contributed by the LLM ([#2191](https://github.com/dungdong-aws/language-servers/issues/2191)) ([fd71e6c](https://github.com/dungdong-aws/language-servers/commit/fd71e6cf3fc843242936564061061418edf83f56))
* fix for button text and remove profilearn caching ([#2137](https://github.com/dungdong-aws/language-servers/issues/2137)) ([2a4171a](https://github.com/dungdong-aws/language-servers/commit/2a4171a74c15c23c23c481060496162bcc9e6284))
* fix for mcp delete to remove it from mcp config file ([#1956](https://github.com/dungdong-aws/language-servers/issues/1956)) ([ad71312](https://github.com/dungdong-aws/language-servers/commit/ad713122fcb9da90c17301f1312de13ba1d28d01))
* fix for mcp registry error handling ([#2561](https://github.com/dungdong-aws/language-servers/issues/2561)) ([f5f8b36](https://github.com/dungdong-aws/language-servers/commit/f5f8b36aa6a6b4ca6228ba3c1110d0532cda65bd))
* fix for mcp servers refresh ([#2550](https://github.com/dungdong-aws/language-servers/issues/2550)) ([cd75394](https://github.com/dungdong-aws/language-servers/commit/cd753948c3b3b9b07b626fc41391bd91b55a0d39))
* fix for mcp tool resgistration on smus ([#2524](https://github.com/dungdong-aws/language-servers/issues/2524)) ([8584723](https://github.com/dungdong-aws/language-servers/commit/8584723839447dda878474e17a3b21a315ffc759))
* fix for permission update for servers ([#2517](https://github.com/dungdong-aws/language-servers/issues/2517)) ([ef86b5c](https://github.com/dungdong-aws/language-servers/commit/ef86b5ce474993265f9ffa8cb184e96eb1d0daee))
* fix null value for codewhisperer percentage ([#2523](https://github.com/dungdong-aws/language-servers/issues/2523)) ([e898ab4](https://github.com/dungdong-aws/language-servers/commit/e898ab4a84e7976f6478a434b5ba7694e6ddcb38))
* fix pkce windows url path ([#2173](https://github.com/dungdong-aws/language-servers/issues/2173)) ([d7b184c](https://github.com/dungdong-aws/language-servers/commit/d7b184cb12979877722fa0293e9aebec91ff2c18))
* fix to add disk caching for mcp admin state ([#2139](https://github.com/dungdong-aws/language-servers/issues/2139)) ([f947e1a](https://github.com/dungdong-aws/language-servers/commit/f947e1a9da4431d6089b22825f992010c30a470b))
* fix to remove config from agent file for failed initialization ([#1948](https://github.com/dungdong-aws/language-servers/issues/1948)) ([45645c2](https://github.com/dungdong-aws/language-servers/commit/45645c2cd7c241c54ddfebced6f377f38e077957))
* fix to turn on and off MCP servers incase of error based on last state ([#2143](https://github.com/dungdong-aws/language-servers/issues/2143)) ([04588df](https://github.com/dungdong-aws/language-servers/commit/04588dfc33f0d85dbd488814a474b5e354398df0))
* generateCompletion request is missing editorState metadata ([#2574](https://github.com/dungdong-aws/language-servers/issues/2574)) ([aec6a90](https://github.com/dungdong-aws/language-servers/commit/aec6a90893e1f4837b15d70972444bf751d460d0))
* guard workspaceFolderManager null reference in updateConfiguration ([#2695](https://github.com/dungdong-aws/language-servers/issues/2695)) ([dcd7829](https://github.com/dungdong-aws/language-servers/commit/dcd78298766d09902ba51cb12547780f518d48a9))
* harden tool path handling ([63da91a](https://github.com/dungdong-aws/language-servers/commit/63da91a3418a03850d94fcc539c2a36e623068a6))
* harden tool path handling ([63da91a](https://github.com/dungdong-aws/language-servers/commit/63da91a3418a03850d94fcc539c2a36e623068a6))
* improve history management ([#2312](https://github.com/dungdong-aws/language-servers/issues/2312)) ([#2357](https://github.com/dungdong-aws/language-servers/issues/2357)) ([e7aa2a6](https://github.com/dungdong-aws/language-servers/commit/e7aa2a6545bcb1a8238abfde69a05432be0b6615))
* include conversationId in generateAssistantResponse API request ([#2595](https://github.com/dungdong-aws/language-servers/issues/2595)) ([a8ac33e](https://github.com/dungdong-aws/language-servers/commit/a8ac33ea4e26f2ca898e5d4ed2625e11f53922aa))
* incorrect error reference in previous fix ([9fddc8e](https://github.com/dungdong-aws/language-servers/commit/9fddc8e11f583dbf089f93979e1602d8c8795a16))
* inline latency telemetry should account for preprocess time ([#2323](https://github.com/dungdong-aws/language-servers/issues/2323)) ([68c6d14](https://github.com/dungdong-aws/language-servers/commit/68c6d1465a3325612052740496cc1e6e50f56b9a))
* inline UTD empty cases dont differentiate Edit and Completion ([#2287](https://github.com/dungdong-aws/language-servers/issues/2287)) ([84e2c8c](https://github.com/dungdong-aws/language-servers/commit/84e2c8c12f5d828192a302fa11483063d33b059c))
* inline UTD telemetry empty cases dont differentiate Edit and Completion ([#2288](https://github.com/dungdong-aws/language-servers/issues/2288)) ([d207b6e](https://github.com/dungdong-aws/language-servers/commit/d207b6e9dfded650c6f65c675ee45c52f8222571))
* inline, nep telemetry not sent and throw sessionId not found ([#2419](https://github.com/dungdong-aws/language-servers/issues/2419)) ([c96106d](https://github.com/dungdong-aws/language-servers/commit/c96106d18c9e9d846765665ce2ee50304af4ff7f))
* let missing registry servers fail naturally during installation ([#2577](https://github.com/dungdong-aws/language-servers/issues/2577)) ([ecde90a](https://github.com/dungdong-aws/language-servers/commit/ecde90a9cbb424d4ab1a30fa1f68f05f4b0a8285))
* McpManager not initialized error ([#2479](https://github.com/dungdong-aws/language-servers/issues/2479)) ([7e2707b](https://github.com/dungdong-aws/language-servers/commit/7e2707b8c2b4467aae1fe1c77bb419043e193ddc))
* move network commands out of ro category ([#1985](https://github.com/dungdong-aws/language-servers/issues/1985)) ([3cc9fd9](https://github.com/dungdong-aws/language-servers/commit/3cc9fd91ae2f78ee28e224d5390ba78509de3615))
* multiple fixes on auth flow edge cases ([#2155](https://github.com/dungdong-aws/language-servers/issues/2155)) ([472220a](https://github.com/dungdong-aws/language-servers/commit/472220a745cff4fe91a2cabae4ae059a164ceddd))
* **netTransform:** Beam to IDE  live beam node, JSON artifact cache, throttle cooldown, reaped-beam drop-off ([#2883](https://github.com/dungdong-aws/language-servers/issues/2883)) ([95344fd](https://github.com/dungdong-aws/language-servers/commit/95344fda9686ac6ac0c8360bb4dde04d3bebc822))
* network connection error caused by server runtime dependency changes on windows machine ([#2568](https://github.com/dungdong-aws/language-servers/issues/2568)) ([5d38b12](https://github.com/dungdong-aws/language-servers/commit/5d38b1297a384e5c30d88b05bce075afbaa1a2fa))
* optimize memory bank token usage and add new tab support ([#2366](https://github.com/dungdong-aws/language-servers/issues/2366)) ([3057d56](https://github.com/dungdong-aws/language-servers/commit/3057d56e4a3047d1715d6e3560e9f934d1de469c))
* outdated history when trimming happens, add missing metric for compaction ([#2047](https://github.com/dungdong-aws/language-servers/issues/2047)) ([8390f66](https://github.com/dungdong-aws/language-servers/commit/8390f6686c804dfbeff91018635df21e9dd89236))
* pass customUserAgent to CodeWhispererServiceToken in QCodeAnalysisServer ([#2772](https://github.com/dungdong-aws/language-servers/issues/2772)) ([2f6d1ae](https://github.com/dungdong-aws/language-servers/commit/2f6d1ae5f23acc41896eb76d65750bdf60ecb5a5))
* patch [#2133](https://github.com/dungdong-aws/language-servers/issues/2133) and handle more variants of FIM suggestions ([#2407](https://github.com/dungdong-aws/language-servers/issues/2407)) ([f3086d7](https://github.com/dungdong-aws/language-servers/commit/f3086d71808bd49336e0df9ba30f5be5fda837c3))
* patch [#2589](https://github.com/dungdong-aws/language-servers/issues/2589) and fix NEP invalidation error ([#2590](https://github.com/dungdong-aws/language-servers/issues/2590)) ([07960d0](https://github.com/dungdong-aws/language-servers/commit/07960d0fcd169bae0d632d05d953475fec98c05c))
* potential xss issue reported in `mynah-ui` ([#2209](https://github.com/dungdong-aws/language-servers/issues/2209)) ([cf585cd](https://github.com/dungdong-aws/language-servers/commit/cf585cd400dab6274f8220139ae94287c0d96824))
* preserve registry server config when updating permissions ([#2515](https://github.com/dungdong-aws/language-servers/issues/2515)) ([49ca3bb](https://github.com/dungdong-aws/language-servers/commit/49ca3bbb6dbf9eac4b281aa80cd5ff30b94b3a7e))
* prevent MCP server process duplicates with lightweight tracking ([#2562](https://github.com/dungdong-aws/language-servers/issues/2562)) ([4ba6eb2](https://github.com/dungdong-aws/language-servers/commit/4ba6eb27400fe352660128f406e837df34acc247))
* private package mapping during artifact generation ([#2348](https://github.com/dungdong-aws/language-servers/issues/2348)) ([d56bfa1](https://github.com/dungdong-aws/language-servers/commit/d56bfa191954fac8068e2bf390c2d0b88ef8b168))
* proper path handling for additional context ([#2129](https://github.com/dungdong-aws/language-servers/issues/2129)) ([971eaa5](https://github.com/dungdong-aws/language-servers/commit/971eaa505d948e9d2090c85f9b965f554ea7f2c8))
* put compaction feature behind a feature flag ([#1945](https://github.com/dungdong-aws/language-servers/issues/1945)) ([51f4161](https://github.com/dungdong-aws/language-servers/commit/51f4161571679408d6b11b61d70d8027097a6ef6))
* quick fix for repeated logging from squashed commit ([#2291](https://github.com/dungdong-aws/language-servers/issues/2291)) ([36f3eed](https://github.com/dungdong-aws/language-servers/commit/36f3eedd1cad3fca4fc48792ba40b6470f733bfa))
* reduce auto trigger frequency for VSC ([#2168](https://github.com/dungdong-aws/language-servers/issues/2168)) ([00e11ff](https://github.com/dungdong-aws/language-servers/commit/00e11ff48eafaa0baec48177fa4aa6d60048af2f))
* remove edit cache logic ([#2079](https://github.com/dungdong-aws/language-servers/issues/2079)) ([9bc5b9c](https://github.com/dungdong-aws/language-servers/commit/9bc5b9c1d77e5fee6f518f7f5016d3a0043a5a77))
* remove malicious characters from MCP tool description ([#1977](https://github.com/dungdong-aws/language-servers/issues/1977)) ([64d4e3e](https://github.com/dungdong-aws/language-servers/commit/64d4e3ebade706b01d256682cafe8d4ff8b85f41))
* remove malicious characters from prompt input ([#2009](https://github.com/dungdong-aws/language-servers/issues/2009)) ([bf8a1e6](https://github.com/dungdong-aws/language-servers/commit/bf8a1e6136801532132f2bf82def4ca5bf49c82f))
* remove s3 artifact upload and download timeout ([#2560](https://github.com/dungdong-aws/language-servers/issues/2560)) ([c0b3523](https://github.com/dungdong-aws/language-servers/commit/c0b35232c0946d4957ffca7bbd5b8cbf66b88b4e))
* repoint CODEOWNERS and package repository URLs to the new org ([#2838](https://github.com/dungdong-aws/language-servers/issues/2838)) ([43e44dc](https://github.com/dungdong-aws/language-servers/commit/43e44dc5af94703f51456cd8a913f0d61af7570e))
* require approval for in-place writes to multiply linked files ([41a1fd1](https://github.com/dungdong-aws/language-servers/commit/41a1fd182dfc73588e7e0ed29fd9c443512092dc))
* resolve broken error handling in setPaidTierMode ([#2500](https://github.com/dungdong-aws/language-servers/issues/2500)) ([8ccb067](https://github.com/dungdong-aws/language-servers/commit/8ccb06768c4a386b0a4699d8b2e299f0aad110b1))
* resolve filesystem tool paths symlink-aware before read/write/list ([ab7627c](https://github.com/dungdong-aws/language-servers/commit/ab7627c75cfd4af353b4c23a3e38c2b86273cb05))
* resolve process crash when managing BID subscription ([#2501](https://github.com/dungdong-aws/language-servers/issues/2501)) ([5d6590a](https://github.com/dungdong-aws/language-servers/commit/5d6590a1d8c7aeb80b75036eb0e1b3802afe5c08))
* rules created in default file is not working ([#2652](https://github.com/dungdong-aws/language-servers/issues/2652)) ([#2655](https://github.com/dungdong-aws/language-servers/issues/2655)) ([b380e97](https://github.com/dungdong-aws/language-servers/commit/b380e97051251a0ead0a7bc3314f8850f14073ac))
* sanitize request input ([#2025](https://github.com/dungdong-aws/language-servers/issues/2025)) ([7c0efd7](https://github.com/dungdong-aws/language-servers/commit/7c0efd73d5e9a0e3f42d143a10c16782f6e35db8))
* scope and forward stepId for the planning-branch LBV HITL ([#2835](https://github.com/dungdong-aws/language-servers/issues/2835)) ([9f8bb89](https://github.com/dungdong-aws/language-servers/commit/9f8bb8943c41edc105c460d4b2c60836183cdd2b))
* sessionManager misused because there are 2 types of manager now ([#2090](https://github.com/dungdong-aws/language-servers/issues/2090)) ([8db059a](https://github.com/dungdong-aws/language-servers/commit/8db059ab83d94fd7c3ba3eb265044add31c80aea))
* should keep reporting UTDE telemetry if there are still pending Edits suggestions ([#2051](https://github.com/dungdong-aws/language-servers/issues/2051)) ([78c67b1](https://github.com/dungdong-aws/language-servers/commit/78c67b1a29821f54006d160695e997870d17f3b5))
* should send classifier score after taking sigmoid ([#2188](https://github.com/dungdong-aws/language-servers/issues/2188)) ([f4e2e6e](https://github.com/dungdong-aws/language-servers/commit/f4e2e6e885e665834a5d7b7cbb5f4ba4ff9bbb65))
* show friendly error message for govcloud regions ([#2779](https://github.com/dungdong-aws/language-servers/issues/2779)) ([9acc756](https://github.com/dungdong-aws/language-servers/commit/9acc756298427e7ca99f19c0270fe0bff7a17673))
* skip image sanitization ([#2031](https://github.com/dungdong-aws/language-servers/issues/2031)) ([f02fc23](https://github.com/dungdong-aws/language-servers/commit/f02fc231136940bd644c426d2b222ae2cba779c4))
* sometimes Enter does not auto trigger ([#2005](https://github.com/dungdong-aws/language-servers/issues/2005)) ([c9af035](https://github.com/dungdong-aws/language-servers/commit/c9af0353a6c6f3b2ca4eead02f19e8ab5ddb8ef1))
* strenghen NEP trigger conditions ([#2438](https://github.com/dungdong-aws/language-servers/issues/2438)) ([82e2340](https://github.com/dungdong-aws/language-servers/commit/82e2340cf86a5eba20f8d18f1293c136c0022dd9))
* support stripped indexing folder in bundled LSP and also update indexing bundle to AWSVectorConsolasLocalWorkspaceIndexing `d6762f8b` ([#2629](https://github.com/dungdong-aws/language-servers/issues/2629)) ([a005b29](https://github.com/dungdong-aws/language-servers/commit/a005b29d66d88abacd41d55954110d92c7e7a616))
* surface backend interactive mode in getTransformInfo ([836b756](https://github.com/dungdong-aws/language-servers/commit/836b756ee2d8a553d9b26cf095e12979141e2367))
* surface lbv and checkpoint hitls regardless of job status ([#2755](https://github.com/dungdong-aws/language-servers/issues/2755)) ([0df9444](https://github.com/dungdong-aws/language-servers/commit/0df9444730116bc6edbf79ae2e1aa9de8f677e16))
* surface post-build checkpoint hitl after local build verification ([#2737](https://github.com/dungdong-aws/language-servers/issues/2737)) ([31e3528](https://github.com/dungdong-aws/language-servers/commit/31e35285256435706e679ec165d663bb6f6e308b))
* toBase64() encoder which only accepts string ([#2636](https://github.com/dungdong-aws/language-servers/issues/2636)) ([#2637](https://github.com/dungdong-aws/language-servers/issues/2637)) ([5e4fda8](https://github.com/dungdong-aws/language-servers/commit/5e4fda89499ac9266fa56e290c0805febffa7f81))
* tools always ask for permissions ([#2647](https://github.com/dungdong-aws/language-servers/issues/2647)) ([#2648](https://github.com/dungdong-aws/language-servers/issues/2648)) ([997793d](https://github.com/dungdong-aws/language-servers/commit/997793dd13b8d7685997b43ea06774ce2f609ea5))
* trim new line when emitting error message ([#2359](https://github.com/dungdong-aws/language-servers/issues/2359)) ([d8733a7](https://github.com/dungdong-aws/language-servers/commit/d8733a75487f74815302b838802eccbf3ffec55e))
* update client name to support Sagemaker AI origin for agentic chat ([#2093](https://github.com/dungdong-aws/language-servers/issues/2093)) ([a746fe8](https://github.com/dungdong-aws/language-servers/commit/a746fe845d5e09563b475f01ce44059dca9fd10f))
* update inputLimit calculation to use fixed 100K reserved characters ([#2557](https://github.com/dungdong-aws/language-servers/issues/2557)) ([ef04639](https://github.com/dungdong-aws/language-servers/commit/ef0463937898570e33b45d48800a9d33bc6adc3b))
* use fast glob streaming when collecting files ([#2003](https://github.com/dungdong-aws/language-servers/issues/2003)) ([f7c0a0b](https://github.com/dungdong-aws/language-servers/commit/f7c0a0b0ef9ce3ecd620acfef00e55745db3d71f))
* Use file context override in the inline completion params for Jupyter Notebook ([#2114](https://github.com/dungdong-aws/language-servers/issues/2114)) ([91c8398](https://github.com/dungdong-aws/language-servers/commit/91c839857f8aa4d79098189f9fb620b361c51289))
* use new language server runtime ([#2023](https://github.com/dungdong-aws/language-servers/issues/2023)) ([83ea1e4](https://github.com/dungdong-aws/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))
* userTriggerDecision STE suggestionType validation error ([#2313](https://github.com/dungdong-aws/language-servers/issues/2313)) ([8f30ac0](https://github.com/dungdong-aws/language-servers/commit/8f30ac0ec5f4f7b7c343f5e889aec64a282897ea))
* validate MCP OAuth token endpoints ([57827d9](https://github.com/dungdong-aws/language-servers/commit/57827d915b929425961e8645b8fb913dace9c212))


### Performance Improvements

* **amazonq:** context command performance ([#2682](https://github.com/dungdong-aws/language-servers/issues/2682)) ([f8dec9a](https://github.com/dungdong-aws/language-servers/commit/f8dec9a65b7e72e78e5e16cbbfd470b2d69e75b0))
* only process edit requests 1 at a time ([#2187](https://github.com/dungdong-aws/language-servers/issues/2187)) ([b497540](https://github.com/dungdong-aws/language-servers/commit/b4975409a3ed518550290b72ac310895a293be4b))
* remove edit completion retry mechanism on document change ([#2124](https://github.com/dungdong-aws/language-servers/issues/2124)) ([963b6e9](https://github.com/dungdong-aws/language-servers/commit/963b6e9b7887da23a85a826c55a6ed95ff36d956))


### Reverts

* editor state is casuing validation error ([fb76a79](https://github.com/dungdong-aws/language-servers/commit/fb76a79aa7db149abbdb6e455d8eb5fcf340e81f))
* fix for tool permissions in allowed paths per tool ([#2601](https://github.com/dungdong-aws/language-servers/issues/2601)) ([#2615](https://github.com/dungdong-aws/language-servers/issues/2615)) ([7b62151](https://github.com/dungdong-aws/language-servers/commit/7b62151acd4908073fe8b369f1a3e9ca1ba0be9e))
* fix to add opt-out header to streaming client ([#2365](https://github.com/dungdong-aws/language-servers/issues/2365)) ([#2370](https://github.com/dungdong-aws/language-servers/issues/2370)) ([b29478f](https://github.com/dungdong-aws/language-servers/commit/b29478fa1ecc58e331ff330ff79f46b0d8c38d9e))
* inline UTD telemetry empty cases dont differentiate Edit and Completion ([#2288](https://github.com/dungdong-aws/language-servers/issues/2288)) ([#2297](https://github.com/dungdong-aws/language-servers/issues/2297)) ([eb081e6](https://github.com/dungdong-aws/language-servers/commit/eb081e6bc6bef4182ab89e295bff97c4e828096b))
* PR 2172 dedupe openTabs supplemental contexts ([#2194](https://github.com/dungdong-aws/language-servers/issues/2194)) ([94723d4](https://github.com/dungdong-aws/language-servers/commit/94723d46073a1ea8211e7ae8f9dfce3fcb809604))
* reduce auto trigger frequency for VSC ([#2168](https://github.com/dungdong-aws/language-servers/issues/2168))" ([#2177](https://github.com/dungdong-aws/language-servers/issues/2177)) ([08720c6](https://github.com/dungdong-aws/language-servers/commit/08720c6c3fa83f9b3b6775d4ae4d848ce145b94b))
* revert for all commits for emergency deployment ([#1966](https://github.com/dungdong-aws/language-servers/issues/1966)) ([519f75d](https://github.com/dungdong-aws/language-servers/commit/519f75d22466b72702793b4f1d1ed846c02bbd14))
* revert for mid-loop compaction ([3f48b12](https://github.com/dungdong-aws/language-servers/commit/3f48b12bce4faba474404f7c74a9520c379552fe))
* undo revert of fix for tool permissions in allowed paths per tool ([#2601](https://github.com/dungdong-aws/language-servers/issues/2601)) ([#2683](https://github.com/dungdong-aws/language-servers/issues/2683)) ([#2684](https://github.com/dungdong-aws/language-servers/issues/2684)) ([8a615fa](https://github.com/dungdong-aws/language-servers/commit/8a615faf27c6b519045263f5bddf0bfe98f609e0))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @aws/lsp-core bumped from ^0.0.22 to ^0.0.23
</details>

<details><summary>lsp-core: 0.0.23</summary>

## [0.0.23](https://github.com/dungdong-aws/language-servers/compare/lsp-core/v0.0.22...lsp-core/v0.0.23) (2026-10-08)


### Features

* add support for getSupplementalContext LSP API ([#2212](https://github.com/dungdong-aws/language-servers/issues/2212)) ([2ddcae7](https://github.com/dungdong-aws/language-servers/commit/2ddcae7a4fac6b89cbc9784911959743ea0a6d11))
* Adding ATX-FES apis support for transformation ([#2521](https://github.com/dungdong-aws/language-servers/issues/2521)) ([56ee489](https://github.com/dungdong-aws/language-servers/commit/56ee4891a2e19b259c129fd531f8b06f763c1b57))
* **amazonq:** added mcp admin level configuration with GetProfile ([#2000](https://github.com/dungdong-aws/language-servers/issues/2000)) ([fd6e9a8](https://github.com/dungdong-aws/language-servers/commit/fd6e9a829c6229c276de5340dffce52b426a864d))
* **amazonq:** adding MCP registry for governance for Amazon Q ([#2512](https://github.com/dungdong-aws/language-servers/issues/2512)) ([e8d4bf5](https://github.com/dungdong-aws/language-servers/commit/e8d4bf588e9b7bc13102b33ee03bd357f9698811))


### Bug Fixes

* **amazonq:** bumping up the language server runtime version ([#2621](https://github.com/dungdong-aws/language-servers/issues/2621)) ([33c9eba](https://github.com/dungdong-aws/language-servers/commit/33c9eba1fcc5ab7da5c520842c239e22b2237e4c))
* **amazonq:** Fix mock fs clean; Node version upgrade ([#2324](https://github.com/dungdong-aws/language-servers/issues/2324)) ([1d9afd4](https://github.com/dungdong-aws/language-servers/commit/1d9afd410e19624223e300ca06ea7d08a112cc82))
* **amazonq:** handle IAM credentials expiration field to be aws sdk versions compatible and add refresh logic to codewhisperer IAM client ([#2349](https://github.com/dungdong-aws/language-servers/issues/2349)) ([5eb3768](https://github.com/dungdong-aws/language-servers/commit/5eb3768bf020d61d0ade767d62e13839048146e4))
* **amazonq:** prevent path traversal bypass in agentic chat workspace ([#2612](https://github.com/dungdong-aws/language-servers/issues/2612)) ([13159f8](https://github.com/dungdong-aws/language-servers/commit/13159f842e4c50aae03ace586c42085446a50986))
* cve and bump language server runtime version to 0.3.10 ([#2544](https://github.com/dungdong-aws/language-servers/issues/2544)) ([d06e09f](https://github.com/dungdong-aws/language-servers/commit/d06e09f1c7c2ce017d0a5b4394cc8d17454e2862))
* network connection error caused by server runtime dependency changes on windows machine ([#2568](https://github.com/dungdong-aws/language-servers/issues/2568)) ([5d38b12](https://github.com/dungdong-aws/language-servers/commit/5d38b1297a384e5c30d88b05bce075afbaa1a2fa))
* repoint CODEOWNERS and package repository URLs to the new org ([#2838](https://github.com/dungdong-aws/language-servers/issues/2838)) ([43e44dc](https://github.com/dungdong-aws/language-servers/commit/43e44dc5af94703f51456cd8a913f0d61af7570e))
* Use file context override in the inline completion params for Jupyter Notebook ([#2114](https://github.com/dungdong-aws/language-servers/issues/2114)) ([91c8398](https://github.com/dungdong-aws/language-servers/commit/91c839857f8aa4d79098189f9fb620b361c51289))
* use new language server runtime ([#2023](https://github.com/dungdong-aws/language-servers/issues/2023)) ([83ea1e4](https://github.com/dungdong-aws/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))
</details>

<details><summary>lsp-json: 0.1.28</summary>

## [0.1.28](https://github.com/dungdong-aws/language-servers/compare/lsp-json/v0.1.27...lsp-json/v0.1.28) (2026-10-08)


### Features

* add support for getSupplementalContext LSP API ([#2212](https://github.com/dungdong-aws/language-servers/issues/2212)) ([2ddcae7](https://github.com/dungdong-aws/language-servers/commit/2ddcae7a4fac6b89cbc9784911959743ea0a6d11))
* Adding ATX-FES apis support for transformation ([#2521](https://github.com/dungdong-aws/language-servers/issues/2521)) ([56ee489](https://github.com/dungdong-aws/language-servers/commit/56ee4891a2e19b259c129fd531f8b06f763c1b57))
* **amazonq:** adding MCP registry for governance for Amazon Q ([#2512](https://github.com/dungdong-aws/language-servers/issues/2512)) ([e8d4bf5](https://github.com/dungdong-aws/language-servers/commit/e8d4bf588e9b7bc13102b33ee03bd357f9698811))


### Bug Fixes

* **amazonq:** bumping up the language server runtime version ([#2621](https://github.com/dungdong-aws/language-servers/issues/2621)) ([33c9eba](https://github.com/dungdong-aws/language-servers/commit/33c9eba1fcc5ab7da5c520842c239e22b2237e4c))
* cve and bump language server runtime version to 0.3.10 ([#2544](https://github.com/dungdong-aws/language-servers/issues/2544)) ([d06e09f](https://github.com/dungdong-aws/language-servers/commit/d06e09f1c7c2ce017d0a5b4394cc8d17454e2862))
* network connection error caused by server runtime dependency changes on windows machine ([#2568](https://github.com/dungdong-aws/language-servers/issues/2568)) ([5d38b12](https://github.com/dungdong-aws/language-servers/commit/5d38b1297a384e5c30d88b05bce075afbaa1a2fa))
* repoint CODEOWNERS and package repository URLs to the new org ([#2838](https://github.com/dungdong-aws/language-servers/issues/2838)) ([43e44dc](https://github.com/dungdong-aws/language-servers/commit/43e44dc5af94703f51456cd8a913f0d61af7570e))
* set resolveProvider to false in init handler json and yaml language servers ([#2391](https://github.com/dungdong-aws/language-servers/issues/2391)) ([e11c544](https://github.com/dungdong-aws/language-servers/commit/e11c544804e4fbe7dbad3e5373223ba919a34758))
* Use file context override in the inline completion params for Jupyter Notebook ([#2114](https://github.com/dungdong-aws/language-servers/issues/2114)) ([91c8398](https://github.com/dungdong-aws/language-servers/commit/91c839857f8aa4d79098189f9fb620b361c51289))
* use new language server runtime ([#2023](https://github.com/dungdong-aws/language-servers/issues/2023)) ([83ea1e4](https://github.com/dungdong-aws/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @aws/lsp-core bumped from ^0.0.22 to ^0.0.23
</details>

<details><summary>lsp-partiql: 0.0.25</summary>

## [0.0.25](https://github.com/dungdong-aws/language-servers/compare/lsp-partiql/v0.0.24...lsp-partiql/v0.0.25) (2026-10-08)


### Features

* add support for getSupplementalContext LSP API ([#2212](https://github.com/dungdong-aws/language-servers/issues/2212)) ([2ddcae7](https://github.com/dungdong-aws/language-servers/commit/2ddcae7a4fac6b89cbc9784911959743ea0a6d11))
* Adding ATX-FES apis support for transformation ([#2521](https://github.com/dungdong-aws/language-servers/issues/2521)) ([56ee489](https://github.com/dungdong-aws/language-servers/commit/56ee4891a2e19b259c129fd531f8b06f763c1b57))
* **amazonq:** adding MCP registry for governance for Amazon Q ([#2512](https://github.com/dungdong-aws/language-servers/issues/2512)) ([e8d4bf5](https://github.com/dungdong-aws/language-servers/commit/e8d4bf588e9b7bc13102b33ee03bd357f9698811))


### Bug Fixes

* **amazonq:** bumping up the language server runtime version ([#2621](https://github.com/dungdong-aws/language-servers/issues/2621)) ([33c9eba](https://github.com/dungdong-aws/language-servers/commit/33c9eba1fcc5ab7da5c520842c239e22b2237e4c))
* cve and bump language server runtime version to 0.3.10 ([#2544](https://github.com/dungdong-aws/language-servers/issues/2544)) ([d06e09f](https://github.com/dungdong-aws/language-servers/commit/d06e09f1c7c2ce017d0a5b4394cc8d17454e2862))
* network connection error caused by server runtime dependency changes on windows machine ([#2568](https://github.com/dungdong-aws/language-servers/issues/2568)) ([5d38b12](https://github.com/dungdong-aws/language-servers/commit/5d38b1297a384e5c30d88b05bce075afbaa1a2fa))
* repoint CODEOWNERS and package repository URLs to the new org ([#2838](https://github.com/dungdong-aws/language-servers/issues/2838)) ([43e44dc](https://github.com/dungdong-aws/language-servers/commit/43e44dc5af94703f51456cd8a913f0d61af7570e))
* Use file context override in the inline completion params for Jupyter Notebook ([#2114](https://github.com/dungdong-aws/language-servers/issues/2114)) ([91c8398](https://github.com/dungdong-aws/language-servers/commit/91c839857f8aa4d79098189f9fb620b361c51289))
* use new language server runtime ([#2023](https://github.com/dungdong-aws/language-servers/issues/2023)) ([83ea1e4](https://github.com/dungdong-aws/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))
</details>

<details><summary>lsp-yaml: 0.1.28</summary>

## [0.1.28](https://github.com/dungdong-aws/language-servers/compare/lsp-yaml/v0.1.27...lsp-yaml/v0.1.28) (2026-10-08)


### Features

* add support for getSupplementalContext LSP API ([#2212](https://github.com/dungdong-aws/language-servers/issues/2212)) ([2ddcae7](https://github.com/dungdong-aws/language-servers/commit/2ddcae7a4fac6b89cbc9784911959743ea0a6d11))
* Adding ATX-FES apis support for transformation ([#2521](https://github.com/dungdong-aws/language-servers/issues/2521)) ([56ee489](https://github.com/dungdong-aws/language-servers/commit/56ee4891a2e19b259c129fd531f8b06f763c1b57))
* **amazonq:** adding MCP registry for governance for Amazon Q ([#2512](https://github.com/dungdong-aws/language-servers/issues/2512)) ([e8d4bf5](https://github.com/dungdong-aws/language-servers/commit/e8d4bf588e9b7bc13102b33ee03bd357f9698811))


### Bug Fixes

* **amazonq:** bumping up the language server runtime version ([#2621](https://github.com/dungdong-aws/language-servers/issues/2621)) ([33c9eba](https://github.com/dungdong-aws/language-servers/commit/33c9eba1fcc5ab7da5c520842c239e22b2237e4c))
* cve and bump language server runtime version to 0.3.10 ([#2544](https://github.com/dungdong-aws/language-servers/issues/2544)) ([d06e09f](https://github.com/dungdong-aws/language-servers/commit/d06e09f1c7c2ce017d0a5b4394cc8d17454e2862))
* network connection error caused by server runtime dependency changes on windows machine ([#2568](https://github.com/dungdong-aws/language-servers/issues/2568)) ([5d38b12](https://github.com/dungdong-aws/language-servers/commit/5d38b1297a384e5c30d88b05bce075afbaa1a2fa))
* repoint CODEOWNERS and package repository URLs to the new org ([#2838](https://github.com/dungdong-aws/language-servers/issues/2838)) ([43e44dc](https://github.com/dungdong-aws/language-servers/commit/43e44dc5af94703f51456cd8a913f0d61af7570e))
* set resolveProvider to false in init handler json and yaml language servers ([#2391](https://github.com/dungdong-aws/language-servers/issues/2391)) ([e11c544](https://github.com/dungdong-aws/language-servers/commit/e11c544804e4fbe7dbad3e5373223ba919a34758))
* Use file context override in the inline completion params for Jupyter Notebook ([#2114](https://github.com/dungdong-aws/language-servers/issues/2114)) ([91c8398](https://github.com/dungdong-aws/language-servers/commit/91c839857f8aa4d79098189f9fb620b361c51289))
* use new language server runtime ([#2023](https://github.com/dungdong-aws/language-servers/issues/2023)) ([83ea1e4](https://github.com/dungdong-aws/language-servers/commit/83ea1e42fe52990696eb9b878fa11e2c5331bec5))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @aws/lsp-core bumped from ^0.0.22 to ^0.0.23
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please) bot. When you are ready to release these changes, merge this PR.

**Blocking GitHub Checks Issue:** if GitHub checks do not run, close and immediately re-open this PR manually.