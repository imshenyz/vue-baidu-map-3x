import{_ as r}from"./chunks/preload-helper.c3ed1176.js";import{r as t,g as i,c as d,d as p,a as k,w as m,b as o,f as b,o as e,h as g,i as h,j as v}from"./app.6be066fb.js";const _=o('<h1 id="\u5F27\u7EBF" tabindex="-1">\u5F27\u7EBF <a class="header-anchor" href="#\u5F27\u7EBF" aria-hidden="true">#</a></h1><p><code>BmlCurveLine</code></p><h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>points</td><td>Array[Point]</td><td>[]</td><td>\u6784\u6210\u5F27\u7EBF\u7684\u5173\u952E\u70B9</td></tr><tr><td>strokeColor</td><td>String</td><td></td><td>\u6298\u7EBF\u989C\u8272</td></tr><tr><td>strokeWeight</td><td>Number</td><td></td><td>\u6298\u7EBF\u7684\u5BBD\u5EA6\uFF0C\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D</td></tr><tr><td>strokeOpacity</td><td>Number</td><td></td><td>\u6298\u7EBF\u7684\u900F\u660E\u5EA6\uFF0C\u53D6\u503C\u8303\u56F40 - 1</td></tr><tr><td>strokeStyle</td><td>String</td><td>&#39;solid&#39;</td><td>\u6298\u7EBF\u7684\u6837\u5F0F\uFF0Csolid\u6216dashed</td></tr><tr><td>massClear</td><td>Boolean</td><td>true</td><td>\u662F\u5426\u5728\u8C03\u7528map.clearOverlays\u6E05\u9664\u6B64\u8986\u76D6\u7269</td></tr><tr><td>editing</td><td>Boolean</td><td>false</td><td>\u662F\u5426\u542F\u7528\u7EBF\u7F16\u8F91</td></tr><tr><td>clicking</td><td>Boolean</td><td>true</td><td>\u662F\u5426\u54CD\u5E94\u70B9\u51FB\u4E8B\u4EF6</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>click</td><td><code>event{type, target, point, pixel}</code></td><td>\u70B9\u51FB\u6298\u7EBF\u540E\u4F1A\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>dblclick</td><td><code>event{type, target, point, pixel}</code></td><td>\u53CC\u51FB\u6298\u7EBF\u540E\u4F1A\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>mousedown</td><td><code>event{type, target, point, pixel}</code></td><td>\u9F20\u6807\u5728\u6298\u7EBF\u4E0A\u6309\u4E0B\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>mouseup</td><td><code>event{type, target, point, pixel}</code></td><td>\u9F20\u6807\u5728\u6298\u7EBF\u91CA\u653E\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>mouseout</td><td><code>event{type, target, point, pixel}</code></td><td>\u9F20\u6807\u79BB\u5F00\u6298\u7EBF\u65F6\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>mouseover</td><td><code>event{type, target, point, pixel}</code></td><td>\u5F53\u9F20\u6807\u8FDB\u5165\u6298\u7EBF\u533A\u57DF\u65F6\u4F1A\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>remove</td><td><code>event{type, target}</code></td><td>\u79FB\u9664\u6298\u7EBF\u65F6\u89E6\u53D1</td></tr><tr><td>lineupdate</td><td><code>event{type, target}</code></td><td>\u8986\u76D6\u7269\u7684\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><h3 id="\u5728\u5730\u56FE\u4E2D\u6DFB\u52A0\u53EF\u7F16\u8F91\u7684\u5F27\u7EBF" tabindex="-1">\u5728\u5730\u56FE\u4E2D\u6DFB\u52A0\u53EF\u7F16\u8F91\u7684\u5F27\u7EBF <a class="header-anchor" href="#\u5728\u5730\u56FE\u4E2D\u6DFB\u52A0\u53EF\u7F16\u8F91\u7684\u5F27\u7EBF" aria-hidden="true">#</a></h3>',8),y=o(`<div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>baidu-map</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{lng: 118.454, lat: 32.955}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:scroll-wheel-zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bml-curve-line</span> <span class="token attr-name">:points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>points<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:editing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@lineupdate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bml-curve-line</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>baidu-map</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addPoint<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>md-raised md-primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      \u6DFB\u52A0\u4E00\u4E2A\u5750\u6807\u70B9
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BmlCurveLine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-baidu-map-3x&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> points <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.432045</span><span class="token punctuation">,</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">39.910683</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">120.129721</span><span class="token punctuation">,</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">30.314429</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">121.491121</span><span class="token punctuation">,</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">25.127053</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">addPoint</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  points<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.404</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">39.915</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  points<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>cornerPoints
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,1),P='{"title":"\u5F27\u7EBF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":3,"title":"\u5728\u5730\u56FE\u4E2D\u6DFB\u52A0\u53EF\u7F16\u8F91\u7684\u5F27\u7EBF","slug":"\u5728\u5730\u56FE\u4E2D\u6DFB\u52A0\u53EF\u7F16\u8F91\u7684\u5F27\u7EBF"}],"relativePath":"bmaplib/curve-line.md"}',q={},T=Object.assign(q,{setup(f){const a=t([{lng:116.432045,lat:39.910683},{lng:120.129721,lat:30.314429},{lng:121.491121,lat:25.127053}]),s=t(null);i(()=>{r(()=>import("./chunks/CurveLine.febe1cae.js"),["assets/chunks/CurveLine.febe1cae.js","assets/app.6be066fb.js"]).then(n=>{s.value=n.default})});const l=()=>{a.value.push({lng:116.404,lat:39.915})},c=n=>{a.value=n.target.cornerPoints};return(n,x)=>{const u=b("baidu-map");return e(),d("div",null,[_,p("div",null,[k(u,{class:"map",center:{lng:118.454,lat:32.955},zoom:5,"scroll-wheel-zoom":!0},{default:m(()=>[s.value?(e(),g(h(s.value),{key:0,points:a.value,editing:!0,onLineupdate:c},null,8,["points"])):v("",!0)]),_:1},8,["center"]),p("button",{onClick:l,class:"md-raised md-primary"}," \u6DFB\u52A0\u4E00\u4E2A\u5750\u6807\u70B9 ")]),y])}}});export{P as __pageData,T as default};