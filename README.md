# plotly-for-jupyter

Deno module for displaying Plotly.js plots in Jupyter notebooks

# Usage

```
import { plotly-for-jupyter } from "https://deno.land/x/plotly-for-jupyter/mod.ts";

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

// this should be the last statement in the cell
displayPlotlyPlot(data, layout, config);
```
