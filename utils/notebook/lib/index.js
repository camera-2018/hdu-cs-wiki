/* -----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/
/**
 * @packageDocumentation
 * @module mathjax2
 */
import { PromiseDelegate } from '@lumino/coreutils';
/**
 * The MathJax Typesetter.
 */
export class MathJaxTypesetter {
    /**
     * Create a new MathJax typesetter.
     */
    constructor(options) {
        this._initPromise = new PromiseDelegate();
        this._initialized = false;
        this._url = options.url;
        this._config = options.config;
    }
    /**
     * Typeset the math in a node.
     *
     * #### Notes
     * MathJax schedules the typesetting asynchronously,
     * but there are not currently any callbacks or Promises
     * firing when it is done.
     */
    typeset(node) {
        if (!this._initialized) {
            this._init();
        }
        void this._initPromise.promise.then(() => {
            MathJax.Hub.Queue(['Typeset', MathJax.Hub, node]);
            try {
                MathJax.Hub.Queue(['Require', MathJax.Ajax, '[MathJax]/extensions/TeX/AMSmath.js'], () => {
                    MathJax.InputJax.TeX.resetEquationNumbers();
                });
            }
            catch (e) {
                console.error('Error queueing resetEquationNumbers:', e);
            }
        });
    }
    /**
     * Initialize MathJax.
     */
    _init() {
        const head = document.getElementsByTagName('head')[0];
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `${this._url}?config=${this._config}&amp;delayStartupUntil=configured`;
        script.charset = 'utf-8';
        head.appendChild(script);
        script.addEventListener('load', () => {
            this._onLoad();
        });
        this._initialized = true;
    }
    /**
     * Handle MathJax loading.
     */
    _onLoad() {
        MathJax.Hub.Config({
            tex2jax: {
                inlineMath: [
                    ['$', '$'],
                    ['\\(', '\\)']
                ],
                displayMath: [
                    ['$$', '$$'],
                    ['\\[', '\\]']
                ],
                processEscapes: true,
                processEnvironments: true
            },
            // Center justify equations in code and markdown cells. Elsewhere
            // we use CSS to left justify single line equations in code cells.
            displayAlign: 'center',
            CommonHTML: {
                linebreaks: { automatic: true }
            },
            'HTML-CSS': {
                availableFonts: [],
                imageFont: null,
                preferredFont: null,
                webFont: 'STIX-Web',
                styles: { '.MathJax_Display': { margin: 0 } },
                linebreaks: { automatic: true }
            },
            skipStartupTypeset: true,
            messageStyle: 'none'
        });
        MathJax.Hub.Register.StartupHook('End Config', () => {
            var _a, _b, _c, _d, _e, _f;
            // Disable `:hover span` styles which cause performance issues in Chromium browsers
            // c-f https://github.com/jupyterlab/jupyterlab/issues/9757
            // Note that we cannot overwrite them in config earlier due to how `CombineConfig`
            // is implemented in MathJax 2 (it does not allow removing styles, just expanding).
            (_c = (_b = (_a = MathJax.Hub) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.MathEvents) === null || _c === void 0 ? true : delete _c.styles['.MathJax_Hover_Arrow:hover span'];
            (_f = (_e = (_d = MathJax.Hub) === null || _d === void 0 ? void 0 : _d.config) === null || _e === void 0 ? void 0 : _e.MathMenu) === null || _f === void 0 ? true : delete _f.styles['.MathJax_MenuClose:hover span'];
        });
        MathJax.Hub.Configured();
        this._initPromise.resolve(void 0);
    }
}