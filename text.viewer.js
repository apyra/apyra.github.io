import { R as r, j as o } from "./index-CHjuPQyY.mjs";
function c({ data: e }) {
  const [s, t] = r.useState("Carregando...");
  return r.useEffect(() => {
    e.rawData ? t(e.rawData) : e.url ? fetch(e.url).then((a) => a.text()).then(t).catch(() => t("Erro ao carregar")) : t("Sem dados");
  }, [e]), /* @__PURE__ */ o.jsx("pre", { className: "p-4 text-sm font-mono whitespace-pre-wrap bg-gray-100 rounded", children: s });
}
export {
  c as default
};
