"use strict";(self.webpackChunkproyectoSerio=self.webpackChunkproyectoSerio||[]).push([["polyfills"],{4073:()=>{const d=":";Error;const U=function(t,...e){if(U.translate){const i=U.translate(t,e);t=i[0],e=i[1]}let n=b(t[0],t.raw[0]);for(let i=1;i<t.length;i++)n+=e[i-1]+b(t[i],t.raw[i]);return n},it=":";function b(t,e){return e.charAt(0)===it?t.substring(function R(t,e){for(let n=1,i=1;n<t.length;n++,i++)if("\\"===e[i])i++;else if(t[n]===d)return n;throw new Error(`Unterminated $localize metadata block in "${e}".`)}(t,e)+1):t}globalThis.$localize=U}},d=>{d(d.s=4073)}]);