# plotly_for_jupyter

Deno module for displaying Plotly.js plots in Jupyter notebooks.

It contains:

- the `displayPlotlyPlot()` function, displays a Plotly plot below the code cell, and
- the Plotly types from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/plotly.js

### `displayPlotlyPlot()`

**Parameters:**

- **`data`**: Array of data traces to plot.
- **`layout`** (Optional): Partial layout configuration object which may contain settings like title, axes, annotations, etc., that modify the appearance and behavior of the plot.
- **`config`** (Optional): Partial Configuration object for global Plotly settings such as interactivity, responsive behavior, and display modes.
- **`id`** (Optional): The ID of the HTML element in which the plot will be rendered.
- **`version`** (Optional): Specifies which version of Plotly to use.

**Returns:**

A promise that resolves when the plot has been successfully rendered or updated.

**Example**:

```ts
import {
  plotly_for_jupyter,
  Plotly,
} from "https://deno.land/x/plotly_for_jupyter/mod.ts";

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
// it renders the plot below the code cell as an HTML output
await displayPlotlyPlot(data, layout, config);
```
