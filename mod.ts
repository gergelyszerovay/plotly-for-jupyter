import { display } from "https://deno.land/x/display/mod.ts";
import { Plotly } from "./types.ts";
export type { Plotly } from "./types.ts";
import { jsonStringify } from "https://deno.land/x/stable_stringify/jsonStringify.ts";

function getPlotlyPlotHtml(
  data: Plotly.Data[],
  layout?: Partial<Plotly.Layout>,
  config?: Partial<Plotly.Config>,
  id?: string,
  version?: string
): string {
  if (!version) {
    version = "2.32.0";
  }
  id = id ?? "gd-" + crypto.randomUUID();
  const newPlotArgs =
    `'${id}'` +
    `, ${jsonStringify(data)}` +
    (layout ? `, ${jsonStringify(layout)}` : "") +
    (config ? `, ${jsonStringify(config)}` : "");
  return `
<div id="${id}"></div>
<script>
if (!window.Plotly) {
    const s = document.createElement('script');
    s.setAttribute('src', 'https://cdn.plot.ly/plotly-${version}.js');
    document.body.appendChild(s);
}
Plotly.newPlot(${newPlotArgs});
</script>`;
}

export async function displayPlotlyPlot(
  data: Plotly.Data[],
  layout?: Partial<Plotly.Layout>,
  config?: Partial<Plotly.Config>,
  id?: string,
  version?: string
): Promise<void> {
  await display(
    {
      "text/html": getPlotlyPlotHtml(data, layout, config, id, version),
    },
    { raw: true }
  );
}

export const _test_only = {
  getPlotlyPlotHtml,
};
