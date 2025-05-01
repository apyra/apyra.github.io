import { r as t, j as r } from "./index-CHjuPQyY.mjs";
function u({ data: e }) {
  const [n, l] = t.useState(!0);
  let s = null;
  try {
    e.rawData && (s = JSON.parse(e.rawData));
  } catch {
    return /* @__PURE__ */ r.jsx("div", { className: "p-4 text-red-500", children: "Erro ao parsear JSON." });
  }
  return !s && !e.url ? /* @__PURE__ */ r.jsx("div", { className: "p-4", children: "Nenhum conteúdo disponível." }) : !s && e.url ? /* @__PURE__ */ r.jsx(
    "iframe",
    {
      src: e.url,
      className: "w-full h-full border rounded",
      title: "json-viewer"
    }
  ) : /* @__PURE__ */ r.jsx("div", { className: "p-4 bg-muted rounded overflow-auto font-mono text-sm", children: /* @__PURE__ */ r.jsx("pre", { children: JSON.stringify(s, null, 2) }) });
}
export {
  u as default
};
