import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Plotly } from "./types.ts";
import { _test_only } from "./mod.ts";

const trace1: Plotly.Data = {
  x: ["giraffes", "orangutans", "monkeys"],
  y: [20, 14, 23],
  name: "SF Zoo",
  type: "bar",
};

const trace2: Plotly.Data = {
  x: ["giraffes", "orangutans", "monkeys"],
  y: [12, 18, 29],
  name: "LA Zoo",
  type: "bar",
};

const data = [trace1, trace2];

const layout: Partial<Plotly.Layout> = { barmode: "group" };

const config: Partial<Plotly.Config> = { scrollZoom: true };

Deno.test("getPlotlyPlotHtml should return a valid HTML code snippet", () => {
  assertEquals(
    _test_only.getPlotlyPlotHtml(data, layout, config, "id1"),
    `
<div id="id1"></div>
<script>
if (!window.Plotly) {
    const s = document.createElement('script');
    s.setAttribute('src', 'https://cdn.plot.ly/plotly-2.32.0.js');
    document.body.appendChild(s);
}
Plotly.newPlot('id1', [{"name":"SF Zoo","type":"bar","x":["giraffes","orangutans","monkeys"],"y":[20,14,23]},{"name":"LA Zoo","type":"bar","x":["giraffes","orangutans","monkeys"],"y":[12,18,29]}], {"barmode":"group"}, {"scrollZoom":true});
</script>`
  );
});
