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

/**
 * Displays a Plotly plot below the code cell.
 *
 * @param data - Array of data traces to plot
 * @param layout - Optional. Partial Layout object which may contain settings like
 * title, axes, annotations, etc., that modify the appearance and behavior of the plot.
 * @param config - Optional. Partial Configuration object for global Plotly settings such as
 * interactivity, responsive behavior, and display modes.
 * @param id - Optional. The ID of the HTML element in which the plot will be rendered.
 * @param version - Optional. Specifies which version of Plotly to use.
 * @returns A promise that resolves when the plot has been successfully rendered or updated.
 */
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
